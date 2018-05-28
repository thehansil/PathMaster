import { Component, OnInit } from '@angular/core';
import { Character } from '../../test-data/character';
import { CharacterService } from '../../services/character.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  characters: Character[];

  constructor(private charService: CharacterService) { }

  ngOnInit() {
    this.getCharacters();
  }

  private getCharacters(): void {
    this.charService.getCharacters().subscribe(res => this.characters = res);
  }

}
