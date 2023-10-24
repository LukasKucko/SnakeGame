// QUERY SELECTORS + VARIABLES


//  SOUNDS

 let forestSound = document.querySelector("#soundForest")
let appleSound = document.querySelector("#soundApple") 
let music = document.querySelector("#music") 
let chooseMenu = document.querySelector("#chooseMenu") 
let hitWall = document.querySelector("#hitWall") 

forestSound.pause()
appleSound.pause()
music.pause()
chooseMenu.pause()
hitWall.pause()




 
 let start = document.querySelector("#start")
 let pStart = document.querySelector("#pStart") 
 let pause = document.querySelector("#pause")
 let score = document.querySelector("#scoreValue")
 let highScore = document.querySelector("#highScoreValue")
 let cherry = document.querySelector("#cherry")
 let appleFruit = document.querySelector("#appleFruit")
 let snakeHeadRight = document.querySelector("#snakeHeadRight")
 let snakeHeadUp = document.querySelector("#snakeHeadUp")
 let snakeHeadLeft = document.querySelector("#snakeHeadLeft")
 let snakeHeadDown = document.querySelector("#snakeHeadDown")
 let goUp = document.querySelector("#control-up")
 let goRight = document.querySelector("#control-right")
 let goDown = document.querySelector("#control-down")
 let goLeft = document.querySelector("#control-left")
 let canvas = document.querySelector("#playground")
 let ctx  = canvas.getContext("2d")
  let gameOver = document.querySelector("#gameOver") 
 let introduction = document.querySelector("#introduction")
 let menu = document.querySelector("#menu")
 let speed = document.querySelector("#speed")
 speed.style.backgroundColor = "var(--menuLine)"
 let speedWord = document.querySelector("#speedWord")
 let speedNumber = document.querySelector("#speedNumber")
 let speedNumberValue = 3
 speedNumber.textContent = "normal"
 let speedNumberValueToInterval
 let backGroundPlayground = document.querySelector("#backGroundPlayground")
 let backColorMenu = document.querySelector("#backColorMenu")
 backColorMenu.style.color = "#D3D3D3"                        
let snakeColorLine = document.querySelector("#snakeColorLine")
 let snakeColor= document.querySelector("#snakeColor")
 
 let musicOnOff = document.querySelector("#musicOnOff")
 let soundOnOff = document.querySelector("#soundOnOff")
 let exit = document.querySelector("#exit")
 
 canvas.height = canvas.width
 
 let block = 200
 let area = canvas.width / block
 let position, velocity, food, snake
 let snakeTail, snakeDirection, playGame
 let countColor = 0
 let countColorBackground = 0
 let snakeColorInGame = "#000"
 let backgroundColorInGame = "#D3D3D3"
 let paused = false
 let scoreNumber = 0
 let tl, tr, br, bl
 let intervalTime
 
 let endGame 
 localStorage.setItem("startGame",endGame)
   
localStorage.getItem("highScoreKey",scoreNumber)

highScore.textContent = localStorage.highScoreKey

 
 //  INTRODUCTION
 
 setTimeout("introduction.style.display= 'flex';",4000)
 
  
       
//  MOVE IN THE MENU    
        
