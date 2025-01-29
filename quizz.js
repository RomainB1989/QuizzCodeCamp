const answerArray = document.querySelectorAll(".answer");


answerArray.forEach((answer) => {
    answer.addEventListener("click", function(){
        answer.classList.toggle("selected");
    });
});