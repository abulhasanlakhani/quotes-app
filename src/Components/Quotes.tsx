import React from 'react'
import styled from 'styled-components';
import Quote from './Quote';

const QuotesContainer = styled.div`
    height: 80vh;
    display: flex;
    place-content: center;
    align-items: center;
    position: relative;
    flex-direction: column;
`
QuotesContainer.displayName = 'QuotesContainer'

const QuoteText = styled.div`
    padding: 5px;
`
const Author = styled.span`
    padding: 5px;
`

const Quotes = () => {
    return (
        <QuotesContainer>
            <Quote />
            <Quote />
        </QuotesContainer>
    )
}

export default Quotes
