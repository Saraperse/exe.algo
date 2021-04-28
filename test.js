var chiffre1;
var chiffre2;
var resultat;

chiffre1 = Math.floor(Math.random() * 20 + 1);
chiffre2 = Math.floor(Math.random() * 20 + 1);


console.log("mon premier chiffre : " + chiffre1);
console.log("mon deuxième chiffre : " + chiffre2);

resultat = chiffre1 - chiffre2;
console.log(resultat);