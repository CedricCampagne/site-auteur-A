import { Routes } from '@angular/router';
import { Home } from './home/home';

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
        path: "books/:id",
        loadComponent: () => import('./books/book-details/book-details').then(m=>m.BookDetails)
    }
];
