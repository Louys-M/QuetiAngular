import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Famille } from '../../models/famille';
import { FamilleComponent } from '../../Queti/famille/famille.component';
import { FamillesService } from '../../Services/familles.service';

@Component({
  selector: 'app-resultat',
  standalone: true,
  imports: [FamilleComponent],
  templateUrl: './resultat.component.html',
  styleUrl: './resultat.component.css'
})
export class ResultatComponent {

    familles!: Famille[]
    filteredFamilles!: Famille[];
    resultId!: number;

    constructor(private famillesServices : FamillesService,
      private route: ActivatedRoute){}

    ngOnInit(): void{
      this.famillesServices.getFamillesByAPI().subscribe({
        next: (data) => { 
          this.familles = data, 
          // Filter families after fetching
          this.filterFamilies();
        },
        error: (err) => console.error('Erreur lors de la récupération des films', err),
        complete: () => console.log('Récupération des films terminée')
      });

      // Get query parameters
      this.route.queryParams.subscribe((params) => {
      this.resultId = +params['resultId']; // Convert to a number
      this.filterFamilies(); // Reapply filter if resultId changes
    });

  }

  private filterFamilies(): void {
    if (this.resultId && this.familles) {
      // Example: Filter families by a custom logic (e.g., ID, category, etc.)
      this.filteredFamilles = this.familles.filter(
        (famille) => famille.id === this.resultId
      );
    } else {
      this.filteredFamilles = this.familles; // Default to all families
    }
  }

}
