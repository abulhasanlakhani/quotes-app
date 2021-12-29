import React from 'react'
import Quote from './Quote';
import quotes from '../../Data/quotes.json';
import { QuotesContainer } from './QuoteStyles';

type QuotesProps = {
    filterByTags?: string[] 
}

const Quotes = ({filterByTags}:QuotesProps) => {
    let filteredQuotes = quotes.filter(quote => {
        return filterByTags !== undefined && filterByTags.some(f => quote.tags.includes(f))
    })
    return (
        <QuotesContainer>
            {
                filteredQuotes.length > 0 ? 
                    filteredQuotes.map(({_id, tags, ...otherQuoteProps }) => {
                        return <Quote key={_id} tags={tags} {...otherQuoteProps} />
                    }) : 
                    quotes.map(({_id, tags, ...otherQuoteProps }) => {
                        return <Quote key={_id} tags={tags} {...otherQuoteProps} />
        })}
        </QuotesContainer>
    )
}

export default Quotes