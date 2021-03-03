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



## 内容分发
在Vue.js中我们使用`slot`元素作为分发内容的出口，
## slot

~~~ html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>HelloWorld!</title>
</head>
<body>
    <div id="app">
        <todo>
                <todo-title slot="todo-title" v-bind:title="title"></todo-title>
                <todo-items slot="todo-items" v-for="item in todoItems" v-bind:item="item"></todo-items>
        </todo>
    </div>

    <!--引入Vue.js-->
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
    <script text=javascript src="../js/main.js"></script>
</body>
</html>

~~~

~~~ javascript
Vue.component("todo",{
    template: '<div>\
                <slot name="todo-title"></slot>\
                    <ul>\
                        <slot name="todo-items"></slot>\
                    </ul>\
               </div>'
});

Vue.component("todo-title",{
    props: ['title'],
    template: '<div>{{title}}</div>'
});

Vue.component("todo-items",{
    props: ['item'],
    template: '<li>{{item}}</li>'
});

let vm = new Vue({
            el: "#app",
            data: {
                title: "编程语言",
                todoItems: ['golang','rust','dart']
            }

});
~~~

## 自定义事件

VUE的methods对象里面如果函数使用箭头函数会导致this指向的不是vue实例$vm,而是一个xxxx.a的一个类，尽量不要再VUE所定义的字段里面使用箭头函数 

> 格式 `$this.$emit(事件名,参数)`

~~~ html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>HelloWorld!</title>
</head>
<body>
    <div id="app">
        <todo>
                <todo-title slot="todo-title" v-bind:title="title"></todo-title>
                <todo-items slot="todo-items" v-for="(item,index) in todoItems" :item="item" :index="index" @remove="rme(index)" :key="index"></todo-items>
        </todo>
    </div>

    <!--引入Vue.js-->
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
    <script text=javascript src="../js/main.js"></script>
</body>
</html>

~~~

~~~ javascript
Vue.component("todo",{
    template: '<div>\
                <slot name="todo-title"></slot>\
                    <ul>\
                        <slot name="todo-items"></slot>\
                    </ul>\
               </div>'
});

Vue.component("todo-title",{
    props: ['title'],
    template: '<div>{{title}}</div>'
});

Vue.component("todo-items",{
    props: ['item','index'],
    template: '<li>No.{{index}}--{{item}}<button @click="remove">delete</button></li>',
    methods: {
        remove: function(index){
            this.$emit('remove',index);
        }

    }
});

let vm = new Vue({
            el: "#app",
            data: {
                title: "编程语言",
                todoItems: ['golang','rust','dart']
            },
            methods: {
                rme: function(index){
                    console.log("test");
                    this.todoItems.splice(index,1);
                }
            }
});
~~~

## 入门小结
> 常用的属性

- v-if
- v-else-if
- v-else
- v-for
- v-on 绑定事件 简写`@`
- v-model 数据双向绑定
- v-bind 给组件绑定参数 简写`:`

> 组件化

- 组合组件`slot`插槽
- 组件内部绑定事件需要使用到`this.emit(事件名,参数)`
- 

**遵循SoC关注度分离原则 Vue关注的纯粹的试图框架 并不包含`Ajax`之类的通信功能 可以选用`Axios` 实现异步通信**



