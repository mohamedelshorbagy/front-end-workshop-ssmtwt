// [1, 2, 3, 4, 5].forEach(function (element, index) {
//     // console.log(index, element)
//     setTimeout(function () {
//         console.log(index);
//     })
// });



// for (let el of [1, 2, 3, 4, 5]) {
//     // console.log(el);
//     setTimeout(function () {
//         console.log(el);
//     })
// }


// var user = {
//     name: 'mohamed',
//     age: 13
// }

// var arr = ['user', 'mohamed'];
// for(var key in user) {
//     console.log(key);
// }





// let name = 'Mohamed'
// naem = {};
// console.log(naem);



// function checkAge(data) {
//     if (data == { age: 18 }) {
//         console.log('age is 18')
//     } else if (data == { age: 20 }) {
//         console.log('age is 20')

//     } else {
//         console.log('no provider');
//     }
// }

// checkAge({ age: 20 });


/**
 * This rules
 *
 *  -
 *  -
 *  -
 *  -
 *
 *
 */
// var user = {
//     name: 'mohamed',
//     greet() {
//         console.log('your name is ', this.name);
//     },
//     mother: {
//         name: 'Mary',
//         greet() {
//             console.log('your name is ', this.name);
//         }
//     }
// }

// user.greet();
// user.mother.greet();




// var obj1 = {
//     name: 'obj1',
//     greet: greet
// }



// var obj2 = {
//     name: 'obj2',
//     greet: greet
// }

// obj1.greet()
// obj2.greet()

// function greet(name, age, faculty) {
//     console.log(1, 'your name is ', this.name, 'age is:', age);
//     console.log('faculty is:', faculty);
// }


// var obj1 = {
//     name: 'obj1',
// }
// var data = ['mohamed', 12, 'engineering']
// greet.call(null, data[0], data[1], data[2]);
// greet.call(null, data);
// greet.apply(null, data);
// greet.call(obj1, data[0], data[1], data[2]);
// var greetObj1 = greet.bind(obj1, data[0], data[1], data[2]);
// greetObj1() ;


// function foo() {
//     this.name = 'hamed'
//     console.log(1, this.name);
// }

// var obj = {
//     name: 'mohamed',
//     foo: foo
// };
// var obj2 = {
//     name: 'ahmed',
//     foo: foo
// };


// var name = 'samy';
// global.name = 'tarek';
// var name = 'samy';
// obj.foo.call(obj2);
// obj.foo();
// foo();

// var bar = obj.foo;
// var bar2 = obj2.foo;
// bar.apply(obj);
// bar2.call(this);




// function User(firstname, lastname) {
//     this.firstname = firstname
//     this.lastname = lastname
// }


// let user = User('mohamed', 'ahmed');
// let user1 = new User('mohamed', 'ahmed');
// console.log(user);
// console.log(user1);




//* Currying
// function greet(name, age, faculty) {
//     console.log(1, 'your name is ', this.name, 'age is:', age);
//     console.log('faculty is:', faculty);
// }


// var obj = {
//     name: 'mohamed'
// }

// var greetObj1 = greet.bind(obj, 'ahmed', 15);
// greetObj1('engineering')















