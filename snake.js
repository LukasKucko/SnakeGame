








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

document.getElementById('exit','pExit').addEventListener('click', exitButton);

 // FUNCTION TO EXIT GAME
 
function exitButton() {
    forestSound.pause()
    appleSound.pause()
    music.pause()
    chooseMenu.pause()
    hitWall.pause()
    hitSnake.pause()
    window.close();
}

//  EXIT GAME END
//  SOUNDS END


 
 let start = document.querySelector("#start")
 let pStart = document.querySelector("#pStart") 
 let pause = document.querySelector("#pause")
 let score = document.querySelector("#scoreValue")
 let highScore = document.querySelector("#highScoreValue")
 let cherry = document.querySelector("#cherry")
 let apple = document.querySelector("#apple")
 let watterMelon = document.querySelector("#watterMelon")
 let strawberry= document.querySelector("#strawberry") 
 let randomFruit = null
  
 
 
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
 let squareColorBackground = document.querySelector("#squareColorBackground")
                      
let snakeColorLine = document.querySelector("#snakeColorLine")
 let snakeColor = document.querySelector("#snakeColor")
 let squareColorSnake = document.querySelector("#squareColorSnake")
 
 let musicOnOff = document.querySelector("#musicOnOff")
 let soundOnOff = document.querySelector("#soundOnOff")
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
 let block = snakeSize


 
 
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
 let countColorBackground = 0
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
 let timer 
//  VARIABLES END
 
 
//  LOADING BEST SCORE FROM LOCAL STORAGE 
 
 localStorage.setItem("startGame",endGame)
   
localStorage.getItem("highScoreKey",scoreNumber)

highScore.textContent = localStorage.highScoreKey

//  LOADING BEST SCORE FROM LOCAL STORAGE END
 
//  INTRODUCTION
 
 setTimeout("menuTable.style.display = 'block';",3000);

//  INTRODUCTION END 

 
       
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
         
         
        speedNumberValue++ 
        
        if(speedNumberValue == 6){
            speedNumberValue = 1
         }
                  
     if(speedNumberValue == 1){ 
        speedNumber.textContent = "slowly" 
        } 

else if(speedNumberValue == 2){
        speedNumber.textContent = "slow" 
        } 

else if(speedNumberValue == 3) {
        speedNumber.textContent = "normal" 
        } 

else if(speedNumberValue == 4){
        speedNumber.textContent = "fast" 
        } 

