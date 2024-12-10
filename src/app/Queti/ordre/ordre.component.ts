import { Component,OnInit,Input } from '@angular/core';
import { Ordre } from '../../models/ordre';

@Component({
  selector: 'app-ordre',
  standalone: true,
  imports: [],
  templateUrl: './ordre.component.html',
  styleUrl: './ordre.component.css'
})
export class OrdreComponent {


  @Input() ordre!: Ordre;
    id! : number;
    nom_ordre! : string;


}
