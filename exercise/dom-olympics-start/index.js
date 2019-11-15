// Qualifier
const title = document.createElement("div")
const qualifier = document.createElement("h3")
const name = document.createElement("span")
const subHeader = document.createElement("span")
const main = document.getElementById('main')
const header = document.getElementById('header')

qualifier.textContent = "Javascript Made This!!"
name.textContent = "Zach McEntire" 
subHeader.textContent = " wrote the Javascript"

header.appendChild(title)
title.appendChild(qualifier)
qualifier.appendChild(name)
qualifier.appendChild(subHeader)

qualifier.className = "header"
name.className = "name"

// Bronze
const message = document.getElementsByClassName('message left')[0]
const message1 = document.getElementsByClassName('message right') [0]
const message2 = document.getElementsByClassName('message left')[1]
const message3 = document.getElementsByClassName('message right') [1]

message.textContent = "Sup"
message1.textContent = "Yo"
message2.textContent = "Smash Bros, my place"
message3.textContent = "Hell yeah"

const clearButton = document.getElementById('clearButton')
const messages = document.getElementsByClassName('messages')[0]

clearButton.addEventListener('click', function(){

    messages.textContent = ""
})

// silver
var dropDown = document.getElementById('theme-drop-down');
const messagesLeft = document.getElementsByClassName('message left');
const messagesRight = document.getElementsByClassName('message right');

dropDown.addEventListener('change', function(){
    if (dropDown.value === "theme-one") {
        for (let i=0; i < messagesLeft.length; i++) {
            messagesLeft[i].style.backgroundColor = 'burlywood';
        }
        for (let i=0; i < messagesRight.length; i++) {
            messagesRight[i].style.backgroundColor = 'lightblue';
        }
    } else {
        for (let i=0; i < messagesLeft.length; i++) {
            messagesLeft[i].style.backgroundColor = 'red';
        }
        for (let i=0; i < messagesRight.length; i++) {
            messagesRight[i].style.backgroundColor = 'black';
        }
    }
})

// Gold

var newMessage = document.message

newMessage.addEventListener('submit', function(){
    event.preventDefault()
    var newText = document.createElement('div')
    newText.value = document.getElementById('input').value
    newText.textContent = newText.value
    messages.appendChild(newText)
    newText.className = "left"
})