else if(speedNumberValue == 5){
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
         
         speedNumberValue--
         
         if(speedNumberValue == 0){
             speedNumberValue = 5
         }
         
     if( speedNumberValue == 5){ 
         speedNumber.textContent = "faster" 
        } 

else if( speedNumberValue == 4){
         speedNumber.textContent = "fast" 
        } 

else if( speedNumberValue == 3){
         speedNumber.textContent = "normal" 
        } 

else if( speedNumberValue == 2){
         speedNumber.textContent = "slow" 
        } 

else if( speedNumberValue == 1){
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
    
     
     velocity = {x: 10 , y: 0}
     
     
     
     snake = [                                                                                        
                                                                                                                                                                  
               {x: 1200,  y: 1200},   
               {x: 1210,  y: 1200},  
               {x: 1220,  y: 1200},  
               {x: 1230,  y: 1200},  
               {x: 1240,  y: 1200},  
               {x: 1250,  y: 1200},  
               {x: 1260,  y: 1200},  
               {x: 1270,  y: 1200},  
               {x: 1280,  y: 1200},  
               {x: 1290,  y: 1200},  
               {x: 1300,  y: 1200},  
               {x: 1310,  y: 1200},  
               {x: 1320,  y: 1200},  
               {x: 1330,  y: 1200},  
               {x: 1340,  y: 1200},  
               {x: 1350,  y: 1200},  
               {x: 1360,  y: 1200},  
               {x: 1370,  y: 1200},  
               {x: 1380,  y: 1200},  
               {x: 1390,  y: 1200},  
               {x: 1400,  y: 1200},  
               {x: 1410,  y: 1200},  
               {x: 1420,  y: 1200},  
               {x: 1430,  y: 1200},  
               {x: 1440,  y: 1200},  
               {x: 1450,  y: 1200},  
               {x: 1460,  y: 1200},   
               {x: 1470,  y: 1200},                  
               {x: 1480,  y: 1200},      
               {x: 1490,  y: 1200},  
               {x: 1500,  y: 1200},  
               {x: 1510,  y: 1200},  
               {x: 1520,  y: 1200},  
               {x: 1530,  y: 1200},  
               {x: 1540,  y: 1200},  
               {x: 1550,  y: 1200},  
               {x: 1560,  y: 1200},  
               {x: 1570,  y: 1200},  
               {x: 1580,  y: 1200},  
               {x: 1590,  y: 1200},  
               {x: 1600,  y: 1200},  
               {x: 1610,  y: 1200},
               {x: 1620,  y: 1200},  
               {x: 1630,  y: 1200}, 
               {x: 1640,  y: 1200}, 
               {x: 1650,  y: 1200}               
               ] 
      
      
      
                 
     position = {x: 1650, y: 1200}   
                                                           
     snake[0] = snake[0]
   
     snakeDirection = snakeHeadRight   
     tl = 0
     tr = 60
     br = 60
     bl = 0                     
     }
     
//END FUNCTION init        
 
 
/* FUNCTION RANDOM FRUIT EVERY SNAKESIZE X AND Y POSITION
*/
 
 function randomXOneHoundredFifthy(){
   xPositionFruit = Math.floor(Math.random() * ((canvas.width-snakeSize)/10)*10)/150
     if(Number.isInteger(xPositionFruit) == true){
     xPositionFruit = xPositionFruit*150
         return xPositionFruit
     }
     else{
         return randomXOneHoundredFifthy()
     }
 }
 
 
 function randomYOneHoundredFifthy(){
   yPositionFruit = Math.floor(Math.random() * ((canvas.height-snakeSize)/10)*10)/150
     if(Number.isInteger(yPositionFruit) == true){
     yPositionFruit = yPositionFruit*150
         return yPositionFruit
     }
     else{
         return randomYOneHoundredFifthy()
     }
 }
 
 /* END FUNCTION RANDOM FRUIT EVERY SNAKESIZE X AND Y POSITION
*/
 
 
 // FUNCTION RANDOM FOOD IN GAME
           
 function randomFood(){
   
     food= {
       x: randomXOneHoundredFifthy(),
       y: randomYOneHoundredFifthy()
       }                                       
                            
       if(food.x == snake[snake.length-1].x && food.y == snake[snake.length-1].y){
         return randomFood()
       }
               
       for(let cell of snake){
          if(cell.x == food.x && cell.y == food.y){
             return randomFood()
            }
         }
     }
 
// END FUNCTION  randomFood   
 
 


 //  MOVE THE SNAKE IN GAME
    
   function moveSnake(){
             
  if(event.target === goUp){
     
     moveHeadInRightTimeUp = true
                                                                                                                                                                                                                                                                                                                                                                                                                                             
     }

  else if(event.target === goRight){
     
    moveHeadInRightTimeRight = true     
     
    } 
    
  else if(event.target === goDown){
                
    moveHeadInRightTimeDown = true    
                 
    } 
    
  else if(event.target === goLeft){
                                                                   
    moveHeadInRightTimeLeft = true  
       
      }                                                                                                                                                                 
    }                           
                
         
         
// END FUNCTION  moveTheSnake  

//  FUNCTION MOVE SNAKE BODY IN RIGHT TIME 
//  UP FUNCTION

 function moveBodyInRightTimeUp(){
   
  if(moveHeadInRightTimeUp == true){
     
    if(snake[snake.length-1].x > snake[snake.length-2].x){
    
    velocity = {x: 10, y: 0} 
    if(Number.isInteger(snake[snake.length-1].x/snakeSize) == true){
        
         velocity = {x: 0, y: -10}
         snakeDirection = snakeHeadUp
        
         
         setTimeout(()=>{ 
                         tl = 60
                         tr = 60
                         br = 0
                         bl = 0
                         },intervalTime)  
 
        return moveHeadInRightTimeUp = false
   
       }
     }
     
     
   else if(snake[snake.length-1].x < snake[snake.length-2].x){
    
    velocity = {x: -10, y: 0} 
    if(Number.isInteger(snake[snake.length-1].x/snakeSize) == true){
        
         velocity = {x: 0, y: -10}
         snakeDirection = snakeHeadUp
        
         
         setTimeout(()=>{ 
                         tl = 60
                         tr = 0
                         br = 0
                         bl = 60
                         },intervalTime)  
 
        return moveHeadInRightTimeUp = false
   
       }
     }
   }
 }
 

// UP FUNCTION END
// RIGHT FUNCTION  

function moveBodyInRightTimeRight(){
   
  if(moveHeadInRightTimeRight == true){
     
    if(snake[snake.length-1].y > snake[snake.length-2].y){
    
    velocity = {x: 0, y: 10} 
    if(Number.isInteger(snake[snake.length-1].y/snakeSize) == true){
        
         velocity = {x: 10, y: 0}
         snakeDirection = snakeHeadRight
                 
         setTimeout(()=>{ 
                         tl = 0
                         tr = 60
                         br = 60
                         bl = 0
                         },intervalTime)  
 
        return moveHeadInRightTimeRight = false
   
       }
     }
     
     
   else if(snake[snake.length-1].y < snake[snake.length-2].y){
    
    velocity = {x: 0, y: -10} 
    if(Number.isInteger(snake[snake.length-1].y/snakeSize) == true){
        
         velocity = {x: 10, y: 0}
         snakeDirection = snakeHeadRight
                 
         setTimeout(()=>{ 
                         tl = 0
                         tr = 60
                         br = 60
                         bl = 0
                         },intervalTime)  
 
       return  moveHeadInRightTimeRight = false
   
       }
     }
   }
 }

// RIGHT FUNCTION END 


// DOWN FUNCTION

function moveBodyInRightTimeDown(){
   
  if(moveHeadInRightTimeDown == true){
     
    if(snake[snake.length-1].x > snake[snake.length-2].x){
    
    velocity = {x: 10, y: 0} 
    if(Number.isInteger(snake[snake.length-1].x/snakeSize) == true){
        
         velocity = {x: 0, y: 10}
         snakeDirection = snakeHeadDown
                 
         setTimeout(()=>{ 
                         tl = 0
                         tr = 0
                         br = 60
                         bl = 60
                         },intervalTime)  
 
        return moveHeadInRightTimeDown = false
   
       }
     }
     
     
   else if(snake[snake.length-1].x < snake[snake.length-2].x){
    
    velocity = {x: -10, y: 0} 
    if(Number.isInteger(snake[snake.length-1].x/snakeSize) == true){
        
         velocity = {x: 0, y: 10}
         snakeDirection = snakeHeadDown
                 
         setTimeout(()=>{ 
                         tl = 0
                         tr = 0
                         br = 60
                         bl = 60
                         },intervalTime)  
 
        return moveHeadInRightTimeDown = false
   
       }
     }
   }
 }

// DOWN FUNCTION END

// LEFT FUNCTION

function moveBodyInRightTimeLeft(){
   
  if(moveHeadInRightTimeLeft == true){
     
    if(snake[snake.length-1].y > snake[snake.length-2].y){
    
    velocity = {x: 0, y: 10} 
    if(Number.isInteger(snake[snake.length-1].y/snakeSize) == true){
        
         velocity = {x: -10, y: 0}
         snakeDirection = snakeHeadLeft
                 
         setTimeout(()=>{ 
                         tl = 60
                         tr = 0
                         br = 0
                         bl = 60
                         },intervalTime)  
 
        return moveHeadInRightTimeLeft = false
   
       }
     }
     
     
   else if(snake[snake.length-1].y < snake[snake.length-2].y){
    
    velocity = {x: 0, y: -10} 
    if(Number.isInteger(snake[snake.length-1].y/snakeSize) == true){
        
         velocity = {x: -10, y: 0}
         snakeDirection = snakeHeadLeft
                 
         setTimeout(()=>{ 
                         tl = 60
                         tr = 0
                         br = 0
                         bl = 60
                         },intervalTime)  
 
        return moveHeadInRightTimeLeft = false
   
       }
     }
   }
 }

//LEFT FUNCTION END

 

//  FUNCTION TO SET SPEED OF SNAKE   
     
function setNumberToInterval(){

if(speedNumberValue == 1){

clearInterval(playGame)

intervalTime = 400

playGame =setInterval(()=>{

if(!paused) {

requestAnimationFrame(gameLoop)

}

},intervalTime); 

}

else if(speedNumberValue == 2){

clearInterval(playGame)

intervalTime = 50

playGame =setInterval(()=>{

if(!paused) {

requestAnimationFrame(gameLoop)

}

},intervalTime); 

}

else if(speedNumberValue == 3){

clearInterval(playGame)

intervalTime = 20

playGame =setInterval(()=>{

if(!paused) {

requestAnimationFrame(gameLoop)

}

},intervalTime); 

}

else if(speedNumberValue == 4){

clearInterval(playGame)

intervalTime = 10

playGame =setInterval(()=>{

if(!paused) {

requestAnimationFrame(gameLoop)

}

},intervalTime); 

}

else if(speedNumberValue == 5){

clearInterval(playGame)

intervalTime = 5

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
                  
          menu.style.display = "none"
          canvas.style.display = "block" 
          
   
document.addEventListener("click",moveSnake)
  document.removeEventListener("click",funcColor)
     
    init()     
    randomFood() 
    paused = false
    setMusicInGame()  
    setNumberToInterval()      
             
    gameLoop()   
    
                      
    }   
         
    else if(endGame == true){        
      menu.style.display = "block"
      canvas.style.display = "none" 
      gameOver.style.display = "none"  
 
document.removeEventListener("click",moveSnake)     
 
 
       document.addEventListener("click",funcColor)       
                    
         } 
       }
     }  
  }
