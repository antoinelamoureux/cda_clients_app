export class Client {
    id: number;
    nom: string;
    prenom: string;
    solde: number;
    dateInscription: number;

    constructor(id: number, nom: string, prenom: string, solde: number, dateInscription: number) {
        this.id = id;
        this.nom = nom;
        this.prenom = prenom;
        this.solde = solde;
        this.dateInscription = dateInscription;
    }
}