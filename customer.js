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

}

customer.openAccount();