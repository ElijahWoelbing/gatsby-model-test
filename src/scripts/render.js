import React from 'react';
import Hero from '../components/Hero'
import TextMedia from '../components/TextMedia'
import CaseStudy from '../components/CaseStudy'

export function renderBlock(block) {
    switch (block.internal.type) {
        case 'ContentfulBlockHero':
            return <Hero data={block} />
        case 'ContentfulBlockTextMedia':
            return <TextMedia data={block} />
        case 'ContentfulBlockCaseStudy':
            return <CaseStudy data={block} />
        default:
            return <p>component not found</p>
    }
}