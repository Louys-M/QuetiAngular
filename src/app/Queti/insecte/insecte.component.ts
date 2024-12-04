import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-insecte',
  standalone: true,
  imports: [],
  templateUrl: './insecte.component.html',
  styleUrl: './insecte.component.css'
})
export class InsecteComponent implements OnInit {
  id! : number;
  nom_sc! : string;
  nom_fr!: string;
  photo!: string;
  description!: string;

  ngOnInit(): void {
    this.id = 1;
    this.nom_sc = "Api Mellifeira";
    this.nom_fr= "Abeille Commune";
    this.photo = "../../assets/0428.jpg";
    this.description = "string";
  }

}
