const myBox = document.getElementById("box")

myBox.addEventListener("mouseover", function(){
    this.style.backgroundColor = 'blue'
})

myBox.addEventListener("mousedown", function(){
    this.style.backgroundColor = 'red'
})

myBox.addEventListener("mouseup", function(){
    this.style.backgroundColor = "yellow"
} )

myBox.addEventListener("dblclick", function(){
    this.style.backgroundColor = 'green'
})

window.addEventListener("wheel", function(){
    myBox.style.backgroundColor = 'orange'
})