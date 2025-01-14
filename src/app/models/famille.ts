export class Famille {
//décalration des propriétés du model famille
    id: number;
    nom_famille: string;
    photo: string;
    description1: string;
    description2: string;
    ordre_id: number;
    tpa_id: number;
    tpp_id: number;
    npa_id: number;
    ta_id: number;
    taa_id: number;
    tar_id: number;
    nc_id: number;
    tc_id: number;
    fc_id: number;
    thab_id: number;

    //permet d'initialiser une instance de Famille
    constructor(
    id: number,
    nom_famille: string,
    photo: string,
    description1: string,
    description2: string,
    ordre_id: number,
    tpa_id: number,
    tpp_id: number,
    npa_id: number,
    ta_id: number,
    taa_id: number,
    tar_id: number,
    nc_id: number,
    tc_id: number,
    fc_id: number,
    thab_id: number

    ) {
    this.id = id;
    this.nom_famille = nom_famille;
    this.photo = photo;
    this.description1 = description1;
    this.description2 = description2;
    this.ordre_id = ordre_id;
    this.tpa_id = tpa_id;
    this.tpp_id = tpp_id;
    this.npa_id = npa_id;
    this.ta_id = ta_id;
    this.taa_id = taa_id;
    this.tar_id = tar_id;
    this.nc_id = nc_id;
    this.tc_id = tc_id;
    this.fc_id = fc_id;
    this.thab_id = thab_id;
    }
}
