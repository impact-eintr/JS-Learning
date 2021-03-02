# Vue
Vue是一款渐进式的js框架，所谓渐进式就是逐步实现新特性的意思，比如实现模块化开发、路由、状态管理等新特性，其特点是综合了Angular(模块化)和React(虚拟Dom)的优点
> SOC原则(关注点分离)
HTML + SCSS + JS： 视图层 给用户看的，或者刷新后台发送来的数据  

- `{{}}`
~~~ html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>HelloWorld!</title>
    <!--这里也可以存放-->
</head>
<body>
    <div id="app">
        {{message}}
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
            data: {
                message: "hello,Vue!"
            }
});

~~~

`{{message}}`就是虚拟Dom 不需要人为修改 而是绑定变量 之后使用 api 接口请求数据即可

现在数据和DOM已经被建立了关联，所有东西都是响应式的，我们在控制台操作对象属性，界面可以实时更新

- `v-bind` 绑定特定元素
- `v-if` `v-else-if` `v-else`
~~~ html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>HelloWorld!</title>
    <!--这里也可以存放-->
</head>
<body>

    <div id="type">
        <h1 v-if="type==='golang'">golang</h1>
        <h1 v-else-if="type==='cpp'">cpp</h1>
        <h1 v-else="type==='rust'">rust</h1>
    </div>
    <!--引入Vue.js-->
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
    <script text=javascript src="../js/main.js"></script>
</body>
</html>

~~~

~~~ javascript
let vm = new Vue({
            el: "#type",
            data: {
                type: "golang"
            }
        }
);

~~~
- `v-for`

~~~ html
TYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>HelloWorld!</title>
    <!--这里也可以存放-->
</head>
<body>

    <div id="list">
        <li v-for="item in items">
            {{item.message}}
        </li>
    </div>
    <!--引入Vue.js-->
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
    <script text=javascript src="../js/main.js"></script>
</body>
</html>

~~~

~~~ javascript
let vm = new Vue({
            el: "#list",
            data: {
                items: [
                    {message: 'golang'},
                    {message: 'rust'},
                    {message: 'dart'}
                ]
            }
        }
);
~~~


> 处理事件

方法必须定义在 Vue的`methods`对象中
~~~ html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>HelloWorld!</title>
    <!--这里也可以存放-->
</head>
<body>

    <div id="app">
        <button v-on:click="hello">点击</button>
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
            data: {
                message: 'golang'
            },
            methods: {
                hello: function(){
                    alert(this.message);
                }
            }
});
~~~



















