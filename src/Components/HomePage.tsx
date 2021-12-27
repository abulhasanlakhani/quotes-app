import React from 'react'
import styled from 'styled-components';
import Quotes from './Quotes';

const Container = styled.main`
    display: flex;
    flex-direction: column;
    place-content: center;
    width: clamp(350px, 100%, 100%);
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
        <Quotes />
    </Container>
)

export default HomePage