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

// removes css module import order warnings
exports.onCreateWebpackConfig = ({ stage, actions, getConfig }) => {
  if (stage === 'build-javascript' || stage === 'develop') {
    const config = getConfig();
    const miniCssExtractPlugin = config.plugins.find(
      plugin => plugin.constructor.name === 'MiniCssExtractPlugin'
    );
    if (miniCssExtractPlugin) {
      miniCssExtractPlugin.options.ignoreOrder = true;
    }
    actions.replaceWebpackConfig(config);
  }
}

// you can use a printTypeDefinitions function to print your data types, 
// which you can then use to pre define the optional properties.
exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions
  const typeDefs = `
  union ContentfulBlockCaseStudyContentfulBlockHeroContentfulBlockTextMediaUnion = ContentfulBlockCaseStudy | ContentfulBlockHero | ContentfulBlockTextMedia

  type ContentfulPage implements Node {
    blocks: [ContentfulBlockCaseStudyContentfulBlockHeroContentfulBlockTextMediaUnion] @link(by: "id", from: "blocks___NODE")
  }

  type ContentfulPageHome implements Node  {
    blocks: [ContentfulBlockCaseStudyContentfulBlockHeroContentfulBlockTextMediaUnion] @link(by: "id", from: "blocks___NODE")
  }

  type ContentfulPageCrew implements Node  {
    blocks: [ContentfulBlockCaseStudyContentfulBlockHeroContentfulBlockTextMediaUnion] @link(by: "id", from: "blocks___NODE")
  }
  `
  createTypes(typeDefs)
}
