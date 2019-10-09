var fruit = ["banana", "apple", "orange", "watermelon"]
var vegetables = ["carrot", "tomato", "pepper", "lettuce"]


function newFood(arr1, arr2) {
    arr2.pop()
    arr1.shift()
    let index = arr1.indexOf("orange")
    arr1.push(index)
    arr2.push(arr2.length)
    let food = arr1.concat(arr2)
    food.splice(4,2)
    food.reverse()
    return food.toString()

}

console.log(newFood(fruit, vegetables))

// // 1.

// vegetables.pop()


// // 2.

// fruit.shift()


// // 3.

// let index = fruit.indexOf("orange")


// // 4.

// fruit.push(index)

// // 5.

// // console.log(vegetables.length)

// // 6.

// vegetables.push(vegetables.length)


// // 7.

// var food = fruit.concat(vegetables)


// // 8.

// food.splice(4,2)

// // 9. 

// food.reverse()

// // 10.

// let newFood = food.toString()

// console.log(newFood)