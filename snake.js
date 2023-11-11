// QUERY SELECTORS + VARIABLES


//  SOUNDS

 let forestSound = document.querySelector("#soundForest")
let appleSound = document.querySelector("#soundApple") 
let music = document.querySelector("#music") 
let chooseMenu = document.querySelector("#chooseMenu") 
let hitWall = document.querySelector("#hitWall") 
let hitSnake = document.querySelector("#hitSnake") 

forestSound.pause()
appleSound.pause()
music.pause()
chooseMenu.pause()
hitWall.pause()
hitSnake.pause()




 
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
 let squareColorBackground = document.querySelector("#squareColorBackground")
                      
let snakeColorLine = document.querySelector("#snakeColorLine")
 let snakeColor = document.querySelector("#snakeColor")
 let squareColorSnake = document.querySelector("#squareColorSnake")
 
 let musicOnOff = document.querySelector("#musicOnOff")
 let soundOnOff = document.querySelector("#soundOnOff")
 let exit = document.querySelector("#exit")
 let preload = document.querySelector("#preload")
 
 window.addEventListener("load",function(){
     preload.style.display = "none"
 })
 
 
 
 // FUNCTION TO EXIT GAME
 
function exitButton() {
    
    window.close();
}

document.getElementById('exit').addEventListener('click', exitButton);

//  EXIT GAME END
 

 
 
 
 canvas.height = canvas.width
 
 let block = 200
 let area = canvas.width / block
 let position, velocity, food, snake
 let snakeTail, snakeDirection, playGame
 let snakeBodyDirectionRadius
 let countColor = 0
 let countColorBackground = 0
 let snakeColorInGame = "#000"
 let backgroundColorInGame = "#FFFFFF"
 let paused = false
 let scoreNumber = 0
 let tl, tr, br, bl
 let topLeftRadius,topRightRadius
 let bottomRightRadius,bottomLeftRadius
 let intervalTime
 
 let endGame 
 
 localStorage.setItem("startGame",endGame)
   
localStorage.getItem("highScoreKey",scoreNumber)

highScore.textContent = localStorage.highScoreKey

 
 //  INTRODUCTION
 
 setTimeout("menuTable.style.display = 'block';",3000);
 

 
       
//  MOVE IN THE MENU    
        
