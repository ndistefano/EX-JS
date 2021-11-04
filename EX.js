/* :
var neant=0;

var booleen=false;
alert(booleen);

var number1=3;
var number2=2;
var result=number1+number2;
alert(result);
 

var lastname="Nom : Doe \n";
var firstname="Prénom : John \n";
var city="Ville : New-York \n";
alert(lastname+firstname+city);

*/

/*

function reponse() {
    let saisie=document.getElementById("prenom").value;
    document.getElementById("changerTexte").innerHTML="bonjour "+saisie;
    } 

 */

function verifNote () {
    let note=document.getElementById("Id1").value;
    
    if (note<10) {
        document.getElementById("Id1").style.color="red"; 
    } 
    else (note>10) {
        document.getElementById("Id1").style.color="green";
    }
    {
    document.getElementById("valider").addEventListener("click", verifNote); 
    }

}



   

