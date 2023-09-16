// QUERY SELECTORS + VARIABLES


  
 let start = document.querySelector("#start")
 let pause = document.querySelector("#pause")
 let score = document.querySelector("#scoreValue")
 let highScore = document.querySelector("#highScoreValue")
 let cherry = document.querySelector("#cherry")
 let snakeHeadRight = document.querySelector("#snakeHeadRight")
 let snakeHeadUp = document.querySelector("#snakeHeadUp")
 let snakeHeadLeft = document.querySelector("#snakeHeadLeft")
 let snakeHeadDown = document.querySelector("#snakeHeadDown")
 let goUp = document.querySelector("#control-up")
 let goRight = document.querySelector("#control-right")
 let goDown = document.querySelector("#control-down")
 let goLeft = document.querySelector("#control-left")
 const canvas = document.querySelector("#playground")
  const ctx  = canvas.getContext("2d")
 let introduction = document.querySelector("#introduction")
 let menu = document.querySelector("#menu")
 let speed = document.querySelector("#speed")
 speed.style.backgroundColor = "var(--menuLine)"
 let speedWord = document.querySelector("#speedWord")
 let speedNumber = document.querySelector("#speedNumber")
 let speedNumberValue = 1
 speedNumber.textContent = speedNumberValue
 let backGroundPlayground = document.querySelector("#backGroundPlayground")
let snakeColorLine = document.querySelector("#snakeColorLine")
 let snakeColor= document.querySelector("#snakeColor")
 
 
 
 
 canvas.height = canvas.width  
 let block = 20
 let area = canvas.width / block
 let position, velocity, food, snake
 let snakeTail, snakeDirection, playGame
 let countColor = 0
 let snakeColorInGame = "#000"
 let paused = false
 let scoreNumber = 0
 
 
 localStorage.getItem("highScoreKey",scoreNumber)
highScore.textContent = localStorage.highScoreKey

 
 

 setTimeout("introduction.style.display= 'flex';",4000)
 
 
 

  

    
