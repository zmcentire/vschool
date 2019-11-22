const database = [
    {firstName: "Jack", lastName: "Smith", age: 2},
    {firstName: "Jill", lastName: "Johnson", age: 20},
    {firstName: "Jill", lastName: "Smith", age: 100},
    {firstName: "Jack", lastName: "White", age: 2}
];

// const filterDatabase = (query, data) => {
//     for(key in query){
//         console.log("key:",key)
//         console.log("value:", query[key])
//     }
// }

const filterDatabase = (query, data) => {
    
    const filteredData = data.filter(item => {
        for(key in query){
            if(query[key] !== item[key]){
                return false
            } else {
                return true
            }
        }
    })

    return filteredData
}

console.log(filterDatabase({lastName: "Smith"}, database))