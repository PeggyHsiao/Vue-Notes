<template>
  <h1>this is MixinsTest.vue</h1>
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