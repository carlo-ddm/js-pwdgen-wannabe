const firstName = prompt ('Nome');
const lastName = prompt ('Cognome');
const color = prompt ('Colore preferito');

console.log (firstName);
console.log (lastName);
console.log (color);

document.getElementById("elementoPerStampareMessaggio").innerHTML = firstName +" "+ lastName+" "+ color;

/*
Ricorda: questo tipo di concatenazione è migliore rispetto alla prima. Permette di creare spazi tra i valori delle variabili.
*/