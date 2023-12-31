import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { TodoComponent } from './todo/todo.component';
import { BmiComponent } from './bmi/bmi.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'todos',
    component: TodoComponent,
    loadChildren: () => import('./todo/todo.route').then(m => m.TODO_ROUTES),
  },
  {
    path: 'blog',
    component: BlogComponent,
    loadChildren: () => import('./blog/blog.route').then(m => m.BLOG_ROUTES),
  },
  {
    path: 'bmi',
    component: BmiComponent,
  },
  {
    path: 'users',
    component: UserComponent,
    loadChildren: () => import('./user/user.route').then(m => m.USER_ROUTES),
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.route').then(m => m.AUTH_ROUTES),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
