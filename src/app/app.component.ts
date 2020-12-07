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
  bookToEdit : Book;
  indiceBookToEdit : number;
  action : string

  setAction(action : string){
    this.action = action;
  }

  addBook(book : Book){
    this.books.push(book);
    this.setAction('');
    console.log(this.books);
  }

  deleteBook(indice : number){
    if(confirm("Êtes vous sûre de vouloir supprimer le livre :" + this.books[indice].titre)){
      this.books.splice(indice, 1);
    }
  }

  showEditBook(indice : number){
    //passer l'objet à modifier au composant Edit
    this.bookToEdit = this.books[indice];
    this.indiceBookToEdit = indice;
    this.setAction('edit');

  }

  editBook(book : Book){
    //Récupérer l'objet modifié afin de mettre à jour le tableau books -> le tableau HTML
    this.books[this.indiceBookToEdit] = book;
    this.setAction('');
  }

  ngOnInit(): void {
    this.books = [];
    this.action = '';
  }

  /*ngOnChanges(): void{

  }*/

}
