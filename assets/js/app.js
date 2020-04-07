var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello World',
        messageWithHtml: '<b>Hello World</b>',
        show: true,
        name: 'Lukman',
        int1: 10,
        int2: 15,
        result: null,
        kilometers: 0,
        meters: 0,
        valueInput: '',
        textarea: '',
        radioButton: '',
        selectOneLanguage: '',
        selectMoreLanguage: [],
        checkbox: [],
        imgSrc: 'assets/image/profile.png',
        googleUrl: 'https://google.com',
        textStyle: 'color: red; font-size: 20px; font-weight: bold'
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
    },
    watch: {
        kilometers: function(val){
            this.kilometers = val
            this.meters = val * 1000
        },
        meters: function(val){
            this.meters = val
            this.kilometers = val / 1000
        }
    }
})