var lyrics = ["This", "hit", "that", "ice", "cold", 
              "Michelle", "Pfeiffer", "that", "white", 
              "gold", "This", "one", "for", "them", 
              "hood", "girls", "Them", "good", "girls", 
              "straight", "masterpieces", "Stylin'", 
              "whilen'", "livin'", "it", "up", "in", 
              "the", "city", "Got", "Chucks", "on", 
              "with", "Saint", "Laurent", "Gotta", "kiss", 
              "myself", "I'm", "so", "pretty"];


function uptown(para1) {
    return para1.join(" ")
}

function funk(para1) {
    return para1.reverse().join(" ")
}

function youUp(para1) {
    for (i=1; i <= para1.length; i+=1) {
        para1.splice(i, 1)
    }
    return para1.join(" ")
}

