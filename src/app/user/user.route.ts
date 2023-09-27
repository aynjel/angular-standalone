import { Route } from '@angular/router';
import { UserViewComponent } from './user-view/user-view.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { UserListComponent } from './user-list/user-list.component';

export const USER_ROUTES: Route[] = [
    {
        path: '',
        component: UserListComponent,
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