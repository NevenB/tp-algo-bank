let sold,overdraft,withdraw,stopwithdraw;

overdraft =  parseFloat(prompt('Bienvenue chez GTM Bank', ''));

if (overdraft!=0) {
alert ("Vous n'avez pas droit au découvert" );
}

do{
    overdraft=parseInt(prompt('Vous avez droit au découvert'));

}while(overdraft<100||overdraft>2000);

sold =parseFloat(prompt('Saisissez le montant de votre solde',""));

do{
    sold=parseInt(prompt(''));
}while((overdraft +sold)<0);
stopwithdraw*=1;

do{
    stopwithdraw=parseInt(prompt('Saisissez le montant 0 pour quitter'));
}while(stopwithdraw!=0);

if (withdraw>sold +overdraft){
    alert("Solde insuffisant");
}
else if(withdraw > sold + overdraft)
{
alert (sold*=sold-withdraw);
}
else if (withdraw > sold + overdraft){
    alert (stopwithdraw*=withdraw);
}
console.log('solde(€)');
console.log ('sold');
console.log ('Découvert(€)');
console.log ('overdraft');


