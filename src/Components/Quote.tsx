import React from 'react'
import styled from 'styled-components'
import Tags from './Tags'

const QuoteCard = styled.section`
    width: clamp(35ch, 80%, 80%);
    display: flex;
    flex-direction: column;
    padding: 1rem 0;
    margin-bottom: 10px;
    backdrop-filter: blur(15px) saturate(180%);
    -webkit-backdrop-filter: blur(15px) saturate(180%);
    background-color: rgba(37, 37, 44, 0.6);
    border-radius: 12px;
    border: 1px solid rgba(255, 255, 255, 0.125);
    height: 30vh;
    min-height: 30vh;
    position: relative;
`

const QuoteText = styled.div`
    padding: 5px;
`
const Author = styled.span`
    padding: 5px;
`

const Quote = () => {
    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
    
    return (
        <QuoteCard>
            <QuoteText>
                <p>Descriptive Text. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed est error repellat veritatis.</p>
            </QuoteText>
            <Author className='quoteAuthor'>AUTHOR</Author>
            <Tags />
            <div className='lastUpdated'>asa {date}</div>
        </QuoteCard>
    )
}

export default Quote
