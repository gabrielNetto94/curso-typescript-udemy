import * as React from 'react';

export interface Props {
    title: string
    content: string
    comentQty: number
    tags: string[]

    category: Category
}

export enum Category {
    JS = 'Javascript',
    TS = 'Typescript',
    P = 'Python'
}

export default function Destructuring({ title, content, comentQty, tags, category }: Props) {
    return (
        <div>
            <h2>Título: {title}</h2>
            <h2>Conteúdo: {content}</h2>
            <h2>Quantidade Comentários: {comentQty}</h2>
            <h2>Tags: </h2>
            {tags.map((tag, index) => {
                return <h4> {index + 1} - {tag}</h4>
            })}

            <h4>Categoria {category}</h4>
        </div>
    );
}
