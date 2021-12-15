<template>
  <div>
    <a-switch v-model:checked="checked" :disabled="disabled" style="margin-bottom: 5px" />
    <br />
    <a-button type="primary" @click="onToggle">Toggle disabled</a-button>
  </div>
</template>
<script>
import { ref } from 'vue';
export default {
  setup() {
    const checked = ref(true);
    const disabled = ref(true);

    const onToggle = () => {
      disabled.value = !disabled.value;
    };

    return {
      checked,
      disabled,
      onToggle,
    };
  },

}
</script>