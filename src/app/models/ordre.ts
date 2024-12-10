export class Ordre {
    //décalration des propriétés du model insecte
    id: number;
    nom_ordre: string;

    //permet d'initialiser une instance de Insecte
    constructor(
    id: number,
    nom_ordre: string,
    ) {
    this.id = id;
    this.nom_ordre = nom_ordre;
    }
}