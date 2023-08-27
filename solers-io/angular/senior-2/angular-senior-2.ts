// @ts-ignore
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-area',
  template: `
    <div *ngIf="winner !== 'None'" id="winnerArea" className="winner">Winner: <span> {{ winner }}</span></div>
    <div id="statusArea" className="status">Next player: <span>{{ currentPlayer }}</span></div>
    <button (click)="resetBoard()">Reset</button>
    <section>
      <div class="row" *ngFor="let row of [0, 1, 2]; let rowIndex = index">
        <button 
          *ngFor="let col of [0, 1, 2]; let colIndex = index"
          class="square" 
          style="width:40px;height:40px;"
          [disabled]="board[rowIndex][colIndex] !== '' || winner !== 'None'"
          (click)="makeMove(rowIndex, colIndex)"
        >
          {{ board[rowIndex][colIndex] }}
        </button>
      </div>
    </section>
  `,
  styles: [
    '.square { margin: 5px; }'
  ]
})

export class MainAppComponent implements OnInit {
  currentPlayer: 'X' | 'O' | '' = 'X';
  winner: string = 'None';
  board: string[][] = [
    [ '', '', ''],
    [ '', '', ''],
    [ '', '', '']
  ];

  // code goes here
  ngOnInit() { 
    
  }

  makeMove(row: number, col: number): void {
    if(this.board[row][col] === ''){
      this.board[row][col] = this.currentPlayer;
      if(this.checkWinner(row, col)){
        this.winner = this.currentPlayer;
        this.currentPlayer = '';
      } else {
        this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
      }
    }
  }

  checkWinner(row: number, col: number): boolean {
    const currentPlayer = this.board[row][col];
    if (
      this.board[row][0] === currentPlayer &&
      this.board[row][1] === currentPlayer &&
      this.board[row][2] === currentPlayer
    ) {
      return true;
    }

    if (
      this.board[0][col] === currentPlayer &&
      this.board[1][col] === currentPlayer &&
      this.board[2][col] === currentPlayer
    ) {
      return true;
    }

    if (
      (
        this.board[0][0] === currentPlayer &&
        this.board[1][1] === currentPlayer &&
        this.board[2][2] === currentPlayer)
      || 
      (
        this.board[0][2] === currentPlayer &&
        this.board[1][1] === currentPlayer &&
        this.board[2][0] === currentPlayer
      )
    ) {
      return true;
    }
    return false;
  }

  resetBoard(){
    this.currentPlayer = 'X';
    this.winner = 'None';
    this.board = [
    [ '', '', ''],
    [ '', '', ''],
    [ '', '', '']
  ];
  }
}