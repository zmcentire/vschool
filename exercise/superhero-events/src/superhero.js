import React from 'react';


const Superhero = (props) => {
    let {name, show, catchPhrase, imageName} = props

    const handleClick = () => {
        alert(catchPhrase)
    }

    return (
        <div>
            <h1>{name}</h1>
            <h2>{show}</h2>
            <img onClick={handleClick} src={imageName} alt=""/>
        </div>
    )
}

export default Superhero