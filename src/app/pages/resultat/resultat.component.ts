import { Component } from '@angular/core';
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

    constructor(private famillesServices : FamillesService){}

    ngOnInit(): void{
      this.famillesServices.getFamillesByAPI().subscribe({
        next: (data) => this.familles = data,
        error: (err) => console.error('Erreur lors de la récupération des films', err),
        complete: () => console.log('Récupération des films terminée')
      })
  }

}
