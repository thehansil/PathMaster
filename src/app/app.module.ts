import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// Components
import { AppComponent } from './app.component';
import { DiceRollComponent } from './components/dice-roll/dice-roll.component';
import { PdfViewerComponent } from './components/dashboard/pdf-viewer/pdf-viewer.component';
import { CharactersComponent } from './components/characters/characters.component';
import { AppRoutingModule } from './app-routing.module';
import { InitiativeComponent } from './components/dashboard/initiative/initiative.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

// Services
import { CharacterService } from './services/character.service';


@NgModule({
  declarations: [
    AppComponent,
    DiceRollComponent,
    PdfViewerComponent,
    CharactersComponent,
    InitiativeComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [CharacterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
