import { Injectable } from '@angular/core';
import { Insecte } from '../models/insecte';
import { Observable,of,map } from 'rxjs';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

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


  constructor(private httpClient : HttpClient) { }

  getInsectesByAPI(): Observable<Insecte[]> {
    //on utilise une requete HTTP GET et on utilise la variable d'environnement créée
  //on complète par la fin de l'url qui permet d'accéder aux datas
  return this.httpClient.get<{data: Insecte[]
  }>(environment.api_url+'insects')
  .pipe(map(response => response.data) // Extrait le tableau d'insectes de la réponse
  ); 
}
  

  getInsectesList(): Insecte[]{
    return this.insectes;
  }
}
