const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const pages = await graphql(`
  fragment ParentPages on ContentfulPage {
    parentPage {
      slug
      parentPage {
        slug
        parentPage {
          slug
        }
      }
    }
  }

  {
    allContentfulPage {
      nodes {
        slug
        ...ParentPages
      }
    }
  }
`)

  const pageTemplatePath = path.resolve('src/templates/page.js')
  pages.data.allContentfulPage.nodes.forEach((node) => {
    let parent = node.parentPage;
    let slug = node.slug;
    while (parent) {
      slug = `${parent.slug}/${slug}`
      console.log(slug);
      parent = parent.parentPage;
    }

    createPage({
      path: slug,
      component: pageTemplatePath,
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
  
  union PageBlocks = ContentfulBlockCaseStudy | ContentfulBlockHero | ContentfulBlockTextMedia | ContentfulBlockRollup | ContentfulBlockHeaderText


  type ContentfulPage implements Node {
    blocks: [PageBlocks] @link(by: "id", from: "blocks___NODE")
  }

  type ContentfulPageHome implements Node  {
    blocks: [PageBlocks ] @link(by: "id", from: "blocks___NODE")
  }

  type ContentfulBlockRollup implements Node  {
    blocks: [ContentfulBlockRollupItem] @link(by: "id", from: "blocks___NODE")
  }
  `
  createTypes(typeDefs)
}
