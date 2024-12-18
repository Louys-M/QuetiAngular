import { Component, OnInit,Input } from '@angular/core';
import { Insecte } from '../../models/insecte';
import { RouterLinkActive } from '@angular/router';
import { Route, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-insecte',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
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
