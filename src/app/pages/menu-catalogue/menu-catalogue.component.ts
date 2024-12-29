import { Component } from '@angular/core';
import { OrdreComponent } from '../../Queti/ordre/ordre.component';
import { Ordre } from '../../models/ordre';
import { OrdresService } from '../../Services/ordres.service';
import { RouterLinkActive } from '@angular/router';
import { Route, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-menu-catalogue',
  standalone: true,
  imports:[RouterLink, RouterLinkActive,OrdreComponent],
  templateUrl: './menu-catalogue.component.html',
  styleUrl: './menu-catalogue.component.css'
})
export class MenuCatalogueComponent {

  ordres!: Ordre[]

  constructor(private ordresServices : OrdresService){}

  ngOnInit(): void{
    this.ordresServices.getOrdresByAPI().subscribe({
      next: (data) => this.ordres = data,
      error: (err) => console.error('Erreur lors de la récupération des films', err),
      complete: () => console.log('Récupération des films terminée')
    })
}

}
