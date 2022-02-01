import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { avatar, avatarImageContainer, avatarImage, avatarName, avatarJobTitle } from './Avatar.module.scss';
export default function Avatar({ data }) {
    return (
        <div className={avatar}>
            <div className={avatarImageContainer}>
                <GatsbyImage className={avatarImage} image={getImage(data.headshot)} alt='' />
            </div>
            <h2 className={avatarName}>{`${data.firstName} ${data.lastName}`}</h2>
            <div className={avatarJobTitle}>{data.jobTitle}</div>
        </div>
    )
}
