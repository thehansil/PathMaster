import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-initiative',
  templateUrl: './initiative.component.html',
  styleUrls: ['./initiative.component.css']
})
export class InitiativeComponent implements OnInit {
  private rolls: Array<object>;
  private model = {
    rolls: [],
  };

  constructor() { }

  ngOnInit() {
    this.model.rolls.push({name: 'Lance', roll: '1'});
    this.model.rolls.push({name: 'Misha', roll: '15'});
    this.model.rolls.push({name: 'Xavier', roll: '12'});
    this.model.rolls.push({name: 'Adria', roll: '20'});
    this.sort();
  }

  private add(name: string, roll: string) {
    this.model.rolls.push({name, roll});
    this.sort();
  }

  private sort() {
    this.model.rolls.sort(function (a, b) {
      const rollA = parseFloat(a.roll);
      const rollB = parseFloat(b.roll);
      if (rollA > rollB) { return -1; }
      if (rollA < rollB) { return 1; }
      return 0;
    });
  }

  private clearRolls() {
    this.model.rolls = [];
  }

  private clearRoll(name: string, roll: string) {
    const pos = this.model.rolls.map(function(e) { return e.name; }).indexOf(name);
    this.model.rolls.splice(pos, 1);
  }
}
