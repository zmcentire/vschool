import React from 'react';

const Hit = (props) => {
    return (
        <div>
            <h1>{props.name}</h1>
            <img src={props.image} alt=""/>
        </div>
    )
}

export default Hit