module.exports = ({ actions }) => {
  actions.createTypes(`
    type ContentfulPage implements Node @infer {
      title: String
    }
    type ContentfulPost implements Node @infer {
      title: String
    }
    type ContentfulTag implements Node @infer {
      title: String
    }
  `)
}
