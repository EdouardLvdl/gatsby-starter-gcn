// const config = require('./src/utils/siteConfig')
const path = require(`path`)
const query = require('../data/query')

module.exports = async ({ graphql, actions }) => {
  const { createPage } = actions

  // A test query used to determine if content exists or not
  const testQuery = await graphql(query.data.test)

  // Create a page for each "page"
  if (testQuery.data.allContentfulPage.edges.length >= 1) {
    const pagesQuery = await graphql(query.data.pages)
    const pages = pagesQuery.data.allContentfulPage.edges
    pages.forEach((page, i) => {
      const selected = page.node
      createPage({
        path: `/${page.node.slug}/`,
        component: path.resolve(`./src/templates/page.js`),
        context: {
          ...selected,
        },
      })
    })
  } else {
    console.log('No Pages Created')
  }
}