document.addEventListener("click", funcColor)
  
 function funcColor (event){ 
         
    if(speed.style.backgroundColor == "var(--menuLine)"){
       if(event.target == goUp || event.target == triangleUp){
           speed.style.backgroundColor = "transparent"
           soundFx.style.backgroundColor = "var(--menuLine)"  
           
          if(soundOnOff.textContent == "Sound FX on"){
       chooseMenu.play()
       chooseMenu.volume = 0.2
        }
        else{
         soundOnOff.textContent = "Sound FX off"
         chooseMenu.pause()
         } 
           }
       else if(event.target == goDown || event.target == triangleDown){
           speed.style.backgroundColor = "transparent"
           backGroundPlayground.style.backgroundColor = "var(--menuLine)"  
            if(soundOnOff.textContent == "Sound FX on"){
        chooseMenu.play()
        chooseMenu.volume = 0.2
        }
        else{
        soundOnOff.textContent = "Sound FX off"
        chooseMenu.pause()
        } 
       }            
       else if(event.target == goRight || event.target == triangleRight){     
            if(soundOnOff.textContent == "Sound FX on"){
       chooseMenu.pause()
       chooseMenu.play()
       chooseMenu.volume = 0.2
        }
        else{
        soundOnOff.textContent = "Sound FX off"
        chooseMenu.pause()
         }          
          if( speedNumberValue == 1){ 
              speedNumberValue++
              speedNumber.textContent = "slow"                
             }  
            else if( speedNumberValue == 2){
             speedNumberValue++
             speedNumber.textContent = "normal"                 
             }              
             else if( speedNumberValue == 3)   
             {
             speedNumberValue++
             speedNumber.textContent = "fast"                 
             }             
             else if( speedNumberValue == 4)
             {
             speedNumberValue++
             speedNumber.textContent = "faster"                 
             }                                  
           }             
       else if(event.target == goLeft || event.target == triangleLeft){       
             if(soundOnOff.textContent == "Sound FX on"){
       chooseMenu.pause()
       chooseMenu.play()
       chooseMenu.volume = 0.2
        }
        else{
         soundOnOff.textContent = "Sound FX off"
         chooseMenu.pause()
         }  
         if( speedNumberValue == 5){ 
              speedNumberValue--
              speedNumber.textContent = "fast"              
           }  
           else if( speedNumberValue == 4){
             speedNumberValue--
             speedNumber.textContent = "normal"                 
            }              
            else if( speedNumberValue == 3){
             speedNumberValue--
             speedNumber.textContent = "slow"                 
            }             
            else if( speedNumberValue == 2){
             speedNumberValue--
             speedNumber.textContent = "slowly"                 
            }                                                                                                                             
          }         
        }                                                                                

 
else if (backGroundPlayground.style.backgroundColor == "var(--menuLine)"){
        if(event.target == goUp || event.target == triangleUp){  
         if(soundOnOff.textContent == "Sound FX on"){
       chooseMenu.play()
       chooseMenu.volume = 0.2
        }
        else{
         soundOnOff.textContent = "Sound FX off"
         chooseMenu.pause()
         }           
        backGroundPlayground.style.backgroundColor = "transparent" 
             speed.style.backgroundColor = "var(--menuLine)"             
           } 
     
        else if(event.target == goDown || event.target == triangleDown){  
          if(soundOnOff.textContent == "Sound FX on"){
       chooseMenu.play()
       chooseMenu.volume = 0.2
        }
        else{
         soundOnOff.textContent = "Sound FX off"
         chooseMenu.pause()
         }          
      backGroundPlayground.style.backgroundColor = "transparent" 
             snakeColorLine.style.backgroundColor = "var(--menuLine)"             
           }
            
       else if(event.target == goRight || event.target == triangleRight){
       
        if(soundOnOff.textContent == "Sound FX on"){
       chooseMenu.play()
       chooseMenu.volume = 0.2
        }
        else if(soundOnOff.textContent == "Sound FX off"){
        
         chooseMenu.pause()
         } 
        countColorBackground++ 
        if(countColorBackground == 7){
            countColorBackground = 1
        }
        switch(countColorBackground){
          case 1:
             backColorMenu.style.color = "#D3D3D3"                        
             backgroundColorInGame = "#D3D3D3"   
             break  
             
             case 2:  
            backColorMenu.style.color = "#97a955"                        
             backgroundColorInGame = "#97a955"   
             break  
             
             case 3:  
             backColorMenu.style.color = "#71a994"                        
             backgroundColorInGame = "#71a994"   
             break  
             
             case 4:  
             backColorMenu.style.color = "#6379a9"                        
             backgroundColorInGame = "#6379a9"   
             break  
             
             case 5:  
             backColorMenu.style.color = "#8c8c8c"                        
             backgroundColorInGame = "#8c8c8c"   
             break  
             
             case 6:  
             backColorMenu.style.color = "#dddddd"                        
             backgroundColorInGame = "#dddddd"   
             break  
            }                                             
      return backgroundColorInGame
     }
       
       else if(event.target == goLeft || event.target == triangleLeft){
       
        if(soundOnOff.textContent == "Sound FX on"){
       chooseMenu.play()
       chooseMenu.volume = 0.2
        }
        else{
         soundOnOff.textContent = "Sound FX off"
         chooseMenu.pause()
         } 
        countColorBackground--
        if(countColorBackground == 0){
            countColorBackground = 6
        }
        switch(countColorBackground){
             case 1:
             backColorMenu.style.color = "#D3D3D3"                        
             backgroundColorInGame = "#D3D3D3"   
             break  
             
             case 2:  
            backColorMenu.style.color = "#97a955"                        
             backgroundColorInGame = "#97a955"   
             break  
             
             case 3:  
             backColorMenu.style.color = "#71a994"                        
             backgroundColorInGame = "#71a994"   
             break  
             
             case 4:  
             backColorMenu.style.color = "#6379a9"                        
             backgroundColorInGame = "#6379a9"   
             break  
             
             case 5:  
             backColorMenu.style.color = "#8c8c8c"                        
             backgroundColorInGame = "#8c8c8c"   
             break  
             
             case 6:  
             backColorMenu.style.color = "#dddddd"                        
             backgroundColorInGame = "#dddddd"   
             break  
             
                                                                        
        }                                             
      return backgroundColorInGame
     }         
   }
            
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            else if(snakeColorLine.style.backgroundColor == "var(--menuLine)"){      
    
     if(event.target == goUp || event.target == triangleUp){     
 snakeColorLine.style.backgroundColor = "transparent"                       
 backGroundPlayground.style.backgroundColor = "var(--menuLine)"   
    if(soundOnOff.textContent == "Sound FX on"){
       chooseMenu.play()
       chooseMenu.volume = 0.2
        }
        else{
         soundOnOff.textContent = "Sound FX off"
         chooseMenu.pause()
         }         
        }     
    
     else if(event.target == goDown || event.target == triangleDown){           
     snakeColorLine.style.backgroundColor = "transparent" 
     musicMenu.style.backgroundColor = "var(--menuLine)"
        if(soundOnOff.textContent == "Sound FX on"){
       chooseMenu.play()
       chooseMenu.volume = 0.2
        }
        else{
         soundOnOff.textContent = "Sound FX off"
         chooseMenu.pause()
         }            
        }
                                        
     else if(event.target == goLeft || event.target == triangleLeft){
      if(soundOnOff.textContent == "Sound FX on"){
       chooseMenu.play()
       chooseMenu.volume = 0.2
        }
        else{
         soundOnOff.textContent = "Sound FX off"
         chooseMenu.pause()
         } 
      countColor-- 
       if(countColor == -1){
           countColor = 10
       }       
        switch(countColor){
           
             case 0:
             snakeColor.style.color = "#000000"                                                   
             snakeColorInGame = "#000"  
             break  
             
             case 1:  
             snakeColor.style.color = "#474747"                                                   
             snakeColorInGame = "#474747"  
             break  
             
             case 2:  
             snakeColor.style.color = "#6523d1"                                                   
             snakeColorInGame = "#6523d1"  
             break  
             
             case 3:  
             snakeColor.style.color = "#3473d1"                                                   
             snakeColorInGame = "#3473d1"  
             break  
             
             case 4:  
             snakeColor.style.color = "#00d1af"                                                   
             snakeColorInGame = "#00d1af"  
             break  
             
             case 5:  
             snakeColor.style.color = "#439826"                                                   
             snakeColorInGame = "#439826"  
             break  
             
             case 6:  
             snakeColor.style.color = "#a8b40f"                                                   
             snakeColorInGame = "#a8b40f"  
             break  
             
             case 7:  
             snakeColor.style.color = "#b48d1e"                                                   
             snakeColorInGame = "#b48d1e"  
             break  
             
             case 8:  
             snakeColor.style.color = "#b4341e"                                                   
             snakeColorInGame = "#b4341e"  
             break  
             
             case 9:  
             snakeColor.style.color = "#b43c8d"                                                   
             snakeColorInGame = "#b43c8d"  
             break  
             
             case 10:  
             snakeColor.style.color = "#ad78b4"                                                   
             snakeColorInGame = "#ad78b4"  
             break                                                                                
        }                                             
      return snakeColor
     }
                                                                                                    
    else if(event.target == goRight || event.target == triangleRight){
     if(soundOnOff.textContent == "Sound FX on"){
       chooseMenu.play()
       chooseMenu.volume = 0.2
        }
        else{
         soundOnOff.textContent = "Sound FX off"
         chooseMenu.pause()
         } 
         countColor++ 
      
        if(countColor == 11){
            countColor = 0
        }       
        switch(countColor){
             case 0:
             snakeColor.style.color = "#000000"                                                   
             snakeColorInGame = "#000000"  
             break  
             
             case 1:  
             snakeColor.style.color = "#474747"                                                   
             snakeColorInGame = "#474747"  
             break  
             
             case 2:  
             snakeColor.style.color = "#6523d1"                                                   
             snakeColorInGame = "#6523d1"  
             break  
             
             case 3:  
             snakeColor.style.color = "#3473d1"                                                   
             snakeColorInGame = "#3473d1"  
             break  
             
             case 4:  
             snakeColor.style.color = "#00d1af"                                                   
             snakeColorInGame = "#00d1af"  
             break  
             
             case 5:  
             snakeColor.style.color = "#439826"                                                   
             snakeColorInGame = "#439826"  
             break  
             
             case 6:  
             snakeColor.style.color = "#a8b40f"                                                   
             snakeColorInGame = "#a8b40f"  
             break  
             
             case 7:  
             snakeColor.style.color = "#b48d1e"                                                   
             snakeColorInGame = "#b48d1e"  
             break  
             
             case 8:  
             snakeColor.style.color = "#b4341e"                                                   
             snakeColorInGame = "#b4341e"  
             break  
             
             case 9:  
             snakeColor.style.color = "#b43c8d"                                                   
             snakeColorInGame = "#b43c8d"  
             break  
             
             case 10:  
             snakeColor.style.color = "#ad78b4"                                                   
             snakeColorInGame = "#ad78b4"  
             break                                                                                
        }                                             
      return snakeColor
     }
  }






   else if(musicMenu.style.backgroundColor == "var(--menuLine)"){      
    
     if(event.target == goUp || event.target == triangleUp){  
       if(soundOnOff.textContent == "Sound FX on"){
       chooseMenu.play()
       chooseMenu.volume = 0.2
        }
        else{
         soundOnOff.textContent = "Sound FX off"
         chooseMenu.pause()
         }   
 snakeColorLine.style.backgroundColor = "var(--menuLine)"                       
 musicMenu.style.backgroundColor = "transparent"             
         }     
    
     else if(event.target == goDown || event.target == triangleDown){  
      if(soundOnOff.textContent == "Sound FX on"){
       chooseMenu.play()
       chooseMenu.volume = 0.2
        }
        else if(soundOnOff.textContent == "Sound FX off"){
         soundOnOff.textContent = "Sound FX off"
         chooseMenu.pause()
         }          
     musicMenu.style.backgroundColor = "transparent" 
     soundFx.style.backgroundColor = "var(--menuLine)"             
        }  
     
     else if(event.target == goRight || event.target == triangleRight){
      if(soundOnOff.textContent == "Sound FX on"){
       chooseMenu.play()
       chooseMenu.volume = 0.2
        }
        else{
         soundOnOff.textContent = "Sound FX off"
         chooseMenu.pause()
         } 
        if(musicOnOff.textContent == "Music on"){
       musicOnOff.textContent = "Music off"
       music.pause()
       soundForest.pause()     
        }
        else if(musicOnOff.textContent == "Music off"){
         musicOnOff.textContent = "Music off"
         music.pause()
         soundForest.pause()
         }
     }
     
     else if(event.target == goLeft || event.target == triangleLeft){
      if(soundOnOff.textContent == "Sound FX on"){
       chooseMenu.play()
       chooseMenu.volume = 0.2
        }
        else{
         soundOnOff.textContent = "Sound FX off"
         chooseMenu.pause()
         } 
     if(musicOnOff.textContent == "Music off"){
       musicOnOff.textContent = "Music on"
         music.play()
         music.volume = 0.1
         forestSound.pause()
     }
     else if(musicOnOff.textContent == "Music on"){
         musicOnOff.textContent = "Music on"
         music.play()
         music.volume = 0.5  
         forestSound.pause()        
     }
   }
 } 
  
  else if(soundFx.style.backgroundColor == "var(--menuLine)"){      
    
     if(event.target == goUp || event.target == triangleUp){  
       if(soundOnOff.textContent == "Sound FX on"){
       chooseMenu.play()
       chooseMenu.volume = 0.2
        }
        else{
         soundOnOff.textContent = "Sound FX off"
         chooseMenu.pause()
         }   
 musicMenu.style.backgroundColor = "var(--menuLine)"                       
 soundFx.style.backgroundColor = "transparent"             
         }     
    
    else if(event.target == goRight || event.target == triangleRight){
        if(soundOnOff.textContent == "Sound FX on"){
       soundOnOff.textContent = "Sound FX off"
       chooseMenu.pause()    
        }
        else{
         soundOnOff.textContent = "Sound FX off"
         chooseMenu.pause()
         }
     }
     
     else if(event.target == goLeft || event.target == triangleLeft){
     if(soundOnOff.textContent == "Sound FX off"){
       soundOnOff.textContent = "Sound FX on"
        chooseMenu.play()
        chooseMenu.volume = 0.2         
     }
     else if(soundOnOff.textContent == "Sound FX on"){
         soundOnOff.textContent = "Sound FX on"
         chooseMenu.play()
         chooseMenu.volume = 0.2             
     }
   }
        
     else if(event.target == goDown || event.target == triangleDown){ 
      if(soundOnOff.textContent == "Sound FX on"){
       chooseMenu.play()
       chooseMenu.volume = 0.2
        }
        else{
         soundOnOff.textContent = "Sound FX off"
         chooseMenu.pause()
         }           
     soundFx.style.backgroundColor = "transparent" 
     speed.style.backgroundColor = "var(--menuLine)"             
        }  
      }           
    }                        
  
