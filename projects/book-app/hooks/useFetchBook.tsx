import { GOOGLE_BOOK_API_URL } from '@/constants/api';
import { useFetch } from './useFetch';
import type { GoogleBook } from '@/types';
import { parseBook } from './utils';

export function useFetchBook(id?: string) {
  const url = `${GOOGLE_BOOK_API_URL}/${id}`;
  const { data, error, loading } = useFetch<GoogleBook>(url, !id);
  return {
    book: data ? parseBook(data) : null,
    loading,
    error,
  };
}
