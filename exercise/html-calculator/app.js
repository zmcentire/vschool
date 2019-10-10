const plus = document.getElementById('addition')
const minus = document.getElementById('subtraction')
const multiply = document.getElementById('multiplication')
const display = document.getElementById('display')

plus.addEventListener('submit', function(){
    event.preventDefault()

    display.textContent = +document.getElementById('add1').value + +document.getElementById('add2').value
    // document.getElementById('sum').replaceWith(document.getElementById('remainder'), document.getElementById('answer'))
})

minus.addEventListener('submit', function(){
    event.preventDefault()

    display.textContent = document.getElementById('sub1').value - document.getElementById('sub2').value
    // document.getElementById('remainder').replaceWith(document.getElementById('sum'),document.getElementById('answer'))
})

multiply.addEventListener('submit', function(){
    event.preventDefault()

    display.textContent = document.getElementById('x1').value * document.getElementById('x2').value
//     document.getElementById('answer').replaceWith(document.getElementById('remainder'), document.getElementById('sum'))
})