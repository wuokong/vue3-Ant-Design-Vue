<template>
  <div>
    <a-slider v-model:value="size" />
    <br />
    <br />
    <a-space :size="size">
      <a-button type="primary">Primary</a-button>
      <a-button>Default</a-button>
      <a-button type="dashed">Dashed</a-button>
      <a-button type="link">Link</a-button>
    </a-space>
  </div>
</template>
<script>
import { ref } from 'vue';
export default {
  setup() {
    return {
      size: ref(8),
    };
  },

}
</script>