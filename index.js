let isOverdraft;
let overdraft = 0;
let sold;

alert('Bienvenue chez GTM Bank');
isOverdraft = prompt("Voulez-vous avoir un décourvert ? (y ou Y pour oui, n'importe quel caractère pour non");
if (isOverdraft == 'y' || isOverdraft == 'Y') {
    do {
        overdraft = parseInt(prompt("Saisissez le montant du découvert entre 100€ et 2000€"));
    } while (overdraft < 100 || overdraft > 2000);
    document.write(`Vous avez choisit d\'avoir un découvert de ${overdraft}€<br>`);
}
do {
    sold = parseInt(prompt("Saisissez le dépot (montant d'ouvrture de compte minimum de 500€)"));
} while (sold < 500);
document.write(`Solde (€): ${sold}€<br>`);
document.write(`Découvert (€): ${overdraft}€<br>`);