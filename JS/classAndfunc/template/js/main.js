'use strict'

var isPostive = function(a,b,...rest){
    if (typeof a != 'number'){
        throw 'Not a Number';
    }

    if (typeof b != "string"){
        throw 'Not a Number';
    }

    console.log(rest);
    if (a >= 0){
        return a;
    }else{
        return b;
    }
}
document.writeln(isPostive(-1,'负数',3,4));

function test1(){
    var x = "outer";
    function test2(){
        var x = "inner";
        console.log(x);
    }
    test2()
    console.log(x);
}
document.writeln("<br>");

function variate(){
    var x = "x"+y;
    console.log(x);//xundefine
    var y = 2;
}
document.writeln("<br>");

//var x = 'xxx';
//
//var old_alert = window.alert;
//window.alert = function(){
//};
////失效
//window.alert(x)
//
////恢复
//window.alert = old_alert;
//window.alert(x)
//
//document.writeln("<br>");

var Eintr = {
    name: 'Eintr',
    birth: 1999,
    age: function () {
        var now = new Date().getFullYear();
        return now-this.birth;
    }
};
document.writeln(Eintr.age());
document.writeln("<br>");

function getAge() {
    var now = new Date().getFullYear();
    return now-this.birth;
};

var eintr = {
    name: 'Eintr',
    birth: 1999
};

var impact = {
    name: 'Eintr',
    birth: 2000
};

document.writeln(getAge.apply(eintr,[]));
document.writeln(getAge.apply(impact,[]));
document.writeln("<br>");

var now = new Date();
console.log(now.getFullYear());
console.log(now.getMonth());
console.log(now.getDate());
console.log(now.getDay());
console.log(now.getHours());
console.log(now.getMinutes());
console.log(now.getSeconds());

//时间戳
console.log(now.getTime());
//时间戳转换为标准格式
console.log(now.toISOString(now.getTime()));
document.writeln("<br>");

var user = {
    name: "Eintr",
    age: 3,
    sex: '男'
}
//对象转换json string
let jsonUser = JSON.stringify(user);
console.log(jsonUser);
//json string 转对象
let obj = JSON.parse('{"name":"Eintr","age":3,"sex":"男"}');
console.log(obj);

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
document.writeln("<br>");
document.writeln("<br>");
document.writeln("<br>");
document.writeln("<br>");
