import { Component } from '@angular/core';
import { InsecteComponent } from '../Queti/insecte/insecte.component';
import { Insecte } from '../models/insecte';

@Component({
  selector: 'app-insecte-list',
  standalone: true,
  imports: [InsecteComponent],
  templateUrl: './insecte-list.component.html',
  styleUrl: './insecte-list.component.css'
})
export class InsecteListComponent {
  //déclaration de la propriété
  lesInsectes!: Insecte[];

  ngOnInit(): void{
    this.lesInsectes = [
    new Insecte(
      1,
      "Api Mellifeira",
      "Abeille Commune",
      "../assets/0428.jpg",
      "bébou"
    ),
    new Insecte(
      2,
      "Je coco pas de nom scientifique",
      "Coccinelle",
      "../assets/0428.jpg",
      "bébou 2"
    ),
    new Insecte(
      3,
      "GRR",
      "AAA",
      "../assets/0428.jpg",
      ">;("
    )
]
}

}