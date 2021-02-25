# 快速入门
## 引入javascript
1. 内部标签
~~~ html
<script>
    //...
</script>
~~~

2. 外部引入
`main.js`
~~~ javascript
alert("helloworld");
~~~

`index.html`
~~~ html
<script src="main.js"></script>
~~~

## 变量
### 变量声明
==var 全局变量==
~~~ javascript
//定义变量 var 变量名 = 变量值 javascript
var 世界 = "世界"
document.writeln("你好");
document.writeln(世界);
~~~

==let 局部变量==
~~~ javascript
//定义变量 var 变量名 = 变量值 javascript
let 世界 = "世界"
document.writeln("你好");
document.writeln(世界);
~~~

### 严格模式
严格检查模式 预防js的随意性导致产生一些问题
~~~ javascript
'use strict'
~~~

### 数据类型
==number==
js不区分小数和整数 全是Number

~~~ javascript
123 //整数
123.1 //浮点数
1.123e3 //科学计数法
-99 //负数
NaN //not a number
Infinity //无限大
~~~


==字符串==
- 普通字符串
~~~ c
let str1 = 'abc' 
let str2 = "abc"
let str3 = 
`
hello
world

`
~~~
- 字符串模板
~~~ javascript
let name = "eintr";
let age = 23;
let msg = `你好${name}`
~~~
- 字符串长度
~~~ javascript

~~~
- 字符串的不可变性
~~~ javascript
let name = "eintr";
name[0] = 'E';
document.writeln(name);

~~~
- 大小写转换
~~~ javascript
let name = "eintr";
let NAME = "EINTR";
document.writeln(name.toUpperCase());
document.writeln(NAME.toLowerCase());
~~~

- indexOf
~~~ javascript
let name = "eintr";
document.writeln(name.indexOf('i'));
~~~

- substring 左闭右开
~~~ javascript
let name = "impacteintr";
let subname = name.substring(6);
document.writeln(subname)
~~~


==布尔值==
true,false

### 运算符
==逻辑运算==
~~~ javascript
&& || !
~~~

==比较运算符==
- == 值等于(类型不一样，值一样，也会判断为true)
### 数组
**Array可以包含任意的数据类型**

~~~ javascript
let arr = [1,2,3,4,5,6];
document.writeln(arr);
~~~

- **`arr.length`长度是一个可变的属性**
~~~ javascript
let arr = [1,2,3,4,5,6];
arr.length = 10;
document.writeln(arr);//1,2,3,4,5,6,,,,
~~~
**假如给arr.length复制 数组大小就会发生变化 如果赋值过小 元素就会丢失**

- indexOf() 通过元素获取下标索引

- slice() 截取Array的一部分 返回新数组

- push() pop()
~~~ javascript
push 压入数组尾部
pop弹出尾部的一个元素
~~~

- unshift() shift()
~~~ javascript
ubshift 压入数组头部
shift 弹出头部的一个元素
~~~

- 排序sort()
~~~ javascript
(3)["B","C","A"]
arr.sort()
(3)["A","B","C"]

~~~
- 元素反转
~~~ javascript
(3)["C","B","A"]
arr.reverse()
(3)["A","B","C"]
~~~

- concat()
~~~ javascript
(3)["C","B","A"]
arr.concate([1,2,3])
 -> (3)["A","B","C",1,2,3]
//arr本体没有变

(3)["C","B","A"]
~~~
**注意concat()并没有写该数组 只是会返回一个新的数组**

- 连接符 join()
**打印拼接数组 使用特定的字符串连接**
~~~ javascript
(3)["C","B","A"]
arr.join('-')
"C-B-A"
~~~

- 多维数组
~~~ javascript
arr = [[1,2][3,4]["5","6"]]
a[1][2]

4
~~~


~~~ javascript

~~~


~~~ javascript

~~~


~~~ javascript

~~~


~~~ javascript

~~~


~~~ javascript

~~~


~~~ javascript

~~~


~~~ javascript

~~~


~~~ javascript

~~~


~~~ javascript

~~~



~~~ javascript

~~~


~~~ javascript

~~~

~~~ javascript

~~~







