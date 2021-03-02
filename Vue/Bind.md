### 双向绑定
> v-model

- 文本框
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
        输入：
        <input type="text" v-model="message"> {{message}}
    </div>
    <!--引入Vue.js-->
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
    <script text=javascript src="../js/main.js"></script>
</body>
</html>

~~~
- 多选框
~~~ javascript
let vm = new Vue({
            el: "#app",
            data: {
                message: 'golang'
            },
});
~~~

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
        请选择：
        <select v-model="selected">
            <option value="" disabled>--请选择--</option>
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
        </select>
        <br>
        选中了：{{selected}}
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
                selected: ''
            },
});

~~~

### 组件
`组件`是可复用的Vue实例，也就是彝族可以重复使用的模板，通常一个应用会以一棵嵌套的组件树的形式来组织
> Vue.component
~~~ html
    <div>
        <eintr></eintr>
    </div>
~~~

~~~ javascript
Vue.component("eintr",{
    template: '<p>hello eintr</p>'
});
~~~

绑定中的"形参"与"实参"
`val`可以认为是一个形参，`item`是每次实际传递的参数

~~~ html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>HelloWorld!</title>
</head>
<body>
    <div id="app">
        <eintr v-for="item in items" v-bind:val="item"></eintr>
    </div>

    <!--引入Vue.js-->
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
    <script text=javascript src="../js/main.js"></script>
</body>
</html>

~~~

~~~ javascript
Vue.component("eintr",{
    props: ['val'],//相当于约定形参名
    template: '<p>{{val}}</p>'
});

let vm = new Vue({
            el: "#app",
            data: {
                items: ['golang','rust','dart','js']
            },
});
~~~



