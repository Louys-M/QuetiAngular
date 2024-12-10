import { Component,OnInit,Input } from '@angular/core';
import { Ordre } from '../../models/ordre';
import { RouterLinkActive } from '@angular/router';
import { Route, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-ordre',
  standalone: true,
  imports:[RouterLink, RouterLinkActive],
  templateUrl: './ordre.component.html',
  styleUrl: './ordre.component.css'
})
export class OrdreComponent {


  @Input() ordre!: Ordre;
    id! : number;
    nom_ordre! : string;


}
