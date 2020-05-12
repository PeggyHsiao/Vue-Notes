# 實例方法 (Prototype)
有些方法很常使用，如果每次要用都要寫一次function或引入.js檔實在蠻麻煩的。因此可以利用`prototype`自訂方法或屬性大家一起共享。  

**建議自訂的方法名稱前面加上`$`符號**。

假設很多組件會用到"按下按鈕跳出Successful的alert"功能，可以在`src/plugins/index.js`自訂`Vue.prototype`。
```
// index.js

Vue.prototype.$alert = function(){
    alert("Successful");
}
```
定義好之後，就可以在需要的組件中直接使用`$alert`。現在只要按下按鈕就會跳出alert視窗，完全不需要import任何檔案超方便！
```
// Prototype.vue
<template>
    <div>
        <h1>this is Prototype.vue</h1>
        <button @click="$alert">Alert</button>
    </div>
</template>
```
如果是需要傳入參數的方法也可以，下面例子是把數值*2輸出，會依據使用的組件不同而傳入不同的參數。
```
// index.js

Vue.prototype.$doubleNumber = function(val){
    if(typeof val =='number'){
        return val*2
    }else{
        return null
    }
}
```
```
// Prototype.vue

<template>
    <div>
        <h1>this is Prototype.vue</h1>
        <button @click="double">Computed</button>
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
```

