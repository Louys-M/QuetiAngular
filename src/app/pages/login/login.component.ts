import { Component } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms';
import { EmailValidator } from '@angular/forms';
import { AuthService } from '../../Services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  errorMessage:string = '';
  constructor(private authService : AuthService, private router : Router) { }
  async onSubmit(form: NgForm){
  console.log(form.value);
  try {
  await this.authService.login(form.value.email, form.value.password);
  console.log('connecté');
  this.router.navigate(['/home']); // Rediriger vers le tableau de bord après la connexion réussie
  } catch (error:any) {
  console.log("Message : "+error);
  }
  }
}
