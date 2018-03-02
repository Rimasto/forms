import { Component, OnInit } from '@angular/core';
import { BookModule } from '../book.module';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent implements OnInit {

  model = new BookModule(1, '', '', 'http://');
  constructor() { }

  ngOnInit() {
  }

  get currentBook() {
    return JSON.stringify(this.model);
  }

}
