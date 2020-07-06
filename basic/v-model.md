# 雙向資料綁定
`v-bind`是將`data(){...}`裡面的變數代入HTML。`v-model`除了可以把變數代入HTML之外，當變數值在網頁發生更改時，`data(){...}`裡面也會一起更新。

這是個很常見的功能：有個表單頁面，裡面包含很多的`input`、`radio`或者`select`，當按下Submit的時候將使用者輸入的資料透過API傳給後端。我們把這個功能做成簡單的範例來看，這裡用`input`來說明就好，反正只是要見識雙向資料綁定有多方便！

首先，先建立三個輸入框並搭配簡單的樣式
```vue
<!--VModel.vue-->

<template>
    <div>
        <h1>v-model data</h1>
        <label>User Name</label><br>
        <input type="text"><br>

        <label>Password</label><br>
        <input type="password"><br>

        <label>E-mail</label><br>
        <input type="email"><br>
        
        <button id="btn">Submit</button>
    </div>
</template>

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
```
這時候畫面會長這樣，看起來該有的欄位都有也可以輸入，這時候就可以來綁定資料了。  
![mustache](https://github.com/PeggyHsiao/Vue-Notes/blob/master/basic/model.JPG)   
在剛剛vue檔案`<template>`下方新增`<script>`，並在`data(){...}`加入變數。我把變數們包在一個叫`info`的物件裡(沒有一定要包在物件裡面，只是單純覺得這樣傳給後端比較方便)。
```vue
<!--VModel.vue-->

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
}
</script>
```
宣告好變數就可以綁定在`<template>`的HTML元素上了，這時候使用`v-model`指令。這時候會看到畫面跟剛剛一模一樣，那是因為變數值都是`''`當然沒東西，但是這時候已經綁定好了。
```vue
<!--VModel.vue-->

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
```
由於只是範例，我們就用`console.log`代表傳給後端的資料。新增一個`<button>`並綁定方法，當按下按鈕的時候執行`sumbitData()`。這時候檔案會長成下面這樣
```vue
<!--VModel.vue-->

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
```
輸入完欄位資料按submit，在console會看到剛剛輸的資料。是因為使用者編輯輸入框的資料的時候，`data(){...}`裡面的變數值也更著改變，所以送出的時候只要給`info`就可以了，超方便！
![mustache](https://github.com/PeggyHsiao/Vue-Notes/blob/master/basic/modelconsole.JPG) 
