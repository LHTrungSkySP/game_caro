import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Constants } from '../../shared/constants/constants'
import { Row } from '../../shared/models/row';
import { Cell } from '../../shared/models/cell';

@Component({
  selector: 'app-board-game',
  standalone: true,
  imports: [],
  templateUrl: './board-game.component.html',
  styleUrl: './board-game.component.scss'
})
export class BoardGameComponent implements OnInit {
  @ViewChild('boardContainer', { static: true }) boardContainer!: ElementRef;

  @Input() levelGame = Constants.GAME_LEVEL.EASY;
  gameSize = Constants.GAME_SIZE_EASY;
  style: any;

  numberWin: number = Constants.NUMBER_WIN.EASY;

  board: Row[] = [];

  playerCurrent = 1;
  winCells: any[] = [];

  isEndGame: boolean = false;

  constructor() {
  }
  ngOnInit() {
    if (this.levelGame === Constants.GAME_LEVEL.EASY) {
      this.gameSize = Constants.GAME_SIZE_EASY;
      this.numberWin = Constants.NUMBER_WIN.EASY;
    }
    else if (this.levelGame === Constants.GAME_LEVEL.NORMAL) {
      this.gameSize = Constants.GAME_SIZE_NORMAL;
      this.numberWin = Constants.NUMBER_WIN.NORMAL;
    }
    else if (this.levelGame === Constants.GAME_LEVEL.HARD) {
      this.gameSize = Constants.GAME_SIZE_HARD;
      this.numberWin = Constants.NUMBER_WIN.HARD;
    }
    this.board = this.initBoard(this.gameSize, this.gameSize);
    let width = this.boardContainer.nativeElement.offsetWidth;
    this.style = {
      'width': width / this.gameSize + 'px',
      'height': width / this.gameSize + 'px',
      'font-size': width / (this.gameSize * 2) + 'px'
    }
  }
  ngAfterViewInit() {

  }

  setColorWinCell(winCells: any[]) {
    for (let idx = 0; idx < winCells.length; idx++) {
      this.boardContainer.nativeElement.querySelector('div[id="' + winCells[idx].id + '"].cell').style.backgroundColor = 'var(--blue-100)';
    }
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
  cellCurrent: any;
  markCell(y: number, x: number, ele: any) {
    if(!this.isEndGame){
      if (this.cellCurrent) {
        this.cellCurrent.style.backgroundColor = '';
      }
      this.cellCurrent = ele.target;
      this.cellCurrent.style.backgroundColor = 'var(--blue-100)';
      if (!this.board[y].cells[x].playerNo) { // chưa ai đánh
        this.board[y].cells[x].playerNo = this.playerCurrent;
        this.winCells = [this.board[y].cells[x]];
        this.checkWin(x, y, this.playerCurrent, this.board)
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
  }
  checkWin(x: number, y: number, playerNo: number, board: any) {
    if (this.checkWinCol(x, y, playerNo, board)) {
      alert('checkWinCol ' + this.playerCurrent);
      console.log(this.winCells)
    }
    else if (this.checkWinRow(x, y, playerNo, board)) {
      alert('checkWinRow ' + this.playerCurrent);
      console.log(this.winCells)
    }
    else if (this.checkWinCrossLeft(x, y, playerNo, board)) {
      alert('checkWinCrossLeft ' + this.playerCurrent);
      console.log('checkWinCrossLeft', this.winCells)
    }
    else if (this.checkWinCrossRight(x, y, playerNo, board)) {
      alert('checkWinCrossRight ' + this.playerCurrent);
      console.log('checkWinCrossRight', this.winCells)
    }
    else return;
    this.setColorWinCell(this.winCells);
    this.isEndGame = true;
  }
  checkWinCrossRight(x: number, y: number, playerNo: number, board: any) {
    let count = 1;
    for (let idx = 1; count !== this.numberWin; idx++) {
      if (this.conditionCheckWin(x - idx, y + idx, playerNo, board)) {
        count++;
      } else break;
    }
    for (let idx = 1; count !== this.numberWin; idx++) {
      if (this.conditionCheckWin(x + idx, y - idx, playerNo, board)) {
        count++;
      } else break;
    }
    if (count === this.numberWin) return true;
    return false;
  }
  checkWinCrossLeft(x: number, y: number, playerNo: number, board: any) {
    let count = 1;
    for (let idx = 1; count !== this.numberWin; idx++) {
      if (this.conditionCheckWin(x + idx, y + idx, playerNo, board)) {
        count++;
      } else break;
    }
    for (let idx = 1; count !== this.numberWin; idx++) {
      if (this.conditionCheckWin(x - idx, y - idx, playerNo, board)) {
        count++;
      } else break;
    }
    if (count === this.numberWin) return true;
    return false;
  }
  checkWinRow(x: number, y: number, playerNo: number, board: any) {
    let count = 1;
    for (let idx = 1; count !== this.numberWin; idx++) {
      if (this.conditionCheckWin(x - idx, y, playerNo, board)) {
        count++;
      } else break;
    }
    for (let idx = 1; count !== this.numberWin; idx++) {
      if (this.conditionCheckWin(x + idx, y, playerNo, board)) {
        count++;
      } else break;
    }
    if (count === this.numberWin) return true;
    return false;
  }
  checkWinCol(x: number, y: number, playerNo: number, board: any) {
    let count = 1;
    for (let idx = 1; count !== this.numberWin; idx++) {
      if (this.conditionCheckWin(x, y + idx, playerNo, board)) {
        count++;
      } else break;
    }
    for (let idx = 1; count !== this.numberWin; idx++) {
      if (this.conditionCheckWin(x, y - idx, playerNo, board)) {
        count++;
      } else break;
    }
    if (count === this.numberWin) return true;
    return false;
  }
  conditionCheckWin(x: number, y: number, playerNo: number, board: any) {
    if (board[y].cells[x]?.playerNo === playerNo) {
      this.winCells.push(board[y].cells[x]);
      return true;
    }
    return false;
  }
}
