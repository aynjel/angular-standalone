import { Route } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfileEditComponent } from './profile-edit/profile-edit.component';

export const AUTH_ROUTES: Route[] = [
    {
        path: 'login',
        component: LoginComponent,
    },
    {
        path: 'register',
        component: RegisterComponent
    },
    {
        path: 'profile',
        component: ProfileComponent
    },
    {
        path: 'profile/edit',
        component: ProfileEditComponent
    },
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    }
]