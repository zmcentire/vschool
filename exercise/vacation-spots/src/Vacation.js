import React from 'react';

const Vacation = (props) => {
    let {place, price, time, cost} = props
    if (time === "Spring"){
        return (
            <div className = 'spring'>
            <h1>{place}</h1>
            <h3>{price}</h3>
            <h4>{time}</h4>
            <h4>{cost}</h4>
            </div>
        )
    } else if (time === "Winter"){
        return (
            <div className = 'winter'>
            <h1>{place}</h1>
            <h3>{price}</h3>
            <h4>{time}</h4>
            <h4>{cost}</h4>
            </div>
        )
    } else if (time === "Summer"){
        return(
            <div className = 'summer'>
            <h1>{place}</h1>
            <h3>{price}</h3>
            <h4>{time}</h4>
            <h4>{cost}</h4>
            </div>
        )
    } else if (time === "Fall") {
        return (
            <div className = 'fall'>
            <h1>{place}</h1>
            <h3>{price}</h3>
            <h4>{time}</h4>
            <h4>{cost}</h4>
            </div>
        )
    }
    // return (
    //     <div className = 'vacation'>
    //         <h1>{place}</h1>
    //         <h3>{price}</h3>
    //         <h4>{time}</h4>
    //     </div>
    // )
}

export default Vacation