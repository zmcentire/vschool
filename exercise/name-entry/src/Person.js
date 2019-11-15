import React from 'react'

const Person = (props) => {
    // Console.log props if you dont know what they are for sure
    console.log(props)
    return (
        <div>
            <h1>{props.name}</h1>
        </div>
    )
}

export default Person