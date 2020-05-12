# 自定義指令 (Coustom Direactive)
在Vue裡面有許多內建指令(v-bind、v-model、v-if...)，使用者也可以自行新增指令來完成對DOM元素的操作，其中有分為**全域自定義指令**和**區域自定義指令**。  

## 全域自定義指令
現在要新增一個`v-focus`的全域指令，功用是開啟網頁時游標會自動停在`<input>`上。在`plugins/index.js`檔案中新增`Vue.directive()`，第一個參數代表指令名稱(到時候使用就寫為`v-指令名稱`)，第二個參數則是要執行的方法(使用`Javascript`)。
```
// index.js
// el代表執行此指令的DOM元素，名稱可替換

Vue.directive('focus',{
  inserted(el){
    el.focus();
  }
})
```
已經定義好指令了，`CustomDirective.vue`新增兩個`<input>`其中一個加上`v-focus`，載入網頁後就可以看到游標在上面的表格閃爍。因為是全域自定義指令，現在整個專案的組件都可以使用，之前的`Mixins.vue`也可以快樂的新增`<input v-focus>`獲得一樣的效果哦。
```
// CustomDirective.vue

<template>
    <div>
        <input type="text" v-focus value="這個有加入v-focus" />
        <br />
        <br />
        <input type="text" value="這個沒加入" />
    </div>
</template>
```

## 區域自定義指令
如果要改成區域自定義指令的話，只需要將`index.js`的`Vue.directive()`搬移到組件`<script>`裡面就可以了。變成區域指令只有定義的組件可以使用`v-focus`。
```
// CustomDirective.vue

<script>
export default {
  directives: {
    focus : {
      inserted: function(el) {
        el.focus();
      }
    }
  }
};
</script>
```

## 鉤子函數
剛剛在範例中使用到`inserted`，這是`directive hook`之一，以下其他鉤子函數：
- bind
- inserted
- update
- componentUpdated
- unbind

### bind
第一次綁定到元素會執行，可以透過`bind`給元素新增class name。現在只要輸入`v-addclass`就可以在element新增一個名為test的class。
```
// main.js

Vue.directive('addclass',{
  bind(el){
    el.className = 'test';
  }
})
```
```
// CustomDirective.vue

<template>
    <input type="text" v-addclass value="使用bind新增class" />
</template>
```
### inserted
當元素插入到DOM會觸發。就像上面的例子，當`<input>`載入HTML時就執行`v-focus`。

### update
### componentUpdated
### unbind

>>待更新...