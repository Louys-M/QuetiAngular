export class Insecte {
    //décalration des propriétés du model Video
    id: number;
    nom_sc: string;
    nom_fr: string;
    photo: string;
    description: string;

    //permet d'initialiser une instance de Video
    constructor(
    id: number,
    nom_sc: string,
    nom_fr: string,
    photo: string,
    description: string
    ) {
    this.id = id;
    this.nom_sc = nom_sc;
    this.nom_fr = nom_fr;
    this.photo = photo;
    this.description = description;
    }
}
