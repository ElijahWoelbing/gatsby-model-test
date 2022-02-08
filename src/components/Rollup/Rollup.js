import React from 'react';
import { graphql } from 'gatsby';
import Avatar from './Avatar'
import Blog from './Blog';
import { rollup, rollupItem } from './Rollup.module.scss'
export default function Rollup({ data }) {
    const { layout } = data;
    return (
        <div className={rollup}>

            {
                data.blocks.map((block, i) => {
                    return (
                        <div className={rollupItem} key={i}>
                            {layout === 'avatar' ? (
                                <Avatar data={block} />
                            ) : layout === 'blog' ? (
                                <Blog data={block} ></Blog>
                            ) : <div>No layout available!</div>}
                        </div>
                    )
                })
            }

        </div>
    )
}




export const query = graphql`
fragment RollupData on ContentfulBlockRollup {
    internal {
        type
      }
      blocks {
          header
          image {
            gatsbyImageData
          }
          subHeader
          linkedPageSlug
      }
      layout
}
`;