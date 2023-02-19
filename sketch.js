
var score = 0;

function preload(){
  wrong = loadSound('wrong.mp3')
  right = loadSound('correct.wav')
  colours = loadImage('allcolours.png')
  argentina = loadImage('argentina.JPG')
  footballcup  = loadImage('worldcupQatar.jpg')
  elections = loadImage('electionsusa.jpg')
  joe = loadImage('joeBiden.jpg')
  nile = loadImage('nile.jpg')
  river = loadImage('river.webp')
  trophy = loadImage('worldcup.JPG')
  India = loadImage('worldcupInd.jpg.webp')

}
function setup(){
  createCanvas(windowWidth, windowHeight);
  background(1)
  push();
  fill('white')
  textSize(50)
  textStyle(BOLD)
  text("Test your general knowledge",windowWidth/2-320,100)
  pop();
  
  push();
  fill('white')
  textSize(30)
  text("Enter your name: ",780,718.4)
  pop();

  textInput = createInput("")
  textInput.style('color','black')
  textInput.style('font-size','15px')
  textInput.position(windowWidth/2,700,200,200)
  

  
  submitButton = createButton("Submit")
  submitButton.style('background-color','orange')
  submitButton.style('font-size','30px')
  submitButton.position(windowWidth/2+15,735,100,100)
  submitButton.mousePressed(()=>{
    name1 = textInput.value()
    if(name1===""){
      alert("Please enter your name.")
    }
    else{
      submitButton.mousePressed(greeting)
    }
  })

  

}



function greeting(){
  background("white")
  textInput.hide()
  submitButton.hide()
  user = textInput.value()
  greeting1  = createElement("h2")
  greeting1.html("Hello "+ user + "!")
  greeting1.position(windowWidth/2-90,200)

  startButton = createButton("Click to start")
  startButton.style('background-color','orange')
  startButton.style('font-size','30px')
  startButton.position(windowWidth/2-90,735,100,100)

  startButton.mousePressed(Question1)
}

function Question1(){
  background(elections)
  greeting1.hide()
  startButton.hide()

  q1 = createElement("h1")
  q1.html("Q1. Who is the president of USA?")
  q1.position(windowWidth/2-100,300)

  q1a = createButton("Donald Trump")
  q1a.style("color","black")
  q1a.style('background-color','white')
  q1a.style('font-size','24px')
  q1a.position(windowWidth/2-100,400)
  q1a.mousePressed(q1option1)

  q1b = createButton("Mike Pence")
  q1b.style("color","black")
  q1b.style('background-color','white')
  q1b.style('font-size','24px')
  q1b.position(windowWidth/2-100,500)
  q1b.mousePressed(q1option2)

  q1c = createButton("Kamala Harris")
  q1c.style("color","black")
  q1c.style('background-color','white')
  q1c.style('font-size','24px')
  q1c.position(windowWidth/2-100,600)
  q1c.mousePressed(q1option3)

  q1d = createButton("Joe Biden")
  q1d.style("color","black")
  q1d.style('background-color','white')
  q1d.style('font-size','24px')
  q1d.position(windowWidth/2-100,700)
  q1d.mousePressed(q1option4)


  nextButton = createButton("Next")
  nextButton.style('background-color','orange')
  nextButton.style('font-size','30px')
  nextButton.position(windowWidth/2+100,735,100,100)
  nextButton.mousePressed(question2)
  
}

function q1option1(){
 background(joe)
 q1a.style("background-color","red")
 q1d.style("background-color","green")
 q1a.attribute("disabled","")
 q1b.attribute("disabled","")
 q1c.attribute("disabled","")
 q1d.attribute("disabled","")
 wrong.play()
 
}

