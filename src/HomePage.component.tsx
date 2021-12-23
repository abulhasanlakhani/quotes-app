import React from 'react'
import styled from 'styled-components';

const Container = styled.main`
    margin: 5px auto;
`
Container.displayName = 'Container'

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`

const FiltersPanel = styled.div`
    padding: 5px 
`

const QuotesContainer = styled.div`
    height: 80vh;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
`
QuotesContainer.displayName = 'QuotesContainer'

const QuoteBody = styled.section`
    width: clamp(40ch, 60%, 60%);
    display: flex;
    flex-direction: column;
    padding: 1rem 0;
    margin-bottom: 10px;
    backdrop-filter: blur(15px) saturate(180%);
    -webkit-backdrop-filter: blur(15px) saturate(180%);
    background-color: rgba(37, 37, 44, 0.6);
    border-radius: 12px;
    border: 1px solid rgba(255, 255, 255, 0.125);
`

const QuoteText = styled.div`
    padding: 5px;
`
const Author = styled.span`
    padding: 5px;
`

const Tags = styled.ul`
    list-style: none;
    margin: 0;
    /* overflow: hidden; */
    padding: 0;
    /* margin: 0 10px; */
    padding: 5px;
    /* display: flex; */
    /* place-items: center center; */
    align-self: center;

    & li {
        float: left;
    }
`

const Tag = styled.a`
    display: inline-block;
    height: 24px;
    line-height: 24px;
    position: relative;
    margin: 0 16px 8px 0;
    padding: 0 10px 0 12px;
    background: #777;    
    -webkit-border-bottom-right-radius: 3px;    
    border-bottom-right-radius: 3px;
    -webkit-border-top-right-radius: 3px;    
    border-top-right-radius: 3px;
    -webkit-box-shadow: 0 1px 2px rgba(0,0,0,0.2);
    box-shadow: 0 1px 2px rgba(0,0,0,0.2);
    color: #fff;
    font-size: 12px;
    font-family: "Lucida Grande","Lucida Sans Unicode",Verdana,sans-serif;
    text-decoration: none;
    text-shadow: 0 1px 2px rgba(0,0,0,0.2);
    font-weight: bold;
    background: #de3f3e;

    &::before {
        content: "";
        position: absolute;
        top:0;
        left: -12px;
        width: 0;
        height: 0;
        border-color: transparent #de3f3e transparent transparent;
        border-style: solid;
        border-width: 12px 12px 12px 0;
    }

    &::after {
        content: "";
        position: absolute;
        top: 10px;
        left: 1px;
        float: left;
        width: 5px;
        height: 5px;
        -webkit-border-radius: 50%;
        border-radius: 50%;
        background: #fff;
        -webkit-box-shadow: -1px -1px 2px rgba(0,0,0,0.4);
        box-shadow: -1px -1px 2px rgba(0,0,0,0.4);
    }

    &:hover {
        background-color: #666 !important;
        color: white;
    }

    &:hover::after {
        border-left-color: #666 !important; 
    }
    
    &:hover::before {
        border-color: transparent #666 transparent transparent;
        border-left-color: #666 !important; 
    }
`

const HomePage = () => (
    <Container>
        <div className='mainBanner'>
            <Title>Title from styled components</Title>
        </div>
        <FiltersPanel>FILTERS</FiltersPanel>
        <div className='quoteNavigation'>
            <a className='leftNav' href='#'>Left</a>
            <a className='rightNav' href='#'>Right</a>
        </div>
        <QuotesContainer>
            <QuoteBody>
                <QuoteText>
                    <p>Descriptive Text. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed est error repellat veritatis.</p>
                </QuoteText>
                <Author className='quoteAuthor'>AUTHOR</Author>
                <Tags>
                    <li><Tag href="#">Religious</Tag></li>
                    <li><Tag href="#">Tawheed</Tag></li>
                    <li><Tag href="#">Islam</Tag></li>
                </Tags>
                <div className='lastUpdated'></div>
            </QuoteBody>
        </QuotesContainer>
    </Container>
)

export default HomePage