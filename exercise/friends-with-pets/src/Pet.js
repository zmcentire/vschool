import React from 'react';

const Pet = (props) => {
    
    let {name, breed} = props
    return (
        <div>
            <h1>Their pet: {name}</h1>
            <h3>{breed}</h3>
        </div>
    )
}

export default Pet