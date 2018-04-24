import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// Components
import { AppComponent } from './app.component';
import { DiceRollComponent } from './dice-roll/dice-roll.component';
import { PdfViewerComponent } from './pdf-viewer/pdf-viewer.component';


@NgModule({
  declarations: [
    AppComponent,
    DiceRollComponent,
    PdfViewerComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
