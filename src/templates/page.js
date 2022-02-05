import React from 'react';
import Layout from '../components/Layout';
import { graphql } from 'gatsby';
import { renderBlock } from '../scripts/render';
import { useLocale } from '../state/LocaleProvider';

const Page = function ({ data }) {
  let { locale } = useLocale();
  let pages = data.allContentfulPage.nodes;
  let [page] = pages.filter((p) => {
    return p.node_locale === locale.locale;
  });

  const blocks = page.blocks;

  return (
    <Layout>
      {blocks &&
        <div>
          {blocks.map((block, i) => {
            return (
              <div key={i}>
                {renderBlock(block)}
              </div>
            )
          })}
        </div>
      }
    </Layout>
  )
}

export const query = graphql`
query pageBlocks($slug: String) {
  allContentfulPage(filter: {slug: {eq: $slug}}) {
      nodes {
        node_locale
        id
        blocks {
          ...CaseStudyData
          ...HeroData
          ...TextMediaData
          ...RollupData
          ...HeaderTextData
        }
    }
  }
}
`

export default Page;