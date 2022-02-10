import React from 'react';
import { graphql } from 'gatsby';
import Avatar from './Avatar'
import Blog from './Blog';
import { rollupContainer, rollupHeader, rollup, rollupItem } from './Rollup.module.scss'
export default function Rollup({ data }) {
    const { layout } = data;
    const { header } = data;
    return (
        <div className={rollupContainer}>
            {header && <h2 className={rollupHeader} style={{ color: data.headerColor }}>{header}</h2>}
            <div className={rollup}>
                {
                    data.blocks.map((block, i) => {
                        {
                            return (
                                <div className={rollupItem} key={i}>
                                    {layout === 'avatar' ? (
                                    <Avatar data={block} />
                                    ) : layout === 'blog' ? (
                                    <Blog data={block} ></Blog>
                                    ) : <div>No layout available!</div>}
                                </div>
                            )
                        }
                    })
                }
            </div>
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
      header
      headerColor
}
`;