const radioYes = document.getElementById('yes');
const radioNo = document.getElementById('no');
const boxOverdraft = document.getElementById('boxOverdraft');

radioYes.addEventListener('click', function () {
    boxOverdraft.style.visibility = 'visible';
    document.getElementById('overdraft').value = '';
});

radioNo.addEventListener('click', function () {
    boxOverdraft.style.visibility = 'hidden';
    document.getElementById('overdraft').value = '';
});

const boxErrorOverdraft = document.getElementById('errorOverdraft');
const boxErrorerrorDeposit = document.getElementById('errorDeposit');

const btn = document.getElementById('open_account');
btn.addEventListener('click', function () {
    //On récupère les informations entrées par l'utilisateur 
    const inputOverdraft = document.getElementById('overdraft');
    const inputSold = document.getElementById('sold');

    //On remet à zéro les messages d'erreurs
    boxErrorerrorDeposit.innerHTML = '';
    boxErrorOverdraft.innerHTML = '';


    if (radioNo.checked) { // Si l'utilisateur ne veux pas de découvert
        sessionStorage.setItem('overdraft', 0); // On stock la valeur 0 dans le session storage
    } else { // Si l'utilisateur veux un découvert
        if (inputOverdraft.value < 100 || inputOverdraft.value > 2000) { // On vérifie que la valeure rentrée entre dans le bon interval 
            boxErrorOverdraft.innerHTML = 'Overdraft must be between 100 and 2000'; // On affiche le message d'erreur correspondant
        } else {
            sessionStorage.setItem('overdraft', inputOverdraft.value); // Si tout est bon, on stocke la valeur dans le session storage
        }
    }
    if (inputSold.value < 500) {
        boxErrorerrorDeposit.innerHTML = 'Deposit must be greater or equals to 500';
    } else {
        sessionStorage.setItem('sold', inputSold.value);
        location.href = 'withdraw.html';
    }
    inputOverdraft.value = '';
    inputSold.value = '';
});


document.getElementById('open').addEventListener('click', function () {
    location.href = 'open.html';
});
document.getElementById('aggio').addEventListener('click', function () {
    location.href = 'agios.html';
});
document.getElementById('withdraw').addEventListener('click', function () {
    location.href = 'withdraw.html';
});