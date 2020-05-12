<template>
  <div>
    <h1>this is Mixins.vue</h1>
    <input type="text" v-focus>
  </div>
</template>

<script>
import CommomMixins from "@/mixins/commonMixins";

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