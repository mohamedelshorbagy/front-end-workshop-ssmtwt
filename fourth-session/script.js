// console.log('Hello From JS File');

// var number = 2;
// var data = "hello world";
// var floatNum = 2.2;
// var doubleNum = 2.2;
// var doubleNum = [2.2, 2.2];
// var obj = {
//     name: 'Mohamed',
//     0: 'Ahmed'
// }
// console.log(obj);
// console.log(document.all);
// console.log(document.all[7]);
// document.title = 'JS FILE';

// console.log(document.body);
// console.log(document.head);

// SELECTING ELEMENTS FROM HTML
// SELCTING BY TAG

// var pTagName = document.getElementsByTagName('p');
// var pClassName = document.getElementsByClassName('text');
// var pId = document.getElementById('text');
// var pSelector = document.querySelectorAll('.text');
// console.log(pTagName);
// console.log(pClassName);
// console.log(pId);
// console.log(pSelector);



// var p = document.querySelector('.text');
// // p.textContent = '<h1>P from JS FILE</h1>';
// // p.innerHTML = '<h1>P from JS FILE</h1>';
// // console.log(p.textContent)
// // console.log(p.innerText)

// p.style.color = 'white';
// p.style.marginLeft = '25px';
// p.style.backgroundColor = 'rgb(231, 70, 69)';


// var num = 25;

// // p.innerHTML = '<h1>Header</h1><p>P Tag</p><p>Aage is ' + num + '</p>';
// p.innerHTML = `
//     <h1>Header</h1>
//     <p>Age is ${num}</p>
// `


// var box = document.querySelector('.box');


// box.addEventListener('click', function () {
//     console.log('clicked');
// })


// var btn = document.querySelector('.btn');
// var p = document.querySelector('.text');

// btn.addEventListener('click', function () {
//     console.log('click');
//     console.log(p.style.display);
//     console.log(p.classList);
//     // p.classList.add('hide');
//     // p.classList.remove('hide');
//     if(p.classList.contains('hide')) {
//         // Case invisible
//         p.classList.remove('hide');
//     } else {
//         // Case visible
//         p.classList.add('hide');

//     }
//     // if(p.style.display == 'none') {
//     //     p.style.display = 'block';
//     // } else {
//     //     p.style.display = 'none';
//     // }
//     // if display of p == 'none':
//     //     show()
//     // else 
//     //     hide()
// })


// var box = document.querySelector('.box');



// box.addEventListener('mousemove', function (event) {
//     console.log(event.type);
//     // console.log(event.clientX);
//     // console.log(event.clientY);
//     // box.textContent = `(${event.clientX}, ${event.clientY})`
//     // box.style.backgroundColor = `rgb(${event.clientX},${event.clientY},50)` 
// })



// box.addEventListener('click', boxClicked)
// box.addEventListener('click', function boxClicked() {
//     console.log('clicked from any!');
// })


// function boxClicked(event) {
//     console.log('clicked!');
// }




// Catch Navbar Element and btn

// var collapseNavbarElem = document.querySelector('.navbar-collapse');
// var navbarBtn = document.querySelector('.navbar-toggler');


// navbarBtn.addEventListener('click', function () {

//     if(collapseNavbarElem.classList.contains('show')) {
//         collapseNavbarElem.classList.remove('show');
//     } else {
//         collapseNavbarElem.classList.add('show');

//     }
// })



// var dropDown = document.querySelector('.dropdown');
// var dropDownMenu = document.querySelector('.dropdown-menu');
// var btnDropdown = document.querySelector('.dropdown-toggle');


// btnDropdown.addEventListener('click', function() {
//     if(dropDownMenu.classList.contains('show')) {
//         dropDownMenu.classList.remove('show');
//         dropDown.classList.remove('show');
//     } else {
//         dropDownMenu.classList.add('show');
//         dropDown.classList.add('show');

//     }
// })





// search.addEventListener('focus', function (event) {
//     console.log(event.type);
// })


// search.addEventListener('blur', function (event) {
//     console.log(event.type);
// })


// search.addEventListener('change', function (event) {
//     console.log(event.target.value);
//     console.log(search.value);

// })

// var search = document.querySelector('.search');
// var btnAdd = document.querySelector('.add');
// var ul = document.querySelector('.items');





// search.addEventListener('input', function (event) {
//     console.log(event.key);
//     console.log(event.keyCode);
// })


// search.addEventListener('keydown', function (event) {
//     if(event.key == 'Enter') {
//         // Add Item to List
//         var value = search.value; 
//         ul.innerHTML += `<li class="list-group-item">${value}</li>`;
//         search.value = '';
//     }
// })

// btnAdd.addEventListener('click', function () {
//     // Catch Value of Input
//     var value = search.value;
//     // Add Item to List
//     ul.innerHTML += `<li class="list-group-item">${value}</li>`;
//     search.value = '';

// })


// var keyCode = document.querySelector('.keyCode');
// var key = document.querySelector('.key');


// document.body.addEventListener('keydown', function (event) {
//     keyCode.textContent = event.keyCode;
//     key.textContent = event.key;
// })



// var ul = document.querySelector('.items');

// console.log(ul.children)

// var boxOne = document.querySelector('.box-1')
// var boxTwo = document.querySelector('.box-2')
// var boxThree = document.querySelector('.box-3')



// boxOne.addEventListener('click', function () {
//     console.log('One')
// })



// boxTwo.addEventListener('click', function (event) {
//     // event.stopPropagation();
//     console.log('two')
// })


// boxThree.addEventListener('click', function (event) {
//     console.log('three')
// })


// document.body.addEventListener('click', function () {
//     console.log('body');
// })



var form = document.querySelector('form');
var values = [];

form.addEventListener('submit', function(event) {
    event.preventDefault();
    let childs = form.children;

    for(var i = 0; i < childs.length; i++) {
        if(childs[i].localName == 'input') {
            values.push(childs[i].value);
        }

    }
    console.log('form values', values);

    console.log('form submitted!');
})




// Search in string
'Mohamed'.indexOf('m'); // number 

//not forund
'Mohamed'.indexOf('mohamed');

// to lower case
'Mohamed'.toLowerCase().indexOf('mohamed');














