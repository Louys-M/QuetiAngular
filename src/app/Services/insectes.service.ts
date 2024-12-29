import { Injectable } from '@angular/core';
import { Insecte } from '../models/insecte';
import { Observable, of, map } from 'rxjs';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InsectesService {

  constructor(private httpClient: HttpClient) {}

  // Méthode pour récupérer les insectes depuis une API
  getInsectesByAPI(): Observable<Insecte[]> {
    return this.httpClient.get<{ data: Insecte[] }>(`${environment.api_url}insects`).pipe(
      map(response => response.data) // Extrait le tableau d'insectes de la réponse
    );
  }

    // Méthode pour récupérer les insectes d'un ordre depuis une API
  getInsectesByOrderByAPI(id:number): Observable<Insecte[]> {
    return this.httpClient.get<{ data: Insecte[] }>(`${environment.api_url}triordres?ordre_id=`+id).pipe(
      map(response => response.data) // Extrait le tableau d'insectes de la réponse
    );
  }

}
