var playing = false;
var score;
var timer
var action;
var correctAnswer;
document.getElementById("startreset").onclick = function () {
    if(playing==true){
        location.reload();
    }
    else{
        playing = true;
        score = 0;
        document.getElementById("scorevalue").innerHTML = score;
        
        show("time");
        
        timer= 60;
        document.getElementById("timevalue").innerHTML = timer;
         hide("gameover");
        
        document.getElementById("startreset").innerHTML = "Reset Game";
        
        startcountdown();
        
        generateQA();
    }
}
for(i=1;i<5;i++){
    document.getElementById("box"+ i).onclick = function(){
    if(playing == true){
        if(this.innerHTML== correctAnswer){
            score++;
            document.getElementById("scorevalue").innerHTML = score;
            hide("wrong");
            show("correct");
            setTimeout(function(){
                hide("correct")
            },1000)
            generateQA();
        }
        else{
            hide("correct");
            show("wrong");
            setTimeout(function(){
                hide("wrong")
            },1000)
        }
    }
}
}

        
        
        
        
        function startcountdown (){
            action = setInterval(function(){
                timer -=1;
                 document.getElementById("timevalue").innerHTML = timer;
                if(timer==0){
                    stopcount();
                    show("gameover");
                    document.getElementById("gameover").innerHTML ="<p>Game Over</p><p>Your Score is " + score + "</p>";
                    hide("time");
                    hide("correct");
                    hide("wrong");
                    playing = false;
                    document.getElementById("startreset").innerHTML ="Start Game";
                    
                }
            },1000)
        }
function stopcount(){
    clearInterval(action);
}
function hide(ID){
    document.getElementById(ID).style.display ="none";
}
function show(ID){
    document.getElementById(ID).style.display ="block";
}
function generateQA(){
    var x = 1+ Math.round(9*Math.random());
    var y = 1+ Math.round(9*Math.random());
    correctAnswer = x*y;
    document.getElementById("question").innerHTML = x + "x" + y;
    var correctPosition = 1+ Math.round(3*Math.random());
    document.getElementById("box"+correctPosition).innerHTML = correctAnswer; //fill one box with the correct answer
    
    //fill other boxes with wrong answers
    
    var answers = [correctAnswer];
    
    for(i=1; i<5; i++){
        if(i != correctPosition) {
            var wrongAnswer;
            do{
                wrongAnswer = (1+ Math.round(9*Math.random()))*(1+ Math.round(9*Math.random())); //a wrong answer
            }while(answers.indexOf(wrongAnswer)>-1)
            document.getElementById("box"+i).innerHTML = wrongAnswer;
            answers.push(wrongAnswer);
        }
    }
}