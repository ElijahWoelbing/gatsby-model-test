import React from 'react';
import Layout from '../components/Layout/Layout';
import Seo from '../components/Seo';
import Hero from '../components/Hero/Hero';
import TextMedia from '../components/TextMedia/TextMedia';
import CaseStudy from '../components/CaseStudy/CaseStudy';
import Rollup from '../components/Rollup/Rollup';
import HeaderText from '../components/HeaderText/HeaderText';
import { graphql } from 'gatsby';
import { useLocale } from '../components/LocaleProvider';

function renderBlock(block) {
  switch (block.internal.type) {
    case 'ContentfulBlockHero':
      return <Hero data={block} />
    case 'ContentfulBlockTextMedia':
      return <TextMedia data={block} />
    case 'ContentfulBlockCaseStudy':
      return <CaseStudy data={block} />
    case 'ContentfulBlockRollup':
      return <Rollup data={block} />
    case 'ContentfulBlockHeaderText':
      return <HeaderText data={block} />
    default:
      return <p>component not found</p>
  }
}

const Page = function ({ data }) {
  let { locale } = useLocale();
  let pages = data.allContentfulPage.nodes;
  let [page] = pages.filter((p) => {
    return p.node_locale === locale.locale;
  });

  const blocks = page.blocks;

  return (
    <Layout>
      <Seo title={page.title} />
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
        title
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
