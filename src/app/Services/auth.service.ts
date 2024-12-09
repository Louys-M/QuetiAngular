import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private router: Router) { }
  url : string = "" ;
  token: string | null = null;
  is_connected = false;
  error: string = '';
  //utilisation d’un BehaviorSubject pour créer une reaction lors du changement de valeur sur d’autres components
  private loggedIn = new BehaviorSubject<boolean>(this.isAuthenticated());

  async register(name: string, email: string, password: string) {
    this.url = environment.api_url + 'register';
    const response = await fetch(this.url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, email, password })
    });
    const data = await response.json();
    console.log(data.message);

    this.error = data.message;
    if (response.ok) {
      console.log('register réussi');
      //rediection vers la page d'accueil quand connecté
      this.router.navigate(['/login']);
  }
}

  async login(email: string, password: string) {
    this.url = environment.api_url + 'login';
    const response = await fetch(this.url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    });
    const data = await response.json();
    console.log(data.message);

    this.error = data.message;
    if (response.ok) {
      this.token = data.access_token;
      console.log(this.token);
      this.is_connected = true;
      if (this.token != null) {
        //enregistrement du token dans le localStorage
        localStorage.setItem('authToken', this.token);
        //mise à jour du BehaviorSubject, pour pouvoir faire réagir les autres component au changement
        this.loggedIn.next(true); // Met à jour l'état après connexion
        console.log('connexion réussie');
        //rediection vers la page d'accueil quand connecté
        this.router.navigate(['/home']);
      };
    }
    else {
      this.error = 'connexion impossible'; /// connexion impossible, et pourtant connecté...
      console.log(this.error);
    }
  }
  getToken(): string | null {
    return localStorage.getItem('authToken');
  }
  logout() {
    this.token = null;
    this.is_connected = false;
    console.log('deconnexion reussie');
    //on efface de token lors de la déconnexion
    localStorage.removeItem('authToken');
    //on met à jour la valeur du BehaviorSubject
    this.loggedIn.next(false);
    //Redirection vers la page de login
    this.router.navigate(['/login']);
  }
  isAuthenticated(): boolean {
    return !!localStorage.getItem('authToken');
  }
}