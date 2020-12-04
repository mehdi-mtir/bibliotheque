import { Component, OnInit } from '@angular/core';
import { Book } from './models/book';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  //books = new Array<Book>();
  books : Book[];

  addBook(iban : string, titre : string){
    let book = new Book(iban, titre);
    this.books.push(book);
    console.log(this.books);
  }

  deleteBook(indice : number){
    if(confirm("Êtes vous sûre de vouloir supprimer le livre :" + this.books[indice].titre)){
      this.books.splice(indice, 1);
    }
  }

  ngOnInit(): void {
    this.books = [];
  }

}
