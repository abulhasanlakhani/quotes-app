import React from 'react'
import { StyledTag } from './TagStyles'

export type TagProps = {
    key: number,
    tagColor: string,
    name: string
}

const Tag = ({tagColor, name}:TagProps) => {
    return (
        <li><StyledTag href="#" color={tagColor}>{name}</StyledTag></li>
    )
}

export default Tag