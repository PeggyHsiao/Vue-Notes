# 動態綁定CSS
有時候會根據資料內容、使用時機...的不同，而使用不同的樣式表達(例如：OOO的時候按鈕要設定為不可點選的灰色、XXX的時候邊框要變成提示的紅色)。這時候會有兩種動態綁定樣式的方式，使用`:class`或者`:style`。

## class綁定
單向資料綁定`class`並且在後面判斷`class`名稱是否為`true`，如果為`true`則會套用`<style>`裡面的樣式。
```vue
<template>
  <div>
    <div 
      class="div-test"
      :class="{'div-test-odd':isOdd}"
    />
    <div class="div-test" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOdd: true,
    };
  },
};
</script>

<style scoped>
.div-test {
  border: 3px solid grey;
  width: 200px;
  height: 100px;
  margin: 10px 0;
}
.div-test-odd {
  border: 3px solid rgb(248, 95, 95);
}
</style>
```
因為`isOdd`的值為`true`，所以第一個`div`會套用下方`.div-test-odd`的樣式。如下圖：
![style1](https://github.com/PeggyHsiao/Vue-Notes/blob/master/basic/style1.JPG) 

## style綁定
設一個物件把`css`的設定放在`data(){...}`裡面，再將標籤的`style`綁定此物件
```vue
<template>
  <div>
    <div class="div-test" :style="classIsOdd"></div>
    <div class="div-test"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOdd: true,
      classIsOdd:{
          borderColor: 'blue'
      }
    };
  },
};
</script>

<style scoped>
.div-test {
  border: 3px solid grey;
  width: 200px;
  height: 100px;
  margin: 10px 0;
}
</style>
```
結果會如下圖：
![style2](https://github.com/PeggyHsiao/Vue-Notes/blob/master/basic/style2.JPG) 