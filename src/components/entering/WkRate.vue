<template>
  <div>
    <a-rate v-model:value="value1" />
    <span class="ant-rate-text">allowClear: true</span>
    <br />
    <a-rate v-model:value="value2" :allow-clear="false" />
    <span class="ant-rate-text">allowClear: false</span>
  </div>
</template>
<script>
import { ref } from 'vue';
export default {
  setup() {
    const value1 = ref(3);
    const value2 = ref(3);
    return {
      value1,
      value2,
    };
  },

}
</script>