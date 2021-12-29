import React from 'react'
import Tag from './Tag'
import tagsCollection from '../../Data/tags.json';
import { TagsContainer } from './TagStyles';



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