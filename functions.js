






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
     
     roundCornerRightUp.push({x: snake[snake.length-1].x, y: snake[snake.length-1].y}) 
     
     
     
                                              
         velocity = {x: 0, y: -10}
       
         snakeDirection = snakeHeadUp
         
  
         setTimeout(()=>{ 
                         tl = 60
                         tr = 60
                         br = 0
                         bl = 0
                         },intervalTime)  
          
         moveHeadInRightTimeUp = false
         
         return
         
       }
     }
     
     
   else if(snake[snake.length-1].x < snake[snake.length-2].x){
    
    velocity = {x: -10, y: 0} 
    if(Number.isInteger(snake[snake.length-1].x/snakeSize) == true){
        
        
     
    roundCornerLeftUp.push({x: snake[snake.length-1].x, y: snake[snake.length-1].y})  
     
     
        
         velocity = {x: 0, y: -10}
         snakeDirection = snakeHeadUp
         
         
         setTimeout(()=>{ 
                         tl = 60
                         tr = 0
                         br = 0
                         bl = 60
                         },intervalTime)  
 
        moveHeadInRightTimeUp = false
        
        return
        
       }
     }
     
     
     else if(snake[snake.length-1].y < snake[snake.length-2].y || snake[snake.length-1].y > snake[snake.length-2].y){
      
       moveHeadInRightTimeUp = false  
       
       return
       
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
     
    roundCornerDownRight.push({x: snake[snake.length-1].x, y: snake[snake.length-1].y})  
       
     
        
         velocity = {x: 10, y: 0}
         snakeDirection = snakeHeadRight
                 
         setTimeout(()=>{ 
                         tl = 0
                         tr = 60
                         br = 60
                         bl = 0
                         },intervalTime)        
                      
       moveHeadInRightTimeRight = false
   
       return
   
       }
     }
     
     
   else if(snake[snake.length-1].y < snake[snake.length-2].y){
    
    velocity = {x: 0, y: -10} 
    if(Number.isInteger(snake[snake.length-1].y/snakeSize) == true){
        
      roundCornerUpRight.push({x: snake[snake.length-1].x, y: snake[snake.length-1].y})  
       
        
         velocity = {x: 10, y: 0}
         snakeDirection = snakeHeadRight
                 
         setTimeout(()=>{ 
                         tl = 0
                         tr = 60
                         br = 60
                         bl = 0
                         },intervalTime)  
 
        moveHeadInRightTimeRight = false
   
        return
   
       }
     }
     
    else if(snake[snake.length-1].x < snake[snake.length-2].x || snake[snake.length-1].x > snake[snake.length-2].x){
      
      moveHeadInRightTimeRight = false  
       
      return 
       
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
     
     roundCornerRightDown.push({x: snake[snake.length-1].x, y: snake[snake.length-1].y})  
      
       
        
         velocity = {x: 0, y: 10}
         snakeDirection = snakeHeadDown
                 
         setTimeout(()=>{ 
                         tl = 0
                         tr = 0
                         br = 60
                         bl = 60
                         },intervalTime)  
 
        moveHeadInRightTimeDown = false
   
        return
   
       }
     }
     
     
   else if(snake[snake.length-1].x < snake[snake.length-2].x){
    
    velocity = {x: -10, y: 0} 
    if(Number.isInteger(snake[snake.length-1].x/snakeSize) == true){
       
      roundCornerLeftDown.push({x: snake[snake.length-1].x, y: snake[snake.length-1].y})  
     
     
        
         velocity = {x: 0, y: 10}
         snakeDirection = snakeHeadDown
                 
         setTimeout(()=>{ 
                         tl = 0
                         tr = 0
                         br = 60
                         bl = 60
                         },intervalTime)  
 
        moveHeadInRightTimeDown = false
   
        return
   
       }
     }
     
     else if(snake[snake.length-1].y < snake[snake.length-2].y || snake[snake.length-1].y > snake[snake.length-2].y){
      
      moveHeadInRightTimeDown = false  
  
      return
       
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
       
      roundCornerDownLeft.push({x: snake[snake.length-1].x, y: snake[snake.length-1].y})  
     
        
         velocity = {x: -10, y: 0}
         snakeDirection = snakeHeadLeft
                 
         setTimeout(()=>{ 
                         tl = 60
                         tr = 0
                         br = 0
                         bl = 60
                         },intervalTime)  
 
         moveHeadInRightTimeLeft = false
   
         return
   
       }
     }
     
     
   else if(snake[snake.length-1].y < snake[snake.length-2].y){
    
    velocity = {x: 0, y: -10} 
    if(Number.isInteger(snake[snake.length-1].y/snakeSize) == true){
     
    roundCornerUpLeft.push({x: snake[snake.length-1].x, y: snake[snake.length-1].y})  
     
     
        
         velocity = {x: -10, y: 0}
         snakeDirection = snakeHeadLeft
                 
         setTimeout(()=>{ 
                         tl = 60
                         tr = 0
                         br = 0
                         bl = 60
                         },intervalTime)  
 
        moveHeadInRightTimeLeft = false
       
        return
        
       }
     }
     
    else if(snake[snake.length-1].x < snake[snake.length-2].x || snake[snake.length-1].x > snake[snake.length-2].x){
      
       moveHeadInRightTimeLeft = false  
       
       return
       
     } 
     
   }
 }

