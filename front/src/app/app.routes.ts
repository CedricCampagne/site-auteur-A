import { Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';

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
    }
];

