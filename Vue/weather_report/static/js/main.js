'use strict'

let vm = new Vue({
           el: "#app",
            data: {
                joke: "开心最重要"
            },
            methods: {
                getjoke: function(){
                    let that = this
                    axios.get("https://autumnfish.cn/api/joke").then(
                                function(response){
                                    that.joke = response.data
                                    console.log(that.joke)
                                },
                                function(err){

                                }
                    )
                }
            }
});

