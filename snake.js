









// FUNCTION TO EXIT GAME

document.getElementById('exit','pExit').addEventListener('click', exitButton);
 
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



 
 
 
//  LOADING BEST SCORE FROM LOCAL STORAGE 
 
 localStorage.setItem("startGame",endGame)
   
localStorage.getItem("highScoreKey",scoreNumber)

highScore.textContent = localStorage.highScoreKey

//  LOADING BEST SCORE FROM LOCAL STORAGE END
 
//  INTRODUCTION
 
 setTimeout("menuTable.style.display = 'flex';",3000);

//  INTRODUCTION END 

 
 
 
       
//  MOVE IN THE MENU     
        
document.addEventListener("click", funcColor)
  
 function funcColor (event){ 
         
    if(speed.style.backgroundImage == "var(--menuLine)"){
   
   
    
   if(event.target == goUp){

   speed.style.backgroundImage = "none"
     
   speed.style.boxShadow = "none"  
                                                   
   vibration.style.backgroundImage = "var(--menuLine)"  
                                 
   vibration.style.boxShadow = "var(--menuBoxShadow)"
   
   
   
   
//    vibration.style.border = "var(--menuBorder)"       
                                                        
 
 
 
 
 
          if(soundOnOff.textContent == "Sound FX on"){
          
       chooseMenu.pause()  
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
 
 speed.style.boxShadow = "none" 
          backGroundPlayground.style.backgroundImage = "var(--menuLine)" 
          
 backGroundPlayground.style.boxShadow =  "var(--menuBoxShadow)"       
          
         
            if(soundOnOff.textContent == "Sound FX on"){
        
        chooseMenu.pause()    
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
         
       chooseMenu.pause()   
       chooseMenu.play()
       chooseMenu.volume = 0.2
        }
        else{
         soundOnOff.textContent = "Sound FX off"
         chooseMenu.pause()
         }           
        backGroundPlayground.style.backgroundImage = "none" 
             speed.style.backgroundImage = "var(--menuLine)"
            
   backGroundPlayground.style.boxShadow = "none"    
                                 
 speed.style.boxShadow = "var(--menuBoxShadow)"
                                
           } 
     
        else if(event.target == goDown){  
          if(soundOnOff.textContent == "Sound FX on"){
          
       chooseMenu.pause()   
       chooseMenu.play()
       chooseMenu.volume = 0.2
        }
        else{
         soundOnOff.textContent = "Sound FX off"
         chooseMenu.pause()
         }          
      backGroundPlayground.style.backgroundImage = "none" 
                   
  backGroundPlayground.style.boxShadow = "none" 
                    
musicMenu.style.backgroundImage = "var(--menuLine)"          
          
musicMenu.style.boxShadow = "var(--menuBoxShadow)"
 
           }
            
       else if(event.target == goRight){
       
        if(soundOnOff.textContent == "Sound FX on"){
       chooseMenu.pause() 
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
             backGroundPlayground.textContent = "Background - white"
             
             backgroundColorInGame = "#ffffff"
                                                          
             break   
          
          case 2:
          
  backGroundPlayground.textContent = "Background - blue"
             
   backgroundColorInGame = "#95e0ff"; 
            
             break  
                                      
          case 3:  
            
            backGroundPlayground.textContent = "Background - khaki"
                          
             backgroundColorInGame = "#BDB76B"   
             break  
             
          case 4:  
            
           backGroundPlayground.textContent = "Background - beige"
                          
             backgroundColorInGame = "#F5F5DC"   
            
             break  
             
          case 5:  
          
        backGroundPlayground.textContent = "Background - black"
                          
             backgroundColorInGame = "#1b1b1b"                 
               
             break  
          
         case 6:
             backGroundPlayground.textContent = "Background - grey"
             
             backgroundColorInGame = "#b0b0b0"
             
             
             
                   
             break       
          
            }                                             
      return backgroundColorInGame
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
        
       countColorBackground--   
        
        if(countColorBackground == 0){
            countColorBackground = 6
        }
       
       
         
        switch(countColorBackground){
      
    case 1:
             backGroundPlayground.textContent = "Background - white"
             
             backgroundColorInGame = "#ffffff"
                                                          
             break   
          
          case 2:
          
  backGroundPlayground.textContent = "Background - blue"
             
   backgroundColorInGame = "#95e0ff"; 
            
             break  
                                      
          case 3:  
            
            backGroundPlayground.textContent = "Background - khaki"
                          
             backgroundColorInGame = "#BDB76B"   
             break  
             
          case 4:  
            
           backGroundPlayground.textContent = "Background - beige"
                          
             backgroundColorInGame = "#F5F5DC"   
            
             break  
             
          case 5:  
          
        backGroundPlayground.textContent = "Background - black"
                          
             backgroundColorInGame = "#1b1b1b"                 
               
             break  
          
         case 6:
             backGroundPlayground.textContent = "Background - grey"
             
             backgroundColorInGame = "#b0b0b0"
             
             
             
                   
             break       
                   
                                   
        }                                             
      return backgroundColorInGame
     }         
   }
            
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            


   else if(musicMenu.style.backgroundImage == "var(--menuLine)"){      
            
    
     if(event.target == goUp){  
       if(soundOnOff.textContent == "Sound FX on"){
       chooseMenu.pause()
       chooseMenu.play()
       chooseMenu.volume = 0.2
        }
        else{
         soundOnOff.textContent = "Sound FX off"
         chooseMenu.pause()
         }
            
 
 
 musicMenu.style.backgroundImage = "none"  
     
   musicMenu.style.boxShadow = "none"           
          
  backGroundPlayground.style.backgroundImage = "var(--menuLine)" 
          
 backGroundPlayground.style.boxShadow = "var(--menuBoxShadow)"
                  
         }     
    
     else if(event.target == goDown){  
      if(soundOnOff.textContent == "Sound FX on"){
       chooseMenu.pause()
       chooseMenu.play()
       chooseMenu.volume = 0.2
        }
        else if(soundOnOff.textContent == "Sound FX off"){
         soundOnOff.textContent = "Sound FX off"
         chooseMenu.pause()
         }
                   
     musicMenu.style.backgroundImage = "none"
        
     soundFx.style.backgroundImage = "var(--menuLine)" 
               
   musicMenu.style.boxShadow = "none" 
                    
 soundFx.style.boxShadow = "var(--menuBoxShadow)"
     
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
         
         document.addEventListener("visibilitychange", () => { 

    if(document.hidden) {

         music.pause()
         } 
        
         else{
            music.play() 
              } 
         });
         
         
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
     if(musicOnOff.textContent == "Music off"){
       musicOnOff.textContent = "Music on"
         music.play()
         music.volume = 0.1
         forestSound.pause()
         
         document.addEventListener("visibilitychange", () => { 

    if(document.hidden) {

         music.pause()
         } 
        
         else{
            music.play() 
              } 
         });
         
         
         
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
       chooseMenu.pause()
       chooseMenu.play()
       chooseMenu.volume = 0.2
        }
        else{
         soundOnOff.textContent = "Sound FX off"
         chooseMenu.pause()
         }  
          
 musicMenu.style.backgroundImage = "var(--menuLine)"
   
 soundFx.style.backgroundImage = "none"  
        
   soundFx.style.boxShadow = "none" 
          
   musicMenu.style.boxShadow =  "var(--menuBoxShadow)"      
         }     
    
    else if(event.target == goRight){
        if(soundOnOff.textContent == "Sound FX on"){
       soundOnOff.textContent = "Sound FX off"
       chooseMenu.pause()    
        }
        else if(soundOnOff.textContent == "Sound FX off"){
         soundOnOff.textContent = "Sound FX on"
         chooseMenu.pause()
         chooseMenu.play()
         chooseMenu.volume = 0.2   
         }
     }
     
     else if(event.target == goLeft){
     if(soundOnOff.textContent == "Sound FX off"){
       soundOnOff.textContent = "Sound FX on"
        chooseMenu.pause()
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
       chooseMenu.pause()
       chooseMenu.play()
       chooseMenu.volume = 0.2
        }
        else{
         soundOnOff.textContent = "Sound FX off"
         chooseMenu.pause()
         }  
                  
    soundFx.style.backgroundImage = "none" 
                     
    vibration.style.backgroundImage = "var(--menuLine)"  
              
   soundFx.style.boxShadow = "none" 
          
          
 vibration.style.boxShadow = "var(--menuBoxShadow)"
     
        }  
      }                   
    
   else if(vibration.style.backgroundImage == "var(--menuLine)"){
       
      if(event.target == goUp){  
      
       navigator.vibrate([500,110,500,110,450,110,200,110,170,40,450,110,200,110,170,40,500])  
          
      
      
       if(soundOnOff.textContent == "Sound FX on"){
       chooseMenu.pause()
       chooseMenu.play()
       chooseMenu.volume = 0.2
        }
        else{
         soundOnOff.textContent = "Sound FX off"
         chooseMenu.pause()
         }  
         
         
          
 soundFx.style.backgroundImage = "var(--menuLine)"
 
 soundFx.style.boxShadow =  "var(--menuBoxShadow)"      
   
 vibration.style.backgroundImage = "none"  
        
 vibration.style.boxShadow = "none" 
           
         }       
       
   else if(event.target == goDown){  
       if(soundOnOff.textContent == "Sound FX on"){       
       chooseMenu.pause() 
       chooseMenu.play()
       chooseMenu.volume = 0.2
        }
        else{
         soundOnOff.textContent = "Sound FX off"
         chooseMenu.pause()
         }  
          
 speed.style.backgroundImage = "var(--menuLine)"
 
 speed.style.boxShadow =  "var(--menuBoxShadow)"      
   
 vibration.style.backgroundImage = "none"  
        
 vibration.style.boxShadow = "none" 
           
         }       
    
   else if(event.target == goLeft){
    
     if(soundOnOff.textContent == "Sound FX on"){
       chooseMenu.pause()
       chooseMenu.play()
       chooseMenu.volume = 0.2       
        }
        
    else if(soundOnOff.textContent == "Sound FX off"){
       chooseMenu.pause()       
        }
     
    if(vibrationOnOff.textContent == "Vibration on"){
      
      vibrationOnOff.textContent ="Vibration off"  
    }
    
    else if(vibrationOnOff.textContent == "Vibration off"){
       
      vibrationOnOff.textContent = "Vibration on"  
     }                 
    }
  
 else if(event.target == goRight){
    
     if(soundFx.textContent == "Sound FX on"){
       chooseMenu.pause()
       chooseMenu.play()
       chooseMenu.volume = 0.2       
        }
        
    else if(soundFx.textContent == "Sound FX off"){
       chooseMenu.pause()       
        }
     
    if(vibrationOnOff.textContent == "Vibration on"){
       
      vibrationOnOff.textContent ="Vibration off"  
    }
    
    else if(vibrationOnOff.textContent == "Vibration off"){
       
      vibrationOnOff.textContent = "Vibration on"  
     }                 
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
      
    
 roundCornerRightUp = []
 roundCornerLeftUp = []
 roundCornerRightDown = []
 roundCornerLeftDown = []
 roundCornerUpRight = []
 roundCornerUpLeft = []
 roundCornerDownRight = []
 roundCornerDownLeft = []
                 
     position = {x: 1650, y: 1200}   
                                                           
    
   
     snakeDirection = snakeHeadRight   
     tl = 0
     tr = 60
     br = 60
     bl = 0                     
     }
     
//END FUNCTION init        
 
 


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
         
     setTimeout("menu.style.display = 'block';gameOver.style.display = 'none';canvas.style.display = 'none';butterFly.style.animation ='none';setTimeout(() => {butterFly.style.animation = 'butterfly 4.5s';}, 10);",2000)

document.removeEventListener("click",moveSnake)                           
      document.addEventListener("click",funcColor) 
       
        endGame = true;                               
        
         }
       }

//END METHOD snakeOver


//  SNAKE EAT FOOD    
   
    function snakeEatFood(){
     if(food.x == position.x && food.y == position.y){
     
     
     
    if(soundOnOff.textContent == "Sound FX on"){
       
       
       
       appleSound.play()
       appleSound.volume = 0.05
       }
       else if(soundOnOff.textContent == "Sound FX off"){
           appleSound.pause()
           }       
       
       
       
     
                        
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
         gameOver.style.display = 'flex'
         canvas.style.display = "block" 
         paused = true;
         
     setTimeout("menu.style.display = 'block';gameOver.style.display = 'none';canvas.style.display = 'none';",2000)    
         
document.removeEventListener("click",moveSnake)                          
      document.addEventListener("click",funcColor)           
                             
     endGame = true
       
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



// END  FUNCTION TO DRAW RANDOM FRUIT IN GAME


//  FUNCTION TO SET MUSIC IN GAME

 function setMusicInGame(){
     music.pause()
  if(musicOnOff.textContent == "Music off"){
      forestSound.pause()
      }
  else if(musicOnOff.textContent == "Music on"){
     forestSound.play()
     forestSound.volume = 0.2
     
     document.addEventListener("visibilitychange", () => { 

    if(document.hidden) {

         forestSound.pause()
         } 
        
         else{
            forestSound.play() 
              } 
         });
     
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
          canvas.style.display = "flex" 
             
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
  
// GAMEBOARD END  
   
// SNAKE BODY 


 for(let i = 0; i < snake.length-1; i++){
    
    

ctx.drawImage(snakeSkin,snake[i].x,snake[i].y,snakeSize,snakeSize) 

 i+= 9
     
 }




// SNAKE BODY END
   
     moveTail()   
     
     roundCorner()
     drawRandomFruit()
     
 


//  DRAW FRUIT

ctx.drawImage(drawFruit,food.x,food.y,snakeSize,snakeSize)  
                                                                              
// DRAW FRUIT END
     
     snakeHead()
     snakeEatFood()          
     snakeOver()
     snakeInSnake()   
     }
  

    startGame()          

  
