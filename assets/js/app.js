var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello World',
        messageWithHtml: '<b>Hello World</b>',
        show: true,
        name: 'Lukman',
        int1: 10,
        int2: 15,
        result: null
    },
    computed: {
        sum: function(){
            return this.int1 + this.int2
        }
    },
    methods: {
        sumProcess: function(int3){
            return this.result = this.int1 + this.int2 + int3
        }
    }
})