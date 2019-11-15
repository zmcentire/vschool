function collectAnimals(...animals) {  
    return animals
}

// console.log(collectAnimals("dog", "cat", "mouse", "jackolope", "platypus"))
// ["dog", "cat", "mouse", "jackolope", "platypus"])

function combineFruit(fruit, sweets, vegetables){
    return {fruit, sweets, vegetables}
}

combineFruit(["apple", "pear"],
             ["cake", "pie"],
             ["carrit"])


const vacation = {  
    location: "Burly Idaho",
    duration: "2 weeks"
};

const {location} = vacation
const {duration} = vacation
              
function parseSentence(){
    return `We're going to have a good time in ${location} for ${duration}`
}

function returnFirst(items){
    const [ firstItem ] = items; /*change this line to be es6*/
    return firstItem
}

const favoriteActivities = ["magnets", "snowboarding", "philanthropy", "janitor work", "eating"];

function returnFavorites(arr){
    const [firstFav, secondFav, thirdFav] = favoriteActivities;
    return "My top three favorite activities are, " + firstFav + ", " + secondFav + ", and " + thirdFav; 
}

returnFavorites(favoriteActivities)

function combineAnimals(arr, arr1, arr2) {  
    const animals = [...arr, ...arr1, ...arr2]
    return animals
}

const realAnimals = ["dog", "cat", "mouse"];
const magicalAnimals = ["jackolope"];
const mysteriousAnimals = ["platypus"];

console.log(combineAnimals(realAnimals, magicalAnimals, mysteriousAnimals)); 

// ["dog", "cat", "mouse", "jackolope", "platypus"]