document.addEventListener("click", funcColor)


 function funcColor (event){        
    if(speed.style.backgroundColor == "var(--menuLine)"){
       if(event.target === goUp){
           speed.style.backgroundColor = "transparent"
           snakeColorLine.style.backgroundColor = "var(--menuLine)"  
           }
       else if(event.target === goDown){
           speed.style.backgroundColor = "transparent"
           backGroundPlayground.style.backgroundColor = "var(--menuLine)"  
           }            
       else if(event.target === goRight){                  
             if(speedNumberValue < 10){ 
              speedNumberValue++
              speedNumber.textContent = speedNumberValue
           }  
             else if(speedNumberValue == 10){
             speedNumber.textContent = speedNumberValue   
            }                              
           }             
       else if(event.target === goLeft){
             if(speedNumberValue > 1){ 
              speedNumberValue--
              speedNumber.textContent = speedNumberValue
           } else if(speedNumberValue == 1){
             speedNumber.textContent = speedNumberValue  
           }                                                                                    
         } 
        }                                                                                
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            else if(snakeColorLine.style.backgroundColor == "var(--menuLine)"){   
   
 if(event.target === goUp){     
 snakeColorLine.style.backgroundColor = "transparent"                       
 backGroundPlayground.style.backgroundColor = "var(--menuLine)"             
         }     
     else if(event.target === goDown){           
     snakeColorLine.style.backgroundColor = "transparent" 
     speed.style.backgroundColor = "var(--menuLine)"             
        }
                                        
 else if(event.target === goLeft){
      countColor-- 
       if(countColor == -1){
           countColor = 10
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
                                                                                                 
 else if(event.target === goRight){
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

else if (backGroundPlayground.style.backgroundColor == "var(--menuLine)"){
        if(event.target === goUp){            backGroundPlayground.style.backgroundColor = "transparent" 
             speed.style.backgroundColor = "var(--menuLine)"             
           } 
      else if(event.target === goDown){            backGroundPlayground.style.backgroundColor = "transparent" 
             snakeColorLine.style.backgroundColor = "var(--menuLine)"             
           }
         }                                                                                        
       }    
                        
   
 










 




 function init(){
  
     position = {x: 10, y: 10}
     velocity = {x: 0, y:0}
     snake = [ {x: 8,  y: 10},
               {x: 9, y: 10},
               {x: 10, y: 10}
               ]  
     snakeTail = snake[0]
     snakeDirection = snakeHeadRight
     
     }
   
              
   init()       
           
 function randomFood(){
     food = {
       x: Math.floor(Math.random() * (area-1)),
       y: Math.floor(Math.random() * (area-1))
       }
       if(food.x === snake[snake.length-1].x && food.y === snake[snake.length-1].y){
         return randomFood()
       }
       
       
      
 
 
 
       for(let cell of snake){
          if(cell.x === food.x && food.y === cell.y){
             return randomFood()
            }
         }
     }
     randomFood() 
 
 
  
//  MOVE THE SNAKE 
 
    function moveSnake(){
     
     document.addEventListener("click", 
      function(event){
      
          if(event.target === goUp){
          velocity = {x: 0, y: -1}
          snakeDirection = snakeHeadUp          
         } else if(event.target === goRight){
          velocity = {x: 1, y: 0}
          snakeDirection = snakeHeadRight          
         } else if(event.target === goDown){
          velocity = {x: 0, y: 1}
          snakeDirection = snakeHeadDown          
         } else if(event.target === goLeft){
          velocity = {x: -1, y: 0}
          snakeDirection = snakeHeadLeft                                          
         }
       }
     )
   } 

  
 function startGame(){
    document.removeEventListener("click",funcColor,false) 
    init()
    gameLoop()    
    menu.style.display = "none"
    canvas.style.display = "block"     
    snakeDirection = snakeHeadRight 
    }
 
//  FUNCTION GAME PAUSE 
 
function pauseGame(){
   if(paused == false){
       paused = true
     } else if(paused == true){
                 paused = false       
   }
 }
 
 
 //  MAIN FUNCTION
 
 playGame = setInterval(()=>{
   if(!paused) {
      requestAnimationFrame(gameLoop)
      }
    },400) 
     
   function gameLoop(){
      
       
//  GAMEBOARD     
    ctx.fillStyle = "#D3D3D3"
ctx.fillRect(0,0,canvas.offsetWidth,canvas.offsetHeight)

 
//  SNAKE BODY  
    
   for(let cell of snake){  
         ctx.fillStyle = snakeColorInGame       
         ctx.fillRect(cell.x * block,cell.y * block,block,block)         
       }   
 
// SNAKE HEAD
 
 ctx.fillStyle = "#D3D3D3"  
ctx.fillRect(snake[snake.length-1].x*block,snake[snake.length-1].y*block,block,block)

ctx.drawImage(snakeDirection,snake[snake.length-1].x*block,snake[snake.length-1].y*block,block,block)
   
  
  
     
//   CHERRY
     ctx.drawImage(cherry,food.x * block,food.y * block,block,block)
          
     position.x += velocity.x
     position.y += velocity.y

//  SNAKE IS OVER GAME AREA
  
 function snakeOver(){
     if(snake[snake.length-1].x < 0 || snake[snake.length-1].x === area || snake[snake.length-1].y < 0 || snake[snake.length-1].y === area){
         
         if(scoreNumber > localStorage.getItem("highScoreKey",scoreNumber)){
                 localStorage.setItem("highScoreKey",scoreNumber)
highScore.textContent = localStorage.highScoreKey
         }                
         scoreNumber = 0
         score.textContent = scoreNumber         
         startGame()
         canvas.style.display = "none"
         menu.style.display = "block" 
                document.addEventListener("click",funcColor) 
         }
       }

//  SNAKE EAT FOOD    
   
    function snakeEatFood(){
     if(food.x === position.x && food.y === position.y){
       snake.unshift(snakeTail)       
       randomFood()  
       scoreNumber++
       score.textContent = scoreNumber  
       }
     } 


//  SNAKE EAT SNAKE
 
    function snakeInSnake(){
     if(velocity.x || velocity.y){
      if(scoreNumber > localStorage.getItem("highScoreKey",scoreNumber)){
        localStorage.setItem("highScoreKey",scoreNumber)
highScore.textContent = localStorage.highScoreKey
    }
      for(let cell of snake){
       if(cell.x === position.x && cell.y === position.y){ 
          
          scoreNumber = 0
          score.textContent = scoreNumber                       
          menu.style.display = "block"
          canvas.style.display = "none"  
               document.addEventListener("click",funcColor) 
          }
        }
     snake.push({...position})
     snake.shift()
     }
   }  
   
     
     snakeEatFood()
     snakeInSnake()     
     moveSnake()
     snakeOver()
     
  }
  



