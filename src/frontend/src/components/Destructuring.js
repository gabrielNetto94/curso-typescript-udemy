import * as React from 'react';
export var Category;
(function (Category) {
    Category["JS"] = "Javascript";
    Category["TS"] = "Typescript";
    Category["P"] = "Python";
})(Category || (Category = {}));
export default function Destructuring({ title, content, comentQty, tags, category }) {
    return (<div>
            <h2>Título: {title}</h2>
            <h2>Conteúdo: {content}</h2>
            <h2>Quantidade Comentários: {comentQty}</h2>
            <h2>Tags: </h2>
            {tags.map((tag, index) => {
            return <h4> {index + 1} - {tag}</h4>;
        })}

            <h4>Categoria {category}</h4>
        </div>);
}
