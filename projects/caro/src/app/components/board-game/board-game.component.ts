import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board-game',
  standalone: true,
  imports: [],
  templateUrl: './board-game.component.html',
  styleUrl: './board-game.component.scss'
})
export class BoardGameComponent implements OnInit {
  NUMBER_ROW: number = 25;
  NUMBER_COL: number = 25;

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
          value: '',
          playerNo: null
        };
        row.cells.push(cell);
      }
      board.push(row);
    }
    return board;
  }
  markCell(y: number, x: number) {
    if (!this.board[y].cells[x].playerNo) { // chưa ai đánh
      if (this.playerCurrent === 1) {
        this.board[y].cells[x].value = 'X';
        this.playerCurrent = 2;
      }
      else if (this.playerCurrent === 2) {
        this.board[y].cells[x].value = 'O';
        this.playerCurrent = 1;
      }
      this.board[y].cells[x].playerNo = this.playerCurrent;
      this.checkWin(x,y,this.playerCurrent);
    }
  }
  checkWin(x: number, y: number, playerNo: number) {
    // check dọc
    /// check trên
    let count = 1;
    for (let idx = 1; count !== 5; idx++) {
      if (this.board[y + idx].cells[x].playerNo === playerNo) {
        count++;
      }
      else{
        break;
      }
    }
    /// check dưới
    for (let idx = 1; count !== 5; idx++) {
      if (this.board[y - idx].cells[x].playerNo === playerNo) {
        count++;
      }
      else{
        break;
      }
    }
    if(count === 5){
      alert(playerNo + " win");
    }
    // check chéo
    /// check nghiêng phải
    /// check nghiêng trái
  }
}
type Cell = {
  id: number,
  x: number,
  y: number,
  value: string,
  playerNo: number | null
}
type Row = {
  id: number,
  cells: Cell[]
}
