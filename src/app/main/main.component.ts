import { Component } from '@angular/core';
import { InsecteComponent } from '../Queti/insecte/insecte.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [InsecteComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

}
