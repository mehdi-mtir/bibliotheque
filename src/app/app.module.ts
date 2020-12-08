import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EditComponent } from './edit/edit.component';
import { AddComponent } from './add/add.component';
import { MonnaiePipe } from './pipes/monnaie.pipe';

@NgModule({
  declarations: [
    AppComponent,
    EditComponent,
    AddComponent,
    MonnaiePipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
