// https://github.com/gatsbyjs/gatsby/blob/master/packages/gatsby-transformer-sharp/src/fragments.js
const Fluid = `
  base64
  aspectRatio
  src
  srcSet
  srcWebp
  srcSetWebp
  sizes
`

module.exports.data = {
  test: `{
    allContentfulPage {
        edges {
          node {
            title
          }
        }
      }
    allContentfulPost {
        edges {
          node {
            title
          }
        }
      }
    allContentfulTag {
        edges {
          node {
            title
          }
        }
      }
  }`,
  pages: `{
    allContentfulPage {
      edges {
        node {
          title
          slug
          metaDescription {
            internal {
              content
            }
          }
          body {
            childMarkdownRemark {
              html
              excerpt
            }
          }
        }
      }
    }
  }`,
  posts: `{
      allContentfulPost {
        edges {
          node {
            title
            slug
            metaDescription {
              internal {
                content
              }
            }
            publishDate(formatString: "MMMM DD, YYYY")
            publishDateISO: publishDate(formatString: "YYYY-MM-DD")
            tags {
              title
              id
              slug
            }
            heroImage {
              title
              fluid(maxWidth: 1800) {
                ${Fluid}
              }
              ogimg: resize(width: 1800) {
                src
                width
                height
              }
            }
            body {
              childMarkdownRemark {
                timeToRead
                html
                excerpt
              }
            }
          }
        }
      }
    }`,
  tags: `{
    allContentfulTag {
      edges {
        node {
          title
          id
          slug
          post {
            id
            title
            slug
            publishDate(formatString: "MMMM DD, YYYY")
            publishDateISO: publishDate(formatString: "YYYY-MM-DD")
            heroImage {
              title
              fluid(maxWidth: 1800) {
                ${Fluid}
              }
            }
            body {
              childMarkdownRemark {
                timeToRead
                html
                excerpt
              }
            }
          }
        }
      }
    }
  }`,
}
