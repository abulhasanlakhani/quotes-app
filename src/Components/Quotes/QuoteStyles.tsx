import styled from 'styled-components'

export const QuotesContainer = styled.div`
    padding: 0 20px;
    display: flex;
    place-content: center;
    align-items: center;
    position: relative;
    flex-direction: column;
    margin-top: 10px;
`
QuotesContainer.displayName = 'QuotesContainer'

export const QuoteCard = styled.section`
    display: flex;
    flex-direction: column;
    padding: 1rem 0;
    margin-bottom: 10px;
    backdrop-filter: blur(15px) saturate(180%);
    -webkit-backdrop-filter: blur(15px) saturate(180%);
    background-color: rgba(37, 37, 44, 0.6);
    border-radius: 12px;
    border: 1px solid rgba(255, 255, 255, 0.125);
    height: max-content;
    position: relative;
    width: 100%;
`
QuoteCard.displayName = 'QuoteCard'

export const QuoteText = styled.div`
    padding: 5px 10px;
    font-size: clamp(1.5rem, 5vw, 3rem);
    color: white;
    letter-spacing: 4px;
    text-align: center;
`
QuoteText.displayName = 'QuoteText'

export const Author = styled.span`
    padding: 5px;
    display: block;
    margin-bottom: 10px;
    line-height: 40px;
    text-align: center;
`
Author.displayName = 'Author'