import React from 'react'
import Tags from '../Tags/Tags'
import { QuoteCard, QuoteText, Author } from './QuoteStyles'

export type QuoteProps = {
    content: string,
    author: string,
    tags: string[]
}

const Quote = ({content, author, tags }: QuoteProps) => {
    return (
        <QuoteCard>
            <QuoteText>
                {content}
            </QuoteText>
            <Author>{author}</Author>
            <Tags tags={tags} />
        </QuoteCard>
    )
}

export default Quote