function q1option2(){
  background(joe)
  q1b.style("background-color","red")
  q1d.style("background-color","green")
  q1a.attribute("disabled","")
 q1b.attribute("disabled","")
 q1c.attribute("disabled","")
 q1d.attribute("disabled","")
 wrong.play()
 }

 function q1option3(){
  background(joe)
  q1c.style("background-color","red")
  q1d.style("background-color","green")
  q1a.attribute("disabled","")
 q1b.attribute("disabled","")
 q1c.attribute("disabled","")
 q1d.attribute("disabled","")
 wrong.play()
 }

 function q1option4(){
  background(joe)
  q1d.style("background-color","green")
  q1a.attribute("disabled","")
  q1b.attribute("disabled","")
  q1c.attribute("disabled","")
  q1d.attribute("disabled","")
  score+=1;
  right.play();
 }

 function question2(){
  background(footballcup)

  q1.hide()
  q1a.hide()
  q1b.hide()
  q1c.hide()
  q1d.hide()
  nextButton.hide()
  
  q2 = createElement("h1")
  q2.html("Q2. Who won the FIFA world cup 2022?")
  q2.position(windowWidth/2-100,300)

  q2a = createButton("Portugal")
  q2a.style("color","black")
  q2a.style('background-color','white')
  q2a.style('font-size','24px')
  q2a.position(500,500)
  q2a.position(windowWidth/2-100,400)
  q2a.mousePressed(q2option1)

  q2b = createButton("Argentina")
  q2b.style("color","black")
  q2b.style('background-color','white')
  q2b.style('font-size','24px')
  q2b.position(500,600)
  q2b.position(windowWidth/2-100,500)
  q2b.mousePressed(q2option4)

  q2c = createButton("France")
  q2c.style("color","black")
  q2c.style('background-color','white')
  q2c.style('font-size','24px')
  q2c.position(500,700)
  q2c.position(windowWidth/2-100,600)
  q2c.mousePressed(q2option3)

  q2d = createButton("England")
  q2d.style("color","black")
  q2d.style('background-color','white')
  q2d.style('font-size','24px')
  q2d.position(windowWidth/2-100,700)
  q2d.mousePressed(q2option2)

  nextButton = createButton("Next")
  nextButton.style('background-color','orange')
  nextButton.style('font-size','30px')
  nextButton.position(windowWidth/2+100,735,100,100)
  nextButton.mousePressed(question3)
  
}

function q2option1(){
  background(argentina)
 q2a.style("background-color","red")
 q2b.style("background-color","green")
 q2a.attribute("disabled","")
 q2b.attribute("disabled","")
 q2c.attribute("disabled","")
 q2d.attribute("disabled","")
 wrong.play()
}

function q2option2(){
  background(argentina)
 q2d.style("background-color","red")
 q2b.style("background-color","green")
 q2d.attribute("disabled","")
 q2d.attribute("disabled","")
 q2d.attribute("disabled","")
 q2d.attribute("disabled","")
 wrong.play()
 }

 function q2option3(){
  background(argentina)
  q2c.style("background-color","red")
  q2b.style("background-color","green")
  q2a.attribute("disabled","")
 q2b.attribute("disabled","")
 q2c.attribute("disabled","")
 q2d.attribute("disabled","")
 wrong.play()
 }

 function q2option4(){
  background(argentina)
  q2b.style("background-color","green")
  q2a.attribute("disabled","")
  q2b.attribute("disabled","")
  q2c.attribute("disabled","")
  q2d.attribute("disabled","")
  score+=1;
  right.play();
 }

 function question3(){

 background(river)

 q2.hide()
  q2a.hide()
  q2b.hide()
  q2c.hide()
  q2d.hide()
  nextButton.hide()

  q3 = createElement("h1")
  q3.html("Q3. Which is the longest river on earth?")
  q3.position(windowWidth/2-100,300)

  q3a = createButton("Yangtze river")
  q3a.style("color","black")
  q3a.style('background-color','white')
  q3a.style('font-size','24px')
  q3a.position(500,500)
  q3a.position(windowWidth/2-100,400)
  q3a.mousePressed(q3option1)

  q3b = createButton("Nile river")
  q3b.style("color","black")
  q3b.style('background-color','white')
  q3b.style('font-size','24px')
  q3b.position(500,600)
  q3b.position(windowWidth/2-100,500)
  q3b.mousePressed(q3option4)

  q3c = createButton("Amazon river")
  q3c.style("color","black")
  q3c.style('background-color','white')
  q3c.style('font-size','24px')
  q3c.position(500,700)
  q3c.position(windowWidth/2-100,600)
  q3c.mousePressed(q3option3)

  q3d = createButton("Congo river")
  q3d.style("color","black")
  q3d.style('background-color','white')
  q3d.style('font-size','24px')
  q3d.position(windowWidth/2-100,700)
  q3d.mousePressed(q3option2)

  nextButton = createButton("Next")
  nextButton.style('background-color','orange')
  nextButton.style('font-size','30px')
  nextButton.position(windowWidth/2+100,735,100,100)
  nextButton.mousePressed(question4)
  
}

