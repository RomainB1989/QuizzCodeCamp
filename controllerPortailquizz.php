<link rel="stylesheet" href="./source/css/portailquizz.css">
<?php

include "./utils/functions.php";
$message = "";
//!Ajout de questions
if (isset($_POST["quizzSubmit"])) {

    if(isset($_POST["titre"]) && !empty($_POST["titre"])&&
    isset($_POST["question"]) && !empty($_POST["question"]) &&
    isset($_POST["reponse"]) && !empty($_POST["reponse"])){

        $titre = nettoyage($_POST['titre']);
        $question = nettoyage($_POST['question']);
        $reponse = nettoyage($_POST['reponse']);
        
        $bdd = DBconnect();
        $message = addQuestion($bdd, $titre, $question, $reponse);

    }return "Veuillez remplir tous les champs";

}      
        

include "./view/header.php";
include "./view/viewPortailQuizz.php";
include "./view/footer.php";  
?>