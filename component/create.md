# 新增組件
把畫面拆成很多區塊(例如：導覽列、浮動視窗、登入表格...)，把每個區塊寫成各別的組件，如果畫面有需要使用到重覆的元件，只需要`import`使用而不再需要寫入重覆的程式碼。  

在`src/components`中建立副檔名為`.vue`的檔案，其中包含`<template>`、`<script>`、`<style>`。
```
// Component.vue

<template>
    <div>
        <h1>this is Component.vue</h1>
        <div class="box"></div>
    </div>
</template>

<script>
export default {
    props:{
        使用這份組件需要的資料
    },
    data(){
        return{
            放入要宣告的變數
        }
    },
    watch:{
        監控        
    },
    computed(){
        自動計算
    },
    methods:{
        方法
    }
        .
        .
        .
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
```
## 畫面
主要的畫面呈現寫在`<template>`裡面，就像熟悉的HTML。不過在`<template>`中**必須由一個根元素**(root element)包著組件內容。  

## 樣式
樣式除了以往的`CSS`之外，也可以用其他CSS預處理器語言撰寫(例如：Sass、Stylus、Less...)。不過使用不同的預處理器需要先`install`其`loader`。  
其中`scoped`代表其作用域，表示這坨`<style>`只能在這份組件使用。

## 資料處理
組件下方有個`<script>`會放入這個組件需要用到的變數、方法...等資料，大多前面的章節都有說明用途，其中`props`比較特別，他的用途是告訴使用`Component.vue`的父組件**必須提供什麼資料給這個組件使用**，包含`type(型態)`、`required(是否必要提供)`、`default(預設)`等條件。  

詳細的使用範例會在[props]()中說明。