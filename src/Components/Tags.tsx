import React from 'react'
import styled from 'styled-components'
import Tag from './Tag'
import tagsCollection from '../Data/tags.json';

const TagsContainer = styled.ul`
    list-style: none;
    padding: 0;
    display: flex;
    width: 100%;
    margin: 0;
    place-content: flex-end;
    flex-wrap: wrap;

    & li {
        float: left;
    }
`

export type TagsProps = {
    tags: string[]
}

const Tags = ({tags}: TagsProps) => {
    return (
        <TagsContainer>
            {tags.map((tag, index) => {
                const tagColor: string | undefined = tagsCollection.find(item => item.name === tag)?.color
                return <Tag key={index} name={tag} tagColor={tagColor ?? "black"} />
            })}
        </TagsContainer>
    )
}

export default Tags