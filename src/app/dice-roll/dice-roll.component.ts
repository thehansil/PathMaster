import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-dice-roll',
  templateUrl: './dice-roll.component.html',
  styleUrls: ['./dice-roll.component.css']
})
export class DiceRollComponent implements OnInit {

  private dice = [];

  private model = {
    numberOfDice: 0,
    sidesofDice: null,
  };

  private results = [];

  constructor() { }

  ngOnInit() {
    this.dice = ['d4', 'd6', 'd8', 'd10', 'd12', 'd20'];
    this.model.numberOfDice = 1;
    this.model.sidesofDice = this.dice[0];
  }

  public rollDice(numberOfDice: number, sidesOfDice: number): number {
    let total = 0;
    for (let i = 0; i < numberOfDice; ++i) {
      total += Math.floor(Math.random() * (sidesOfDice)) + 1;
    }
    return total;
  }

  public getRandomRoll(numberOfDice: number, sidesOfDice: string) {
    sidesOfDice = sidesOfDice.slice(1);
    const sides = parseInt(sidesOfDice, 10);
    let result = '' + Math.floor(numberOfDice).toString() + ' d' + sidesOfDice + ': ';
    let total = 0;
    if (numberOfDice === 1) {
        const current = Math.floor(Math.random() * (sides)) + 1;
        this.results.unshift(result + current.toString());
    } else {
        for (let i = 0; i < numberOfDice; ++i) {
            // The maximum is exclusive and the minimum is inclusive
            const current = Math.floor(Math.random() * (sides)) + 1;
            console.log(current);
            if (i === numberOfDice - 1) {
                result += current.toString() + '= ';
            } else {
                result += current.toString() + '+';
            }
            total += current;
        }
        this.results.unshift(result + total.toString());
    }
  }

  private clearDiceResults() {
    this.results = [];
  }
}


