// Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.

const app = new Vue({
    el:'#root',
    data :{
        message:'Hello Vue',
        thisImage:'img/but_it_does.png',
        thisAlt:'it but_it_does',
        mine:'red',
        set:'isSet',
        bo:'border'
    },
    methods:{
        change:function(){
            // this.mine="blue";
            
            if(this.mine == "red"){
                this.mine ="blue"
                this.bo ='border_'
            }else{
                this.mine = 'red'
                this.bo = 'border'
            }
        }
    }    

});