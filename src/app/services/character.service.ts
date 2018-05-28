import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Character } from '../test-data/character';
import { CHARACTERS } from '../test-data/mock-characters';
@Injectable()
export class CharacterService {

  constructor() { }

  getCharacters(): Observable<Character[]> {
    return of(CHARACTERS);
  }

}
