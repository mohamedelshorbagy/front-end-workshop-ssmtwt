import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'alert-comp',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {
  @Input() message: string;
  @Input() status: string;
  @Output() triggerAlert = new EventEmitter();
  
  constructor() { }

  ngOnInit() {
  }



  alertClicked() {
    console.log('logged from Alert Component')
    this.triggerAlert.emit({
      name: 'New Card',
      description: 'Description'
    });
  }

}
