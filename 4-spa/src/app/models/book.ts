export class BookViewModel {
  Author: string;
  Cover: string;
  Rating: number;
  Slug: string;
  Synopsis: string;
  Title: string;
  UpVoted: boolean;
  UpVotes: number;

  constructor(data: APIBook) {
    this.Author = data.author;
    this.Cover = data.cover;
    this.Rating = data.rating;
    this.Slug = data.slug;
    this.Synopsis = data.synopsis;
    this.Title = data.title;
    this.UpVoted = data.upvoted;
    this.UpVotes = data.upvotes;
  }
}

export class APIBook {
  author: string;
  cover: string;
  rating: number;
  slug: string;
  synopsis: string;
  title: string;
  upvoted: boolean;
  upvotes: number;
}

export class BooksResponse {
  books: APIBook[];
  meta: Array<{count: number}>;
}

export class BookResponse { }
