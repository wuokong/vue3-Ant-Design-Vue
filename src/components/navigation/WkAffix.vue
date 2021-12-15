<template>
  <a-affix :offset-top="top">
    <a-button type="primary" @click="top += 10">Affix top</a-button>
  </a-affix>
  <br />
  <a-affix :offset-bottom="bottom">
    <a-button type="primary" @click="bottom += 10">Affix bottom</a-button>
  </a-affix>
</template>
<script>
import { ref } from 'vue';
export default {
  setup() {
    const top = ref(10);
    const bottom = ref(10);
    return {
      top,
      bottom,
    };
  },

}
</script>