let overdraft = 0;
let day = 0;
let agios = 0;

do {
overdraft = prompt ('Demander le montant du découvert autorisé');
day = prompt ('Demandez le nombre de jours de découvert');

} while (overdraft > 2000 || overdraft < 100 || day < 1 || day > 365);

agios = (parseInt(overdraft) * parseInt(day) * 0.1) / 365
agios = agios.toFixed(2)
alert ('Montant des agios '+ agios);

console.log ('Le nombre de jours convient à la condition comprise entre 1 et 365');