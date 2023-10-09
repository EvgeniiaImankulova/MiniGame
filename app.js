const board = document.querySelector('#board')
const colors = ['#5bc0eb', '#fde74c', '#9bc53d', '#c3423f', '#404e4d']
const SQUARES_NUMBER = 666

for (let i = 0; i < SQUARES_NUMBER; i++) {
 const square = document.createElement('div') 
 square.classList.add('square')

 square.addEventListener('mouseover', () => setColor(square))
 square.addEventListener('mouseleave', () => removeColor(square))
 board.append(square)
}

function setColor(element) {
    const color = getColorRandom()
    element.style.backgroundColor = color
    element.style.boxShadow = `0 0 2px ${color}, 0  0 10px ${color}`
}

function removeColor(element) {
    element.style.backgroundColor = '#1d1d1d'
    element.style.boxShadow = `0 0 2px #000`
}
function getColorRandom() {
const index = Math.floor(Math.random() *colors.length)
return colors[index]
}
