class Compte {
    constructor(sold, overdraft) {
        this.sold = sold;
        this.overdraft = overdraft;
    }
    doWithdraw(number) {
        this.sold = this.sold - number;
        return this.sold;
    }
}
const compte1 = new Compte(sessionStorage.getItem("sold"), sessionStorage.getItem("overdraft"));
const buttonElement = document.getElementById("sub");
buttonElement.addEventListener("click", withdraw);

document.getElementById("sold").innerHTML = compte1.sold;
document.getElementById("overdraft").innerHTML = compte1.overdraft;

function withdraw(e) {
    e.preventDefault();

    const inputElement = document.getElementById("number");
    let number = parseFloat(inputElement.value);

    sessionStorage.setItem("number", number);
    const errorSold = document.getElementById("errorSold");
 
    const isPossible = Number(compte1.sold) + Number(compte1.overdraft);
    console.log("Is possible : ", isPossible);
    if (number > isPossible) {
        errorSold.innerHTML = "Retrait refusé, pour solde insuffisant";
        console.log(`${number} > ${compte1.sold} + ${compte1.overdraft}`);
        console.log(number > compte1.sold + compte1.overdraft);
    } else {
        errorSold.innerHTML = "Retrait autorisé";
        const soldElement = document.getElementById("sold");
        // Je crée une variable pour mettre à jour le sold
        const newSold =  compte1.doWithdraw(number);
        // Affiche la nouvelle valeur du solde
        soldElement.textContent = newSold
        // Permet de stocker la valeur dans le session storage
        sessionStorage.setItem("sold", newSold);
    }
    inputElement.value="";
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