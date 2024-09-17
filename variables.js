




// QUERY SELECTORS + VARIABLES


//  SOUNDS

 let forestSound = document.querySelector("#soundForest")
let appleSound = document.querySelector("#soundApple") 
let music = document.querySelector("#music") 
let chooseMenu = document.querySelector("#chooseMenu") 
let hitWall = document.querySelector("#hitWall") 
let hitSnake = document.querySelector("#hitSnake") 


document.addEventListener("visibilitychange", () => { 

    if(document.hidden) {

         paused = true
         } 
        
         else{
            paused = false  
              } 
         });


//  SOUNDS END



 
 let start = document.querySelector("#start")
 let pStart = document.querySelector("#pStart") 
 let pause = document.querySelector("#pause")
 let score = document.querySelector("#scoreValue")
 let highScore = document.querySelector("#highScoreValue")
 
 
 const cherry = new Image()

 cherry.src ="pics/cherry.png" 
  
 


 
 const apple = new Image()

 apple.src = "pics/apple.png"
 
 const watterMelon = new Image()

 watterMelon.src = "pics/watterMelon.png"
 
 
 const strawberry = new Image()

 strawberry.src = "pics/strawberry.png"
 
 let randomFruit = null 
 
 const snakeSkin = new Image()

 snakeSkin.src = "pics/skin2.png"
 
 const snakeHeadRight = new Image() 
 
 snakeHeadRight.src = "pics/snakeHeadRight.png"
 
 const snakeHeadUp = new Image()
 
 snakeHeadUp.src = "pics/snakeHeadUp.png"
 
 const snakeHeadLeft = new Image()
  
 snakeHeadLeft.src = "pics/snakeHeadLeft.png" 
  
 const snakeHeadDown = new Image() 
 
 snakeHeadDown.src = "pics/snakeHeadDown.png"
 
  
let butterFly = document.querySelector("#butterFly") 
 
 
 let goUp = document.querySelector("#control-up")
 let goRight = document.querySelector("#control-right")
 let goDown = document.querySelector("#control-down")
 let goLeft = document.querySelector("#control-left")
 let canvas = document.querySelector("#playground")
 let ctx  = canvas.getContext("2d")
  let gameOver = document.querySelector("#gameOver") 
 let introduction = document.querySelector("#introduction")
 let menuHam = document.querySelector("#menuHam")
 let highScoreValue = document.querySelector("#highScoreValue")
 let scoreValue = document.querySelector("#scoreValue")
 let menu = document.querySelector("#menu")
 let menuTable = document.querySelector("#menuTable")
 let speed = document.querySelector("#speed")
 
 
 
 speed.style.backgroundImage = "var(--menuLine)"
 let speedWord = document.querySelector("#speedWord")
 let speedNumber = document.querySelector("#speedNumber")
 let speedNumberValue = 3
 speedNumber.textContent = "normal"
 let speedNumberValueToInterval
 let backGroundPlayground = document.querySelector("#backGroundPlayground")
 let backColorMenu = document.querySelector("#backColorMenu")
 
                      

 let musicOnOff = document.querySelector("#musicOnOff")
 let soundOnOff = document.querySelector("#soundOnOff")
let vibration = document.querySelector("#vibration") 
 let vibrationOnOff = document.querySelector("#vibrationOnOff")
 
 let exit = document.querySelector("#exit")
 let pExit = document.querySelector("#pExit")
 let preload = 
 document.querySelector("#preload")
 

// PRELOAD GAME 

 window.addEventListener("load",function(){
     preload.style.display = "none"
 })
 
// PRELOAD GAME END


 
//  VARIABLES

 let snakeSize = 150
 const block = snakeSize
 let moveBodyRightUp 
 let moveBodyLeftUp
 let moveBodyRightDown
 let moveBodyLeftDown
 let moveBodyUpRight
 let moveBodyUpLeft
 let moveBodyDownRight
 let moveBodyDownLeft                                
 let position, positionHead
 let velocity, velocityHead, snake
 let food
 let snakeTai, snakeDirection, playGame
 let countColor = 0
 let countColorBackground = 1
 let snakeColorInGame = "#000"
 let backgroundColorInGame = "#FFFFFF"
 let paused = false
 let scoreNumber = 0
 let tl, tr, br, bl
 let htl, htr, hbr, hbl
 let trueDrawFruit = true
 let intervalTime 
 let drawFruit
 let endGame 
 let moveHeadInRightTimeUp 
 let moveHeadInRightTimeDown 
 let moveHeadInRightTimeLeft 
 let moveHeadInRightTimeRight 
 let xPositionFruit,yPositionFruit
 let addNewBlockToSnake = false
 let roundCornerRightUp,roundCornerLeftUp
 let roundCornerRightDown,roundCornerLeftDown
 let roundCornerUpRight,roundCornerUpLeft
 let roundCornerDownRight,roundCornerDownLeft
  
 
 speed.style.boxShadow = "var(--menuBoxShadow)"


 




//  VARIABLES END







