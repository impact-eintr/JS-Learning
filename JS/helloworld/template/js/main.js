'use strict'
//定义变量 var 变量名 = 变量值 javascript
var 世界 = "世界"
document.writeln("你好");
document.writeln(世界);

document.writeln("<br>")
let age = 23;
let id = "eintr";
let msg = `你好 ${id}`
document.writeln(msg);

document.writeln("<br>");
let name = "impacteintr";
let NAME = "EINTR";
document.writeln(name.toUpperCase());
document.writeln(NAME.toLowerCase());
document.writeln("<br>");

document.writeln(name.indexOf('i'));
document.writeln("<br>");

let subname = name.substring(6);
document.writeln(name.substring(6))
document.writeln("<br>");

let arr = [1,2,3,4,5,6,"a","b","c"];
document.writeln(arr);
document.writeln("<br>");

arr.length = 10;
document.writeln(arr);
document.writeln("<br>");


var person = {
    name:"eintr",
    age:233,
    score:100
}
document.writeln(person.name);
document.writeln(person.hasOwnProperty('age'));
document.writeln("<br>");

let N  = 10
for(let i = 0;i < N;i++){
    document.writeln(i);
}
document.writeln("<br>");

document.writeln("for Each<br>");
arr.forEach(function(value){
        document.writeln(value);
});
document.writeln("<br>");

document.writeln("for in<br>");
for (var x in person){
    document.writeln(x);
}
document.writeln("<br>");

let scoretable = new Map(
            [['tom',100],
            ['jack',90],
            ['eintr',80]]
);
scoretable.set('root',120);
let score1 = scoretable.get("eintr");
document.writeln(score1);
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
document.writeln("<br>");
document.writeln("<br>");
document.writeln("<br>");
document.writeln("<br>");
document.writeln("<br>");
document.writeln("<br>");
