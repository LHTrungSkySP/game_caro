import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board-game',
  standalone: true,
  imports: [],
  templateUrl: './board-game.component.html',
  styleUrl: './board-game.component.scss'
})
export class BoardGameComponent implements OnInit {
  NUMBER_ROW: number = 5;
  NUMBER_COL: number = 5;

  board: Row[] = [];

  playerCurrent = 1;
  constructor() { }
  ngOnInit() {
    this.board = this.initBoard(this.NUMBER_ROW, this.NUMBER_COL);
  }
  initBoard(number_row: number, number_col: number) {
    let board = [];
    for (let idx_row = 0; idx_row < number_row; idx_row++) {
      let row: Row = { id: idx_row, cells: [] };
      for (let idx_col = 0; idx_col < number_col; idx_col++) {
        let cell: Cell = {
          id: idx_row * number_row + idx_col,
          x: idx_col,
          y: idx_row,
          value: ''
        };
        row.cells.push(cell);
      }
      board.push(row);
    }
    return board;
  }
  markCell(y: number, x: number) {
    if (this.playerCurrent === 1) {
      this.board[y].cells[x].value = 'X';
      this.playerCurrent = 2;
    }
    else if (this.playerCurrent === 2) {
      this.board[y].cells[x].value = 'O';
      this.playerCurrent = 1;
    }
  }
}
type Cell = {
  id: number,
  x: number,
  y: number,
  value: string
}
type Row = {
  id: number,
  cells: Cell[]
}
