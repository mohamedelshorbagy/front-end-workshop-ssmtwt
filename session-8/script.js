// console.log('test


// fat arrow variations

// () => {
//     console.log('data')
// }
// (x,y,d) => {}
// x => {}
// _ => {}
// () => { return 3; } 
// () => 3; 
// () => { return 'data' }


// var fn = () => ({ x: 3 });
// var fn = () => [1, 2, 3, 4];
// var fn = (_, y) => y;
// var fn = y => y;
// console.log(fn(6));
// var add = a => b => a + b;
// console.log(add(1)(2));



// function foo(x) {
//     x = x !== undefined ? x : 42;
//     return x;
// }

// console.log()
// foo(); // 42
// foo(5);
// foo(null)
// foo(undefined)
// foo(0) /// 0
// foo(NaN) // 



// function foo(x = 42, y = 45, z = 64) {
//     return [x, y, z];
// }

// console.log(foo());
// console.log(foo(5));
// console.log(foo(null, 8))
// console.log(foo(undefined,9, 10))
// console.log(foo(0, 20))
// console.log(foo(NaN, undefined, 3))



// function bar() {
//     return 2;
// }

// function foo(x = bar(), y = x) {
//     return [x, y];
// }

// console.log(foo());
// console.log(foo(5));
// console.log(foo(null))
// console.log(foo(undefined))
// console.log(foo(0))
// console.log(foo(NaN))


// var x = 3;
// function foo(x = 2, y = function () { return x; }) {
//     x = 7;
//     var x = 3;
//     console.log(y());
// }

// foo();


// var arr = null;


// var t = arr[0];
// var t2 = arr[1];
// var t3 = arr[2];

// Destructuring 
// var [a = 5, b, c] = arr || [];
// console.log(a)
// console.log(b)
// console.log(c)





// var obj = {
//     name: 'mohamed',
//     age: 13
// }



// var name = obj.name
// var age = obj.age
// console.log(name)
// console.log(age)

// var { name, age, data = 333 } = obj;
// console.log(name)
// console.log(age)
// console.log(data)




// function foo([a, b, c = 6]) {
//     console.log(a)
//     console.log(b)
//     console.log(c)
// }

// foo([1, 2])


// function foo({ name, age: X = 13 }) {
//     console.log(name)
//     console.log(X)
// }

// foo({ name: 'mohamed' })


/**
 * Spread & Rest Opertor
 */

// var a = [1, 2, 3];
// var b = [1, 3];
// var c = [1, 1, 2, 3, 3]
// var c = [b[0], ...a, b[1]];

// c = [b[0], a[0], a[1].a[2], b[1]];

// console.log(c);



// function foo(name, age) {
//     console.log(name)
//     console.log(age)
// }



// foo(...['mo', 14])




// function getMaxNumber(...args) {
//     console.log(args);
// }

// getMaxNumber(1, 2, 3, 4, 5);


// function bar(a, _, y, ...rest) {
//     return [a, ...rest, 5].join('');
// }

// function foo() {
//     var a = [4, 2];
//     var b = [6, 8, 9, 0];

//     return bar(...a, ...b);
// }

// console.log(foo());
// console.log(foo() === '48905')



// var [a, b, ...c] = [1, 2, 3, 4, 5]

// console.log(c);




// var arr = [
//     {
//         id: 1,
//         score: 12,
//         name: { first: 'mohamed', last: 'mo' }
//     },
//     {
//         id: 1,
//         score: 13,
//         name: { first: 'mohamed', last: 'mo' }
//     },
//     {
//         id: 1,
//         score: 15,
//         name: { first: 'mohamed', last: 'mo' }
//     },
//     {
//         id: 2,
//         score: 3,
//         name: { first: 'mohamed', last: 'uuuuuu' }
//     }
// ];


// var arrOfNames = arr.map(function (elm, idx) {
//     elm['name'] = elm.name.first + ' ' + elm.name.last;
//     return elm;
// })

var arrHigherScore = arr
    .map(elm => elm.score)
    .filter((score) => score < 10)
    .map(score => score * 2);



console.log(arrHigherScore)



// console.log(arrOfNames)
















