// var a = '2';
// var b = 2;
// var c = true;
// var d = [];
// var d = {};


/**
 *
 * Types:
 *  Number
 *  String
 *  Boolean
 *  Object
 *  Undefined
 *  Function
 *  Symbol // ES6
 *
 *
 */

// var a = null;
// console.log(0, typeof a);


// var a = 2;
// console.log(0, typeof a);
// var a;
// console.log(0, typeof a);

// var b = null;
// console.log(0, typeof b);


// var c = [];
// console.log(0, typeof c);

// var d = 2.3;
// console.log(0, typeof typeof typeof d);


/**
 *
 * Type 1: Number
 *
 */
// var b = '2';
// var a = b * 1;
// var a = b / 1;
// var a = b - 0;
// var a = +b;
// console.log(0, b);
// // console.log(0, Number(a));
// console.log(0, a);





// console.log(Number(0))
// console.log(Number('2.3'))
// console.log(Number(true))
// console.log(Number(false))
// console.log(Number('foo'))
// console.log(Number('a'))
// console.log(Number({}))
// console.log(Number([]))
// console.log(Number([5]))
// console.log(Number([1, 2, 3]))
// console.log(Number([2]))
// console.log(Number([[[[[[[[[[[[[[[[[[3]]]]]]]]]]]]]]]]]]))
// console.log(Number([[[[[[[1]]]]]], 2, 2, [[[[[[1, 2, 3]]]]]]]))
// console.log(Number([, , , , , , , , , , 3]))
// console.log(Number({ key: 123 }))

// console.log(0, Number(undefined));
// console.log(0, Number(null));



// console.log(0, typeof NaN);
// console.log(isNaN(0))
// console.log(isNaN('foo'))
// console.log(isNaN(NaN))
// console.log(isNaN({}))
// console.log(isNaN([]))
// console.log(isNaN([1,2]))
// console.log(isNaN([[[[[[[8]]]]]]]))
// console.log(isNaN([5]))


/**
 * Polyfills
 * Ponyfills
 */

// function checkNaN(x) {
//     return x != x;
// }




// // console.log(0, typeof NaN);
// console.log(0, checkNaN(0))
// console.log(0, checkNaN('foo'))
// console.log(0, checkNaN(NaN))
// console.log(0, checkNaN({}))
// console.log(0, checkNaN([]))
// console.log(0, checkNaN([1, 2]))
// console.log(0, checkNaN([[[[[[[8]]]]]]]))
// console.log(0, checkNaN([5]))


// var a = [];
// var b = a;
// console.log(a == b);
// console.log({} == {});


// console.log(0 == -0);
// console.log(0 == +0);
// console.log(Number(0));


/**
 *
 *
 * String
 *
 */

// var b = 2;
// var a = String(b);
// var a = b + '';
// console.log(0, a);



// console.log(0, String(0))
// console.log(0, String('2.3'))
// console.log(0, String(true))
// console.log(0, String(false))
// console.log(0, String('foo'))
// console.log(0, String('a'))
// console.log(0, String([]))
// console.log(0, String([5]))
// console.log(0, String([1, 2, 3]))
// console.log(0, String([2, 2.3, [[[[[, , , , , , 22, 55]]]]], [[[[[6, , , , , 5]]]]]]))
// console.log(0, String([2, 3, 3, 'data', 5]))
// console.log(0, String([[[[[[[[[[[[[[[[[[3], 5, 6], 8, [[[8]]]]]]]]]]]]]]]]]]]))
// console.log(0, String([[[[[[[1]]]]]], 2, 2, [[[[[[1, 2, 3]]]]]]]))
// console.log(0, String([, , , , , , , , , , 3]))
// console.log(0, String([, 2, , , 4, , , , , , 3]))

// console.log(0, String({}))
// console.log(0, String(undefined));
// console.log(0, String(null));


// console.log(0, String({
//     key: [2, , , , , , , , 2],
//     data: {
//         name: [[[[[[[[[5, , , 6], 5, , , , 6]]]]]]]]
//     }
// }))


/**
 * 
 * Boolean
 * 
 */

// var b = {};
//var a = Boolean(b);
// var a = !!b;
// console.log(a)



