


// console.log(isNaN('foo'))
// console.log(isNaN(0))
// console.log(isNaN(NaN))
// console.log(isNaN([]))
// console.log(isNaN({}))
// console.log(isNaN(1 / 'a'));
// console.log(isNaN(55));
// console.log(isNaN([1, 2, 3]));
// console.log(isNaN([[[[[[[[[[[[[3]]]]]]]]]]]]]));



// console.log(Number.isNaN('foo'))
// console.log(Number.isNaN(0))
// console.log(Number.isNaN([]))
// console.log(Number.isNaN({}))
// console.log(Number.isNaN(1 / 'a'));
// console.log(Number.isNaN(55));
// console.log(Number.isNaN([1, 2, 3]));
// console.log(Number.isNaN([[[[[[[[[[[[[3]]]]]]]]]]]]]));
// console.log(Number.isNaN(NaN))



// var let = 2;
// let a = 5;
// console.log(let);
// console.log(a);


// let let = 3;
// const let = 5
// console.log(let);
// let let = 5;




// var arr = [1, 2, 3, 1, , , , , 4, 5, 3, undefined, null];

// var filterArr = arr.filter((it) => {
//     return Boolean(it);
// })
// var filterArr = arr.filter((it) => {
//     return !!it;
// })
// var filterArr = arr.filter((it) => !!it);
// var filterArr = arr.filter(Boolean);

// console.log(filterArr);

// var arr = [1, 1, 5, 5, 3, 3, 2, 2];



// // var nonDuplicate = new Set(arr);
// var nonDuplicate = arr.filter((it, idx) => {
//     return arr.indexOf(it) === idx;
// });

// console.log(nonDuplicate)




// var arr = [
//     {
//         id: 1
//     },
//     {
//         id: 1
//     },
//     {
//         id: 2
//     },
//     {
//         id: 3
//     }
// ]

/**
 * @description Remove Duplicates From non-typed Array
 * @param {any[]} arr 
 * @param {string=} prop 
 * @returns {any[]}
 */
function removeDuplicate(arr, prop) {
    var fn = prop !== undefined
        ? value => value[prop]
        : value => value;
    return arr.filter((it, idx) => {
        var value = prop !== undefined
            ? it[prop]
            : it;
        return arr.map(fn).indexOf(value) === idx;
    })
}


// var arr = [1, 1, 2, 2, 3, 3];

// var arr = [
//     {
//         id: 1
//     },
//     {
//         id: 1
//     },
//     {
//         id: 2
//     },
//     {
//         id: 3
//     }
// ]



// var nonDuplicate = removeDuplicate(arr, 'id');

// console.log(nonDuplicate)



// var obj = {
//     name: 'mohamed',
//     valueOf() {
//         return this.name
//     }
// }

// console.log(obj === 3);
// console.log(obj == 'mohamed');
// console.log(obj === 'mohamed');
// console.log(obj === obj);
// console.log(obj === {});




// console.log(a);

// createImageElement('images/1.jpg');
// createImageElement('images/1.jpg');
// createImageElement('images/1.jpg');


// loadImage('images/1.jpg', function (error, url) {
//     if (error) {
//         throw error;
//     }
//     createImageElement(url);
//     loadImage('images/2.jpg', function (error, url) {
//         if (error) {
//             throw error;
//         }
//         createImageElement(url);
//         loadImage('images/3.jpg', function (error, url) {
//             if (error) {
//                 throw error;
//             }
//             createImageElement(url);
//         })
//     })

// })


// loadImage('images/1.jpg')
//     .then(url => {
//         createImageElement(url);
//         loadImage('images/2.jpg')
//             .then(url => {
//                 createImageElement(url);
//                 loadImage('images/3.jpg')
//                     .then(url => {
//                         createImageElement(url);
//                     })
//                     .catch(err => {
//                         throw err;
//                     })
//             })
//             .catch(err => { throw err; })
//     })
//     .catch((err) => {
//         throw err;
//     })


/**
 * 
 * Chain
 * 
 */

// loadImage('images/1.jpg')
//     .then(url => {
//         createImageElement(url);
//         return loadImage('images/2.jpg');
//         // return 'text';
//     })
//     .then(url => {
//         createImageElement(url);
//         return loadImage('images/3.jpg');
//     })
//     .then(url => {
//         createImageElement(url);
//     })
//     .catch((err) => {
//         throw err;
//     })




/**
 * 
 * Promise.all([]) 
 * Promise Bulk, Buffer
 * 
 * 
 */



// Promise.all([
//     loadImage('images/1.jpg'),
//     loadImage('images/2.jpg'),
//     loadImage('images/3.jpg')
// ])
//     .then(data => {
//         data.forEach(url => {
//             createImageElement(url);
//         })
//     })
//     .catch(err => {
//         throw err;
//     })



axios
    .get('https://jsonplaceholder.typicode.com/users')
    .then(result => {
        var { data } = result;
        var tbody = document.getElementById('data');

        let text = '';

        data.forEach(el => {
            let { name, email, phone } = el;
            text += `
                <tr>
                    <td>${name}</td>
                    <td>${email}</td>
                    <td>${phone}</td>
                </tr>
            `
        })

        tbody.innerHTML += text;

    })
    .catch(err => {
        throw err;
    })


var body = {
    firstname: 'mohamed'
}

// axios
//     .post('//url', body)
//     .then()
//     .catch()














