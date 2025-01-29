const apiTest = document.querySelector('div');

const compte = async()=> { 
    try{
        const rawData = await fetch('https://quizz.adrardev.fr/api/question/all');
        console.log(rawData);
    
        if (!rawData.ok || rawData.status !== 200) {
            console.error("Erreur lors de la récupération des données : ", rawData.statusText);
            return;
        }

        const transformedData = await rawData.json();
        console.log(transformedData);

        let para = document.createElement('p');
        para.innerText = transformedData[0].title;
        apiTest.append(para);
    }
        catch (error) {
            console.error("Erreur lors de l'appel à l'API : ", error);
        }
}
compte();