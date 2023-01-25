const option1 = document.getElementById("option1");
const option2 = document.getElementById("option2");
const option3 = document.getElementById("option3");
const audio_right = document.getElementById("right");
const audio_wrong = document.getElementById("wrong");
var answer = 0;
var max_number = 12;

function generate_equation(){
    var num1 = Math.floor(Math.random() * max_number);
    var num2 = Math.floor(Math.random() * max_number);
    var dummyAnswer1 = Math.floor(Math.random() * max_number);
    var dummyAnswer2 = Math.floor(Math.random() * max_number);
    var allAnswers = [];
    var switchAnswers = [];

    answer = num1 + num2;

    document.getElementById("num1").innerHTML = num1;
    document.getElementById("num2").innerHTML = num2;

    allAnswers = [answer, dummyAnswer1, dummyAnswer2];
    for (i=allAnswers.length; i--;) {
        switchAnswers.push(allAnswers.splice(Math.floor(Math.random() * (i+1)), 1));
    }
    
    option1.innerHTML = switchAnswers[0];
    option2.innerHTML = switchAnswers[1];
    option3.innerHTML = switchAnswers[2];
}

option1.addEventListener("click", function(){
    if (option1.innerHTML == answer) {
        audio_right.play();
        generate_equation();
    } else {
        audio_wrong.play();
    }
});

option2.addEventListener("click", function(){
    if (option2.innerHTML == answer) {
        audio_right.play();
        generate_equation();
    } else {
        audio_wrong.play();
    }
});

option3.addEventListener("click", function(){
    if (option3.innerHTML == answer) {
        audio_right.play();
        generate_equation();
    } else {
        audio_wrong.play();
    }
});

generate_equation();