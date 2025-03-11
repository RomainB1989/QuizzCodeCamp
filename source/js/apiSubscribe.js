document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('inscriptionForm');
  const previewPhoto = document.getElementById('previewPhoto');
  const photoInput = document.getElementById('photoInscription');
  const messageApi = document.getElementById('messageApi');

  // Prévisualisation de la photo
  photoInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        previewPhoto.src = e.target.result;
        previewPhoto.style.display = 'block';
      };
      reader.readAsDataURL(file);
    }
  });

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Récupérer les données du formulaire sans inclure le fichier
    const formData = new FormData(form);
    formData.delete('photo'); // Supprime le champ "photo" des données

    // Convertir FormData en objet JSON
    const userData = {};
    formData.forEach((value, key) => {
      userData[key] = value;
    });
  //console.log(JSON.stringify(userData));
    try {
      const response = await fetch('http://localhost/adrar/QuizzCodeCamp/apiCreationCompte.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData), // Envoi des données sous forme JSON
      });

      if (response.ok) {
        const result = await response.json();
        //console.log('Compte créé avec succès:', result);
        messageApi.style.color = 'green';
        messageApi.innerText = result["message"];
        // Ajoutez ici le code pour gérer la réussite (ex: redirection, message de succès)
      } else {
        //console.log(result);
        messageApi.style.color = 'red';
        messageApi.innerText = result["message"];
        // Ajoutez ici le code pour gérer l'échec
      }
    } catch (error) {
      //console.error('Erreur:', error);
      messageApi.style.color = 'red';
      messageApi.innerText = 'Erreur Api', error["message"];
      // Gérez les erreurs de réseau ou autres ici
    }
  });

  // Validation de l'email
  const emailInput = document.getElementById('inscriptionEmail');
  const messageMail = document.getElementById('messageMail');

  emailInput.addEventListener('input', () => {
    if (emailInput.validity.valid) {
      messageMail.textContent = 'Email valide';
      messageMail.style.color = 'green';
    } else {
      messageMail.textContent = 'Email invalide';
      messageMail.style.color = 'red';
    }
  });

  // Validation du mot de passe
  const passwordInput = document.getElementById('inscriptionPassword');
  const messagePassword = document.getElementById('messagePassword');

  passwordInput.addEventListener('input', () => {
    if (passwordInput.validity.valid) {
      messagePassword.textContent = 'Mot de passe valide';
      messagePassword.style.color = 'green';
    } else {
      messagePassword.textContent =
        'Le mot de passe doit contenir au moins 10 caractères dont un caractère spécial.';
      messagePassword.style.color = 'red';
    }
  });
});
