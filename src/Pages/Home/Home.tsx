import React from 'react'
import Quotes from '../../Components/Quotes/Quotes';
import { Container, Title, FiltersPanel } from './HomePageStyles';

const Home = () => {
    const filterbyTags = ['politics']
    return <Container>
        <div className='mainBanner'>
            <Title>Title from styled components</Title>
        </div>
        <FiltersPanel>{filterbyTags.toString()}</FiltersPanel>
        {/* <div className='quoteNavigation'>
            <a className='leftNav' href='#'>Left</a>
            <a className='rightNav' href='#'>Right</a>
        </div> */}
        <Quotes filterByTags={filterbyTags} />
    </Container>
}

export default Home