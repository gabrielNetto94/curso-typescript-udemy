import * as React from 'react';

export interface Props {
    name: string

}

const SecondComponent = (props: Props) => {

    return (
        <div>
            <h1>2º Componente</h1>

            {props.name}
        </div>
    );
}

export default SecondComponent
