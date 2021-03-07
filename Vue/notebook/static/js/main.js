'use strict'

let vm = new Vue({
            el: "#todoapp",
            data: {
                list:["写代码","吃饭","睡觉"],
                inputValue:"好好学习，天天向上"//获取用户输入
            },
            methods: {
                add: function(){
                    this.list.push(this.inputValue)
                },
                del: function(index){
                    console.log("删除"+index);
                    this.list.splice(index,1);
                },
                delall: function(){
                    console.log("删除全部");
                    this.list = [];
                }
            }
});

