<template>
  <div>
    <input type="text" v-focus value="這個有加入v-focus" />
    <br />
    <br />
    <input type="text" value="這個沒加入" />
    <br />
    <br />
    <input type="text" v-addclass value="使用bind新增class" />
  </div>
</template>


<!--區域自定義指令
<script>
export default {
  directives: {
    focus : {
      inserted: function(el) {
        el.focus();
      }
    }
  }
}
</script>-->