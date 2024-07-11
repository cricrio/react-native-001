import { GOOGLE_BOOK_API_URL } from '@/constants/api';
import type { Book, GoogleBook } from '@/types';
import { useEffect, useState } from 'react';
import { useFetch } from './useFetch';
import { parseBook } from './utils';

export function useFetchBooks(query?: string) {
  const url = `${GOOGLE_BOOK_API_URL}?q=${query}`;
  const { data, error, loading } = useFetch<{ items: Array<GoogleBook> }>(
    url,
    !query
  );
  const books = data?.items ?? [];
  return {
    books: books.map(parseBook),
    loading,
    error,
  };
}
