import React from 'react';
import Pet from './Pet'


const Friend = (props) => {
    console.log(props.petsName)

    let {name, age, pets} = props
    //map petsNames
    const mappedPets = pets.map(((pet,i) => <Pet
    key={i}
                                            name={pet.name}
                                            breed={pet.breed}
    />))
    return (
        <div>
            <h1>My Friend:{name}</h1>
            <h3>Age:{age}</h3>
            {mappedPets}
        </div>
    )
}

export default Friend