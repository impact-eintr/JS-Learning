## 计算属性
计算属性的重点在`属性`上，简而言之，他就是一个能将计算结果缓存起来的属性，相当于`缓存`
缓存就意味着，当计算结果没有发生改变时，不需要每次都重新计算，可以提高一定的系并发量
~~~ html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>HelloWorld!</title>
</head>
<body>
    <div id="app">
        <h2>curtime1 : {{curtime1}}</h2>
        <h2>curtime2 : {{curtime2()}}</h2>
    </div>

    <!--引入Vue.js-->
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
    <script text=javascript src="../js/main.js"></script>
</body>
</html>

~~~

~~~ javascript

let vm = new Vue({
            el: "#app",
            computed: {
                curtime1: () => Date.now()
            },
            methods: {
                curtime2: () => Date.now()
            }
});
~~~

## slot


## 内容分发

## 自定义事件

