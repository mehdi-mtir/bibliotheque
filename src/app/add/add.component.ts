import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Book } from '../models/book';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  @Output() addEvent = new EventEmitter<Book>();

  constructor() { }

  addBook(iban : string, titre : string){
    let book = new Book(iban, titre);
    //envoyer le livre créé (book) vers le parent (app.component)
    this.addEvent.emit(book);
  }

  ngOnInit(): void {
  }

}
