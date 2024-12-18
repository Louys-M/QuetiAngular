import { Component } from '@angular/core';
import { AuthService } from '../../Services/auth.service';

@Component({
  selector: 'app-favoris',
  standalone: true,
  imports: [],
  templateUrl: './favoris.component.html',
  styleUrl: './favoris.component.css'
})
export class FavorisComponent {

  user: any; // Store user data here

  constructor(protected authService: AuthService) { }

  ngOnInit() {
    this.authService.getUserLikedInsect().subscribe({
      next: (data) => {
        this.user = data; // Save user data
        console.log('User insect:', this.user);
      },
      error: (err) => {
        console.error('Error fetching user info:', err);
      }
    });
}
}
