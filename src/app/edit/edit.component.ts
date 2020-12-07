import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Book } from '../models/book';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  @Input("book") book;
  @Output() edition = new EventEmitter<Book>();

  constructor() { }

  editBook(iban : string, titre : string ){
    //creer un objet Book
    let bookEdited = new Book(iban, titre);
    //Envoyer l'objet modifié à la liste pour affichage
    this.edition.emit(bookEdited);
  }

  ngOnInit(): void {
  }

}
