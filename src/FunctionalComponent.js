import React from 'react';


function FunctionalComponent(props) {
    return (
        <div>
            <h3>Functional Component</h3>
            <h3>Hello, {props.name}</h3>
        </div>
    );
}

export default FunctionalComponent;