//LEFT FUNCTION END

 
    
       

   
    


   
 
 
 

//  FUNCTION TO SET SPEED OF SNAKE   
     
function setNumberToInterval(){

if(speedNumberValue == 1){

clearInterval(playGame)

intervalTime = 40

playGame =setInterval(()=>{

if(!paused) {

requestAnimationFrame(gameLoop)

}

},intervalTime); 

}

else if(speedNumberValue == 2){

clearInterval(playGame)

intervalTime = 25

playGame =setInterval(()=>{

if(!paused) {

requestAnimationFrame(gameLoop)

}

},intervalTime); 

}

else if(speedNumberValue == 3){

clearInterval(playGame)

intervalTime = 15

playGame =setInterval(()=>{

if(!paused) {

requestAnimationFrame(gameLoop)

}

},intervalTime); 

}

else if(speedNumberValue == 4){

clearInterval(playGame)

intervalTime = 11

playGame =setInterval(()=>{

if(!paused) {

requestAnimationFrame(gameLoop)

}

},intervalTime); 

}

else if(speedNumberValue == 5){

clearInterval(playGame)

intervalTime = 8

playGame =setInterval(()=>{

if(!paused) {

requestAnimationFrame(gameLoop)

}

},intervalTime); 

}

}

//END FUNCTION setNumberToInterval







// FUNCTION ROUNDCORNER BY CHANGE DIRECTION