// END FUNCTION  funcColor 




//  REENDERING GAME

 function init(){ 
    
     position = {x: 10, y: 10}
     velocity = {x: 0, y:0}
     snake = [ {x: 8,  y: 10},
               {x: 9, y: 10},
               {x: 10, y: 10}
               ]  
     snakeTail = snake[0]
     snakeDirection = snakeHeadRight   
     tl = 0
     tr = 60
     br = 60
     bl = 0                     
     }
     
//END FUNCTION init        
 
 
 // FUNCTION RANDOM FOOD IN GAME
           
 function randomFood(){
     food = {
       x: Math.floor(Math.random() * (area-1)),
       y: Math.floor(Math.random() * (area-1))
       }
       if(food.x == snake[snake.length-1].x && food.y == snake[snake.length-1].y){
         return randomFood()
       }
               
       for(let cell of snake){
          if(cell.x == food.x && food.y == cell.y){
             return randomFood()
            }
         }
     }
 
// END FUNCTION  randomFood   
 
 
 

 //  MOVE THE SNAKE IN GAME
  
  document.addEventListener("click",moveSnake)
      function moveSnake(event){  
                         
          if(event.target === goUp || event.target === triangleUp){
          
          velocity = {x: 0, y: -1}
          snakeDirection = snakeHeadUp           
          setTimeout(()=>{ 
           tl = 60
           tr = 60
           br = 0
           bl = 0 
           },intervalTime*2)        
         }
         
         else if(event.target === goRight || event.target === triangleRight){
          velocity = {x: 1, y: 0}
          snakeDirection = snakeHeadRight           
           setTimeout(()=>{ 
           tl = 0
           tr = 60
           br = 60
           bl = 0 
           },intervalTime*2)         
         } 
         
         else if(event.target === goDown || event.target === triangleDown){
          velocity = {x: 0, y: 1}
          snakeDirection = snakeHeadDown           
          setTimeout(()=>{ 
           tl = 0
           tr = 0
           br = 60
           bl = 60 
           },intervalTime*2)          
         } 
         
         else if(event.target === goLeft || event.target === triangleLeft){
          velocity = {x: -1, y: 0}
          snakeDirection = snakeHeadLeft           
          setTimeout(()=>{ 
           tl = 60
           tr = 0
           br = 0
           bl = 60 
           },intervalTime*2)                                                       
         }
        }  
      
    
