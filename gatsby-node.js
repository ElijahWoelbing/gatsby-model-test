const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(`
    {
      allContentfulPerson {
        nodes {
          image {
            gatsbyImageData
          }
          header
          emailAddress
          gitHubUrl
          jobTitle
          linkedInUrl
          name
          phoneNumber
          slug
          title
          bio {
            raw
          }
        }
      }
    }
  `)

  const templatePath = path.resolve(`src/templates/person.js`)


  result.data.allContentfulPerson.nodes.forEach((node) => {
    createPage({
      path: `crew/${node.slug}`,
      component: templatePath,
      context: {
        ...node
      },
    })
  })
}

