function doubleNumbers(arr){
    return arr.map(function(num){
        return num*2
    }) 
}

console.log(doubleNumbers([2,5,25]))

function stringTime(arr){
    return arr.map(function(num){
        return num.toString()
    })
}

console.log(stringTime([2,5,25]))

function capitalize(arr){
    return arr.map(function(str){
        return str.toUpperCase().charAt(0) + str.slice(1)
    })
}

console.log(capitalize(["pizza", "zach", "money"]))

function namesOnly(arr){
    return arr.map(function(str){
        return str.name
    })
}

console.log(namesOnly([
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
])); 

function makeStrings(arr){
    return arr.map(function(str){
        if(str.age >= 18){
            return str.name + " can go to the Matrix!"
        } else {
            return str.name + " cannot go to the Matrix!"
        }
    })
}

console.log(makeStrings([
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
])); 

function readyToPutInTheDOM(arr){
    return arr.map(function(str){
        return `<h1>${str.name}</h1> <h2>${str.age}</h2>`
    })
}

console.log(readyToPutInTheDOM([
      {
          name: "Angelina Jolie",
          age: 80
      },
      {
          name: "Eric Jones",
          age: 2
      },
      {
          name: "Paris Hilton",
          age: 5
      },
      {
          name: "Kayne West",
          age: 16
      },
      {
          name: "Bob Ziroll",
          age: 100
      }
])); 