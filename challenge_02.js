/*********   CODE CHALLENGE 02 **********/

/*
Geben über eine Prompt-Anforderung einen Namen ein
Geben über eine Prompt-Anforderung ein Alter ein

Geben Sie in Abhängigkeit vom angegebenen Alter 
folgende Getränkeauswahl in die Konsole aus :

Alter 0-5 // Milch  --> age > 0 AND age < 6
Alter 6-12 // Saft
Alter 13-17 // Cola
18 + // Wein

--> "Max trinkt Cola."

/* Getränke-Challenge */

// set variables
let drinkerAge = 101;

// get a name
let drinkerName = prompt("Person: ");

// get the right age
// ask until correct age is given
while (drinkerAge < 0 || drinkerAge > 100)
{
    drinkerAge = prompt("Person's age (0-100 years): ");
}

//SWITCH
switch (true) {
    case (drinkerAge >= 0 && drinkerAge <= 5):
        console.log(drinkerName + " drinks milk.");
        break;
    case (drinkerAge >= 6 && drinkerAge <= 12):
        console.log(drinkerName + " drinks juice.");
        break;
    case (drinkerAge >= 13 && drinkerAge <= 17):
        console.log(drinkerName + " drinks juice.");
        break;
    default:
        console.log(drinkerName + " drinks wine.");
        break;
}
 