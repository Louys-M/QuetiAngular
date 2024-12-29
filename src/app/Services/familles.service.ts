import { Injectable } from '@angular/core';
import { Famille } from '../models/famille';
import { Observable, of, map } from 'rxjs';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FamillesService {

  constructor(private httpClient: HttpClient) {}

    // Méthode pour récupérer les insectes depuis une API
    getFamillesByAPI(): Observable<Famille[]> {
      return this.httpClient.get<{ data: Famille[] }>(`${environment.api_url}familles`).pipe(
        map(response => response.data) // Extrait le tableau d'insectes de la réponse
      );
    }
}
