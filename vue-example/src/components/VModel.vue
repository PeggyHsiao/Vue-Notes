<template>
    <div>
        <h1>v-model data</h1>
        <label>User Name</label><br>
        <input type="text" v-model="info.username"><br>

        <label>Password</label><br>
        <input type="password" v-model="info.password"><br>

        <label>E-mail</label><br>
        <input type="email" v-model="info.email"><br>
        
        <button id="btn" @click="sumbitData">Submit</button>
    </div>
</template>

<script>
export default {
    data(){
        return{
            info:{
                username: '',
                password: '',
                email: ''
            }
        }
    },
    methods:{
        sumbitData(){
            console.log(this.info);
        }
    }
}
</script>

<style scoped>
    div{
        width: 500px;
        text-align: left;
        margin: 0 auto;
        display: block;
    }
    input{
        width: 70%;
        margin-bottom: 20px;
    }
</style>
