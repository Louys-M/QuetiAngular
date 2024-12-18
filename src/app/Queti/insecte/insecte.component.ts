import { Component, OnInit,Input } from '@angular/core';
import { Insecte } from '../../models/insecte';
import { RouterLinkActive } from '@angular/router';
import { Route, Router, RouterLink } from '@angular/router';
import { AuthService } from '../../Services/auth.service';

@Component({
  selector: 'app-insecte',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './insecte.component.html',
  styleUrl: './insecte.component.css'
})
export class InsecteComponent {

  user: any; // Store user data here

  constructor(protected authService: AuthService) { }

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

  @Input() insecte!: Insecte;

  id! : number;
  nom_sc! : string;
  nom_fr!: string;
  photo!: string;
  description!: string;

}
