import { Component } from '@angular/core';
import { InsecteComponent } from '../Queti/insecte/insecte.component';
import { Insecte } from '../models/insecte';
import { InsectesService } from '../Services/insectes.service';

@Component({
  selector: 'app-insecte-list',
  standalone: true,
  imports: [InsecteComponent],
  templateUrl: './insecte-list.component.html',
  styleUrl: './insecte-list.component.css'
})
export class InsecteListComponent {

  insectes!: Insecte[]

  constructor(private insectesServices : InsectesService){
    // this.insectes = this.insectesServices.getInsectesList();
  }

  ngOnInit(): void{
    this.insectesServices.getInsectesByAPI().subscribe({
      next: (data) => this.insectes = data,
      error: (err) => console.error('Erreur lors de la récupération des films', err),
      complete: () => console.log('Récupération des films terminée')
    })
}

}