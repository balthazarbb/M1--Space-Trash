# LAB | Space Trash

## MVP (DOM-CANVAS)

 * game has an Astronaut that moves horizontal
 * space Trash is falling randomly from the sky
 * when trash hits the astronaut game is over
 * if Astronaut dodges 10 Trash Items, he win

## Backlog

 * astronaut has an Laser to dematerialize the trash
 * if trash hits the ground, Astronaut is dead
 * if astronaut shoots 10 items, level up
 * add levels with increasing speed and difficulty
 * add scoreboard

# Data Structure

## Main.js

 * buildStartScreen(){}
 * buildGameScreen(){}
 * buildGameoverScreen(){}

## Background(){}
 * draw canvas(){}
 * add Background(){}

## Astronaut.js
 * draw Astronaut(){}
 * move Astronaut(){}
 * collission Astronaut(){}

## SpaceTrash.js
 * add Spacetrash(){}
 * move Spacetrash randomly(){}
 * check if Spacetrash collides with Astr. or floor(){}


# States & States Transitions
Definition of the different states and their transition

 * splashScreen
 * gameScreen
 * gameOverScreen

# Task
 * main - buildDom
 * main - buildSplashScreen
 * main - addEventListener
 * main - buildGameScreen
 * main - buildGameOverScreen
 * main - drawBackGround
 
 * game - buildCanvas
 * game - drawCanvas

 * astronaut - drawAstronaut
 * astronaut - addEventlistener
 * astronaut - addcollison

 * obstacles - drawSpaceTrash
 * obstacles - addLoop
 * obstacles - moveObstacles
 * obstacles - checkCollision1Astronaut

 * game - gameOver
 * game - addEventListener


## Links

### Trello
https://trello.com/b/F0FiM3mi/moontrash

### Git
https://github.com/balthazarbb/M1--Space-Trash.git

### Slides

