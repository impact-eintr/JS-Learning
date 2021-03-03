# Axios

### 


![在这里插入图片描述](https://img-blog.csdnimg.cn/20210303101805492.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQ0ODA3Nzk2,size_16,color_FFFFFF,t_70#pic_center)


~~~ html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>HelloWorld!</title>
</head>
<body>
    <div id="app">
        <h2>{{info.url}}</h2>
    </div>

    <!--引入Vue.js-->
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
    <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
    <script text=javascript src="../js/main.js"></script>
</body>
</html>

~~~

~~~ javascript
let vm = new Vue({
            el: "#app",
            data(){
                return{
                    info: {
                        name: null,
                        url: null
                    }
                }
            },
            mounted(){
                axios.get('data.json').then(response=>(this.info=response.data));
            }
});
~~~















































