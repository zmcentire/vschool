const travel = document.travel

travel.addEventListener('submit', function(){
    event.preventDefault()

    const firstName = travel.firstName.value
    const lastName = travel.lastName.value
    const age = travel.age.value
    const diet = document.querySelectorAll("input[name=restriction]:checked")

    const destination = travel.destination.value
    const gender = travel.gender.value

    const dietArr = []
    for (i=0; i < diet.length; i++){
        if (diet[i].checked){
            dietArr.push(diet[i].value)
        } else {
            dietArr.push("none")
        }
    }


    alert("First name: " + firstName + " Last name: " + lastName + " Age: " + age + " Destination: " + destination + " Dietary restrictions: " + dietArr.join(", "))
})