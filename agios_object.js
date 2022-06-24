class Aggio {
    constructor() {
        this.overdraft = 0;
        this.day =0;
        this.agios =0;
    }
    calc() {

        let overdraft = 0;
        let day = 0;
        let agios = 0;

        do {
            overdraft = prompt('Saisissez le montant du découvert autorisé, il est compris entre 100€ et 2000€');
            day = prompt('Saisissez le nombre de jours de découvert, il est compris entre 1 et 31 jours');

        } while (overdraft > 2000 || overdraft < 100 || day < 1 || day > 365);

        this.overdraft = overdraft;
        this.day = day;

        agios = (parseInt(overdraft) * parseInt(day) * 0.1) / 365;
        agios = agios.toFixed(2);

        this.agios = agios;

        document.write(`Le montant de vos agios de : ${agios} € pour ${day} jour(s)`);

        console.log('Le nombre de jours convient à la condition comprise entre 1 et 365');

    }
   
}
const test = new Aggio()
test.calc()