function roundCorner(){
   
   for(let cell of snake){
    
    for(let cellPoint of roundCornerRightUp){
    
       
      if(cell.x == cellPoint.x && cell.y == cellPoint.y){
                 
 ctx.beginPath()    
 
 ctx.moveTo(cell.x+snakeSize, cell.y);
    ctx.lineTo(cell.x+snakeSize,cell.y+snakeSize); 
  
 ctx.lineTo(cell.x, cell.y+snakeSize); 
  
 ctx.arcTo(cell.x+snakeSize, cell.y+snakeSize, cell.x+snakeSize, cell.y,150); 
 
 ctx.closePath(); 
 
 ctx.fillStyle = backgroundColorInGame
 
 ctx.fill()
                                               
 }
      
 else if(snake[0].x == roundCornerRightUp[0].x && snake[0].y == roundCornerRightUp[0].y){
       roundCornerRightUp.shift()
       }        
      
     }
    } 
     
      
  
  for(let cell of snake){
    
    for(let cellPoint of roundCornerLeftUp){
    
       
      if(cell.x == cellPoint.x && cell.y == cellPoint.y){
    
 ctx.beginPath()    
 
 ctx.moveTo(cell.x+snakeSize, cell.y+snakeSize);
    ctx.lineTo(cell.x,cell.y+snakeSize); 
  
 ctx.lineTo(cell.x, cell.y); 
  
 ctx.arcTo(cell.x, cell.y+snakeSize, cell.x+snakeSize, cell.y+snakeSize,150); 
 
 ctx.closePath(); 
 
 ctx.fillStyle = backgroundColorInGame
 
 ctx.fill()        
                                       
  }
  
  else if(snake[0].x == roundCornerLeftUp[0].x && snake[0].y == roundCornerLeftUp[0].y){
       roundCornerLeftUp.shift()
       }       
      
      
     } 
   }


 
 
 for(let cell of snake){
    
    for(let cellPoint of roundCornerDownRight){
    
       
      if(cell.x == cellPoint.x && cell.y == cellPoint.y){
         
 ctx.beginPath()    
 
 ctx.moveTo(cell.x+snakeSize, cell.y+snakeSize);
    ctx.lineTo(cell.x,cell.y+snakeSize); 
  
 ctx.lineTo(cell.x, cell.y); 
  
 ctx.arcTo(cell.x, cell.y+snakeSize, cell.x+snakeSize, cell.y+snakeSize,150); 
 
 ctx.closePath(); 
 
 ctx.fillStyle = backgroundColorInGame
 
 ctx.fill()          
                                  
    }
      
    else if(snake[0].x == roundCornerDownRight[0].x && snake[0].y == roundCornerDownRight[0].y){
       roundCornerDownRight.shift()
       }     
      
     } 
   }


 
 
 for(let cell of snake){
    
    for(let cellPoint of roundCornerUpRight){
    
       
      if(cell.x == cellPoint.x && cell.y == cellPoint.y){
  
 ctx.beginPath()    
 
 ctx.moveTo(cell.x, cell.y+snakeSize);
 
 ctx.lineTo(cell.x,cell.y); 
  
 ctx.lineTo(cell.x+snakeSize, cell.y); 
  
 ctx.arcTo(cell.x, cell.y, cell.x, cell.y+snakeSize,150); 
 
 ctx.closePath(); 
 
 ctx.fillStyle = backgroundColorInGame
 
 ctx.fill()        
                             
  }
      
  else if(snake[0].x == roundCornerUpRight[0].x && snake[0].y == roundCornerUpRight[0].y){
       roundCornerUpRight.shift()
       }       
      
     } 
   }

 
 
 
 for(let cell of snake){
    
    for(let cellPoint of roundCornerRightDown){
    
       
      if(cell.x == cellPoint.x && cell.y == cellPoint.y){
 
 ctx.beginPath()    
 
 ctx.moveTo(cell.x, cell.y);
 
 ctx.lineTo(cell.x+snakeSize,cell.y); 
  
 ctx.lineTo(cell.x+snakeSize, cell.y+snakeSize); 
  
 ctx.arcTo(cell.x+snakeSize, cell.y, cell.x, cell.y,150); 
 
 ctx.closePath(); 
 
 ctx.fillStyle = backgroundColorInGame
 
 ctx.fill()                
                             
    }
      
    else if(snake[0].x == roundCornerRightDown[0].x && snake[0].y == roundCornerRightDown[0].y){
       roundCornerRightDown.shift()
       }     
      
      
     } 
   }
 
 
 
 
 for(let cell of snake){
    
    for(let cellPoint of roundCornerLeftDown){
    
       
      if(cell.x == cellPoint.x && cell.y == cellPoint.y){
 
 ctx.beginPath()    
 
 ctx.moveTo(cell.x, cell.y+snakeSize);
 
 ctx.lineTo(cell.x,cell.y); 
  
 ctx.lineTo(cell.x+snakeSize, cell.y); 
  
 ctx.arcTo(cell.x, cell.y, cell.x, cell.y+snakeSize,150); 
 
 ctx.closePath(); 
 
 ctx.fillStyle = backgroundColorInGame
 
 ctx.fill()                        
                              
   }
      
   else if(snake[0].x == roundCornerLeftDown[0].x && snake[0].y == roundCornerLeftDown[0].y){
       roundCornerLeftDown.shift()
       }      
      
     } 
   }
 
 
 
 for(let cell of snake){
    
    for(let cellPoint of roundCornerDownLeft){
    
       
      if(cell.x == cellPoint.x && cell.y == cellPoint.y){
         
 ctx.beginPath()    
 
 ctx.moveTo(cell.x+snakeSize, cell.y);
 
 ctx.lineTo(cell.x+snakeSize,cell.y+snakeSize); 
  
 ctx.lineTo(cell.x, cell.y+snakeSize); 
  
 ctx.arcTo(cell.x+snakeSize, cell.y+snakeSize, cell.x+snakeSize, cell.y,150); 
 
 ctx.closePath(); 
 
 ctx.fillStyle = backgroundColorInGame
 
 ctx.fill()                      
             
   }
      
   else if(snake[0].x == roundCornerDownLeft[0].x && snake[0].y == roundCornerDownLeft[0].y){
       roundCornerDownLeft.shift()
       }      
      
     } 
   }
 
 
 
 
 for(let cell of snake){
    
    for(let cellPoint of roundCornerUpLeft){
    
       
      if(cell.x == cellPoint.x && cell.y == cellPoint.y){
  
 ctx.beginPath()    
 
 ctx.moveTo(cell.x, cell.y);
 
 ctx.lineTo(cell.x+snakeSize,cell.y); 
  
 ctx.lineTo(cell.x+snakeSize, cell.y+snakeSize); 
  
 ctx.arcTo(cell.x+snakeSize, cell.y, cell.x, cell.y,150); 
 
 ctx.closePath(); 
 
 ctx.fillStyle = backgroundColorInGame
 
 ctx.fill()                
                                                                                    
   }
       
   else if(snake[0].x == roundCornerUpLeft[0].x && snake[0].y == roundCornerUpLeft[0].y){
       roundCornerUpLeft.shift()
       }   
       
       
       
     } 
   }          
 }

/* FUNCTION ROUNDCORNER BY CHANGE DIRECTION END
*/



     
      
       
      
    
  









