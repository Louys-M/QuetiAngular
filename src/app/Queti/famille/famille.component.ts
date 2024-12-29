import { Component,Input } from '@angular/core';
import { Famille } from '../../models/famille';

@Component({
  selector: 'app-famille',
  standalone: true,
  imports: [],
  templateUrl: './famille.component.html',
  styleUrl: './famille.component.css'
})
export class FamilleComponent {

    @Input() famille!: Famille;

    id!: number;
    nom_famille!: string;
    photo!: string;
    description1!: string;
    description2!: string;
  
}
