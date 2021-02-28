'use strict'

var user = {
    name: "Eintr",
    age: 23,
    run: function(){
        console.log("hello I'm "+this.name+",I'm running");
    }
}

var xiaoming = {
    name: "xiaoming"
}

xiaoming.__proto__ = user;
//xiaoming.run();

var Bird = {
    fly: function(){
        console.log("hello I'm "+this.name+",I'm flying");
    }
}

xiaoming.__proto__ = Bird;
xiaoming.fly();
document.writeln("<br>");

class Student {
    constructor(name){
        this.name = name;
    }
    hello(){
        console.log("hello "+this.name);
    }
}

let xiaohong = new Student("xiaohong");
xiaohong.hello();
document.writeln("<br>");

class pupil extends Student{
    constructor(name,grade){
        super(name);
        this.grade = grade;
    }
    hello(){
        console.log("hello "+this.grade+"年级的"+this.name);
    }
}

let xiaohei = new pupil("xiaohei",6);
xiaohei.hello()
document.writeln("<br>");

let a = window.innerWidth;
console.log(a);
let b = window.innerHeight;
console.log(b);
let c = window.outerWidth;
console.log(c);
let d = window.outerHeight;
console.log(d);
document.writeln("<br>");

console.log(navigator.appName);
console.log(navigator.appVersion);
console.log(navigator.appCodeName);
document.writeln("<br>");

console.log(location);
document.writeln("<br>");

var d1 = document.getElementById('id1');
console.log(d1.innerText);
d1.innerText = '234';
console.log(d1);
//d1.innerHTML = '<strong>cpp</strong>';

d1.style.color = "red";
d1.style.fontSize = '50px';
document.writeln("<br>");

document.writeln("<br>");
document.writeln("<br>");
document.writeln("<br>");
document.writeln("<br>");
document.writeln("<br>");
document.writeln("<br>");
document.writeln("<br>");
document.writeln("<br>");
document.writeln("<br>");
document.writeln("<br>");
document.writeln("<br>");
document.writeln("<br>");
document.writeln("<br>");
document.writeln("<br>");
document.writeln("<br>");
document.writeln("<br>");
document.writeln("<br>");
document.writeln("<br>");
document.writeln("<br>");
document.writeln("<br>");
document.writeln("<br>");
document.writeln("<br>");
document.writeln("<br>");
document.writeln("<br>");
document.writeln("<br>");
