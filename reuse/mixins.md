# Mixins
有些組件(components)會用到相同功能，把它們拉出來獨立寫在一個.js檔案中，讓有需要的組件利用import來引入使用，大大減少在每個組件裡寫重覆的Code。  

一個mixins檔案可以包含任意的組件選項(component options)，組件選項就是定義組件中的data、created、methods...這些東西。當組件import mixins檔案後，會將兩個檔案的組件選項做合併。  

### 範例
有些組件載入時要顯示"Hello World!"的訊息，因此建立一個`mixins`資料夾，裡面新增`commomMixins.js`檔案存放此功能。  
```
// commonMixins.js

export default{
    created(){
        sayHi(){
            console.log("Hello World!");
        }
    }
}
```
`componentA.vue`需要用到上述功能，用import引入`commomMixins.js`檔案並註冊。
```
// componentA.vue
<template>
    <h1>ComponentA</h1>
</template>

<script>
import CommonMixins from '@/mixins/commomMixins';

export default{
    mixins:[]
}
</script>
```