import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-login',
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  mensagem: string = '';

  constructor(
    private httpClient: HttpClient
  ) { }

  form = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    senha: new FormControl('', [
      Validators.required,
      Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)
    ])
  });

  get f(): any {
    return this.form.controls;
  }

  onSubmit(): void {
    this.httpClient.post(environment.apiUsuarios + '/autenticar', this.form.value)
      .subscribe({
        next: (data) => {
          localStorage.setItem('auth', JSON.stringify(data));
          location.href = '/app/consulta-produtos';
        },
        error: (e) => {
          this.mensagem = e.error.errors[0];
          console.log(e);
        }
      })
  }
}
