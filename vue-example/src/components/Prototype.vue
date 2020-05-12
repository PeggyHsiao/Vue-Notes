<template>
    <div>
        <h1>this is Prototype.vue</h1>
        <button @click="double">Computed</button>
        <button @click="$alert">Alert</button>
        <p>{{ num }}</p>
    </div>
</template>

<script>
export default {
    data(){
        return{
            num: 1,
        }
    },
    methods:{
        double(){
            this.num = this.$doubleNumber(this.num)
        }
    }
}
</script>