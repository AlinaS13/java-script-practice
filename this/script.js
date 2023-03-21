// this ссылается на объект, которому принадлжит функция в момент вызова
// this function expression и function delaration может изменяться - 
// то есть может меняться хозяин функции во время вызова
// this стрелочных функций не меняется во время вызова
// Для function expression и function declaration объявленых в общем потоке
// хозяином будет глобальный объект window
/*
function calcArea(radius) {
    console.log(this);
}

const calcSallaryInDollar = function (sallary) {
    console.log(this);
    return sallary / 42
}

calcArea();
calcSallaryInDollar()
*/
// если функция является методом объекта, ее хозяином является объект
/* 
const user = {
    name: "Алекс",
    lastName: "Регент",
    getFullName(){
        console.log(this);
        const {name, lastName} = this;
        return `${name} ${lastName}`;
    }
}

user.getFullName();
*/

// this стрелочной функции при ее создании берется от функции, в которой она 
// создана и не меняется. Если стрелочная функция создана в общем потоке,
// то ее this будет равен Window. Если внутри метода объекта - ее this
// будет равен этому объекту
/*
const calcArea = (radius) => {
    console.log(this);
}

// calcArea();

const user = {
    name: "Алекс",
    lastName: "Регент",
    getFunction(){
        // console.log(this);
        const func = ()=> {
            console.log(this);
            const {name, lastName} = this;
            return `${name} ${lastName}`;
        }

        return func;
    },
    getFullName: () => {
        console.log(this);
    }
}

// user.getFullName();

const func = user.getFunction();
func()
*/
// Если функция вызывается как аргумент в setTimeout или setInterval, то они
// меняют ее хозяина на Window
const user = {
    name: "Алекс",
    lastName: "Регент",
    getFullName(){
        console.log(this);
        const {name, lastName} = this;
        return `${name} ${lastName}`;
    },
    getFullNameCallback() {
        const func = ()=> {
            console.log(this);
            const {name, lastName} = this;
            console.log(`${name} ${lastName}`);
        }

        return func;
    }
}
// user.getFullName();
// setTimeout(user.getFullName, 2000);
// Если функция или метод вызываются как обработчик события, то this внутри них
// будет равен DOM-элементу, к которому привязано событие
function calcArea(radius) {
    console.log(this);
}
const button = document.getElementById("btn");
// button.addEventListener("click", user.getFullName)
// button.addEventListener("click", calcArea)
const callback = user.getFullNameCallback();

// setTimeout(callback, 2000);
// button.addEventListener("click", callback)
const func = user.getFullName.bind(user);
// console.log(func)
// setTimeout(func, 2000);
button.addEventListener("click", func);
