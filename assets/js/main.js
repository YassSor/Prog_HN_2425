 function first() {
            let prenom = document.getElementById("prenom").value; 
            alert("Bonjour " + prenom); 
        }
 function Aide() {
            let aideElement = document.getElementById("aide");
            let bAide = document.getElementById("bAide");

            if (aideElement.innerHTML === "") {
                aideElement.innerHTML = "Veuillez renseigner votre prénom dans le champ prévu";
                bAide.innerHTML = "Cacher l'aide";
            } else {
                aideElement.innerHTML = ""; 
                bAide.innerHTML = "Afficher l'aide";
            }
        }
		
