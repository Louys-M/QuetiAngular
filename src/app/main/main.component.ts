import { Component } from '@angular/core';
import { InsecteListComponent } from '../insecte-list/insecte-list.component';
import { InsecteComponent } from '../Queti/insecte/insecte.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [InsecteListComponent, InsecteComponent, RouterOutlet],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  
}
