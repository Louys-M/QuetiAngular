import { Component } from '@angular/core';
import { AuthService } from '../../Services/auth.service';
import { Insecte } from '../../models/insecte';
import { InsecteComponent } from "../../Queti/insecte/insecte.component";

@Component({
  selector: 'app-favoris',
  standalone: true,
  imports: [InsecteComponent],
  templateUrl: './favoris.component.html',
  styleUrl: './favoris.component.css'
})
export class FavorisComponent {

  likedInsects: number[] = [];
  insectesFav: Insecte[] = [];
  allInsects: Insecte[] = []; 

  constructor(protected authService: AuthService) { }

  ngOnInit():void {
    this.fetchAllInsects();
    
    this.authService.getUserLikedInsect().subscribe((likedInsects) => {
      this.insectesFav = this.allInsects.filter((insect) =>
        likedInsects.has(insect.id)
      );
    });
    // Fetch liked insects on initialization
    this.authService.fetchLikedInsects();
  }

  private fetchAllInsects(): void {
    this.authService.getAllInsects().subscribe((insects) => {
      this.allInsects = insects;
    });
  }
}
