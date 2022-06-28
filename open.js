const radioYes = document.getElementById('yes');
const radioNo = document.getElementById('no');
const boxOverdraft = document.getElementById('boxOverdraft');

radioYes.addEventListener('click', function () {
    boxOverdraft.style.visibility = 'visible';
});

radioNo.addEventListener('click', function () {
    boxOverdraft.style.visibility = 'hidden';
});

const boxError = document.getElementById('error');

const btn = document.getElementById('open_account');
btn.addEventListener('click', function () {
    const inputOverdraft = document.getElementById('overdraft');
    const inputSold = document.getElementById('sold');

    if(radioYes.value){
        if (inputOverdraft.value < 100 || inputOverdraft.value > 2000){
            boxError.innerHTML = 'Overdraft must be between 100 and 2000 deposit must be greater or equals to 500';
        }else{
            sessionStorage.setItem('overdraft', inputOverdraft.value);
        }
    }
    if (inputSold.value < 500) {
        boxError.innerHTML = 'Overdraft must be between 100 and 2000 deposit must be greater or equals to 500';
    }else{
        sessionStorage.setItem('sold', inputSold.value); 
        location.href = 'withdraw.html';
    }
});

document.getElementById('open').addEventListener('click', function(){
    location.href = 'open.html';
});
document.getElementById('aggio').addEventListener('click',function(){
    location.href = 'agios.html';
});
document.getElementById('withdraw').addEventListener('click',function(){
    location.href = 'withdraw.html';
});