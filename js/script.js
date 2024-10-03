//Défintiion de l'URL à appeler
const URL = "https://randomuser.me/api?results=50";


// Lancement de l'appel
fetch(URL)
.then (function (response) 
{
    // On transforme le résultat en json
    return response.json();
})

.then
(
    data => 
    {
        // Affichage du résultat de la transformation en JSON
        console.log(data.results);
        // On sélectionne le tableau dans notre page html où on va mettre les données
        const tableBody = document.getElementById('Tableau');
        
        // On parcourt le tableau, création de nouvelle ligne pour chaque utilisateur
        data.results.forEach(user => {
            const row = tableBody.insertRow();
            row.insertCell(0).textContent = user.name.last + " " + user.name.first;
            // Créez une cellule pour l'image de l'utilisateur
            const imageCell = row.insertCell(1);

            // Création d'un élément 'img' pour afficher l'image de l'utilisateur
            const userImage = document.createElement('img');
            userImage.src = user.picture.thumbnail;
                
            // Ajout de l'élément <img> à la cellule de l'image
            imageCell.appendChild(userImage);
            row.insertCell(2).textContent = user.email;

            // Si le genre de l'utilisateur est masculin
            if (user.gender === "male") {

                // On définit la cellule dans laquelle on met l'icône
                const imageCell = row.insertCell(3)
                // Création d'un élément 'img' pour afficher le genre de l'utilisateur
                const genderImage = document.createElement('img');
                genderImage.src = "./image/masculin.png"
                imageCell.appendChild(genderImage);
            }
            
            // Si le genre de l'utilisateur est féminin
            else {
                
                // On définit la cellule dans laquelle on met l'icône
                const imageCell = row.insertCell(3)
                // Création d'un élément 'img' pour afficher le genre de l'utilisateur
                const genderImage = document.createElement('img');
                genderImage.src = "./image/feminin.png"
                imageCell.appendChild(genderImage);
            }

            // Nom de la ville
            row.insertCell(4).textContent = user.location.city;
           
            // Nom du pays
           row.insertCell(5).textContent = user.location.country;

           // Affichage du drapeau 
                //Création de la cellule du drapeau
                var flagCell = row.insertCell(6);
                let flag = user.nat;
                // On réduit les nationnaliés majuscules pour les afficher dans le code
                flag = flag.toLowerCase();
                flagCell.innerHTML = "<span class='fi fi-" + flag + "'></span>";
        })
    }
)

// icônes faites par le graphiste Stockio
