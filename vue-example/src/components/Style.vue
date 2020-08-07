<template>
  <div>
    <div class="div-test" :class="{'div-test-odd':isOdd}"></div>
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
.div-test-odd {
  border: 3px solid rgb(248, 95, 95);
}
</style>