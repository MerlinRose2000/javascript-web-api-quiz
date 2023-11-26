    var startBtn = document.getElementById("startBtn");
    var time = 80;
    var time_remaining = true;
    var time_start= false;
    var countdownTimer = document.getElementById("countdownTimer");
    var homeContainer =  document.getElementById("homeContainer");
    var quizContainer = document.getElementById("quizContainer");
    var questionHeading = document.getElementById("questionHeading");
    var answerChoiceA = document.getElementById("answerChoiceA");
    var answerChoiceB = document.getElementById("answerChoiceB");
    var answerChoiceC = document.getElementById("answerChoiceC");
    var correctAnswer = document.getElementById("correctAnswer");    
    var high_scores= [];
    var output="";
    var score = 0;
    let i = 0;

var countdownTimerInterval = setInterval(setCountdownTimer, 1000);

function setCountdownTimer() {
        if (time_start)
        time--;
        if(time<= 0) {
        end_quiz();
        time = 0;    
        }
        document.getElementById("timer").innerHTML = time;
    }

startBtn.addEventListener("click", function() {
    quizContainer.style.display = "block";
    homeContainer.style.display ="none";
    countdownTimer.style.display= "block";
    document.getElementById("score_keeper").style.display= "block";
    document.getElementById("score").innerHTML = score;
    setCountdownTimer();
    setQuizQuestions();
    time_start= true;
});

var questionsArray = [
{
    question: "Question: What is NOT an HTML Element code?",
    answerChoice: ["A) <menuitem>", "B) <address>", "C) <color>"],
    correctAnswer: 2
}, 
{
    question: "Question: Which property creates a rounded button?",
    answerChoice: ["A) border-radius", "B) border", "C) padding"],
    correctAnswer: 0
},
{
    question: "Question: What is the purpose of Javascript Math Object?",
    answerChoice: ["A) perform mathematical tasks on numbers", "B) solve math equations", "C) provide mathematical calculations"],
    correctAnswer: 0
}];

function setQuizQuestions() {
        questionHeading.textContent = questionsArray[i].question;
        answerChoiceA.textContent = questionsArray[i].answerChoice[0]; 
        answerChoiceB.textContent = questionsArray[i].answerChoice[1]; 
        answerChoiceC.textContent = questionsArray[i].answerChoice[2]; 
        };

answerChoiceA.addEventListener('click', function(event) {
        event.stopPropagation();
        correctAnswer= questionsArray[i].correctAnswer;
        console.log("correctAnswer " + correctAnswer);
        if (0 === correctAnswer) { 
            document.getElementById("AnswerResponse").innerHTML = "That is correct! Good job!";
            setTimeout(function() {
            document.getElementById("AnswerResponse").innerHTML = "";
                },
                1000
            );
            score++;    
            document.getElementById("score").innerHTML = score;
        } else {
            time_remaining -= 10;
            document.getElementById("AnswerResponse").innerHTML = "That is incorrect, but you got this!";
            setTimeout(function() {
                document.getElementById("AnswerResponse").innerHTML = "";
                    },
                    1000
                );
        }
        if (i >= questionsArray.length -1) {
        end_quiz();
        } else {
            i++ 
            setQuizQuestions();
        };
    });

answerChoiceB.addEventListener('click', function(event) {
    event.stopPropagation();
    correctAnswer = questionsArray[i].correctAnswer;
    console.log(correctAnswer);
        if (1 === correctAnswer) { 
            document.getElementById("AnswerResponse").innerHTML = "That is correct! Good job!";
            setTimeout(function() {
                document.getElementById("AnswerResponse").innerHTML = "";
                    },
                    1000
                );
            score++;
            document.getElementById("score").innerHTML = score;
        } else {
            time_remaining -= 10;
            document.getElementById("AnswerResponse").innerHTML = "That is incorrect, but you got this!";
            setTimeout(function() {
                document.getElementById("AnswerResponse").innerHTML = "";
                    },
                    1000
                );
        }
        if (i >= questionsArray.length -1) {
        end_quiz();
        } else {
         i++ 
        setQuizQuestions();
        };
    });

answerChoiceC.addEventListener('click', function(event) {
    event.stopPropagation();
    correctAnswer = questionsArray[i].correctAnswer;
    console.log(correctAnswer);
    if (2 === correctAnswer) { 
        document.getElementById("AnswerResponse").innerHTML = "That is correct! Good job!";
        setTimeout(function() {
            document.getElementById("AnswerResponse").innerHTML = "";
                },
                1000
            );
        score++;
        document.getElementById("score").innerHTML = score;
    } else {
        time_remaining -= 10;
        document.getElementById("AnswerResponse").innerHTML = "That is incorrect, but you got this!";
        setTimeout(function() {
            document.getElementById("AnswerResponse").innerHTML = "";
                },
                1000
            );
    }
    if (i >= questionsArray.length -1) {
    end_quiz();
    } else {
        i++ 
        setQuizQuestions();
    };
    });

        function end_quiz(){
            document.getElementById("game_over").style.display= "block";
            document.getElementById("quizContainer").style.display="none";
            document.getElementById("countdownTimer").style.display= "none";
            document.getElementById("score_keeper").style.display= "none";
            document.getElementById("AnswerResponse").innerHTML="";
            document.getElementById("end_score").innerHTML= score;
            }

            function submit_score() {
             high_scores.push(document.getElementById("initials").value + " " + score);
             view_high_scores();
            }

        
        function view_high_scores(){
        
            document.getElementById("quizContainer").style.display="none";
            document.getElementById("game_over").style.display= "none";
            document.getElementById("high_scores_page").style.display="block";
        
            output="";
            for(let k=0; k<high_scores.length; k++){
                 output = output + "  " + high_scores[k];
            }
            document.getElementById("high_scores").innerHTML= output;                
             clear_up();
        }

        function go_home(){	
                document.getElementById("high_scores_page").style.display= "none";
                document.getElementById("homeContainer").style.display= "block";
                clear_up();
        }
        
        function clear_hs(){
            high_scores = [];
          }
        
        function clear_up(){
        
        time=80;
        time_remaining=true;
        time_start=false;
        i=0;
        score=0;
        }