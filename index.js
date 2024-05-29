let button = document.getElementById('btn')
// debugger
button.style.width = '200px'
button.addEventListener('click', () => {
    square.style.backgroundColor= 'blue'
})
let input = document.getElementById('name')
input.value='Alim'

let greenContainer= document.createElement('div')
greenContainer.style.backgroundColor = 'green'
greenContainer.style.width = '100px'
greenContainer.style.height = '100px'

let conteiner1=document.getElementById('conteiner')
conteiner1.appendChild(greenContainer)
conteiner1.style.border= '10px solid black'