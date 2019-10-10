var lyrics = ["This", "hit", "that", "ice", "cold", 
              "Michelle", "Pfeiffer", "that", "white", 
              "gold", "This", "one", "for", "them", 
              "hood", "girls", "Them", "good", "girls", 
              "straight", "masterpieces", "Stylin'", 
              "whilen'", "livin'", "it", "up", "in", 
              "the", "city", "Got", "Chucks", "on", 
              "with", "Saint", "Laurent", "Gotta", "kiss", 
              "myself", "I'm", "so", "pretty"];

function uptown(value) {
   return value.join(" ")
}

function funk(value1) {
    return value1.reverse().join(" ")
}
 function youUp(value2) {
     for (i=1; i < lyrics.length; i+=2){
         lyrics.splice(i,1)
     }
     return value2.join(" ")
 }

function uptownFunk(value4)