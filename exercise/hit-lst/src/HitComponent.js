import React from 'react';
import Hit from './Hit';


const HitComponent = (props) => {
    const mappedHits = props.hits.map(hit => <Hit key={hit.name} name={hit.name} image={hit.image} />)
    return (
        <div className = "HitList">
            {mappedHits}
        </div>
    )
}

export default HitComponent