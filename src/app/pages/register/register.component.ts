import { Component } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms';
import { EmailValidator } from '@angular/forms';
import { AuthService } from '../../Services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  errorMessage:string = '';
  constructor(private authService : AuthService, private router : Router) { }
  async onSubmit(form: NgForm){
    console.log(form.value);
    try {
    await this.authService.register(form.value.name, form.value.email, form.value.password);
    console.log('register');
    this.router.navigate(['/login']); // Rediriger vers le login après le register réussi
    } catch (error:any) {
    console.log("Message : "+error);
    }
  }
}
