import React from 'react';
import Vacation from './Vacation';
import vacationInfo from './vacation-spots.json';

const VacationContainer = () => {
    const mappedVacation = vacationInfo.map(((vacation, i) => <Vacation
    key={i + vacation.place}
                                                                place={vacation.place}
                                                                price={vacation.price}
                                                                time={vacation.timeToGo}
                                                                cost={vacation.cost}
    />))
    return(
        <div className="vacation-container">
            {mappedVacation}
        </div>
    )
}

export default VacationContainer