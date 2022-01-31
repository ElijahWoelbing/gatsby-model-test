const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(`
  {
    allContentfulPage {
      nodes {
        slug
      }
    }
  }
`)

  const templatePath = path.resolve('src/templates/page.js')
  result.data.allContentfulPage.nodes.forEach((node) => {
    createPage({
      path: node.slug,
      component: templatePath,
      context: {
        ...node
      },
    })
  })
}
