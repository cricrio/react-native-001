import type { Book, GoogleBook } from '@/types';

export function parseBook(book: GoogleBook): Book {
  return {
    id: book.id,
    title: book.volumeInfo.title,
    authors: book.volumeInfo.authors,
    publisher: book.volumeInfo.publisher,
    description: book.volumeInfo.description,
    images: {
      cover: book.volumeInfo.imageLinks?.medium,
      thumbnail: book.volumeInfo?.imageLinks?.thumbnail,
    },
    identifiers: book.volumeInfo.industryIdentifiers,
    publishedDate: book.volumeInfo.publishedDate,
  };
}
