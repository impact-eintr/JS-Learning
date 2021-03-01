# 面向对象

## 创建对象
> 原型对象
- 类： 模板
- 对象：具体的实例
但js其实是基于对象,和一般的面向对象有所不同


~~~ javascript
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

~~~

## class继承
> class继承(ES6)

~~~ javascript
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

~~~
**本质仍然是查看原型对象**

## 原型链继承(难点)
> 原型链
- 在js中，每个函数都有一个`prototype`属性，这个属性指向函数的原型对象(object指向自己)

## 闭包(难点)
> 匿名函数经常被人误认为是 闭包(closure). ==闭包指的是那些引用了另一个函数作用域中变量的函数，通常是在嵌套函数中实现的==

~~~ javascript
function createComparisonFunc(element) {
    return function(obj1,obj2) {
        let val1 = obj1[element];
        let val2 = obj2[element];

        if (val1 < val2){
            return -1;
        }else if (val1 > val2) {
            return 1;
        }else {
            return 0;
        }
    };
}
~~~
内部函数引用了外部函数的变量，这个内部函数被返回并在其他地方被使用后，**仍然引用着那个变量。**

## 箭头函数(新特性)

## 操作Dom元素
- IE
- Chrome
- Safari
- FFirefox
- Opera

## 操作Bom元素

### window
> window 代表 浏览器窗口
~~~ javascript
let a = window.innerWidth;
console.log(a);
let b = window.innerHeight;
console.log(b);
let c = window.outerWidth;
console.log(c);
let d = window.outerHeight;
console.log(d);
~~~
### navigator
> 封装了浏览器的信息
~~~ javascript
console.log(navigator.appName);
console.log(navigator.appVersion);
console.log(navigator.appCodeName);
~~~
**大多数时候不使用 因为会被人修改**
### screen
> 屏幕属性

### location(重要)
> 当前页面的URL信息(重定向)
~~~ javascript
console.log(location);

//结果
Location {ancestorOrigins: DOMStringList, href: "http://127.0.0.1:8080/", origin: "http://127.0.0.1:8080", protocol: "http:", host: "127.0.0.1:8080", …}
ancestorOrigins: DOMStringList {length: 0}
assign: ƒ assign()
hash: ""
host: "127.0.0.1:8080"
hostname: "127.0.0.1"
href: "http://127.0.0.1:8080/"
origin: "http://127.0.0.1:8080"
pathname: "/"
port: "8080"
protocol: "http:"
reload: ƒ reload()
replace: ƒ replace()
search: ""
toString: ƒ toString()
valueOf: ƒ valueOf()
Symbol(Symbol.toPrimitive): undefined
                            __proto__: Location
~~~

~~~ javascript
//重新加载
location.reload();
~~~
### Document(重要)
> 代表当前的页面 HTML DOM文档树
~~~ html
<div id="test">
<dt>golang</dt>
<dd>docker</dd>
<dd>k8s</dd>
</div>
~~~

~~~ javascript
console.log(document.title);
let d1 = document.getElementById("test");
console.log(d1);
~~~
- document.cookie() 可以用于劫持cookie

### history
> 代表浏览器的历史记录
~~~ javascript
history.forward()
history.back()
~~~

## 操作Dom对象
> 对应CSS选择器
- document.getElementByTagName()
- document.getElementById()
- document.getElementByClassName()
- 返回数组
~~~ javaxcript
var parent = document.getElementById('father');
var children = parent.children;
~~~

### 更新Dom
~~~ html
    <div id="id1">
    hello world!
    </div>
~~~

~~~ javascript
var d1 = document.getElementById('id1');
console.log(d1.innerText);
d1.innerText = '234';

d1.innerHTML = '<strong>cpp</strong>';

d1.style.color = "red";
d1.style.fontSize = '50px';
~~~

### 删除Dom
先获取父节点，通过父节点调用removeChild
~~~ javascript
var self = document.getElementById('p1');
var father = p1.parentElement;
father.removeChild(p1);
~~~


### 操作表单
> 表单 form DOM树
- 文本框 text
- 下拉框 select
- 单选框 radio
- 多选框 chechbox
- 隐藏框 hidden
- 密码框 password
~~~ html 
<!DOCTYPE html>
 <html lang="en">
 <head>
     <meta charset="UTF-8">
     <title>JS-Learn</title>
     <script src="https://cdn.bootcss.com/blueimp-md5/2.10.0/js/md5.min.js"></script>
 </head>
 <body>
     <div id="id1">
         hello world!
     </div>

     <p id="js">JavaScript</p>

     <div id="list">
         <p id="se">JavaSE   </p>
         <p id="ee">JavaEE</p>
         <p id="me">JavaME</p>
     </div>

     <form action="https://www.baidu.com/" method="post" onsubmit="return subfunc()">
         <div id="input">
             <span>用户名:</span><input type="text" id="username">
         </div>

         <div id="passwd">
             <span>密码:</span><input type="password" id="passwd">
         </div>

         <input type="hidden" id="md5-passwd" name="md5psw">

         <button tyoe="submit">提交</button>
     </form>

    <script text=javascript>
        function subfunc(){
            alert(1);
            let uname = document.getElementById('username');
            let passwd = document.getElementById('passwd');
            let md5psw = document.getElementById('md5-passwd');

            md5psw.value = md5(passwd.value);
            return true;
        }
    
    </script>
 </body>
 </html>

~~~


