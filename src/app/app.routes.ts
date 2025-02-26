import { Routes } from '@angular/router';
import { LogoComponent } from './components/layout/logo/logo.component';
import { CriarUsuarioComponent } from './components/pages/criar-usuario/criar-usuario.component';
import { LoginComponent } from './components/pages/login/login.component';

export const routes: Routes = [
    {
        path: "app/login",
        component: LoginComponent
    },
    {
        path: "app/criar-usuario",
        component: CriarUsuarioComponent
    },
    {
        path: "app/index",
        component: LogoComponent
    },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'app/index'
    }
];
