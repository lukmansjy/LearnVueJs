var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello World',
        messageWithHtml: '<b>Hello World</b>',
        show: true,
        name: 'Lukman',
        int1: 10,
        int2: 15
    },
    computed: {
        sum: function(){
            return this.int1 + this.int2
        }
    }
})