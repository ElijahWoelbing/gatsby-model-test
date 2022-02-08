import React from 'react';
import { Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { avatar, avatarImage, avatarHeader, avatarSubHeader } from './Avatar.module.scss';
export default function Avatar({ data }) {
    return (
        <Link to={data.linkedPageSlug}>
            <div className={avatar}>
                <div >
                    <GatsbyImage className={avatarImage} image={getImage(data.image)} alt='' />
                </div>
                <h2 className={avatarHeader}>{data.header}</h2>
                <div className={avatarSubHeader}>{data.subHeader}</div>
            </div>
        </Link>

    )
}

