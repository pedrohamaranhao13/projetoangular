import { Routes } from '@angular/router';
import { LogoComponent } from './components/layout/logo/logo.component';
import { CriarUsuarioComponent } from './components/pages/criar-usuario/criar-usuario.component';
import { LoginComponent } from './components/pages/login/login.component';
import { ConsultaProdutosComponent } from './components/pages/consulta-produtos/consulta-produtos.component';
import { AuthGuard } from './guards/auth.guard';

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
        path: "app/consulta-produtos",
        component: ConsultaProdutosComponent,
        canActivate: [AuthGuard]
    },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'app/index'
    }
];
