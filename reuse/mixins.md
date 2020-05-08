# Mixins
有些組件(components)會用到相同功能，把它們拉出來獨立寫在一個.js檔案中，讓有需要的組件利用import來引入使用，大大減少在每個組件裡寫重覆的Code。  

一個mixins檔案可以包含任意的組件選項(component options)，組件選項就是定義組件中的data、created、methods...這些東西。當組件import mixins檔案後，會將兩個檔案的組件選項做合併。   

當組件選項內的名稱和mixins檔案名稱重覆時，會以**當前組件**的值覆蓋mixins的！  

## 範例
### 在vue-cli使用mixins
有些組件載入時要顯示"Hello!"的訊息，因此建立一個`mixins`資料夾，裡面新增`commomMixins.js`檔案存放此功能。  
```
// commonMixins.js

export default {
    created() {
        console.log("Hello!");
    }
}
```
`MixinsTest.vue`需要用到上述功能，就import引入`commomMixins.js`檔案並註冊`mixins:[]`。
```
// MixinsTest.vue

<template>
  <h1>this is MixinsTest.vue</h1>
</template>

<script>
import CommomMixins from '@/mixins/commonMixins';

export default {
  mixins: [CommomMixins]
};
</script>
```
這樣瀏覽器只要有使用到MixinsTest的組件，就會顯示"Hello!"的字樣。  

### mixins和組件名稱衝突
兩個檔案data中皆有message的屬性，因此在合併的時候會以組件的`message:'abc'`為主。
```
// commonMixins.js

export default {
    data(){
        return{
            message:"ABC",
        }
    },
}
```
```
// MixinsTest.vue

export default {
  mixins: [CommomMixins],
  data() {
    return {
      message: 'abc',
      value:'123'
    };
  },
  created() {
      console.log(this.$data);
  }
};
</script>
```
輸出結果為object，其內容為{ message: 'abc', value:'123'}。