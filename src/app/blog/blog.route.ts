import { Route } from '@angular/router';
import { CreateBlogComponent } from './create-blog/create-blog.component';
import { BlogViewComponent } from './blog-view/blog-view.component';
import { BlogListComponent } from './blog-list/blog-list.component';
import { BlogEditComponent } from './blog-edit/blog-edit.component';

export const BLOG_ROUTES: Route[] = [
    {
        path: '',
        component: BlogListComponent,
    },
    {
        path: 'create',
        component: CreateBlogComponent
    },
    {
        path: ':id',
        component: BlogViewComponent
    },
    {
        path: 'edit/:id',
        component: BlogEditComponent
    }
]