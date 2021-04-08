// DOM elements here
let canvas = document.querySelector('#gameScreen');
let startScreen = document.querySelector("#splash-screen");
let startBtn = document.querySelector("#start");
let restartBtn = document.querySelector("#restart");
let winScreen = document.querySelector('#youWon');
let gameOver = document.querySelector('#gameOver');
let restartBtn1 = document.querySelector("#restart1");

// loading sound files
let audio = new Audio("./space-pics/through space.ogg");
// set audio volume
audio.volume = 0.08;
let audio1 = new Audio("./space-pics/oh no oh no oh no no no song - capone.mp3")
audio1.volume = 0.07;
let audio2 =new Audio("./space-pics/cheer-gradeschoolyay-sound-effect-49926758.mp3")
audio2.volume = 0.07;

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
    {x: 250, y: -40, speed: 4},
    {x: 200, y: -70, speed: 3},
    {x: 150, y: 0, speed: 2},
    {x: 90, y: -50, speed: 4},
    {x: 250, y: -70, speed: 3}
]

// starting global variables
let isArrowLeft = false, isArrowRight = false

let isGameOver = false;

let isWinScreen = false;

// img interval
let intervalId = 0 

// functions that draws all the elements
function startGame(){
    // main animate function
    // invoke animate
    animate() 
    // set audio for gameScreen
    audio.play()
    // loops the audio
    audio.loop = true
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
    // Music during gamePlay
    audio.load()
    audio.play()
    animate()
}
// eventListeners for Astronaut movement
// keydown && keyup // arrow left&right
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
    
    //Snoopys falling speed
    snoopyY = snoopyY + 0.8;

    //for loop falling obstacles from sky
    for (let i=0; i < obstArr.length; i++){
        ctx.drawImage(obstacle, obstArr[i].x, obstArr[i].y, obstacle.width, obstacle.height)
        obstArr[i].y = obstArr[i].y  + obstArr[i].speed
     
        // collision detect obstacles
        if (astroX < obstArr[i].x + obstacle.width &&
            astroX + astroWidth > obstArr[i].x &&
            astroY < obstArr[i].y + obstacle.height &&
            astroY + astroHeigth > obstArr[i].y) {
                isGameOver = true
            }
        // infinite loop for the obstacles
        if (obstArr[i].y + obstacle.height > canvas.height){
            obstArr[i].x =  Math.floor(Math.random() * canvas.width),
            obstArr[i].y = -10
        }
    }

        // Snoopys collision detect
        if (astroX < snoopyX + snoopy.width &&
        astroX + astroWidth > snoopyX &&
        astroY < snoopyY + snoopy.height &&
        astroY + astroHeigth > snoopyY) {
            isWinScreen = true
        }

    // Here for checking if game is over or if game continues
    if (isGameOver){
        cancelAnimationFrame(intervalId);
        // hide the canvas
        canvas.style.display = "none";
        // hide startScreen
        startScreen.style.display = "none"
        // show restartBtn
        restartBtn.style.display ="";
        // hide winScreen
        winScreen.style.display = "none"
        // hide gamOverScreen
        gameOver.style.display ="block"
        // pause audio
        audio.pause()
        // load audio1
        audio1.load()
        // play audio1
        audio1.play()
    }   else {
        intervalId = requestAnimationFrame(animate);
    }
    // checking if won the game
    if (isWinScreen){
        cancelAnimationFrame(intervalId);
        // hide the canvas
        canvas.style.display = "none";
        // show restartBtn1
        restartBtn1.style.display = "";
        // hide startScreen
        startScreen.style.display = "none";
        // show winScreen
        winScreen.style.display = "block";
        // hide winScreen
        gameOver.style.display = "none";
        // load audio1
        audio2.load()
        // play audio1
        audio2.play()
        // pause audio
        audio.pause()
    }   
}

 //add eventListeners
 window.addEventListener('load', () => {
     // hide the canvas
    canvas.style.display = 'none';
    // hide restartBtn
    restartBtn.style.display = 'none';
    // hide winScreen
    winScreen.style.display = "none";
    // hide gameOverScreen
    gameOver.style.display = "none";
 
    startBtn.addEventListener('click', () => {
        // hide the start button
        startScreen.style.display = "none";
        // show the canvas
        canvas.style.display = "block";
        // hide the restart button
        restartBtn1.style.display = "none";
        // hide the winScreen
        winScreen.style.display = "none";
        // // hide the gameOver screen
        gameOver.style.display = "none";
        startGame()
    })
    // start the game logic
    restartBtn.addEventListener('click', () => {
        // hide startScreen
        startScreen.style.display = "none";
        // show canvas
        canvas.style.display = "block";
        // hide restartBtn
        restartBtn.style.display = "none";
        // hide winScreen
        winScreen.style.display = "none";
        // hide gameOverScreen
        gameOver.style.display = "none";
        // pause audio1 & audio2
        audio1.pause()
        audio2.pause()
        // invoke restart
        restart()
    })
    
    restartBtn1.addEventListener('click', () => {
        // hide startScreen
        startScreen.style.display = "none";
        // show canvas
        canvas.style.display = "block";
        // hide restartBtn
        restartBtn.style.display = "none";
        // hide winScreen
        winScreen.style.display = "none";
        // hide gameOverScreen
        gameOver.style.display = "none";
        audio2.pause()
        // invoke restart
        restart()
})
})