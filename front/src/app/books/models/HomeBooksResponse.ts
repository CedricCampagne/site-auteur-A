import { BookCard } from "./bookCard";
import { BookLatest } from "./BookLatest";

export interface HomeBooksResponse {
    latestBook: BookLatest;
    otherBooks: BookCard[];
}