import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
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

  numberWin: number = 5;

  board: Row[] = [];
  widthOfCell: string = '';

  playerCurrent = 1;

  levelGame = Constants.GAME_LEVEL.EASY;
  gameSize = Constants.GAME_SIZE_EASY;
  constructor() {
    if (this.levelGame === Constants.GAME_LEVEL.EASY) {
      this.gameSize = Constants.GAME_SIZE_EASY;
      this.numberWin = 3;
    }
    else if (this.levelGame === Constants.GAME_LEVEL.NORMAL) {
      this.gameSize = Constants.GAME_SIZE_NORMAL;
      this.numberWin = 5;
    }
    else if (this.levelGame === Constants.GAME_LEVEL.HARD){
      this.gameSize = Constants.GAME_SIZE_HARD;
      this.numberWin = 5;
    }
  }
  ngOnInit() {
    this.board = this.initBoard(this.gameSize, this.gameSize);
    let width = this.boardContainer.nativeElement.offsetWidth;
    this.widthOfCell = width / this.gameSize + 'px';
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
    console
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
      this.checkWin(x, y, this.playerCurrent, this.board);
    }
  }
  checkWin(x: number, y: number, playerNo: number, board: any) {
    this.checkWinCol(x, y, playerNo, board);
    this.checkWinRow(x, y, playerNo, board);
    this.checkWinCrossLeft(x, y, playerNo, board);
    this.checkWinCrossRight(x, y, playerNo, board);
    // check chéo
    /// check nghiêng trái
  }

  checkWinCrossLeft(x: number, y: number, playerNo: number, board: any) {
    // check ngang
    let count = 1;
    for (let idx = 1; count !== this.numberWin; idx++) {
      if (this.conditionCheckWin(x - idx, y + idx, playerNo, board)) { /// check top
        count++;
      }
      if (this.conditionCheckWin(x + idx, y - idx, playerNo, board)) { /// check bottom
        count++;
      }
      if (!this.conditionCheckWin(x - idx, y + idx, playerNo, board) && !this.conditionCheckWin(x + idx, y - idx, playerNo, board)) {
        break;
      }
      if (count === this.numberWin) alert(playerNo + " win");
    }
  }
  checkWinCrossRight(x: number, y: number, playerNo: number, board: any) {
    // check ngang
    let count = 1;
    for (let idx = 1; count !== this.numberWin; idx++) {
      if (this.conditionCheckWin(x + idx, y + idx, playerNo, board)) { /// check trái
        count++;
      }
      if (this.conditionCheckWin(x - idx, y - idx, playerNo, board)) { /// check phải
        count++;
      }
      if (!this.conditionCheckWin(x - idx, y - idx, playerNo, board) && !this.conditionCheckWin(x + idx, y + idx, playerNo, board)) {
        break;
      }
      if (count === this.numberWin) alert(playerNo + " win");
    }
  }
  checkWinRow(x: number, y: number, playerNo: number, board: any) {
    // check ngang
    let count = 1;
    for (let idx = 1; count !== this.numberWin; idx++) {
      if (this.conditionCheckWin(x - idx, y, playerNo, board)) { /// check trái
        count++;
      }
      if (this.conditionCheckWin(x + idx, y, playerNo, board)) { /// check phải
        count++;
      }
      if (!this.conditionCheckWin(x - idx, y, playerNo, board) && !this.conditionCheckWin(x + idx, y, playerNo, board)) {
        break;
      }
      if (count === this.numberWin) alert(playerNo + " win");
    }
  }
  checkWinCol(x: number, y: number, playerNo: number, board: any) {
    // check dọc
    let count = 1;
    for (let idx = 1; count !== this.numberWin; idx++) {
      if (this.conditionCheckWin(x, y + idx, playerNo, board)) { /// check trên
        count++;
      }
      if (this.conditionCheckWin(x, y - idx, playerNo, board)) { /// check dưới
        count++;
      }
      if (!this.conditionCheckWin(x, y + idx, playerNo, board) && !this.conditionCheckWin(x, y - idx, playerNo, board)) {
        break;
      }
      if (count === this.numberWin) alert(playerNo + " win");
    }
  }
  conditionCheckWin(x: number, y: number, playerNo: number, board: any) {
    try{
      let t = board[y].cells[x].playerNo === playerNo;
      return t;
    }catch(e){
      console.log(x,y,playerNo,board );
      return ;
    }
  }
}
