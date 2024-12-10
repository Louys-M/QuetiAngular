import { Component } from '@angular/core';
import { RouterLinkActive } from '@angular/router';
import { Route, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-catalogue',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './catalogue.component.html',
  styleUrl: './catalogue.component.css'
})
export class CatalogueComponent {

}
