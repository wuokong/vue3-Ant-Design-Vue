<template>
  <div>
    <a-input-number v-model:value="value1" size="large" :min="1" :max="100000" />
    <a-input-number v-model:value="value2" :min="1" :max="100000" />
    <a-input-number v-model:value="value3" size="small" :min="1" :max="100000" />
  </div>
</template>
<script>
import { ref } from 'vue';
export default {
  setup() {
    const value1 = ref(3);
    const value2 = ref(3);
    const value3 = ref(3);
    return {
      value1,
      value2,
      value3,
    };
  },

}
</script>
<style scoped>
.ant-input-number {
  margin-right: 10px;
}
</style>