function q3option1(){
 background(nile)
 q3a.style("background-color","red")
 q3b.style("background-color","green")
 q3a.attribute("disabled","")
 q3b.attribute("disabled","")
 q3c.attribute("disabled","")
 q3d.attribute("disabled","")
 wrong.play()
}

function q3option2(){
  background(nile)
  q3d.style("background-color","red")
  q3b.style("background-color","green")
  q3d.attribute("disabled","")
 q3d.attribute("disabled","")
 q3d.attribute("disabled","")
 q3d.attribute("disabled","")
 wrong.play()
 }

 function q3option3(){
  background(nile)
  q3c.style("background-color","red")
  q3b.style("background-color","green")
  q3a.attribute("disabled","")
 q3b.attribute("disabled","")
 q3c.attribute("disabled","")
 q3d.attribute("disabled","")
 wrong.play()
 }

 function q3option4(){
  background(nile)
  q3b.style("background-color","green")
  q3a.attribute("disabled","")
  q3b.attribute("disabled","")
  q3c.attribute("disabled","")
  q3d.attribute("disabled","")
  score+=1;
  right.play();
 }

 function question4(){

  background(trophy)
 
  q3.hide()
   q3a.hide()
   q3b.hide()
   q3c.hide()
   q3d.hide()
   nextButton.hide()
 
   q4 = createElement("h1")
   q4.html("Q4. How many Cricket world cups does India have?")
   q4.position(windowWidth/2-100,300)
 
   q4a = createButton("2")
   q4a.style("color","black")
   q4a.style('background-color','white')
   q4a.style('font-size','24px')
   q4a.position(windowWidth/2-100,400)
   q4a.mousePressed(q4option4)
 
   q4b = createButton("3")
   q4b.style("color","black")
   q4b.style('background-color','white')
   q4b.style('font-size','24px')
   q4b.position(windowWidth/2-100,500)
   q4b.mousePressed(q4option1)
 
   q4c = createButton("1")
   q4c.style("color","black")
   q4c.style('background-color','white')
   q4c.style('font-size','24px')
   q4c.position(windowWidth/2-100,600)
   q4c.mousePressed(q4option3)
 
   q4d = createButton("5")
   q4d.style("color","black")
   q4d.style('background-color','white')
   q4d.style('font-size','24px')
   q4d.position(windowWidth/2-100,700)
   q4d.mousePressed(q4option2)
 
   nextButton = createButton("Next")
   nextButton.style('background-color','orange')
   nextButton.style('font-size','30px')
   nextButton.position(windowWidth/2+100,735,100,100)
   nextButton.mousePressed(question5)
   
 }
 
 function q4option1(){
  background(India)
  q4b.style("background-color","red")
  q4a.style("background-color","green")
  q4a.attribute("disabled","")
  q4b.attribute("disabled","")
  q4c.attribute("disabled","")
  q4d.attribute("disabled","")
  wrong.play()
 }
 
 function q4option2(){
  background(India)
   q4d.style("background-color","red")
   q4a.style("background-color","green")
   q4a.attribute("disabled","")
  q4b.attribute("disabled","")
  q4c.attribute("disabled","")
  q4d.attribute("disabled","")
  wrong.play()
  }
 
  function q4option3(){
    background(India)
   q4c.style("background-color","red")
   q4a.style("background-color","green")
   q4a.attribute("disabled","")
  q4b.attribute("disabled","")
  q4c.attribute("disabled","")
  q4d.attribute("disabled","")
  wrong.play()
  }
 
  function q4option4(){
    background(India)
   q4a.style("background-color","green")
   q4a.attribute("disabled","")
    q4b.attribute("disabled","")
    q4c.attribute("disabled","")
    q4d.attribute("disabled","")
    score+=1;
    right.play();
    }

  function question5(){

    background(colours)
   
    q4.hide()
     q4a.hide()
     q4b.hide()
     q4c.hide()
     q4d.hide()
     nextButton.hide()
   
     q5 = createElement("h1")
     q5.html("Q5. Which of the following colours has the highest wavelength?")
     q5.position(windowWidth/2-100,300)
   
     q5a = createButton("Blue")
     q5a.style("color","black")
     q5a.style('background-color','white')
     q5a.style('font-size','24px')
     q5a.position(windowWidth/2-100,400)
     q5a.mousePressed(q5option1)
   
     q5b = createButton("Red")
     q5b.style("color","black")
     q5b.style('background-color','white')
     q5b.style('font-size','24px')
     q5b.position(windowWidth/2-100,500)
     q5b.mousePressed(q5option4)
   
     q5c = createButton("Black")
     q5c.style("color","black")
     q5c.style('background-color','white')
     q5c.style('font-size','24px')
     q5c.position(windowWidth/2-100,600)
     q5c.mousePressed(q5option3)
   
     q5d = createButton("White")
     q5d.style("color","black")
     q5d.style('background-color','white')
     q5d.style('font-size','24px')
     q5d.position(windowWidth/2-100,700)
     q5d.mousePressed(q5option2)
   
     nextButton = createButton("Next")
     nextButton.style('background-color','orange')
     nextButton.style('font-size','30px')
     nextButton.position(windowWidth/2+100,735,100,100)
     nextButton.mousePressed(lastPage)
     
   }
   
   function q5option1(){
    background('red')
    q5a.style("background-color","red")
    q5b.style("background-color","green")
    q5a.attribute("disabled","")
    q5b.attribute("disabled","")
    q5c.attribute("disabled","")
    q5d.attribute("disabled","")
   }
   
   function q5option2(){
     background('red')
     q5d.style("background-color","red")
     q5b.style("background-color","green")
     q5a.attribute("disabled","")
    q5b.attribute("disabled","")
    q5c.attribute("disabled","")
    q5d.attribute("disabled","")
    }
   
    function q5option3(){
     background('red')
     q5c.style("background-color","red")
     q5b.style("background-color","green")
     q5a.attribute("disabled","")
    q5b.attribute("disabled","")
    q5c.attribute("disabled","")
    q5d.attribute("disabled","")
    }
   
    function q5option4(){
     background('red')
     q5b.style("background-color","green")
     q5a.attribute("disabled","")
    q5b.attribute("disabled","")
    q5c.attribute("disabled","")
    q5d.attribute("disabled","")
    score+=1;
    right.play();
    }

  function lastPage(){
    q5.hide()
    q5a.hide()
    q5b.hide()
    q5c.hide()
    q5d.hide()
    nextButton.hide()
    textStyle(BOLD)
    textSize(40)
    

    if(score===1||score===2){
      background("white")
      fill('black')
      textStyle(BOLD)
      text("Better luck next time!",400,200)
    }
    else if(score===3){
      background("grey")
      fill('white')
      textStyle(BOLD)
      text("Well tried!",500,200)
    }
    else{
      background("black")
      fill('white')
      textStyle(BOLD)
      text("Excellent!",600,200)
    }
    text("Your right answers are- "+score,400,400)
  }


