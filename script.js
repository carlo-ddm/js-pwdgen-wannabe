const firstName = prompt ('Nome');
const lastName = prompt ('Cognome');
const color = prompt ('Colore preferito');

console.log (firstName);
console.log (lastName);
console.log (typeof color);

document.getElementById("elementoPerStampareMessaggio").innerHTML = firstName + lastName + color