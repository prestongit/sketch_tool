//Sketch pad parent element which will contain all the pixels
const workspace = document.querySelector('.workspace')


//For loop creating the 16/16 grid of div squares
for(let i=0;i<256;i++) {
    const square = document.createElement('div');
    square.classList.add('pixel')
    workspace.appendChild(square);
}

//query selecot that getsd all the pixels
const pixels = document.querySelectorAll(".pixel")

//iterate the pixels nodelist and apply an event listener to every node
pixels.forEach((item) => {
    item.addEventListener("mouseover", function() {
        item.style.background = "black"
    })
})



