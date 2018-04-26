import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// Components
import { AppComponent } from './app.component';
import { DiceRollComponent } from './dice-roll/dice-roll.component';
import { PdfViewerComponent } from './pdf-viewer/pdf-viewer.component';
import { CharactersComponent } from './characters/characters.component';
import { AppRoutingModule } from './/app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    DiceRollComponent,
    PdfViewerComponent,
    CharactersComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
