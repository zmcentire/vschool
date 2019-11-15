function whatDay(start, num){
    const week = ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"]
    let newDay = (week.indexOf(start) + num) % 7
    return week[newDay]

    
}

console.log(whatDay("Sun", 10))