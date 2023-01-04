function calcul_moyenne()
{
    var note1= prompt("donner la premier note: ");
    var coef1= prompt("donnez le premier coeficient");
    var note2= prompt("donner la deuxième note: ");
    var coef2= prompt("donnez le deuxième coeficient");
    var note3= prompt("donner la troisième note: ");
    var coef3= prompt("donnez le troisième coeficient");

    var somme= Number(note1)+Number(note2)+Number(note3);
    var coef= Number(coef1)+Number(coef2)+Number(coef3);

    

    document.write ("Voici la somme: "+ somme+ "<br>");
    var moyenne= somme/coef;

    document.write("Voici la moyenne:" + moyenne+ "<br>");

    if (moyenne<10)
    document.write("Vous êtes redoublant");
    else
    document.write("Vous êtes admis");
}

function test_age()
{
    var age= prompt("donnez votre âge");
    if (age<18)
    {
    document.write("Vous êtes mineur");
    document.bgColor="pink";
    }
    else
    {
    document.write("Vous êtes majeur");
    document.bgColor="blue";
    }
}

function simple_affichage()
{
    var nom=prompt("donner votre nom");
    var prenom=prompt("donner votre prenom");

    document.write("<div style='color: red; background-color: skyblue; padding: 3px; border-radius: 5px; margin:auto; border: 2px solid blue; width:300px;'>");
    document.write("Bonjour"+" " + prenom+ " "+ nom);
    document.write("</div>");
}

function test_couleur()
{
    var couleur= prompt("donnez une couleur");
    if (couleur=="rouge" ||couleur=="ROUGE" ||couleur=="Rouge")
    
    document.body.style.background="red";
    
    else if (couleur=="gris" ||couleur=="gris"||couleur=="gris")
    
    document.body.style.background="grey";

    else if (couleur=="white" ||couleur=="white" ||couleur=="white")
    
    document.body.style.background="white";
    
    else
    document.write("couleur non comprise");
}
