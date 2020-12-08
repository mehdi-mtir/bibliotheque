import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Book } from '../models/book';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  @Output() addEvent = new EventEmitter<Book>();

  constructor() { }

  addBook(f : NgForm){
    let book = new Book(f.value.iban, f.value.titre, f.value.date_publication, f.value.prix);

    //envoyer le livre créé (book) vers le parent (app.component)
    this.addEvent.emit(book);
    //console.log(f);
  }

  ngOnInit(): void {
  }

}
