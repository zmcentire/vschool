import React from 'react';
import Person from './Person'

const PeopleContainer = (props) => {
    // If you get an array through props i.e. props.people. Then you must map through it
    const mappedPeople = props.people.map(person => <Person name={person.fullName} age={person.age}  />)
    return (
        <div>
            {mappedPeople}
        </div>
    )
}

export default PeopleContainer