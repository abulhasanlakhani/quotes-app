import React from 'react'
import styled from 'styled-components'
import Tag from './Tag'

const TagsContainer = styled.ul`
    list-style: none;
    margin: 0;
    /* overflow: hidden; */
    padding: 0;
    /* margin: 0 10px; */
    padding: 5px;
    /*display: flex;
    place-items: center center;
    align-self: center;*/
    position: absolute;
    right: 0;
    bottom: 0;

    & li {
        float: left;
    }
`

const Tags = () => {
    return (
        <TagsContainer>
            <Tag tagColor="red" tagName="Religious" />
            <Tag tagColor="black" tagName="Technology" />
            <Tag tagColor="blue" tagName="Business" />
        </TagsContainer>
    )
}

export default Tags