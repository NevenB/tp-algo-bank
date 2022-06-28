class Compte {
    constructor(sold, overdraft, withdraw) {
        this.sold = sold;
        this.overdraft = overdraft;
        this.withdraw = withdraw;
    }
    doWithdraw(number) {
        this.sold = this.sold - number;
        return this.sold;
    }
}
const compte1 = new Compte(3000, 1500, 1000);
const buttonElement = document.getElementById("sub");
buttonElement.addEventListener("click", withdraw);
function withdraw(e) {
    e.preventDefault();
    const inputElement = document.getElementById("number");
    let number = parseFloat(inputElement.value);
    sessionStorage.setItem("number", number);
    if (number > compte1.sold + compte1.overdraft) {
        alert("Solde insuffisant");
    } else {
        alert("Retrait autorisé");
        const soldElement = document.getElementById("sold");
        soldElement.textContent = compte1.doWithdraw(number);
    }
}
const btnOpen = document.getElementById("open");
const btnAggio = document.getElementById("aggio");
const btnWithdraw = document.getElementById("withdraw");


btnOpen.addEventListener("click", function (e) {
    e.preventDefault();
    location.href = 'open.html';
})
btnAggio.addEventListener("click", function (e) {
    e.preventDefault();
    location.href = 'agios.html';
})
btnWithdraw.addEventListener("click", function (e) {
    e.preventDefault();
    location.href = 'withdraw.html';
})