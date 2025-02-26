import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/layout/navbar/navbar.component';
import { CriarUsuarioComponent } from './components/pages/criar-usuario/criar-usuario.component';
import { LoginComponent } from './components/pages/login/login.component';
import { LogoComponent } from './components/layout/logo/logo.component';
import { RodapeComponent } from './components/layout/rodape/rodape.component';

@Component({
  selector: 'app-root',
  imports: [
    CommonModule,
    RouterOutlet,
    NavbarComponent,
    LoginComponent,
    CriarUsuarioComponent,
    LogoComponent,
    RodapeComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'projetoWebAngular';
}
