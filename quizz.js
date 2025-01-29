const answerArray = document.querySelectorAll(".answer");
const submit = document.querySelector("#submit");

answerArray.forEach((answer) => {
    answer.addEventListener("click", function(){
        answer.classList.toggle("selected");
    });
});

//todo Penser a implémenter la selection que d'une answer soit une déselection des autres answers.

submit.addEventListener("click", function(){
    console.log("Appel de la fonction qui passe a la question suivante.");
});

//todo Créer fonction qui passe à la question suivante.