<template>
  <div>
    <h1>{{ message }}</h1>
    <h1>{{ count*2 }}</h1>

    <button :title="remark">Button</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "Hello World",
      count: 100,
      remark: "Click Me",
    };
  },
};
</script>   