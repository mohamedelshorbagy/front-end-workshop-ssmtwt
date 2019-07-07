
/**
 * 
 * Hoisting
 * 
 */
// function foo() {
//     function bar() {
//         return 8;
//     }
//     var bar;
//     console.log(bar());
//     bar = function () {
//         return 3
//     }


// }
// var a;
// var a = 2;
// console.log(a);


// foo();




// 'use strict';
// function foo() {
//     var a = 2;
//     function bar(c) {
//         x = 9;
//         console.log(a, b, c, x);
//     }
//     var b = 5;
//     bar(b * 3);
// }


// foo()
// console.log(x)



/**
 * 
 * Closure
 * 
 */

// function foo() {
//     var x = 6;

//     function bar() {
//         return x;
//     }

//     return bar();
// }



// var data = foo();
// console.log(data);









/**
 * 
 * Timer Functions
 * 
 */



// console.log(1)
// setTimeout(function () {
//     console.log(2)
// }, 0);
// for (var i = 0; i < 10000000000; i++) { }
// console.log(3)



// for (var i = 0; i <= 5; i++) {
//     function bar(j) {
//         setTimeout(function () {
//             console.log(j)
//         }, j * 1000);
//     }
//     bar(i);
// }


// for(var i = 0; i < 2; i++) {
//     setTimeout(function () { console.log(i) }, 0);
//     i++;
// }



// for (let i = 0; i <= 5; i++) {
//     setTimeout(function () {
//         console.log(i)
//     }, i * 1000);
// }

/**
 * 
 * TDZ => temporal dead zone
 * 
 */

// a = 2;
// console.log(a);
// var a;





// for(var i = 0; i < 2; i++) {
//     setTimeout(function () { console.log(i) }, 0);
//     i++;
// }

// setTimeout(function () { console.log('first ') })
// setTimeout(function () { console.log('first ') })

// for (
//     let i = (setTimeout(function () { console.log(i) }), 0);
//     i < 2;
//     i++
// ) {
//     i++;
// }



// for (
//     var i = (setTimeout(function () { console.log(i) }), 0);
//     i < 2;
//     i++
// ) {
//     i++;
// }








// for (var i = 0; i <= 5; i++) {
//     (function (j) {
//         setTimeout(function () {
//             console.log(j)
//         }, j * 1000);
//     })(i)
// }


// IIFE => Immeediately Invoked Function Expression

// (function IIFE(j) {
//     console.log(j, 'IIFE')
// })(2);



/**
 * 
 * Interview Question
 * 
 */

// 'use strict';
// (function () {
//     var a = b = 2;
// })()

// console.log('value of b', b);
// console.log('value of a', a);



















