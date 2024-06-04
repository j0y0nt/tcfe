import { Routes } from '@angular/router';
import { DesignTacosComponent } from './design-tacos/design-tacos.component';
import { RecentTacosComponent } from './recent-tacos/recent-tacos.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { isAuthenticatedGuard } from './is-authenticated.guard';

export const routes: Routes = [{
    path:   '',
    component: RecentTacosComponent,
    title: 'Recent Tacos'
    },
    {
        path:   'design',
        component: DesignTacosComponent,
        title: 'Design Tacos',
        canActivate: [isAuthenticatedGuard]
    },
    {
        path: 'login',
        component: LoginComponent,
        title: 'Login'
    },
    {
        path: 'register',
        component: RegisterComponent,
        title: 'Register'
    },
];