// END FUNCTION startGame   
 






  

 //  MAIN FUNCTION
   function gameLoop(){
   
      moveBodyInRightTimeUp() 
      moveBodyInRightTimeRight()
      moveBodyInRightTimeDown()
      moveBodyInRightTimeLeft()
      
      position.x += velocity.x
      position.y += velocity.y
 
 
      
     
         
                
//  GAMEBOARD     
    
ctx.fillStyle = backgroundColorInGame

ctx.fillRect(0,0,canvas.width,canvas.height)
 
ctx.fill()
  
 
 
 
 
 
 
   
 // SNAKE BODY 

for(let cell of snake){ 

ctx.fillStyle = snakeColorInGame 

ctx.fillRect(cell.x,cell.y,snakeSize,snakeSize) 

} 



// SNAKE HEAD

ctx.fillStyle = backgroundColorInGame

ctx.fillRect(snake[snake.length-1].x,snake[snake.length-1].y,snakeSize,snakeSize)

ctx.drawImage(snakeDirection,snake[snake.length-1].x,snake[snake.length-1].y,snakeSize,snakeSize)


//  FUNCTION TO RIGHT REENDERING TAIL  
       
 function moveTail(){
 
     if(snake[0].x < snake[1].x){
       ctx.fillStyle =  backgroundColorInGame
ctx.fillRect(snake[0].x,snake[0].y,snakeSize,snakeSize)
 ctx.fillStyle = snakeColorInGame 
 ctx.beginPath()    
          ctx.roundRect(snake[0].x,snake[0].y,snakeSize,snakeSize,[60,0,0,60])      
         ctx.fill()    
     }
     
    else if(snake[0].x > snake[1].x){
       ctx.fillStyle =  backgroundColorInGame
ctx.fillRect(snake[0].x,snake[0].y,snakeSize,snakeSize)
 ctx.fillStyle = snakeColorInGame 
 ctx.beginPath()    
          ctx.roundRect(snake[0].x,snake[0].y,snakeSize,snakeSize,[0,60,60,0])      
         ctx.fill()    
     } 
     
     else if(snake[0].y < snake[1].y){
       ctx.fillStyle =  backgroundColorInGame
ctx.fillRect(snake[0].x,snake[0].y,snakeSize,snakeSize)
 ctx.fillStyle = snakeColorInGame 
 ctx.beginPath()    
          ctx.roundRect(snake[0].x,snake[0].y,snakeSize,snakeSize,[60,60,0,0])      
         ctx.fill()    
     }
     
     else if(snake[0].y > snake[1].y){
       ctx.fillStyle =  backgroundColorInGame
ctx.fillRect(snake[0].x,snake[0].y,snakeSize,snakeSize)
 ctx.fillStyle = snakeColorInGame 
 ctx.beginPath()    
          ctx.roundRect(snake[0].x,snake[0].y,snakeSize,snakeSize,[0,0,60,60])      
         ctx.fill()    
     }
     
 }  
   
 //  END METHOD MOVE TAIL  
   

     moveTail()   


 
 


//  FUNCTION TO DRAW RANDOM FRUIT IN GAME


 function drawRandomFruit(){
     
     if(trueDrawFruit == true){   
        randomFruit = Math.random()*10
       }

  if(randomFruit <= 2.5){
    drawFruit = apple
    trueDrawFruit = false
     
      
      
     if(food.x == position.x && food.y == position.y){
      
      trueDrawFruit = true   
       
      }                  
  }

  else if(randomFruit > 2.5 && randomFruit <= 5){
     drawFruit = cherry
     trueDrawFruit = false              
      
     if(food.x == position.x && food.y == position.y){
          trueDrawFruit = true
        
      }
  }
  
  else if(randomFruit > 5 && randomFruit <= 7.5){
     drawFruit = watterMelon
     trueDrawFruit = false              
      
     if(food.x == position.x && food.y == position.y){
          trueDrawFruit = true
        
      }
  }
  
  else if(randomFruit > 7.5 && randomFruit <= 10){
     drawFruit = strawberry
     trueDrawFruit = false              
      
     if(food.x == position.x && food.y == position.y){
          trueDrawFruit = true
        
      }
    }      
 }

drawRandomFruit()

// END  FUNCTION TO DRAW RANDOM FRUIT IN GAME






//  DRAW FRUIT

ctx.drawImage(drawFruit,food.x,food.y,snakeSize,snakeSize)  


//  SNAKE IS OVER GAME AREA
  
  
  
  
 function snakeOver(){
     if(snake[snake.length-1].x > canvas.width-snakeSize || snake[snake.length-1].x < 0|| snake[snake.length-1].y > canvas.height-snakeSize || snake[snake.length-1].y < 0){
         
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
         gameOver.style.display = "flex";
         
      
   anime.timeline({
            loop: false
            }) 
         
         .add({ 
         targets: '.ml15 .word', 
         scale: [14,1], 
         opacity: [0,1], 
         easing: "easeOutCirc", 
         duration: 800, 
         delay: (el, i) => 800 * i })
         .add({ 
         targets: '.ml15', 
         opacity: 0, 
         duration: 1000, 
         easing: "easeOutExpo", 
         delay: 1000 
         });
         
        
         
         canvas.style.display = "block" 
         paused = true
         
     setTimeout("menu.style.display = 'block';gameOver.style.display = 'none';canvas.style.display = 'none';   ",2000)

document.removeEventListener("click",moveSnake)                           
      document.addEventListener("click",funcColor) 
       
        endGame = true;                               
        init();
         }
       }

//END METHOD snakeOver


//  SNAKE EAT FOOD    
   
    function snakeEatFood(){
     if(food.x == position.x && food.y == position.y){
       
//       snake.splice(15,0,snake[1])
                   
       addNewBlockToSnake = true
       randomFood()  
       scoreNumber++;
       

       anime({
       targets: '#scoreValue', 
       scale: [2,1], 
       opacity: [0,1],  
       rotateZ: [-90,0],
       easing: "easeInOutSine", 
       duration: 500, 
       delay: (el, i) => 100*i 
       });

   

      
    
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
       
         
     setTimeout("menu.style.display = 'block';gameOver.style.display = 'none';canvas.style.display = 'none'; ",2000)    
         
document.removeEventListener("click",moveSnake)                          
      document.addEventListener("click",funcColor)           
       
                      
     endGame = true
     init()  
              }                                                                            
            }                                                                                                    
                         
          snake.push({...position})                              


// if snake eat fruit,will be longer


   if(addNewBlockToSnake == true){
          
      setTimeout(()=>{
           
      for(let i = 0; i < 10;i++){
           
          snake.unshift()         
          } 
          addNewBlockToSnake = false
          },intervalTime*10)                      
        } 
       
        else{
          snake.shift()   
        }                                                                                                                                                                                                                                                                    
      }        
    }   
                                                                
// END METHOD snakeInSnake     
                                                                              
     snakeEatFood()          
     snakeOver()
     snakeInSnake()
   
  }
  

    startGame()          

  
