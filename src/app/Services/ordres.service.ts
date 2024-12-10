import { Injectable } from '@angular/core';
import { Ordre } from '../models/ordre';
import { Observable,of,map } from 'rxjs';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrdresService {

  constructor(private httpClient : HttpClient) { }

  getOrdresByAPI(): Observable<Ordre[]> {
    //on utilise une requete HTTP GET et on utilise la variable d'environnement créée
  //on complète par la fin de l'url qui permet d'accéder aux datas
  return this.httpClient.get<{data: Ordre []
  }>(environment.api_url+'ordres')
  .pipe(map(response => response.data) // Extrait le tableau d'insectes de la réponse
  ); 
}

}
