import * as React from 'react';
const SecondComponent = (props) => {
    return (<div>
            <h1>2º Componente</h1>

            {props.name}
        </div>);
};
export default SecondComponent;
