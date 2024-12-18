import { Injectable } from '@angular/core';
import { Insecte } from '../models/insecte';
import { Observable, of, map } from 'rxjs';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InsectesService {
  private insectes: Insecte[] = [
    new Insecte(
      1,
      "Api Mellifeira",
      "Abeille Commune",
      "../assets/0428.jpg",
      "bébou",
      1 // famille_id = 1
    ),
    new Insecte(
      2,
      "Je coco pas de nom scientifique",
      "Coccinelle",
      "../assets/0428.jpg",
      "bébou 2",
      2 // famille_id = 2
    ),
    new Insecte(
      3,
      "GRR",
      "AAA",
      "../assets/0428.jpg",
      ">;(",
      3 // famille_id = 3
    )
  ];

  constructor(private httpClient: HttpClient) {}

  // Méthode pour récupérer les insectes depuis une API
  getInsectesByAPI(): Observable<Insecte[]> {
    return this.httpClient.get<{ data: Insecte[] }>(`${environment.api_url}insects`).pipe(
      map(response => response.data) // Extrait le tableau d'insectes de la réponse
    );
  }

  getInsectesByOrderByAPI(id:number): Observable<Insecte[]> {
    return this.httpClient.get<{ data: Insecte[] }>(`${environment.api_url}triordres?ordre_id=`+id).pipe(
      map(response => response.data) // Extrait le tableau d'insectes de la réponse
    );
  }

  // Méthode pour récupérer les insectes depuis les données statiques
  getInsectesList(): Insecte[] {
    return this.insectes;
  }
}