document.addEventListener("click", funcColor)
  
 function funcColor (event){ 
         
    if(speed.style.backgroundImage == "var(--menuLine)"){
       if(event.target == goUp){
           speed.style.backgroundImage = "none"
           soundFx.style.backgroundImage = "var(--menuLine)"  
           soundFx.animate([
	{
		offset: 0,
		letterSpacing: "-.5em",
		filter: "blur(12px)",
		opacity: 0
	},
	{
		offset: 1,
		filter: "blur(0)",
		opacity: 1
	}
],{				 
	duration: 300,
	easing: 'linear',
	delay: 0,
	iterations: 1,
	direction: 'normal',
	fill: 'none'
})
          if(soundOnOff.textContent == "Sound FX on"){
       chooseMenu.play()
       chooseMenu.volume = 0.2
        }
        else{
         soundOnOff.textContent = "Sound FX off"
         chooseMenu.pause()
         } 
           }
       else if(event.target == goDown){
           speed.style.backgroundImage = "none"
          backGroundPlayground.style.backgroundImage = "var(--menuLine)"  
          backGroundPlayground.animate([
	{
		offset: 0,
		letterSpacing: "-.5em",
		filter: "blur(12px)",
		opacity: 0
	},
	{
		offset: 1,
		filter: "blur(0)",
		opacity: 1
	}
],{				 
	duration: 300,
	easing: 'linear',
	delay: 0,
	iterations: 1,
	direction: 'normal',
	fill: 'none'
})
            if(soundOnOff.textContent == "Sound FX on"){
        chooseMenu.play()
        chooseMenu.volume = 0.2
        }
        else{
        soundOnOff.textContent = "Sound FX off"
        chooseMenu.pause()
        } 
       }            
       else if(event.target == goRight){     
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
       else if(event.target == goLeft){       
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

 
else if (backGroundPlayground.style.backgroundImage == "var(--menuLine)"){
 
        if(event.target == goUp){  
         if(soundOnOff.textContent == "Sound FX on"){
       chooseMenu.play()
       chooseMenu.volume = 0.2
        }
        else{
         soundOnOff.textContent = "Sound FX off"
         chooseMenu.pause()
         }           
        backGroundPlayground.style.backgroundImage = "none" 
             speed.style.backgroundImage = "var(--menuLine)"
             speed.animate([
	{
		offset: 0,
		letterSpacing: "-.5em",
		filter: "blur(12px)",
		opacity: 0
	},
	{
		offset: 1,
		filter: "blur(0)",
		opacity: 1
	}
],{				 
	duration: 300,
	easing: 'linear',
	delay: 0,
	iterations: 1,
	direction: 'normal',
	fill: 'none'
});            
           } 
     
        else if(event.target == goDown){  
          if(soundOnOff.textContent == "Sound FX on"){
       chooseMenu.play()
       chooseMenu.volume = 0.2
        }
        else{
         soundOnOff.textContent = "Sound FX off"
         chooseMenu.pause()
         }          
      backGroundPlayground.style.backgroundImage = "none" 
             snakeColorLine.style.backgroundImage = "var(--menuLine)" 
             snakeColorLine.animate([
	{
		offset: 0,
		letterSpacing: "-.5em",
		filter: "blur(12px)",
		opacity: 0
	},
	{
		offset: 1,
		filter: "blur(0)",
		opacity: 1
	}
],{				 
	duration: 300,
	easing: 'linear',
	delay: 0,
	iterations: 1,
	direction: 'normal',
	fill: 'none'
});           
           }
            
       else if(event.target == goRight){
       
        if(soundOnOff.textContent == "Sound FX on"){
       chooseMenu.play()
       chooseMenu.volume = 0.2
        }
        else if(soundOnOff.textContent == "Sound FX off"){
        
         chooseMenu.pause()
         } 
        countColorBackground++ 
        if(countColorBackground == 9){
            countColorBackground = 1
        }
        switch(countColorBackground){
          
         case 1:
             backColorMenu.textContent = "Background - azure"
             squareColorBackground.style.backgroundColor = "#F0FFFF"                        
             backgroundColorInGame = "#F0FFFF" 
                   
             break   
          
          case 2:
             backColorMenu.textContent = "Background - beige"
             squareColorBackground.style.backgroundColor = "#F5F5DC"                        
             backgroundColorInGame =  "#F5F5DC"    
             break  
                                      
          case 3:  
            backColorMenu.textContent = "Background - grey"  
             squareColorBackground.style.backgroundColor = "#A9A9A9"                        
             backgroundColorInGame = "#A9A9A9"   
             break  
             
          case 4:  
            backColorMenu.textContent = "Background - lavender"  
            
             squareColorBackground.style.backgroundColor = "#E6E6FA"                        
             backgroundColorInGame = "#E6E6FA"   
             break  
             
          case 5:  
             backColorMenu.textContent = "Background - brown"  
             squareColorBackground.style.backgroundColor = "#C4A484"                        
             backgroundColorInGame = "#C4A484"   
             break  
             
          case 6:  
             backColorMenu.textContent = "Background - peach"  
             squareColorBackground.style.backgroundColor = "#FFE5B4"                        
             backgroundColorInGame = "#FFE5B4"   
             break  
          
           case 7:  
             backColorMenu.textContent = "Background - pearl"  
             squareColorBackground.style.backgroundColor = "#E2DFD2"                        
             backgroundColorInGame = "#E2DFD2"   
             break  
             
            case 8:  
             backColorMenu.textContent = "Background - white"  
             squareColorBackground.style.backgroundColor = "#FFFFFF"                        
             backgroundColorInGame = "#FFFFFF"   
             break  
            }                                             
      return backgroundColorInGame
     }
       
       else if(event.target == goLeft){
       
        if(soundOnOff.textContent == "Sound FX on"){
       chooseMenu.play()
       chooseMenu.volume = 0.2
        }
        else{
         soundOnOff.textContent = "Sound FX off"
         chooseMenu.pause()
         } 
        
        
        
        if(countColorBackground == 0){
            countColorBackground = 8
        }
       
       countColorBackground--  
         
        switch(countColorBackground){
             case 1:
             backColorMenu.textContent = "Background - azure"
             squareColorBackground.style.backgroundColor = "#F0FFFF"                        
             backgroundColorInGame = "#F0FFFF" 
                   
             break   
          
          case 2:
             backColorMenu.textContent = "Background - beige"
             squareColorBackground.style.backgroundColor = "#F5F5DC"                        
             backgroundColorInGame =  "#F5F5DC"    
             break  
                                      
          case 3:  
            backColorMenu.textContent = "Background - grey"  
             squareColorBackground.style.backgroundColor = "#A9A9A9"                        
             backgroundColorInGame = "#A9A9A9" 
               
             break  
             
          case 4:  
            backColorMenu.textContent = "Background - lavender"  
            
             squareColorBackground.style.backgroundColor = "#E6E6FA"                        
             backgroundColorInGame = "#E6E6FA"  
              
             break  
             
          case 5:  
             backColorMenu.textContent = "Background - brown"  
             squareColorBackground.style.backgroundColor = "#C4A484"                        
             backgroundColorInGame = "#C4A484"
                
             break  
             
          case 6:  
             backColorMenu.textContent = "Background - peach"  
             squareColorBackground.style.backgroundColor = "#FFE5B4"                        
             backgroundColorInGame = "#FFE5B4"   
            
             break  
          
           case 7:  
             backColorMenu.textContent = "Background - pearl"  
             squareColorBackground.style.backgroundColor = "#E2DFD2"                        
             backgroundColorInGame = "#E2DFD2"   
             
             break  
             
            case 8:  
             backColorMenu.textContent = "Background - white"  
             squareColorBackground.style.backgroundColor = "#FFFFFF"                        
             backgroundColorInGame = "#FFFFFF"   
            
             break                                         
        }                                             
      return backgroundColorInGame
     }         
   }
            
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            else if(snakeColorLine.style.backgroundImage == "var(--menuLine)"){      
    
     if(event.target == goUp){     
 snakeColorLine.style.backgroundImage = "none"                       
 backGroundPlayground.style.backgroundImage = "var(--menuLine)"   
 backGroundPlayground.animate([
	{
		offset: 0,
		letterSpacing: "-.5em",
		filter: "blur(12px)",
		opacity: 0
	},
	{
		offset: 1,
		filter: "blur(0)",
		opacity: 1
	}
],{				 
	duration: 300,
	easing: 'linear',
	delay: 0,
	iterations: 1,
	direction: 'normal',
	fill: 'none'
});
    if(soundOnOff.textContent == "Sound FX on"){
       chooseMenu.play()
       chooseMenu.volume = 0.2
        }
        else{
         soundOnOff.textContent = "Sound FX off"
         chooseMenu.pause()
         }         
        }     
    
     else if(event.target == goDown){           
     snakeColorLine.style.backgroundImage = "none" 
     musicMenu.style.backgroundImage = "var(--menuLine)"
     musicMenu.animate([
	{
		offset: 0,
		letterSpacing: "-.5em",
		filter: "blur(12px)",
		opacity: 0
	},
	{
		offset: 1,
		filter: "blur(0)",
		opacity: 1
	}
],{				 
	duration: 300,
	easing: 'linear',
	delay: 0,
	iterations: 1,
	direction: 'normal',
	fill: 'none'
});
        if(soundOnOff.textContent == "Sound FX on"){
       chooseMenu.play()
       chooseMenu.volume = 0.2
        }
        else{
         soundOnOff.textContent = "Sound FX off"
         chooseMenu.pause()
         }            
        }
                                        
     else if(event.target == goLeft){
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
             squareColorSnake.style.backgroundColor = "#000000"                                                   
             snakeColorInGame = "#000"  
             break  
             
             case 1:  
             squareColorSnake.style.backgroundColor = "#474747"                                                   
             snakeColorInGame = "#474747"  
             break  
             
             case 2:  
             squareColorSnake.style.backgroundColor = "#6523d1"                                                   
             snakeColorInGame = "#6523d1"  
             break  
             
             case 3:  
             squareColorSnake.style.backgroundColor = "#3473d1"                                                   
             snakeColorInGame = "#3473d1"  
             break  
             
             case 4:  
             squareColorSnake.style.backgroundColor = "#00d1af"                                                   
             snakeColorInGame = "#00d1af"  
             break  
             
             case 5:  
             squareColorSnake.style.backgroundColor = "#439826"                                                   
             snakeColorInGame = "#439826"  
             break  
             
             case 6:  
             squareColorSnake.style.backgroundColor = "#a8b40f"                                                   
             snakeColorInGame = "#a8b40f"  
             break  
             
             case 7:  
             squareColorSnake.style.backgroundColor = "#b48d1e"                                                   
             snakeColorInGame = "#b48d1e"  
             break  
             
             case 8:  
             squareColorSnake.style.backgroundColor = "#b4341e"                                                   
             snakeColorInGame = "#b4341e"  
             break  
             
             case 9:  
             squareColorSnake.style.backgroundColor = "#b43c8d"                                                   
             snakeColorInGame = "#b43c8d"  
             break  
             
             case 10:  
             squareColorSnake.style.backgroundColor = "#ad78b4"                                                   
             snakeColorInGame = "#ad78b4"  
             break                                                                                
        }                                             
      return snakeColor
     }
                                                                                                    
    else if(event.target == goRight){
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
             squareColorSnake.style.backgroundColor = "#000000"                                                   
             snakeColorInGame = "#000000"  
             break  
             
             case 1:  
             squareColorSnake.style.backgroundColor = "#474747"                                                   
             snakeColorInGame = "#474747"  
             break  
             
             case 2:  
             squareColorSnake.style.backgroundColor = "#6523d1"                                                   
             snakeColorInGame = "#6523d1"  
             break  
             
             case 3:  
             squareColorSnake.style.backgroundColor = "#3473d1"                                                   
             snakeColorInGame = "#3473d1"  
             break  
             
             case 4:  
             squareColorSnake.style.backgroundColor = "#00d1af"                                                   
             snakeColorInGame = "#00d1af"  
             break  
             
             case 5:  
             squareColorSnake.style.backgroundColor = "#439826"                                                   
             snakeColorInGame = "#439826"  
             break  
             
             case 6:  
             squareColorSnake.style.backgroundColor = "#a8b40f"                                                   
             snakeColorInGame = "#a8b40f"  
             break  
             
             case 7:  
             squareColorSnake.style.backgroundColor = "#b48d1e"                                                   
             snakeColorInGame = "#b48d1e"  
             break  
             
             case 8:  
             squareColorSnake.style.backgroundColor = "#b4341e"                                                   
             snakeColorInGame = "#b4341e"  
             break  
             
             case 9:  
             squareColorSnake.style.backgroundColor = "#b43c8d"                                                   
             snakeColorInGame = "#b43c8d"  
             break  
             
             case 10:  
             squareColorSnake.style.backgroundColor = "#ad78b4"                                                   
             snakeColorInGame = "#ad78b4"  
             break                                                                                
        }                                             
      return snakeColor
     }
  }






   else if(musicMenu.style.backgroundImage == "var(--menuLine)"){      
    
     if(event.target == goUp){  
       if(soundOnOff.textContent == "Sound FX on"){
       chooseMenu.play()
       chooseMenu.volume = 0.2
        }
        else{
         soundOnOff.textContent = "Sound FX off"
         chooseMenu.pause()
         }   
 snakeColorLine.style.backgroundImage = "var(--menuLine)" 
 snakeColorLine.animate([
	{
		offset: 0,
		letterSpacing: "-.5em",
		filter: "blur(12px)",
		opacity: 0
	},
	{
		offset: 1,
		filter: "blur(0)",
		opacity: 1
	}
],{				 
	duration: 300,
	easing: 'linear',
	delay: 0,
	iterations: 1,
	direction: 'normal',
	fill: 'none'
});                      
 musicMenu.style.backgroundImage = "none"             
         }     
    
     else if(event.target == goDown){  
      if(soundOnOff.textContent == "Sound FX on"){
       chooseMenu.play()
       chooseMenu.volume = 0.2
        }
        else if(soundOnOff.textContent == "Sound FX off"){
         soundOnOff.textContent = "Sound FX off"
         chooseMenu.pause()
         }          
     musicMenu.style.backgroundImage = "none" 
     soundFx.style.backgroundImage = "var(--menuLine)" 
     soundFx.animate([
	{
		offset: 0,
		letterSpacing: "-.5em",
		filter: "blur(12px)",
		opacity: 0
	},
	{
		offset: 1,
		filter: "blur(0)",
		opacity: 1
	}
],{				 
	duration: 300,
	easing: 'linear',
	delay: 0,
	iterations: 1,
	direction: 'normal',
	fill: 'none'
});            
        }  
     
     else if(event.target == goRight){
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
         musicOnOff.textContent = "Music on"
         music.play()
         music.volume = 0.1
         soundForest.pause()
         }
         
       
     }
     
     else if(event.target == goLeft){
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
         musicOnOff.textContent = "Music off"
         music.pause() 
         forestSound.pause()        
     }
   }
 } 
  
  else if(soundFx.style.backgroundImage == "var(--menuLine)"){      
    
     if(event.target == goUp){  
       if(soundOnOff.textContent == "Sound FX on"){
       chooseMenu.play()
       chooseMenu.volume = 0.2
        }
        else{
         soundOnOff.textContent = "Sound FX off"
         chooseMenu.pause()
         }   
 musicMenu.style.backgroundImage = "var(--menuLine)"
 musicMenu.animate([
	{
		offset: 0,
		letterSpacing: "-.5em",
		filter: "blur(12px)",
		opacity: 0
	},
	{
		offset: 1,
		filter: "blur(0)",
		opacity: 1
	}
],{				 
	duration: 300,
	easing: 'linear',
	delay: 0,
	iterations: 1,
	direction: 'normal',
	fill: 'none'
});                       
 soundFx.style.backgroundImage = "none"             
         }     
    
    else if(event.target == goRight){
        if(soundOnOff.textContent == "Sound FX on"){
       soundOnOff.textContent = "Sound FX off"
       chooseMenu.pause()    
        }
        else if(soundOnOff.textContent == "Sound FX off"){
         soundOnOff.textContent = "Sound FX on"
         chooseMenu.play()
         chooseMenu.volume = 0.2   
         }
     }
     
     else if(event.target == goLeft){
     if(soundOnOff.textContent == "Sound FX off"){
       soundOnOff.textContent = "Sound FX on"
        chooseMenu.play()
        chooseMenu.volume = 0.2         
     }
     else if(soundOnOff.textContent == "Sound FX on"){
         soundOnOff.textContent = "Sound FX off"
         chooseMenu.pause()
                   
     }
   }
        
     else if(event.target == goDown){ 
      if(soundOnOff.textContent == "Sound FX on"){
       chooseMenu.play()
       chooseMenu.volume = 0.2
        }
        else{
         soundOnOff.textContent = "Sound FX off"
         chooseMenu.pause()
         }           
     soundFx.style.backgroundImage = "none" 
     speed.style.backgroundImage = "var(--menuLine)"     
     speed.animate([
	{
		offset: 0,
		letterSpacing: "-.5em",
		filter: "blur(12px)",
		opacity: 0
	},
	{
		offset: 1,
		filter: "blur(0)",
		opacity: 1
	}
],{				 
	duration: 300,
	easing: 'linear',
	delay: 0,
	iterations: 1,
	direction: 'normal',
	fill: 'none'
});        
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
               
     snakeBodyDirectionRadius  = {
         x: null,
         y: null
     }       
               
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
       
       if(food.x-1 == snake[snake.length-1].x-1 && food.y == snake[snake.length-1].y || food.x == snake[snake.length-1].x && food.y == snake[snake.length-1].y || food.x+1 == snake[snake.length-1].x+1 && food.y == snake[snake.length-1].y || food.x == snake[snake.length-1].x && food.y-1 == snake[snake.length-1].y-1 || food.x == snake[snake.length-1].x && food.y+1 == snake[snake.length-1].y+1){
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
                         
          if(event.target === goUp){
     
     
  /*  
     
        snakeBodyDirectionRadius.x = snake[snake.length-1].x 
        snakeBodyDirectionRadius.y = snake[snake.length-1].y 
        for(let cell in snake){
            if(cell.x == snakeBodyDirectionRadius.x && cell.y == snakeBodyDirectionRadius.y && snake[snake.length-1].x > snake[snake.length-2].x ){
           topLeftRadius = 0
           topRightRadius = 0
           bottomRightRadius = 60
           bottomLeftRadius = 0     
        
            }
        }
        
        
        
   */     
        
        
        
          velocity = {x: 0, y: -1}
          snakeDirection = snakeHeadUp           
          setTimeout(()=>{ 
          
           tl = 60
           tr = 60
           br = 0
           bl = 0
            
           },intervalTime*2)        
         }
         
         else if(event.target === goRight){
          velocity = {x: 1, y: 0}
          snakeDirection = snakeHeadRight           
           setTimeout(()=>{ 
           tl = 0
           tr = 60
           br = 60
           bl = 0 
           },intervalTime*2)         
         } 
         
         else if(event.target === goDown){
          velocity = {x: 0, y: 1}
          snakeDirection = snakeHeadDown           
          setTimeout(()=>{ 
           tl = 0
           tr = 0
           br = 60
           bl = 60 
           },intervalTime*2)          
         } 
         
         else if(event.target === goLeft){
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
 
ctx.fill()
  
 
 
 
 
 
//  SNAKE BODY  
   
    
   for(let cell of snake){  
         ctx.fillStyle = snakeColorInGame    
         ctx.fillRect(cell.x * block,cell.y * block,block,block)      
        
       }   
 
// BLOCK OF SNAKE AFTER HEAD
ctx.fillStyle = backgroundColorInGame
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
         gameOver.style.display = "flex"
         canvas.style.display = "block" 
         paused = true  
     setTimeout("menu.style.display = 'block';gameOver.style.display = 'none';canvas.style.display = 'none';paused = false ",2000)                     
       
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
       appleSound.pause()
       appleSound.currentTime = 0;
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
      
      if(soundOnOff.textContent == "Sound FX on"){     
       hitSnake.play()
       hitSnake.volume = 0.05      
                    
       }
       else if(soundOnOff.textContent == "Sound FX off"){
           hitSnake.pause()
      }           
       
     if(scoreNumber > localStorage.getItem("highScoreKey",scoreNumber)){
        localStorage.setItem("highScoreKey",scoreNumber)
highScore.textContent = localStorage.highScoreKey    
      }   
         
         scoreNumber = 0
         score.textContent = scoreNumber                                                                                                                                                                    
         gameOver.style.display = "flex"
         canvas.style.display = "block" 
         paused = true  
     setTimeout("menu.style.display = 'block';gameOver.style.display = 'none';canvas.style.display = 'none';paused = false ",2000)    
         
                           
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
