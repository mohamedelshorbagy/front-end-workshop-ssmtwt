import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template: `
  //   <p>asdasdas</p>
  // `,
  styleUrls: ['./app.component.css'],
  // styles: [
  //   `
  //     h2 {
  //       color: red
  //     }
  //   `
  // ]
})
export class AppComponent {
  title = 'starter-app';
  name: string = 'Mohamed'
  age: number = 13;
  arr: number[] = [1,2,3,4,5]
  user = {
    name: 'mohamed',
    age: 13
  }

  isDisabled = false;
  isHidden = true;
  message = 'here we go again!'
  users = [
    {
      name: 'Mohamed',
      description: 'Lorem ipsum dolor sit amet.'
    },
    {
      name: 'Ahmed',
      description: 'Lorem ipsum dolor sit amet.'
    }, 
    {
      name: 'Taher',
      description: 'Lorem ipsum dolor sit amet.'
    }
  ]


  constructor() {
    // setTimeout(() => {
    //   this.isDisabled = true;
    // }, 3500);
  }


  clickMe() {
    console.log('Btn is Clicked!')
    // this.user.age = 16;
    this.isHidden = !this.isHidden;
    // this.isHidden = this.isDisabled;
  }

  addCard() {
    this.users.push({
      name: 'New Card',
      description: 'Card Description'
    })
  }


  // changeName(event) {
  //   this.name = event.target.value
  // }



  // alertClicked(value) {
  //   console.log('Logged From App Component!')
  //   console.log('Value:', value)
  //   this.users.push(value)
  // }


  addNewCard(card) {
    this.users.push(card);
  }



}
