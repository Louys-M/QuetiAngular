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


// // import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';
// import { InsectesService } from '../../Services/insectes.service';
// import { FamillesService } from '../../Services/familles.service';

// @Component({
//   selector: 'app-catalogue',
//   standalone: true,
//   templateUrl: './catalogue.component.html',
//   styleUrls: ['./catalogue.component.css'],
// })
// export class CatalogueComponent implements OnInit {
//   ordreID!: number;
//   insectes: any[] = [];
//   familles: any[] = [];

//   constructor(
//     private route: ActivatedRoute,
//     private insectesService: InsectesService,
//     private famillesService: FamillesService
//   ) {}

//   ngOnInit(): void {
//     this.route.paramMap.subscribe((params) => {
//       const id = params.get('ordreID');
//       if (id) {
//         this.ordreID = +id; // Convertir en nombre
//         this.loadFamilles();
//       }
//     });
//   }

//   // Charger les familles liées à cet ordre
//   loadFamilles(): void {
//     this.famillesService.getFamilles().subscribe({
//       next: (data) => {
//         // Filtrer les familles liées à cet ordre
//         this.familles = data.filter((famille) => famille.ordre_id === this.ordreID);
//         this.loadInsectes(); // Charger les insectes associés
//       },
//       error: (err) => console.error('Erreur lors de la récupération des familles', err),
//     });
//   }

//   // Charger les insectes liés aux familles
//   loadInsectes(): void {
//     this.insectesService.getInsectesByAPI().subscribe({
//       next: (data) => {
//         // Filtrer les insectes liés aux familles récupérées
//         this.insectes = data.filter((insecte) =>
//           this.familles.some((famille) => famille.id === insecte.famille_id)
//         );
//       },
//       error: (err) => console.error('Erreur lors de la récupération des insectes', err),
//     });
//   }
// }
