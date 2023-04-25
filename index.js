


var questions =[
    {
        title: "What does CSS stand for?",
        choices:['Cascading Style Sheets', 'Cascading Single Sheets', 'Colored Style Sheets', 'Compound Single Sheets' ],
        answer: 'Cascading Style Sheets',

    },
    {
        title: "Which of the following is not a primitive data type in JavaScript?",
        choices:['Number', 'String', 'Object', 'Boolean' ],
        answer: 'Object',

    },
    {
        title: "What does API stand for?",
        choices:['Application Programming Interface', 'Automated Programming Interface', 'Application Processing Interface', 'Automated Processing Interface' ],
        answer: 'Application Programming Interface',

    },
    {
        title: "Which of the following is not a programming language?",
        choices:['Python', 'JavaScript', 'HTML', 'CSS' ],
        answer: 'HTML',

    },


]
var score = document.querySelector("#scoreRes")
var i =0
var time =20


document.getElementById('btn').onclick=function() {
    showQuestion();

    var runtime = setInterval(
        function(){
            if(time>0){

                time --
                document.getElementById('time').innerHTML = "Time = " + time;
            }
            if(time<1) {
                clearInterval(runtime);
                //alert('Time is up!');
            }
            if(i === 4) {
                //console.log("i=",i)
                score.textContent = "Score = " + time;
                clearInterval(runtime);
                document.getElementById("time").remove();
            }
        }
        , 1000 //one second
    )

}



function showQuestion(){

    document.getElementById('questions').innerHTML =
    `
    <h3>${questions[i].title}</h3>
    <button>${questions[i].choices[0]}</button>
    <button>${questions[i].choices[1]}</button>
    <button>${questions[i].choices[2]}</button>
    <button>${questions[i].choices[3]}</button>
    `
}


document.getElementById('questions').onclick = function(e) {
    var answer = e.target.innerText
    //check answer
    if(answer == questions[i].answer) {
        document.getElementById('showRight').innerHTML = 
        `
        <h3>Right</h3>
        `
    }  else{
        document.getElementById('showRight').innerHTML = 
        `
        <h3>Wrong</h3>
        `
        time-=5
    }
    //goes to next question
        i++
    
    showQuestion()

}

//need to 
//saveButton.addEventListener("click", function(event) {
    ///event.preventDefault();
    
    //var userScore = {
      //initials: initials.value,
      //score: score.value,
    //};
    
    //localStorage.setItem("userScore", JSON.stringify(userScore));
    //renderMessage();
    
   // });
    
    //function renderMessage() {
      //var lastGrade = JSON.parse(localStorage.getItem("userScore"));
      //if (lastGrade !== null) {
       // document.querySelector(".message").textContent = lastGrade.student + 
     // }
   // }
    
