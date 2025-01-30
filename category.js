const apiFetch = async(url, body)=> { 
    try{
        const rawData = await fetch(url, body);
    
        if (!rawData.ok || rawData.status !== 200) {
            console.error("Erreur lors de la récupération des données : ", rawData.statusText);
            return;
        }

        const transformedData = await rawData.json();
        return(transformedData);
        // let para = document.createElement('p');
        // para.innerText = transformedData[0].title;
        // apiTest.append(para);
    }
    catch (error) {
        console.error("Erreur lors de l'appel à l'API : ", error);
    }
}

const select = document.querySelector("#select-category");

<<<<<<< HEAD
let arrayQuestion =  await apiFetch('https://quizz.adrardev.fr/api/question/all', {method:"GET"});
let listUsers = await apiFetch('https://quizz.adrardev.fr/api/users', {method:"GET"});
let listCategories = await apiFetch('https://quizz.adrardev.fr/api/category/all', {method:"GET"});
=======
let arrayQuestion =  await apiFetch("https://quizz.adrardev.fr/api/question/all", "GET");
let listUsers = await apiFetch("https://quizz.adrardev.fr/api/users", "GET");
let listCategories = await apiFetch("https://quizz.adrardev.fr/api/category/all", "GET");
>>>>>>> dbc1f2dee3ae45efcdf01c4b131f8498eec71d78
console.log(arrayQuestion);
console.log(listUsers);
console.log(listCategories);

<<<<<<< HEAD

let listQuizz = await apiFetch("https://quizz.adrardev.fr/api/quizzs/all", {method:"GET"});
console.log(listQuizz);
=======
let arrayQuizz = await apiFetch("https://quizz.adrardev.fr/api/quizzs/all", "GET")
>>>>>>> dbc1f2dee3ae45efcdf01c4b131f8498eec71d78

listCategories.forEach(element => {
    console.log("test");
    
   const option = document.createElement("option");
   option.value = element.title;
   option.innerText = element.title;
   select.appendChild(option);
});