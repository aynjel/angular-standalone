import { Route } from '@angular/router';
import { TodosComponent } from './todos/todos.component';
import { TodoCreateComponent } from './todo-create/todo-create.component';
import { TodoEditComponent } from './todo-edit/todo-edit.component';

export const TODO_ROUTES: Route[] = [
    {
        path: '',
        component: TodosComponent
    },
    {
        path: 'create',
        component: TodoCreateComponent
    },
    {
        path: 'edit/:id',
        component: TodoEditComponent
    }
]