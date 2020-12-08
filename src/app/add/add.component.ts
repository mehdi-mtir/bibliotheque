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

  addBook(f : HTMLFormElement){
    /*let book = new Book(iban, titre, date_publication, prix);
    //envoyer le livre créé (book) vers le parent (app.component)
    this.addEvent.emit(book);*/
    console.log(f);
  }

  ngOnInit(): void {
  }

}
