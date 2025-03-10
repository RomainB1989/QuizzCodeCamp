<main>
        <div id="containerInscription">
            <h3>Créer mon compte</h3>

            <form action="" method="post" id="inscriptionForm">
                <input type="text" id="firstName" name="firstname" minlength="2" placeholder="Prénom" required>
                <input type="text" id="lastName" name="lastName" minlength="2" placeholder="Nom" required>
                <input type="email" id="inscriptionEmail" name="email" placeholder="Email" required>
                <p id="messageMail"></p>
                <input type="password" id="inscriptionPassword" name="password" minlength="8" placeholder="Mot de passe" required>
                <p id="messagePassword"></p>
                 
                <div id="containerInscriptionButton">
                    <button type="submit" value="valider" id="inscriptionButton">Valider le compte</button>
                </div>
            </form>
        </div>
</main>