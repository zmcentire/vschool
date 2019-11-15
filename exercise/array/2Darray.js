function MultTable(n){
    let matrix = []
    for(let i=1; i <= n; i++){
        let row = []
        for(let j = 1; j <= n; j++){
            row.push(i*j)
        }
        matrix.push(row)
    }
    return matrix
}

console.log(MultTable(12))