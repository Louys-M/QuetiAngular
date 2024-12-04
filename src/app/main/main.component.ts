import { Component } from '@angular/core';
import { InsecteComponent } from '../Queti/insecte/insecte.component';
import { Insecte } from '../models/insecte';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [InsecteComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  //déclaration de la propriété
  Insecte1! : Insecte;

  ngOnInit(): void{
    this.Insecte1 = new Insecte(
      1,
      "Api Mellifeira",
      "Abeille Commune",
      "../assets/0428.jpg",
      "bébou"
    )
  }
}
