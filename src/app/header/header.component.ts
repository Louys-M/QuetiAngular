import { Component } from '@angular/core';
import { Route, Router, RouterLink } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { RouterLinkActive } from '@angular/router';
// import { AuthService } from '../Services/auth.service';
// import { ChangeDetectorRef } from '@angular/core';  


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink,RouterOutlet, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  // //ajouter un détecteur de changement qui permettra d'actualiser le component si changement
  // private cd!: ChangeDetectorRef // Injecter le ChangeDetectorRef
  // //on a besoin du service d'authentification pour savoir si on est connecté ou pas
  // constructor(protected authService : AuthService, public router:Router) { }
  // logout():void{
  // this.authService.logout();
  // this.router.navigate(['/login']);
  // }
  }
