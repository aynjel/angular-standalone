import { Route } from '@angular/router';
import { UserViewComponent } from './user-view/user-view.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { UserComponent } from './user.component';

export const USER_ROUTES: Route[] = [
    {
        path: 'users',
        component: UserComponent,
    },
    {
        path: 'create',
        component: CreateUserComponent
    },
    {
        path: ':id',
        component: UserViewComponent
    }
]