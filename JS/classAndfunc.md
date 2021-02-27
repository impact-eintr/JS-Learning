# 函数

## 函数定义
> 定义方式1
~~~ javascript
function abs(x){
    if (x >= 0){
        return x;
    }else{
        return -x;
    }
}
document.writeln(abs(-2));
~~~
- 一旦执行到`return`代表函数结束，返回结果
- 如果没有执行`return` 函数执行完也会返回结果，结果就是`undefined`
> 定义方式2
~~~ javascript
var abs = function(x){
    if (x >= 0){
        return x;
    }else{
        return -x;
    }
}
~~~
`function(x){...}`这是一个匿名函数，但是可以把结果赋值给`abs`,通过`abs`就可以调用该函数

**javascript可以传任意个参数，也可以不传参数，但是不会报错(危险的设计。。。)**
可以通过类型校验手动抛出异常

~~~ javascript
var abs = function(x){
    if (typeof x != 'number'){
        throw 'Not a Number';
    }
    if (x >= 0){
        return x;
    }else{
        return -x;
    }
}

document.writeln(abs());
~~~
==arguments关键字==
代表传递进函数的所有参数，是一个数组(c 的 argv)

~~~ javascript
var isPostive = function(a,b){
    if (typeof a != 'number'){
        throw 'Not a Number';
    }

    if (typeof b != "string"){
        throw 'Not a Number';
    }

    for (let i = 2;i < arguments.length;i++){
        console.log(arguments[i]);
    }
    if (a >= 0){
        return a;
    }else{
        return b;
    }
}
document.writeln(isPostive(-1,'负数',3,4));
~~~

==rest关键字(ES6)==
类似c的`...`，实现对于变长参数的存储
~~~ javascript
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
~~~

## 变量作用域
在js中 `var`定义变量实际是有作用域的
假设在函数体中声明，则不可以在函数体外使用(可以使用`闭包`实现)

> 内部函数可以访问外部函数的成员，反之则不行(作用域链)
~~~ javacsript
function test1(){
    var x = 1;
    function test2(){
        var y = x+1;
    }
    var z = y+1;//不允许
}

~~~

函数变量查找遵循`就近原则`
~~~ javascript
function test1(){
    var x = "outer";
    function test2(){
        var x = "inner";
        console.log(x);
    }
    test2()
    console.log(x);
}
test1()
~~~

==声明提升==
js执行引擎会自动提升`y`的声明，但是不会提升`y`的赋值(在c中这样过不了编译,需要注意，但没人会不声明就用变量吧 >_>)
~~~ javascript
function variate(){
    var x = "x"+y;
    console.log(x);//xundefine
    var y = 2;
}

variate()
~~~

==全局对象 window==

~~~ javascript
var x = 'xxx';
//以下三句等效
alert(x);
alert(window.x);
window.alert(window.x);
~~~

~~~ javascript
var x = 'xxx';

var old_alert = window.alert;
window.alert = function(){};

//失效
window.alert(x)

//恢复
window.alert = old_alert;
window.alert(x)
~~~

**js实际上只有一个全局作用域，任何变量（函数也可以视为变量），加入没有在该函数作用域找到，就向外找，，如果全局作用域也没有，报错`RefrenceError`**

## 方法

把函数写到对象里 `this`表示当前对象 没有对象作用域时 `this`默认指向`window`
~~~ javascript
var Eintr = {
    name: 'Eintr',
    birth: 1999,
    age: function () {
        var now = new Date().getFullYear();
        return now-this.birth;
    }
};
document.writeln(Eintr.age());
~~~
==apply==
**修改`this`的指向**

~~~ javascript
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
~~~
## 常用对象

## Date

~~~ javascript
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

~~~

## JSON
> JSON是什么 是个string
- JSON(javascript object notation JS对象简谱)是一种轻量级的数据交换格式
- 简洁和清晰的层次结构使得JSON成为理想的数据交换语言

**在js中一切皆对象，任何js支持的类型都可以用JSON表示**

> 格式
- 对象 `{}`
- 数组 `[]`
- 所有的键值对 都是用key:value

~~~ javascript
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
~~~
## Ajax
- 原生的js写法 xhr异步写法
- **JQuey封装好的方法 `$("#name").ajax("")`**
- axios 请求

