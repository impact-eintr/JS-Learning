# Ajax

## Ajax
`Asynchronous Javascript and XML(异步的Javascript和XML)` 是一种无需重新加载整个网页的情况下，能够更新部分网页的技术

Ajax是一种用于创建更快更好以及交互性更强的Wed应用程序的技术

### 伪造一个 Ajax

~~~ html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>HelloWorld!</title>
    <!--这里也可以存放-->
</head>
<body>

    <p>清输入要加载的地址：<span id="curtime"></span> </p>
    <p>
        <input type="text" id="url" value="">
        <input type="button" value="提交" onclick="loadPage()">
    </p>

    <div>
        <h3>
            加载页面的位置
        </h3>
        <iframe id="iframePosition" style="width: 100%;height: 500px" frameborder="1">
        
        </iframe>
    </div>

    <script text=javascript src="../js/main.js"></script>
</body>
</html>

~~~

~~~ javascript
window.onload = () => {
    let myDate = new Date();
    document.getElementById('curtime').innerText = myDate.getMonth()+"🌒"+myDate.getDate()+"😎";
}

function loadPage(){
    let targetUrl = document.getElementById('url').value;
    console.log(targetUrl);
    document.getElementById('iframePosition').src = targetUrl;

}
~~~






















