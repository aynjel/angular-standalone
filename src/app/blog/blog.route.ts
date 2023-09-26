import { Route } from '@angular/router';
import { BlogComponent } from './blog.component';
import { CreateBlogComponent } from './create-blog/create-blog.component';
import { BlogViewComponent } from './blog-view/blog-view.component';

export const BLOG_ROUTES: Route[] = [
    {
        path: 'blog',
        component: BlogComponent,
    },
    {
        path: 'create',
        component: CreateBlogComponent
    },
    {
        path: ':id',
        component: BlogViewComponent
    }
]