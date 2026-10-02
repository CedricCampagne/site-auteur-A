import { Routes } from '@angular/router';

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
    }
];

