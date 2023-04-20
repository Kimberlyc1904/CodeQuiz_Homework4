var questions =[
    {
        title: "what is the color of the moon?",
        choices:['red', 'green', 'blue', 'yellow' ],
        answer: 'yellow',

    },
    {
        title: "what is the size of the sea?",
        choices:['small', 'big', 'huge', 'tiny' ],
        answer: 'huge',

    },




]

var i =0
var time =30

document.getElementById('btn').onclick=function() {
    showQuestion();

    setInterval(
        function(){
            if(time>0){

                time --
                document.getElementById('time').innerHTML = time
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

