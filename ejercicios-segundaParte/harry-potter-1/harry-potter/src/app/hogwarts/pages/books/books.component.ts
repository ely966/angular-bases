import { Component, OnInit, inject } from '@angular/core';
import { Book } from '../../interfaces/book.interface';
import { ApiHogwartsService } from '../../services/api-hogwarts.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrl: './books.component.css',
})
export class BooksComponent implements OnInit {
  /*Title of page*/
  titleBooks: string = 'BOOKS';
  /*Titles of table*/
  headersBooks: string[] = [
    'number',
    'title',
    'originalTitle',
    'releaseDate',
    'description',
    'pages',
    'cover',
    'index',
  ];

  /*Books*/
  books: Book[] = [];

  /*Connection with the service*/
  private apiHogwatsService = inject(ApiHogwartsService);

  ngOnInit(): void {
    this.getBooks();
  }

  /*Receiver the books*/

  getBooks() {
    this.apiHogwatsService.getBooks().subscribe({
      next: (booksReceiver) => {
        this.books = booksReceiver;
      },
    });
  }
}
