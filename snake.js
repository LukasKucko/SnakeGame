 
 
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
 let aspectRatio = 1
 canvas.height = canvas.width * aspectRatio
 let snakeDirection 
 let block = 20
 let area = canvas.width / block
 let position, velocity, food, snake
 pause = false
 let scoreNumber = 0
 
 
 localStorage.getItem("highScoreKey",scoreNumber)
highScore.textContent = localStorage.highScoreKey

 
 

 setTimeout("introduction.style.display= 'flex';",4000)
 
  
 
 
 
 
 
 

 function init(){
     position = {x: 10, y: 10}
     velocity = {x: 0, y:0}
     snake = [ {x: 8,  y: 10},
               {x: 9, y: 10},
               {x: 10, y: 10} ]  
     snakeDirection = snakeHeadRight
     
     }
   
              
   init()       
           
 function randomFood(){
     food = {
       x: Math.floor(Math.random() * (area-1)),
       y: Math.floor(Math.random() * (area-1))
       }
       if(food.x === 0 || food.y ===0){
         return  randomFood()
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
    init()
    gameLoop()
    
    menu.style.display = "none"
    canvas.style.display = "block"
    
    snakeDirection = snakeHeadRight 
    }
 
 function pauseGame(){
     if(!pause){
         gameLoop()
     } else {
         
     }
 }
 
 
 
 //  MAIN FUNCTION
 
 
 
let playGame = setInterval(()=>{
    requestAnimationFrame(gameLoop)
    },1000/4) 
   
   function gameLoop(){
   
   
   
   
       
//  GAMEBOARD     
    ctx.fillStyle = "#ffdfd5"
ctx.fillRect(0,0,canvas.offsetWidth,canvas.offsetHeight)

 
//  SNAKE BODY  
    
   for(let cell of snake){  
         ctx.fillStyle =  "#5ca251"        
         ctx.fillRect(cell.x * block,cell.y * block,block,block)         
       }   
 
// SNAKE HEAD
 
 ctx.fillStyle = "#ffdfd5"  
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
         
         }
       }

//  SNAKE EAT FOOD    
   
    function snakeEatFood(){
     if(food.x === position.x && food.y === position.y){
       snake.push({... position})  
       position.x += velocity.x
       position.y += velocity.y
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
          startGame()
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
