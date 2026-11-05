export interface BookDetails {
  id: number;
  title: string;
  slug: string;
  author: string;
  summary: string;
  excerpt: string;
  publishedAt: string;
  publisher: string | null;
  genre: string | null;
  coverUrl: string;
}