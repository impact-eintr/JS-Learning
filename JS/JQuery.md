# JQuery
jQuery
## 引入
~~~ html
<script src="https://cdn.bootcdn.net/ajax/libs/jquery/3.5.1/jquery.js"></script>
~~~

## 使用
> 公式： $(selector).action()
~~~ javascript
$('p').click();
$('#id1').click();
$('.class1').click();
~~~
> 鼠标事件
~~~ html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>HelloWorld!</title>
    <script src="https://cdn.bootcdn.net/ajax/libs/jquery/3.5.1/jquery.js"></script>
    <!--这里也可以存放-->
    <style>
        #divMove{
            width: 500px;
            height: 500px;
            border: 2px solid red;
        }
    </style>
</head>
<body>

    mouse:<span id="mouseMove"></span>
    <div id="divMove">
        在这里移动鼠标试试
    <div>

    <script text=javascript src="../js/main.js"></script>
</body>
</html>
~~~
> 操作DOM
~~~ javascript
$(document).ready(function(){
    $('#divMove').mousemove(function(e){
        $('#mouseMove').text('x:'+e.pageX+'y:'+e.pageY);
    })
})
~~~

~~~ html
    <ul id="test-ul">
        <li class="js">javascript</li>
        <li name="py">python</li>
    </ul>
~~~

~~~ javascript
let content = $('#test-ul li[name=py]').text();//获取
console.log(content);
$('#test-ul li[name=py]').text('golang');//设置
~~~

> CSS操作
~~~ javascript
$('#test-ul li[name=python]').css({"color","red"})
~~~

> 元素的显示与隐藏 display: none
~~~ javascript
$('#test-ul li[name=python]').show()
$('#test-ul li[name=python]').hide()
~~~


## Ajax
~~~ javascript
$('#form').ajax()

$ajax({url: "test.html",context: document.body,success: function(){
            $(this).addClass("done");
            }})
~~~