// END FUNCTION  moveTheSnake  


  


 
 
 
//  FUNCTION TO SET SPEED OF SNAKE   
     
function setNumberToInterval(){
    if(speedNumberValue == 1){
        clearInterval(playGame)
        intervalTime = 700
        playGame =setInterval(()=>{
           if(!paused) {
             requestAnimationFrame(gameLoop)
             }
            },intervalTime);    
           }
    else if(speedNumberValue == 2){
            clearInterval(playGame)
            intervalTime = 600
            playGame =setInterval(()=>{
             if(!paused) {
             requestAnimationFrame(gameLoop)
             }
            },intervalTime);    
           }
   else if(speedNumberValue == 3){
           clearInterval(playGame)
           intervalTime = 400
           playGame =setInterval(()=>{
            if(!paused) {
             requestAnimationFrame(gameLoop)
             }
            },intervalTime);    
           }
   else if(speedNumberValue == 4){
           clearInterval(playGame)
           intervalTime = 250
           playGame =setInterval(()=>{
            if(!paused) {
             requestAnimationFrame(gameLoop)
             }
            },intervalTime);    
           }
   else if(speedNumberValue == 5){
            clearInterval(playGame)
            intervalTime = 150
            playGame =setInterval(()=>{
            if(!paused) {
             requestAnimationFrame(gameLoop)
             }
            },intervalTime);    
           }
          }

