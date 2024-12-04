import { Component, OnInit,Input } from '@angular/core';
import { Insecte } from '../../models/insecte';

@Component({
  selector: 'app-insecte',
  standalone: true,
  imports: [],
  templateUrl: './insecte.component.html',
  styleUrl: './insecte.component.css'
})
export class InsecteComponent {

  @Input() insecte!: Insecte;

  id! : number;
  nom_sc! : string;
  nom_fr!: string;
  photo!: string;
  description!: string;

}
