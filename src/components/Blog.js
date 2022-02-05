import React from 'react';
import { Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { blog, blogImage, blogText, blogHeader, blogSubHeader } from './Blog.module.scss';
export default function Blog({ data }) {
    return (
        <Link to={data.linkedPageSlug}>
            <div className={blog}>
                <div >
                    <GatsbyImage className={blogImage} image={getImage(data.image)} alt='' />
                </div>
                <div className={blogText}>
                    <h2 className={blogHeader}>{data.header}</h2>
                    <div className={blogSubHeader}>{data.subHeader}</div>
                </div>
            </div>
        </Link>
    )
}