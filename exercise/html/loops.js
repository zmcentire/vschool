// const fruit = ["banana", "orange", "apple", "kiwi"]

// for(let i = 0; i < fruit.length; i++) {
//     console.log(fruit[i])
// }

// for(let i = 0; i <= 9; i++) {
//     console.log(i)
// }

// for(let i = 0; i <= 100; i+= 2) {
//         console.log(i)
// }

// const fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach",]

// for(let i = 0; i <= fruit.length; i+=2) {
//     console.log(fruit[i])
// }

// var peopleArray = [
//     {
//       name: "Harrison Ford",
//       occupation: "Actor"
//     },
//     {
//       name: "Justin Bieber",
//       occupation: "Singer"
//     },
//     {
//       name: "Vladimir Putin",
//       occupation: "Politician"
//     },
//     {
//       name: "Oprah",
//       occupation: "Entertainer"
//     }
// ]

// const occupations = []
// const names = []

// for (let i = 0; i < peopleArray.length; i+=2) {
//     names.push(peopleArray[i].name)
//     console.log(names)
// } 

// for (let i = 1; i < peopleArray.length; i+=2) {
//     occupations.push(peopleArray[i].occupation)
//     console.log(occupations)
// }
 
// for (let i = 0; i < peopleArray.length; i++) {
//     names.push(peopleArray[i].name)
//     occupations.push(peopleArray[i].occupation)
//     console.log(occupations, names)
// }

// var matrix = []

// for (i=0; i < 3; i++) {
//     matrix.push([]);
//     for(j=0; j < 3; j++){
//         matrix[i].push(0);
//     }
// }
// console.log(matrix)

// var matrix1 = []

// for (i=0; i < 3; i++) {
//     matrix1.push([]);
//     for(j=0; j < 3; j++){
//         matrix1[i].push(j);
//     }
// }
// console.log(matrix1)

// for (let i =0; i < 3; i++) {
//     for (let j = 0; j < 3; j++) {
//         matrix1[i][j] = "x";
//     }
// }
// console.log(matrix1)

for (let i =0; i <= 101; i++) {
    if (i % 2) {
        console.log("even")
    } else {
        console.log("odd")
    }
    console.log(i)
}
