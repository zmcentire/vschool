import React from 'react';
import superInfo from './data.json';
import Superhero from './superhero';

const HeroList = () => {
    const mappedHeroes = superInfo.map((hero,i) => <Superhero
    key={i}
                                                    name={hero.name}
                                                    show={hero.show}
                                                    catchPhrase={hero.catchPhrase}
                                                    imageName={hero.imageName}
    />)

    return (
        <div>
            {mappedHeroes}
        </div>
    )
}

export default HeroList