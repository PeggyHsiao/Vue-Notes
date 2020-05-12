<template>
  <div>
    <input type="text" v-focus value="這個有加入v-focus" />
    <br />
    <br />
    <input type="text" value="這個沒加入" />
  </div>
</template>

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