//  FUNCTION TO RIGHT REENDERING TAIL  
       
 function moveTail(){
 
     if(snake[0].x < snake[1].x){
   
  
    ctx.save() 
         
    ctx.fillStyle =  backgroundColorInGame
ctx.fillRect(snake[0].x,snake[0].y,snakeSize,snakeSize) 

    ctx.beginPath()
    
    ctx.arc(snake[0].x + (snakeSize/2),snake[0].y + (snakeSize/2),snakeSize/2,0.5*Math.PI ,1.5*Math.PI,false) 
    
    ctx.clip() 
       ctx.drawImage(snakeSkin,snake[0].x,snake[0].y,snakeSize,snakeSize) 
              
     ctx.restore()        
       
     ctx.drawImage(snakeSkin,snake[0].x +(snakeSize/2),snake[0].y,snakeSize/2,snakeSize) 
     
  
                   
     }
     
    else if(snake[0].x > snake[1].x){
    ctx.save() 
         
    ctx.fillStyle =  backgroundColorInGame
ctx.fillRect(snake[0].x,snake[0].y,snakeSize,snakeSize) 

    ctx.beginPath()
    
    ctx.arc(snake[0].x + (snakeSize/2),snake[0].y + (snakeSize/2),snakeSize/2,1.5*Math.PI ,0.5*Math.PI,false) 
    
    ctx.clip() 
       ctx.drawImage(snakeSkin,snake[0].x,snake[0].y,snakeSize,snakeSize) 
              
     ctx.restore() 
         
     ctx.drawImage(snakeSkin,snake[0].x,snake[0].y,snakeSize/2,snakeSize)   
     } 
     
     else if(snake[0].y < snake[1].y){
       
       ctx.save() 
         
    ctx.fillStyle =  backgroundColorInGame
ctx.fillRect(snake[0].x,snake[0].y,snakeSize,snakeSize) 

    ctx.beginPath()
    
    ctx.arc(snake[0].x + (snakeSize/2),snake[0].y + (snakeSize/2),snakeSize/2,1*Math.PI ,2*Math.PI,false) 
    
    ctx.clip() 
       ctx.drawImage(snakeSkin,snake[0].x,snake[0].y,snakeSize,snakeSize) 
              
     ctx.restore() 
         
     ctx.drawImage(snakeSkin,snake[0].x,snake[0].y + (snakeSize/2),snakeSize,snakeSize/2)   
              
     }
     
     else if(snake[0].y > snake[1].y){
      
      ctx.save() 
         
    ctx.fillStyle =  backgroundColorInGame
ctx.fillRect(snake[0].x,snake[0].y,snakeSize,snakeSize) 

    ctx.beginPath()
    
    ctx.arc(snake[0].x + (snakeSize/2),snake[0].y + (snakeSize/2),snakeSize/2,2*Math.PI ,1*Math.PI,false) 
    
    ctx.clip() 
       ctx.drawImage(snakeSkin,snake[0].x,snake[0].y,snakeSize,snakeSize) 
              
     ctx.restore() 
         
     ctx.drawImage(snakeSkin,snake[0].x,snake[0].y,snakeSize,snakeSize/2) 
    
     }
     
 }  
   
 //  END METHOD MOVE TAIL


 // SNAKE HEAD

  function snakeHead(){

 if(snake[snake.length-1].x > snake[snake.length-2].x){

ctx.fillRect(snake[snake.length-1].x,snake[snake.length-1].y,snakeSize,snakeSize)

ctx.fillStyle = backgroundColorInGame

ctx.drawImage(snakeDirection,snake[snake.length-1].x-(snakeSize*0.1),snake[snake.length-1].y-((snakeSize*0.5)/2),snakeSize*1.5,snakeSize*1.5)
 
 }
 
 else if(snake[snake.length-1].x < snake[snake.length-2].x){

ctx.fillRect(snake[snake.length-1].x,snake[snake.length-1].y,snakeSize,snakeSize)

ctx.fillStyle = backgroundColorInGame

ctx.drawImage(snakeDirection,snake[snake.length-1].x-(snakeSize*0.1),snake[snake.length-1].y-((snakeSize*0.5)/2),snakeSize*1.5,snakeSize*1.5)

 }
 
 else if(snake[snake.length-1].y > snake[snake.length-2].y){

ctx.fillRect(snake[snake.length-1].x,snake[snake.length-1].y,snakeSize,snakeSize)

ctx.fillStyle = backgroundColorInGame

ctx.drawImage(snakeDirection,snake[snake.length-1].x-((snakeSize*0.5)/2),snake[snake.length-1].y-(snakeSize*0.1),snakeSize*1.5,snakeSize*1.5)

 
 }

 else if(snake[snake.length-1].y < snake[snake.length-2].y){

ctx.fillRect(snake[snake.length-1].x,snake[snake.length-1].y,snakeSize,snakeSize)

ctx.fillStyle = backgroundColorInGame

ctx.drawImage(snakeDirection,snake[snake.length-1].x-((snakeSize*0.5)/2),snake[snake.length-1].y,snakeSize*1.5,snakeSize*1.5)


 
 }

}
// END SNAKE HEAD



