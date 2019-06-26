import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.css']
})
export class SquareComponent implements OnInit {

  @Input() row: number;
  @Input() column: number;

  constructor() { }

  ngOnInit() {
  }

  _handleSquareClic (){
    console.log("Square clic ",this.row,this.column);
  }

}
