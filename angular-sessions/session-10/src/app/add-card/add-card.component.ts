import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-card',
  templateUrl: './add-card.component.html',
  styleUrls: ['./add-card.component.css']
})
export class AddCardComponent implements OnInit {
  message: string;
  @Output() addCard = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }


  submit(data) {
    console.log(data);
    console.log(data.value);
    // this.message = 'app';
    this.addCard.emit(data.value);
  }

}
