import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-area',
  template: `
    <div>
      <input type="text" [(ngModel)]="firstName" id="firstname" value="Coder">
      <input type="text" [(ngModel)]="lastName" id="lastname" value="Byte">
      <button (click)="generateUsername()">Generate</button>
      <span id="output">{{ username }}</span>
    </div>
  `,
  styles: []
})
export class MainAppComponent implements OnInit {
  firstName: string;
  lastName: string;
  username: string;

  ngOnInit() {
    this.firstName = 'Coder';
    this.lastName = 'Byte';
  }

  generateUsername() {
    const formattedFirstName = this.firstName.toLowerCase();
    const formattedLastName = this.lastName.toLowerCase();
    const randomInteger = Math.floor(Math.random() * 9) + 1;
    this.username = `${formattedFirstName}_${formattedLastName}_${randomInteger}`;
  }
}
