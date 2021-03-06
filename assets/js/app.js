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
        textStyle: 'color: red; font-size: 20px; font-weight: bold',
        messageClick: '',
        messageKeyEnter: '',
        messageKey: '',
        vehicles: ['Car', 'Bike', 'Motorcycle'],
        vehicle: ''
    },
    computed: {
        sum: function(){
            return this.int1 + this.int2
        }
    },
    methods: {
        sumProcess: function(int3){
            return this.result = this.int1 + this.int2 + int3
        },
        showAlert: function(){
            alert('Alert show by @click')
        },
        escKey: function(){
            return this.messageKey = 'You press esc key'
        },
        spaceKey: function(){
            return this.messageKey = "You press space key"
        },
        aKey: function(){
            return this.messageKey = 'You press A key'
        },
        addVehicle: function(){
            this.vehicles.push(this.vehicle)
            this.vehicle = ''
        },
        removeVehicle: function(index){
            return this.vehicles.splice(index, 1)
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