const list = document.getElementById("list")

document.add.addEventListener('submit', e => {
    event.preventDefault()
    const newTodo = {
        title: e.target.title.value,
        description: e.target.desc.value,
        imgUrl: e.target.imgUrl.value
    }

    axios.post("https://api.vschool.io/Zach/todo/", newTodo).then((response)=>{
        makeTodo(response.data)
    })
})

function makeTodo(todo){
    const container = document.createElement('div')
    const h1 = document.createElement('h1')
    const p = document.createElement('p')
    const img = document.createElement('img')
    const deleteButton = document.createElement('button')
    const checkbox = document.createElement('input')
    const editButton = document.createElement('button')

    h1.textContent = todo.title
    p.textContent = todo.description
    img.src = todo.imgUrl
    checkbox.type = 'checkbox'
    checkbox.checked = todo.completed
    

    checkbox.addEventListener('change', e =>{
        axios.put("https://api.vschool.io/Zach/todo/" + todo._id, {completed: e.target.checked}).then(response => {
            h1.style.textDecoration = response.data.completed ? "line-through" : "none"
           
            // if(response.data.completed){
            //     h1.style.textDecoration = 'line-through'
            // }else {
            //     h1.style.textDecoration = 'none'
            // }
        })
    })

    

    editButton.textContent = "Edit"

    editButton.addEventListener('click', ()=>{
        axios.put("https://api.vschool.io/Zach/todo/" + todo._id).then(response =>{
            console.log(response.data.msg)
            const replace = document.createElement('form')
            const saveButton = document.createElement('button')
            saveButton.textContent = "Save"
            const replaceH1 = document.createElement("input")
            replaceH1.value = h1.textContent
            const replaceP = document.createElement("input")
            replaceP.value = p.textContent
            const replaceImg = document.createElement("input")
            replaceImg.value = img.src
            list.replaceChild(replace, container)
            container.replaceChild(replaceH1, h1)
            container.replaceChild(replaceP, p)
            container.replaceChild(replaceImg, img)

            replace.appendChild(replaceH1)
            replace.appendChild(replaceP)
            replace.appendChild(replaceImg)
            replace.appendChild(saveButton)
            replace.addEventListener('submit', () =>{
                const newerTodo = {
                    title: replaceH1.value,
                    description: replaceP.value,
                    imgUrl: replaceImg.value
                }
            
                axios.put("https://api.vschool.io/Zach/todo/" + todo._id, newerTodo).then((response)=>{
                    makeTodo(response.data)

                    
                })
                list.replaceChild(container, replace)
                h1.textContent = replaceH1.value
                p.textContent = replaceP.value
                img.src = replaceImg.value
                container.remove()
            })
            
        })
    })
    
    deleteButton.textContent = "delete"

    deleteButton.addEventListener('click', ()=>{
        axios.delete("https://api.vschool.io/Zach/todo/" + todo._id).then(response => {
            console.log(response.data.msg)
            container.remove()
        })
    })
    container.appendChild(h1)
    container.appendChild(p)
    container.appendChild(img)
    container.appendChild(deleteButton)
    h1.appendChild(checkbox)
    container.appendChild(editButton)
    list.appendChild(container)
}

axios.get("https://api.vschool.io/Zach/todo/").then((response) => {
    const todos = response.data
    console.log(todos)
    for(let i = 0; i < todos.length; i++){
        makeTodo(todos[i])
    }
})



// list.axios.get("https://api.vschool.io/Zach/todo/").then((response)=>{
//     list.textContent = response.data
// })

