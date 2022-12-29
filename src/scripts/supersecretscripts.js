/**
 * Super secret scripts with no purpose at all
 */

import * as websiteDictionary from '../assets/information';


/** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** */


export class Game {

  /**
   * Default constructor for the game, creates the context from the canvas and the game objects
   * @param {*} canvas 
   */
  constructor(canvas) {
    // declare and setup the canvas and the context
    this.canvas = canvas;
    this.canvas.width = 3840; // set the canvas resolution to 4k
    this.canvas.height = 2160; // set the canvas resolution to 4k
    this.context = canvas.getContext('2d');
    this.context.font = 'bold 50px papyrus'
    this.context.strokeStyle = '#FFFFFF' // set the context text color to white

    // declare the game objects
    this.wordBank = this.buildWordBank();
    this.player = new Player(canvas.width * 0.48, canvas.height * 0.8);
    this.asteroids = [];
  }

  /**
   * Starts the game
   */
  startGame() {
    setInterval(this.generateAsteroid.bind(this), 1500) // starts generating asteroids at 1 every 1.5 seconds
    
    setInterval(this.gameLoop.bind(this), 1000 / 60); // starts the game loop at 60fps
  }

  /**
   * Game loop to run at 60fps
   */
  gameLoop() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height); // clears all the previous GameObjects so they can be redrawn

    this.player.updateCoordinates(this.context);

    for (let i = 0; i < this.asteroids.length; i++) {
      this.handleGameObjectUpdates(i, this.asteroids);
    }
  }

  /**
   * Handles all updates and checks for a GameObject for each frame
   * @param {number} index of the GameObject
   * @param {*} list containing the GameObject
   */
  handleGameObjectUpdates(index, list) {
    list[index].updateCoordinates(this.context)
    list[index].checkBoundries(this.canvas);
    this.removeIfNotAlive(index, list);
  }

  /**
   * Removes the gameObject if the alive property has been set to false
   * @param {number} index of the GameObject
   * @param {*} list containing the GameObject
   */
  removeIfNotAlive(index, list) {
    if (list[index].alive === false) {
      list.splice(index, 1); // remove the object from the list
    }
  }

  /**
   * Randomly generates asteroids from the word bank, to be set on a loop
   */
  generateAsteroid() {
    this.asteroids.push(
      new Asteroid(
        this.wordBank[Math.floor(Math.random() * this.wordBank.length)], // gets a random word from the wordBank
        this.canvas.width
      )
    );
    console.log(this.asteroids)
  }


  /**
   * Builds the strings to be used as words froms all of the words used on the website. Lengths of 1-3 words by random.
   */
  buildWordBank() {
    let wordBank = [];
    
    // create words from the the words in me
    this.splitSentenceIntoWords(websiteDictionary.me.name).forEach(word => {wordBank.push(word)});
    this.splitSentenceIntoWords(websiteDictionary.me.title).forEach(word => {wordBank.push(word)});
    this.splitSentenceIntoWords(websiteDictionary.me.about).forEach(word => {wordBank.push(word)});

    // create words from the the words in work
    websiteDictionary.work.forEach(workExperience => {
      this.splitSentenceIntoWords(workExperience.title).forEach(word => {wordBank.push(word)});
      this.splitSentenceIntoWords(workExperience.location).forEach(word => {wordBank.push(word)});
      this.splitSentenceIntoWords(workExperience.date).forEach(word => {wordBank.push(word)});
      workExperience.descriptions.forEach(description => {
        this.splitSentenceIntoWords(description).forEach(word => {wordBank.push(word)});
      })
    })

    // create words from the the words in education
    websiteDictionary.education.forEach(educationExperience => {
      this.splitSentenceIntoWords(educationExperience.title).forEach(word => {wordBank.push(word)});
      this.splitSentenceIntoWords(educationExperience.location).forEach(word => {wordBank.push(word)});
      this.splitSentenceIntoWords(educationExperience.date).forEach(word => {wordBank.push(word)});
      educationExperience.descriptions.forEach(description => {
        this.splitSentenceIntoWords(description).forEach(word => {wordBank.push(word)});
      })
    })

    //create words from the wrods in projects
    websiteDictionary.projects.forEach(project => {
      this.splitSentenceIntoWords(project.name).forEach(word => {wordBank.push(word)});
      this.splitSentenceIntoWords(project.description).forEach(word => {wordBank.push(word)});
      project.techstack.forEach(technology => {
        this.splitSentenceIntoWords(technology).forEach(word => {wordBank.push(word)});
      })
    })

    return wordBank;
  }

  /**
   * Splits a string into components of random length 1-3
   * @returns {String[]} words 
   */
  splitSentenceIntoWords(sentence) {
    let sentenceSplit = sentence.split(' ');
    let newWords = []
    let index = 0;

    while(index<sentenceSplit.length) {
      let randomNum = this.randomNumOneThroughThree();
      let oneThroughThreeWords = sentenceSplit.slice(index, index+randomNum);

      // remove words that contain non letter characters
      for (let j = oneThroughThreeWords.length-1; j>=0; j--) {
        if (!oneThroughThreeWords[j].match(/[a-zA-Z]/)) {
          oneThroughThreeWords.splice(j);
        }
      }
      newWords.push(oneThroughThreeWords.join(' '));
      index+=randomNum;
    }

    // removes all empty strings from thea array and returns it
    return newWords.filter(str => str);
  }

  /**
   * Generates a random number 1-3
   * @returns {number} 
   */
  randomNumOneThroughThree() {
    return Math.floor(Math.random()*3) + 1; 
  }

}


/** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** */


class GameObject {

  /**
   * 
   * @param {number} x coordinate
   * @param {number} y coordinate
   * @param {number} dx speed of the x coordinate
   * @param {number} dy speed of the y coordinate
   */
  constructor(x, y, dx, dy) {
    this.alive = true;
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
  }

  /**
   * Updates the coordinates of the GameObject based of dx and dy
   */
  updateCoordinates(context) {
    this.x = this.x + this.dx;
    this.y = this.y + this.dy;
    this.draw(context);
  }

  /**
   * Checks if the GameObject still resides in the canvas boundries
   * @param {*} canvas 
   */
  checkBoundries(canvas) {
    // check x-axis boundries
    if (this.x < 0 || (this.x) > canvas.width) {
      this.handleOutOfBounds()
    }

    // check y-axis boundries
    if (this.y < 0 || (this.y) > canvas.height) {
      this.handleOutOfBounds()
    }
  }

  /**
   * Handles what happens when a GameObject goes out of bounds
   */
  handleOutOfBounds() {
    this.destroyObject();
  }

  /**
   * Sets alive property to false when the GameObject is to be destroyed
   */
  destroyObject() {
    this.alive = false;
  }

}


/** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** */


class Player extends GameObject {
  
  /**
   * 
   * @param {number} x coordinate
   * @param {number} y coordinate
   */
  constructor(x, y) {
    super(x, y, 0, 0);
    this.width = 90; // width of the player
    this.height = 160; // height of the player
    this.playerSpeed = 20; // default speed of the player
    this.image = new Image();
    this.image.src = require('../assets/images/game/player.png');
    this.initializeEventListener();
  }

  /**
   * Draw the player iamge onto the context once it has loaded
   * @param {*} context 
   */
  draw(context) {
    context.drawImage(this.image, this.x, this.y, this.width, this.height)
  }

  /**
   * Initilizes the event listener for the player, listens for directional movement and for shooting bullets
   */
  initializeEventListener() {
    document.addEventListener('keydown', (e) =>{
      let keyPressed = e.code;

      // key inputs for movement right
      if (keyPressed === 'ArrowRight' || keyPressed === 'KeyD') {
        this.dx = this.playerSpeed; // update dx to the playerSpeed
      }

      // key inputs for movement left
      if (keyPressed === 'ArrowLeft' || keyPressed === 'KeyA') {
        this.dx = -this.playerSpeed; // update dy to the negative playerSpeed
      }
    })
  }

}


/** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** */


class Asteroid extends GameObject {

  /**
   * @param {String} word 
   * @param {number} canvasWidth
   */
  constructor(word, canvasWidth) {
    super(0, 0, 0, 5);
    this.word = word;
    this.canvasWidth = canvasWidth
    this.x = this.generateRandomXCoordinate();
  }

  /**
   * Draw the asteroid text onto the canvas
   * @param {*} context 
   */
  draw(context) {
    context.strokeText(this.word, this.x, this.y);
  }

  /**
   * 
   * @returns {number} random x coordinate to be used for the asteroid
   */
  generateRandomXCoordinate() {
    return Math.floor(Math.random() * 0.9 * this.canvasWidth); 
  }

}


/** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** */