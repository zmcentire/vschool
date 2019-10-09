

// function myFunction(str1){
//     if (str1.length <= 20) {
//         return str1 + str1
//     } else {
//         return str1.substring(0, str1.length / 2)
//     }
// }

// console.log(myFunction("1234567891011121314151617181920"))

// function fibonacci(n) {
//     if (n <= 1) {
//         return 1;
//     } else {
//         return fibonacci(n - 1) + fibonacci(n - 2)
//     }
// }

// console.log(fibonacci(6))

function fibonacci(n) {
    var a = 1, b =0, temp;
    while (n >= 0) {
        temp = a;
        a = a + b;
        b = temp;
        n--;
    }

    return b;
}

console.log(fibonacci(6))

function fibonacci(n) {
    const sequence = [0, 1]
    for (i = 0; i < n; i++) {
        sequence.push()
    }
}

// function caps(string1) {
//     return string1.toUpperCase(string1) + string1.toLowerCase(string1)
// }

// console.log(caps("friends"))

// function middleIndex (value1) {
//     return Math.floor(value1.length / 2)
// }

// console.log(middleIndex("stoicism"))

// function firstHalf(value2) {
//     return value2.slice(0, value2.length / 2)
// }

// console.log(firstHalf(""))

// function halfCaps (value3) {
//     return value3.slice(0, value3.length / 2).toUpperCase(value3) 
//     + value3.slice(value3.length / 2, value3.length).toLowerCase(value3)
// }

// console.log(halfCaps("issues"))

// function spaceCaps (value4) {
//     return value4.
// }