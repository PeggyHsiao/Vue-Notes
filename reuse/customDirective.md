# 自定義指令 (Coustom Direactive)
在Vue裡面有許多內建指令(v-bind、v-model、v-if...)，使用者也可以自行新增指令來完成對DOM元素的操作，其中有分為**全域自定義指令**和**局部自定義指令**。  

現在要新增一個`v-focus`的全域指令，功用是開啟網頁時游標會自動停在`<input>`上。在`main.js`檔案中新增`Vue.directive()`，第一個參數代表指令名稱(到時候使用就寫為`v-指令名稱`)，第二個參數則是要執行的方法。
```
// main.js
// el代表執行此指令的元素，名稱可替換

Vue.directive('focus',{
  inserted(el){
    el.focus();
  }
})
```
已經定義好指令了，現在這個專案中任何組件都可以使用。`CustomDirective.vue`新增兩個`<input>`其中一個加上`v-focus`，載入網頁後就可以看到游標停在上面的表格中。
```
// CustomDirective.vue

<template>
    <div>
        <input type="text" v-focus value="這個有加入v-focus">
        <br><br>
        <input type="text" value="這個沒加入">
    </div>
</template>
```