// console.log(Boolean(0))
// console.log(Boolean(''))
// console.log(Boolean(true))
// console.log(Boolean(false))
// console.log(Boolean(null))
// console.log(Boolean(undefined))
// console.log(Boolean(NaN))
// console.log(Boolean('foo'))
// console.log(Boolean([]))
// console.log(Boolean([5]))
// console.log(Boolean([false]))
// console.log(Boolean([1, 2, 3]))
// console.log(Boolean([false, 2.3, [[[[[, , , , , , false, 55]]]]], [[[[[6, , , , , 5]]]]]]))
// console.log(Boolean([0, 3, false, 'data', 5]))
// console.log(Boolean([[[[[[[[[[[[[[[[[[3], 5, 6], 8, [[[8]]]]]]]]]]]]]]]]]]]))
// console.log(Boolean([[[[[[[1]]]]]], 2, 2, [[[[[[1, 2, 3]]]]]]]))
// console.log(Boolean([, , , , , , , , , , 3]))
// console.log(Boolean({ key: false }))
// console.log(Boolean([0]))


/**
 * Interview Question
 */

// var a = {};
// var b = { key: 123 };
// var c = { key: 159 };
// a[b] = 789;
// a[c] = 456;
// console.log(a);


// Q2

// var d = (![] + [])[+[]] +
//     (![] + [])[+!+[]] +
//     ([![]] + [][[]])[+!+[] + [+[]]] +
//     (![] + [])[!+[] + !+[]];

// console.log(d);



// console.log(0 == 0)
// console.log(0 == '0')
// console.log(12 + 1 == ('12' * 1) + 1)


/**
 * 
 * Abstract Equality Algorithm vs Strict Equality Algorithm
 *              ==             vs             === 
 */

/**
 * Abstract Equality Algorithm
 * ==
 * Coerce
 */

/**
 * 
 * Rule 1: Number == String
 * goes to ==> Number == Number
 * 
 */
// console.log(0 == []);


/**
 * 
 * Rule 2: Number == Boolean
 *  goes to ==> Number == Number
 * 
 * 
 */

// console.log(0 == false);



/**
 * 
 * Rule 3: String == Boolean
 * All goes to Number
 * 
 */

// console.log('0' == false)



/**
 * 
 * Rule Primitives:
 *  Object : valueOf, toString
 * 
 */



// console.log(0 == []);
// console.log(0 == {});
// console.log(0 == [0]);
// console.log(0 == undefined)
// console.log(0 == null)
// console.log('0' == null)
// console.log('0' == undefined)
// console.log('0' == false)
// console.log(0 == false)
// console.log('0' == [0]);
// console.log(null == null);
// console.log(null == undefined);
// console.log(undefined == undefined);
// console.log(false == undefined);
// console.log(false == null);
// console.log('' == 0);
// console.log('' == false);
// console.log('' == []);
// console.log('' == {});
// console.log('' == [0]);
// console.log('' == null);
// console.log('' == undefined);
// console.log([null] == null);



// console.log(3 > 2 > 1);
// console.log(3 < 2 < 1);



/**
 * 
 * Strict Equality Algorithm
 * === 
 * Doesn't Coerce
 */


// console.log(0 === []);
// console.log(0 === {});
// console.log(0 === [0]);
// console.log(0 === undefined)
// console.log(0 === null)
// console.log('0' === null)
// console.log('0' === undefined)
// console.log('0' === false)
// console.log(0 === false)
// console.log(0 === [0]);
// console.log(null === null);
// console.log(null === undefined);
// console.log(undefined === undefined);
// console.log(false === undefined);
// console.log(false === null);
// console.log('' === 0);
// console.log('' === false);
// console.log('' === []);
// console.log('' === {});
// console.log('' === [0]);
// console.log('' === null);
// console.log('' === undefined);
// console.log([null] === null);


// var d = (![] + [] + !+[]);
// console.log(0, d);


// console.log(0, [] + []);
// console.log(0, {} + []);
// console.log(0, [] + {});
// console.log(0, {} + {});


// var a = true;
// var b = 12;
// var c = a || b;
// var d = false && b;
// var c = a ? a : b; // OR
// var d = a ? b : a; // AND

// console.log(c);
// console.log(d);

// var a = [];
// if (a) {
//     console.log('yup');
// }



// function getData() {
//     return 2;
// }

// var result = getData();
// if (result && result.length) {
//     console.log('data is here: ', result[0]);
// }


// var x;
// var y = x = typeof x;
// console.log(0, y);


// var a = "b" + "a" + (+ "a") + "a";
// console.log(0, a);


// console.log((0.2 + 0.1) == 0.3);



