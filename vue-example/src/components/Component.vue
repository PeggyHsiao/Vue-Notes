<template>
    <div>
        <h1>this is Component.vue</h1>
        <div class="box"></div>
    </div>
</template>

<script>
export default {
    data(){
        return{

        }
    },
    watch:{
        
    },
    computed(){

    },
    methods:{

    }
}
</script>

<style scoped>
div.box{ 
    box-shadow: 0 0 15px rgba(0,0,0,.1); 
    width:700px; 
    height: 200px;
    margin: 0 auto; 
    display: block;
}
</style>