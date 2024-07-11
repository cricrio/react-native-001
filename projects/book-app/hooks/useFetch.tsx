import { useEffect, useState } from 'react';

export function useFetch<T>(url: string, skip: boolean = false) {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<T>();
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const reponse = await fetch(url);
        const data = await reponse.json();
        setData(data);
        setError(null);
      } catch (error: unknown) {
        if (typeof error === 'string') {
          setError(error as string);
        } else {
          setError(error?.message ?? 'Unknow error');
        }
      } finally {
        setLoading(false);
      }
    }

    if (!skip) {
      fetchData();
    }
  }, [url, skip]);

  if (loading) {
    return { loading: true };
  }

  return { data, loading: false, error };
}
