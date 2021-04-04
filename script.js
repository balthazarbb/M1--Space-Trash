let canvas = document.getElementById('gameScreen');
// getting the paintbrush
let ctx = canvas.getContext("2d");
canvas.style.border= "2px solid black";

// load images
let bg = new Image();
bg.src = './space-pics/star_bg/bg_03.png';

function draw(){
    //add bg image 
    ctx.drawImage(bg, 0, 0)
    draw()
}

 //Everything begins here
 window.addEventListener('load', () => {
    canvas.style.display = 'none'
    restartBtn.style.display = 'none'
    start()
    startBtn.addEventListener('click', () => {
    start()
    })

    restartBtn.addEventListener('click', () => {
        restart()
    })
})