export interface Book {
  id: string;
  title: string;
  authors: string[];
  publisher: string;
  description: string;
  publishedDate: string;
  images: {
    thumbnail?: string;
    cover?: string;
  };
  identifiers: Array<{ type: string; identifier: string }>;
}

export interface GoogleBook {
  id: string;
  volumeInfo: {
    title: string;
    description: string;
    authors: string[];
    publisher: string;
    publishedDate: string;
    industryIdentifiers: Array<{ type: string; identifier: string }>;
    imageLinks?: {
      thumbnail?: string;
      medium?: string;
    };
  };
}
