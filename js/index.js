let button = document.getElementById('btn')
// debugger
button.style.width = '200px'
let colour1 = 'red'
let colour2 = 'yellow'
let colour3 = 'green'

let number = 2
let x = 7
let y = 4 
let result = x-y
button.addEventListener('click', () => {
    if (number === result ) {
        alert("true") 
    } else {
        alert("false")
    }
}) 
// let square = document.getElementById('sqr')
// button.addEventListener('click', () => {
//     if (square.style.backgroundColor === colour1 ) {
//          square.style.backgroundColor = colour2
//     } else if (square.style.backgroundColor === colour2) { 
//         square.style.backgroundColor= colour3
//     } else { 
//         square.style.backgroundColor= colour1
//     }
// })
// button.addEventListener('click', () => {
//     square.style.backgroundColor === 'red' ? square.style.backgroundColor= 'yellow' 
//     : square.style.backgroundColor === 'yellow' ?  square.style.backgroundColor= 'green'
//     : square.style.backgroundColor= 'red'  
// })
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

