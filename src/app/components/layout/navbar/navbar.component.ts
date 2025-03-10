import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {

  usuarioAutenticado: boolean = false;
  usuarioNome: string = '';
  usuarioEmail: string = '';

  ngOnInit(): void {
      const auth = localStorage.getItem('auth');
      if(auth != null) {
        const usuario = JSON.parse(auth);
        this.usuarioAutenticado = true;
        this.usuarioNome = usuario.nome;
        this.usuarioEmail = usuario.email;
      }
  }

  logout(): void {
    if(confirm('Deseja realmente sair do sistema?')) {
      localStorage.removeItem('auth');

      location.href = '/app/login';
    }
  }
}
