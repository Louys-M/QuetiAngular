import { Injectable } from '@angular/core';
import { Insecte } from '../models/insecte';

@Injectable({
  providedIn: 'root'
})
export class InsectesService {
  private insectes : Insecte[] = [
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


  constructor() { }

  getInsectesList(): Insecte[]{
    return this.insectes;
  }
}
