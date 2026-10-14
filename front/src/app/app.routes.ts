import { Routes } from '@angular/router';
import { AuthGuard } from './auth/guard/auth.guard';
import { AdminGuard} from './auth/guard/admin.guard';

export const routes: Routes = [
    {
        path: "",
        loadComponent: () => import('./home/home').then(m=>m.Home)
    },
    {
        path: "books",
        loadComponent: () => import('./books/books-list/books-list').then(m=>m.BooksList)
    },
    {
        path: "books/:id/:slug",
        loadComponent: () => import('./books/book-details/book-details').then(m=>m.BookDetails)
    },
    {
        path: "about",
        loadComponent: () => import('./about/about').then(m => m.About)
    },
    {
        path:"legal",
        loadComponent: () => import('./legal/legal').then(m => m.Legal)
    },
    {
        path:"contact",
        loadComponent: () => import('./contact/contact').then(m => m.Contact)
    },
    {
        path:"chronicles",
        loadComponent: () => import('./chronicles/chronicle-list/chronicle-list').then(m => m.ChronicleList)
    },
    {
        path:"chronicles/:id/:slug",
        canActivate: [AuthGuard],
        loadComponent: () => import('./chronicles/chronicle-details/chronicle-details').then(m => m.ChronicleDetails)
    },
    {
        path:"login",
        loadComponent: () => import('./auth/login/login').then(m =>m.Login)
    },
    {
        path:"register",
        loadComponent: ()=> import('./auth/register/register').then(m => m.Register)
    },
    {
        path: "admin",
        canActivate: [AdminGuard],
        loadComponent: () => import('./admin/admin-layout/admin-layout').then(m=>m.AdminLayout),
        children: [
            {
                path:"userList",
                loadComponent: ()=> import('./admin/users/user-list/user-list').then(m=>m.UserList)
            },
            {
                path:"user/:id",
                loadComponent: ()=> import('./admin/users/user-details/user-details').then(m =>m.UserDetails)
            },
            {
                path:"chroniclesList",
                loadComponent: () => import('./admin/chronicles/admin-chronicle-list/admin-chronicle-list').then(m=>m.AdminChronicleList)
            },
            {
                path:"chronicles/create",
                loadComponent: ()=> import('./admin/chronicles/admin-chronicle-create/admin-chronicle-create').then(m=>m.AdminChronicleCreate)
            },
            {
                path:"chronicles/:id",
                loadComponent: () => import('./admin/chronicles/admin-chronicle-details/admin-chronicle-details').then(m=>m.AdminChronicleDetails)
            }
        ]
    }

];

