let sold, overdraft, withdraw, stopwithdraw;
alert('Bienvenue chez GTM Bank');
do {
    overdraft = parseInt(prompt('Saisissez le montant de votre décovert (0 si vous n\'avez pas droit au découvert)'));
    if (overdraft == 0) {
        alert("Vous n'avez pas droit au découvert");
        break;
    }
} while (overdraft < 100 | overdraft > 2000);

if (overdraft != 0) {
    alert('Vous avez droit au découvert');
}
sold = parseInt(prompt('Saisissez le montant de votre solde'));

withdraw = parseInt(prompt('Saississez le montant du retrait'));

if (withdraw > sold + overdraft) {
    alert("Solde insuffisant");
} else {
    alert("Retrait autorisé");
    sold = sold - withdraw;
    alert("Le montant de votre solde est donc de " + sold + "€");
}