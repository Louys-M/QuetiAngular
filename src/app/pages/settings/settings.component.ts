import { Component } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms';
import { AuthService } from '../../Services/auth.service';
import { Router } from '@angular/router';
import { ChangeDetectorRef } from '@angular/core';


@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.css'
})
export class SettingsComponent {

    user: any; // Store user data here
    //ajouter un détecteur de changement qui permettra d'actualiser le component si changement
    private cd!: ChangeDetectorRef // Injecter le ChangeDetectorRef

    //on a besoin du service d'authentification pour savoir si on est connecté ou pas
    constructor(protected authService: AuthService, public router: Router) { }

    logout(): void {
      console.log("successfully disconnected");
      this.authService.logout();
      this.router.navigate(['/login']);
    }

    ngOnInit() {
      this.authService.getInfo().subscribe({
        next: (data) => {
          this.user = data; // Save user data
          console.log('User info:', this.user);
        },
        error: (err) => {
          console.error('Error fetching user info:', err);
        }
      });
  }
}
