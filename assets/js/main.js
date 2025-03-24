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
		
function exercice4() { // Déclaration de la fonction nommée exercice4 
    let texte = document.getElementById("texteExercice4").value; // Récupération de l'élément HTML (sous l'ID : texteExercice4), et .value permet extraire la valeur qui sera saisie par l'utilisateur
    let tokens = texte.split(" "); // permet de diviser le texte en tokens à chaque fois qu'il y a un espace 
    let table = document.createElement("table"); // permet de stocker un élément dans la variable "table"
    tokens.forEach(mot => { // permet de parcourir chaque tokens
        let row = document.createElement("tr"); // permet de créer une nouvelle ligne pour chaque tokens dans le tableau 
        row.innerHTML = mot; // permet d'insérer un mot dans une ligne ("tr")
        table.appendChild(row); // permet d'ajouter chaque ligne ("tr") dans le tableau ("table")
    });
    document.getElementById("exercice4Resultat").appendChild(table); // permet d'afficher le tableau ("table") sur la page HTML
}

window.onload = function() {
    let fileInput = document.getElementById('fileInput');
    let fileDisplayArea = document.getElementById('fileDisplayArea');

    // On "écoute" si le fichier donné a été modifié.
    // Si on a donné un nouveau fichier, on essaie de le lire.
    fileInput.addEventListener('change', function(e) {
        // Dans le HTML (ligne 22), fileInput est un élément de tag "input" avec un attribut type="file".
        // On peut récupérer les fichiers données avec le champs ".files" au niveau du javascript.
        // On peut potentiellement donner plusieurs fichiers,
        // mais ici on n'en lit qu'un seul, le premier, donc indice 0.
        let file = fileInput.files[0];
        // on utilise cette expression régulière pour vérifier qu'on a bien un fichier texte.
        let textType = new RegExp("text.*");

        if (file.type.match(textType)) { // on vérifie qu'on a bien un fichier texte
            // lecture du fichier. D'abord, on crée un objet qui sait lire un fichier.
            var reader = new FileReader();

            // on dit au lecteur de fichier de placer le résultat de la lecture
            // dans la zone d'affichage du texte.
            reader.onload = function(e) {
                fileDisplayArea.innerText = reader.result;
            }

            // on lit concrètement le fichier.
            // Cette lecture lancera automatiquement la fonction "onload" juste au-dessus.
            reader.readAsText(file);    

            document.getElementById("logger").innerHTML = '<span class="infolog">Fichier chargé avec succès</span>';
        } else { // pas un fichier texte : message d'erreur.
            fileDisplayArea.innerText = "";
            document.getElementById("logger").innerHTML = '<span class="errorlog">Type de fichier non supporté !</span>';
        }
    });
}

function segmentation() {
const analyse = document.getElementById("fileDisplayArea").innerText;
const result = analyse.split(/\s+/).map(item => item.trim()).filter(item => item.length > 0);
let virgule = result.map(item => `${item},`).join('<br>'); 
document.getElementById("page-analysis").innerHTML = virgule;
}