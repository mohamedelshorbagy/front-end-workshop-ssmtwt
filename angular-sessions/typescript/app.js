"use strict";
// var data: string = '1';
// var num: number = 2;
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// interface IUser {
//     name: string,
//     age?: number
// }
// var user: IUser = {
//     name: 'mohamed',
//     age: 12
// }
// var obj: IUser = {
//     name: 'mohamed',
//     age: 13
// }
// var b: string | number = 'data';
// b = 3;
// var a: any = 'data';
// a = true;
// a = {};
// // var arr: number[] = [1, 2, 3, 4]
// // arr = [2,4, 'data']
// var arr: Array<IUser> = [{
//     name: 'mo'
// }]
function logged(constructorFn) {
    console.log(constructorFn);
}
var User = /** @class */ (function () {
    function User() {
        this.name = '';
        this.age = undefined;
        console.log(this.name);
    }
    User.prototype.getName = function () {
        return this.name;
    };
    User = __decorate([
        logged,
        __metadata("design:paramtypes", [])
    ], User);
    return User;
}());
var userInstance = new User();
userInstance.getName();
// let app: string = 'data';
// app = 3;
