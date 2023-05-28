//Sketch pad parent element which will contain all the pixels
const workspace = document.querySelector('.workspace')


//For loop creating the 16/16 grid of div squares
for(let i=0;i<256;i++) {
    const square = document.createElement('div');
    square.classList.add('pixel')
    workspace.appendChild(square);
}

let pixels = document.querySelectorAll(".pixel")

pixels.addEventListener("mouseover", function changeColor() {
    console.log('Hi!')
})


