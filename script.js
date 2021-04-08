// DOM elements here
let canvas = document.querySelector('#gameScreen');
let startScreen = document.querySelector("#splash-screen");
let startBtn = document.querySelector("#start");
let restartBtn = document.querySelector("#restart");
let winScreen = document.querySelector('#youWon');
let gameOver = document.querySelector('#gameOver');
let restartBtn1 = document.querySelector("#restart1");

// getting the paintbrush
let ctx = canvas.getContext("2d");
canvas.style.border= "2px solid black";

// load images
let bg = new Image();
bg.src = './space-pics/star_bg/bg_03.png';

let floor = new Image();
floor.src = './space-pics/ground.png'
floor.width = canvas.width

let astro = new Image ();
astro.src = './space-pics/Astronaut.png';
let astroX =  0, astroY = 420, astroWidth = 50, astroHeigth = 80;

let obstacle = new Image();
obstacle.src ='./space-pics/Foguete.png';

let snoopy = new Image (50, 50);
snoopy.src = './space-pics/snoopy.png';
let snoopyX = canvas.width - 200, snoopyY= 0;


//number of space trash
let obstArr = [
    {x: 100, y: -80, speed: 4},
    {x: 200, y: -70, speed: 3},
    {x: 150, y: 0, speed: 2},
    {x: 90, y: -50, speed: 4}
]

// starting global variables
let isArrowLeft = false, isArrowRight = false

let isGameOver = false;

let isWinScreen = false;

// img interval
let intervalId = 0 



// functions that draws all the elements
function startGame(){
    // other DOM things might be here
    // main animate function
    animate() 
    // scores might be here
}
//resets positions
function restart (){
    isGameOver = false
    isWinScreen = false
    canvas.style.display = "";
    astroX =  0, astroY = 420;
    obstArr = [
        {x: 100, y: -80, speed: 4},
        {x: 200, y: -70, speed: 3},
        {x: 150, y: 0, speed: 2},
        {x: 90, y: -50, speed: 4} 
    ]
    snoopyX = canvas.width - 100, snoopyY= 0;
    animate()
}

//keydown && keyup
document.addEventListener('keydown', (event)=> {
    if (event.code == 'ArrowRight'){
        isArrowRight = true
        isArrowLeft = false
    }
    else if (event.code == 'ArrowLeft') {
        isArrowRight = false
        isArrowLeft = true
    }
})
document.addEventListener('keyup', () => {
    isArrowRight = false
    isArrowLeft = false
})

function animate(){
    
    // here are all movemement changes
    if (isArrowRight && (astroX + astroWidth < canvas.width)){
        astroX = astroX + 5
    }
    if (isArrowLeft && (astroX > 0)){
        astroX = astroX -5
    } 
    
    // here are all drawings
    ctx.drawImage (bg, 0, 0)
    ctx.drawImage (floor, 0 , canvas.height - floor.height, canvas.width, floor.height)
    ctx.drawImage (astro, astroX , astroY, astroWidth, astroHeigth)
    ctx.drawImage (snoopy, snoopyX, snoopyY, snoopy.width, snoopy.height)
    
    //Snoopy falling
    snoopyY = snoopyY + 0.5;

    //for loop falling obstacles from sky
    for (let i=0; i < obstArr.length; i++){
        ctx.drawImage(obstacle, obstArr[i].x, obstArr[i].y, obstacle.width, obstacle.height)
        obstArr[i].y = obstArr[i].y  + obstArr[i].speed
     
        // infinite loop
        // collision detect obstacles
        if (astroX < obstArr[i].x + obstacle.width &&
            astroX + astroWidth > obstArr[i].x &&
            astroY < obstArr[i].y + obstacle.height &&
            astroY + astroHeigth > obstArr[i].y) {
                isGameOver = true
            }
            
        if (obstArr[i].y + obstacle.height > canvas.height){
            obstArr[i].x =  Math.floor(Math.random() * canvas.width),
            obstArr[i].y = -10
        }
    }

        // Snoopy collision detect
        if (astroX < snoopyX + snoopy.width &&
        astroX + astroWidth > snoopyX &&
        astroY < snoopyY + snoopy.height &&
        astroY + astroHeigth > snoopyY) {
            isWinScreen = true
        }

    // Here for checking if game is over or if game continues
    if (isGameOver){
        cancelAnimationFrame(intervalId);
        canvas.style.display = "none";
        startScreen.style.display = "none"
        restartBtn.style.display ="";
        winScreen.style.display = "none"
        gameOver.style.display ="block"
    }   else {
        intervalId = requestAnimationFrame(animate);
    }
    // checking if won the game
    if (isWinScreen){
        cancelAnimationFrame(intervalId);
        canvas.style.display = "none";
        restartBtn1.style.display = "";
        startScreen.style.display = "none";
        winScreen.style.display = "block";
        gameOver.style.display = "none";
    }   
}


 //Everything begins here
 window.addEventListener('load', () => {
    canvas.style.display = 'none';
    restartBtn.style.display = 'none';
    winScreen.style.display = "none";
    gameOver.style.display = "none";
 
    startBtn.addEventListener('click', () => {
        // start()
        // hide the start button
        startScreen.style.display = "none";
        // show the canvas
        canvas.style.display = "block";
        restartBtn1.style.display = "none";
        winScreen.style.display = "none";
        gameOver.style.display = "none";
        startGame()

        // start the game logic
    })

    restartBtn.addEventListener('click', () => {
        startScreen.style.display = "none";
        canvas.style.display = "block";
        restartBtn.style.display = "none";
        winScreen.style.display = "none";
        gameOver.style.display = "none";
        restart()
    })
    restartBtn1.addEventListener('click', () => {
        startScreen.style.display = "none";
        canvas.style.display = "block";
        restartBtn.style.display = "none";
        winScreen.style.display = "none";
        gameOver.style.display = "none";
        restart()
})
})