import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dice-roll',
  templateUrl: './dice-roll.component.html',
  styleUrls: ['./dice-roll.component.css']
})
export class DiceRollComponent implements OnInit {

  private readonly dice = ['d4', 'd6', 'd8', 'd10', 'd12', 'd20', 'd100'];

  private model = {
    numberOfDice: 1,
    sidesofDice: null,
    results: [],
  };

  constructor() { }

  ngOnInit() {
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

  private getRandomRoll(numberOfDice: number, sidesOfDice: string) {
    sidesOfDice = sidesOfDice.slice(1);
    const sides = parseInt(sidesOfDice, 10);
    let result = '' + Math.floor(numberOfDice).toString() + ' d' + sidesOfDice + ': ';
    let total = 0;
    if (numberOfDice === 1) {
        const current = Math.floor(Math.random() * (sides)) + 1;
        this.model.results.unshift(result + current.toString());
    } else {
        for (let i = 0; i < numberOfDice; ++i) {
            const current = Math.floor(Math.random() * (sides)) + 1;
            console.log(current);
            if (i === numberOfDice - 1) {
                result += current.toString() + '= ';
            } else {
                result += current.toString() + '+';
            }
            total += current;
        }
        this.model.results.unshift(result + total.toString());
    }
  }

  private clearDiceResults() {
    this.model.results = [];
  }
}


