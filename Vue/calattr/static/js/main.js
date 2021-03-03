'use strict'
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


document.writeln("<br>");
document.writeln("<br>");
document.writeln("<br>");
document.writeln("<br>");
document.writeln("<br>");
document.writeln("<br>");
document.writeln("<br>");
document.writeln("<br>");
document.writeln("<br>");
document.writeln("<br>");
document.writeln("<br>");
document.writeln("<br>");
document.writeln("<br>");
document.writeln("<br>");
document.writeln("<br>");
document.writeln("<br>");
document.writeln("<br>");
document.writeln("<br>");
document.writeln("<br>");
document.writeln("<br>");
document.writeln("<br>");
document.writeln("<br>");
document.writeln("<br>");
document.writeln("<br>");
document.writeln("<br>");
document.writeln("<br>");
document.writeln("<br>");
document.writeln("<br>");
document.writeln("<br>");
document.writeln("<br>");
document.writeln("<br>");
document.writeln("<br>");
document.writeln("<br>");
document.writeln("<br>");
document.writeln("<br>");
document.writeln("<br>");
document.writeln("<br>");
document.writeln("<br>");
document.writeln("<br>");
document.writeln("<br>");
document.writeln("<br>");
document.writeln("<br>");
document.writeln("<br>");
document.writeln("<br>");
document.writeln("<br>");
document.writeln("<br>");
document.writeln("<br>");
document.writeln("<br>");
document.writeln("<br>");
document.writeln("<br>");
document.writeln("<br>");
document.writeln("<br>");
document.writeln("<br>");
document.writeln("<br>");
document.writeln("<br>");
document.writeln("<br>");
document.writeln("<br>");
document.writeln("<br>");
document.writeln("<br>");
document.writeln("<br>");
document.writeln("<br>");
document.writeln("<br>");
document.writeln("<br>");
document.writeln("<br>");
document.writeln("<br>");
document.writeln("<br>");
document.writeln("<br>");
document.writeln("<br>");