//END FUNCTION setNumberToInterval


//  FUNCTION TO SET MUSIC IN GAME

 function setMusicInGame(){
     music.pause()
  if(musicOnOff.textContent == "Music off"){
      forestSound.pause()
      }
  else if(musicOnOff.textContent == "Music on"){
     forestSound.play()
     forestSound.volume = 0.2
     }
   }
 
// END FUNCTION setMusicInGame
 
 
 


        
        
//  FUNCTION GAME PAUSE 
 
function pauseGame(){
   if(paused == false){
       paused = true
     } else if(paused == true){
                 paused = false       
    }
 }

// END FUNCTION pauseGame




//  FUNCTION START GAME 


  


function startGame(){
  
  document.addEventListener("click",startExit)
  
  function startExit(event){
      if(event.target === start || event.target === pStart){
       
       endGame = false
         
       if(endGame == false){  
          endGame = true        
          menu.style.display = "none"
          canvas.style.display = "block" 
   document.removeEventListener("click",funcColor)
 
document.addEventListener("click",moveSnake) 
     
    init()  
    randomFood()     
    setMusicInGame()  
    setNumberToInterval()               
    gameLoop()   
    return                   
    }   
         
    else if(endGame == true){        
      menu.style.display = "block"
      canvas.style.display = "none"      
      endGame = false             
     document.addEventListener("click",funcColor) 
     
document.removeEventListener("click",moveSnake)     
     return
         } 
       }
     }  
  }

 // END FUNCTION startGame   
 









  

 //  MAIN FUNCTION
    
   function gameLoop(){
        
      position.x += velocity.x
      position.y += velocity.y  
           
                
//  GAMEBOARD     
    ctx.fillStyle = backgroundColorInGame
ctx.fillRect(0,0,canvas.width,canvas.height)

 
//  SNAKE BODY  
   
    
   for(let cell of snake){  
         ctx.fillStyle = snakeColorInGame    
         ctx.fillRect(cell.x * block,cell.y * block,block,block)      
          
       }   
 
// BLOCK OF SNAKE AFTER HEAD
ctx.fillStyle =  backgroundColorInGame
ctx.fillRect(snake[snake.length-2].x*block,snake[snake.length-2].y*block,block,block)
 ctx.fillStyle = snakeColorInGame 
 ctx.beginPath()    
          ctx.roundRect(snake[snake.length-2].x*block,snake[snake.length-2].y*block,block,block,[tl,tr,br,bl])      
         ctx.fill()  

 
 
 
// SNAKE HEAD
 
 ctx.fillStyle =  backgroundColorInGame
ctx.fillRect(snake[snake.length-1].x*block,snake[snake.length-1].y*block,block,block)

ctx.drawImage(snakeDirection,snake[snake.length-1].x*block,snake[snake.length-1].y*block,block,block)
            
     
//   CHERRY



     ctx.drawImage(cherry,food.x * block,food.y * block,block,block)          
     




//  APPLE

  

    
    ctx.drawImage(appleFruit,food.x * block,food.y * block,block,block)          


    


//  SNAKE IS OVER GAME AREA
  
 function snakeOver(){
     if(snake[snake.length-1].x == -1 || snake[snake.length-1].x == area || snake[snake.length-1].y == -1 || snake[snake.length-1].y == area){
         
         if(scoreNumber > localStorage.getItem("highScoreKey",scoreNumber)){
                 localStorage.setItem("highScoreKey",scoreNumber)
highScore.textContent = localStorage.highScoreKey
         }                
         
         if(musicOnOff.textContent == "Music off"){
             music.pause()
             forestSound.pause() 
         } 
         else if(musicOnOff.textContent == "Music on"){             
             forestSound.pause() 
             music.play()
            } 
     if(soundOnOff.textContent == "Sound FX on"){     
       hitWall.play()
       hitWall.volume = 0.05      
                    
       }
       else if(soundOnOff.textContent == "Sound FX off"){
           hitWall.pause()
      }           
                                             
         scoreNumber = 0
         score.textContent = scoreNumber                                                                                                                                                                    
         menu.style.display = "block"  
         canvas.style.display = "none"                     
         init()
         
document.removeEventListener("click",moveSnake)     
          
 document.addEventListener("click",funcColor)           
    
     endGame = true
           
                 
         }
       }

//END METHOD snakeOver


//  SNAKE EAT FOOD    
   
    function snakeEatFood(){
     if(food.x == position.x && food.y == position.y){
       snake.unshift(snakeTail)       
       randomFood()  
       scoreNumber++       
       score.textContent = scoreNumber  
       if(soundOnOff.textContent == "Sound FX on"){
       appleSound.play()
       appleSound.volume = 0.05
       }
       else if(soundOnOff.textContent == "Sound FX off"){
           appleSound.pause()
           }      
         }
       } 

// END METHOD snakeEatFood




//  SNAKE EAT SNAKE
 function snakeInSnake(){
 
   if(velocity.x || velocity.y){     
      
     for(let cell of snake){
     
       if(cell.x == position.x && cell.y == position.y){           
        
                          
      if(musicOnOff.textContent == "Music off"){
          music.pause()
          forestSound.pause() 
         } 
         else if(musicOnOff.textContent == "Music on"){
          music.play()
          forestSound.pause() 
         }               
         
     if(scoreNumber > localStorage.getItem("highScoreKey",scoreNumber)){
        localStorage.setItem("highScoreKey",scoreNumber)
highScore.textContent = localStorage.highScoreKey    
      }   
         scoreNumber = 0
         score.textContent = scoreNumber                                                                                                                                                                    
         menu.style.display = "block"  
         canvas.style.display = "none"                     
         init()
         
document.removeEventListener("click",moveSnake)     
          
 document.addEventListener("click",funcColor)           
    
     endGame = true
                 
             }                                                                            
           }                                         
          snake.push({...position})
          snake.shift()                    
        }
        return
      }   
        
        
    
       
       
       
       
       
      
   

// END METHOD snakeInSnake     
     
                    

       
        
                            
        
//  FUNCTION TO RIGHT REENDERING TAIL  
       
 function moveTail(){
     if(snake[0].x < snake[1].x){
       ctx.fillStyle =  backgroundColorInGame
ctx.fillRect(snake[0].x*block,snake[0].y*block,block,block)
 ctx.fillStyle = snakeColorInGame 
 ctx.beginPath()    
          ctx.roundRect(snake[0].x*block,snake[0].y*block,block,block,[60,0,0,60])      
         ctx.fill()    
     }
     
    else if(snake[0].x > snake[1].x){
       ctx.fillStyle =  backgroundColorInGame
ctx.fillRect(snake[0].x*block,snake[0].y*block,block,block)
 ctx.fillStyle = snakeColorInGame 
 ctx.beginPath()    
          ctx.roundRect(snake[0].x*block,snake[0].y*block,block,block,[0,60,60,0])      
         ctx.fill()    
     } 
     
     else if(snake[0].y < snake[1].y){
       ctx.fillStyle =  backgroundColorInGame
ctx.fillRect(snake[0].x*block,snake[0].y*block,block,block)
 ctx.fillStyle = snakeColorInGame 
 ctx.beginPath()    
          ctx.roundRect(snake[0].x*block,snake[0].y*block,block,block,[60,60,0,0])      
         ctx.fill()    
     }
     
     else if(snake[0].y > snake[1].y){
       ctx.fillStyle =  backgroundColorInGame
ctx.fillRect(snake[0].x*block,snake[0].y*block,block,block)
 ctx.fillStyle = snakeColorInGame 
 ctx.beginPath()    
          ctx.roundRect(snake[0].x*block,snake[0].y*block,block,block,[0,0,60,60])      
         ctx.fill()    
     }
 }  
   
 //  END METHOD MOVE TAIL  
   
   
   
     moveTail()     
     snakeEatFood()          
     snakeOver()
     snakeInSnake()
   
  }
  

    startGame()              
           
