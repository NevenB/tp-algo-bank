class Compte {
    constructor (sold, overdraft) {
        this.sold = sold;
        this.overdraft = overdraft;
    }

    setOverdraft() {
        do {
            this.overdraft = parseInt(prompt('Saisissez le montant de votre découvert (0 si vous n\'avez pas droit au découvert)'));
            if (this.overdraft == 0) {
                alert("Vous n'avez pas droit au découvert");
                break;
            }
        } while (this.overdraft < 100 || this.overdraft > 2000);

        if (this.overdraft != 0) {
            alert('Vous avez droit au découvert');
        }
    }

    doWithdraw() {
        alert('Bienvenue chez GTM Bank');

        const withdraw = parseInt(prompt('Saississez le montant du retrait')); 
        
        if (withdraw > this.sold + this.overdraft) {
            alert("Solde insuffisant");
        } else {
            alert("Retrait autorisé");
            this.sold = this.sold - withdraw;
            alert("Le montant de votre solde est donc de " + this.sold + "€");
        }
    }
}

const compte1 = new Compte(1000, 500);
compte1.setOverdraft();
compte1.doWithdraw();