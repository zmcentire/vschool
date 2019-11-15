function randomPassword(str) {
    return Math.floor(Math.random()*str.length).toString(36).slice(2) +
    Math.floor(Math.random()*str.length).toString(36).slice(2).toUpperCase()
}

console.log(randomPassword(5))