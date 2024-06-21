let button = document.getElementById('btn')
// debugger
button.style.width = '200px'
button.addEventListener('click', () => {
    let square = document.getElementById('sqr')
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


// let numbers2= numbers.map(number => number*2)
let button2 = document.getElementById('but')
button2.addEventListener('click', () => {
    let numbers= [1,2,3,4,5,6,7,8,9,10]
    let numbers2 = numbers.find(number => number === 7 )
    alert(numbers2)
})
