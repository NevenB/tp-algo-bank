const customer = {
    overdraft: 0,
    sold: 0,

    openAccount() {
        alert('Bienvenue chez GTM Bank');
        if (confirm("Voulez-vous avoir un décourvert ?")) {
            do {
                this.overdraft = parseInt(prompt("Saisissez le montant du découvert entre 100€ et 2000€"));
            } while (this.overdraft < 100 || this.overdraft > 2000);
            
            alert(`Vous avez choisit d\'avoir un découvert de ${this.overdraft}€`);
        }
        do {
            this.sold = parseInt(prompt("Saisissez le dépot (montant d'ouverture de compte minimum de 500€)"));
        } while (this.sold < 500);
        
        alert(`Solde (€): ${this.sold}€ \nDécouvert autorisé (€): ${this.overdraft}€`);
    },

    withdraw() {
        do {
            if (confirm("Voulez-vous effectuer un retrait ?")) {
                const w = parseInt(prompt('Saisissez le montant du retrait'));
                if (w > this.sold + this.overdraft) {
                    alert("Solde insuffisant");
                } else {
                    alert("Retrait autorisé");
                    this.sold -= w;
                    alert("Le montant de votre solde est donc de " + this.sold + "€");
                }
            }else{
                break;
            }

        } while (this.sold + this.overdraft > 0);
    },

    computeAgios() {
        let days;
        do {
            days = prompt('Saisissez le nombre de jours de découvert');
        } while (days < 1 || days > 365);

        const agios = ((Number(this.overdraft) * Number(days) * 0.1) / 365).toFixed(2); // decouvert * jours * 0.1 / 365
        alert(`Montant des agios ${agios}`);
    }
}

customer.openAccount();
customer.withdraw();
customer.computeAgios();