<template>
  <a-space direction="vertical" :size="12">
    <a-date-picker v-model:value="value1" :bordered="false" />
    <a-date-picker v-model:value="value2" picker="week" :bordered="false" />
    <a-date-picker v-model:value="value3" picker="month" :bordered="false" />
    <a-date-picker v-model:value="value4" picker="quarter" :bordered="false" />
    <a-date-picker v-model:value="value5" picker="year" :bordered="false" />

    <a-range-picker v-model:value="value6" :bordered="false" />
    <a-range-picker v-model:value="value7" picker="week" :bordered="false" />
    <a-range-picker v-model:value="value8" picker="month" :bordered="false" />
    <a-range-picker v-model:value="value9" picker="year" :bordered="false" />
  </a-space>
</template>
<script>
import { ref } from 'vue';
export default {
  setup() {
    return {
      value1: ref(),
      value2: ref(),
      value3: ref(),
      value4: ref(),
      value5: ref(),
      value6: ref([]),
      value7: ref([]),
      value8: ref([]),
      value9: ref([]),
    };
  },

}
</script>