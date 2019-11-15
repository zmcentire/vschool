Array.prototype.mapV2 = function(callBack) {
    const newArr = []
    for(i=0; i < this.length; i++){
        newArr.push(callBack(this[i]))
    }

    return newArr;
}