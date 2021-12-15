<template>
  <div>
    <a-radio-group v-model:value="value1" :options="plainOptions" />
    <br />
    <a-radio-group v-model:value="value2" :options="optionsWithDisabled" />
    <br />
    <a-radio-group v-model:value="value3" :options="plainOptions" disabled />
    <br />
    <a-radio-group v-model:value="value1" option-type="button" :options="plainOptions" />
    <br />
    <a-radio-group v-model:value="value2" option-type="button" :options="optionsWithDisabled" />
    <br />
    <a-radio-group v-model:value="value3" option-type="button" :options="plainOptions" disabled />
    <br />
  </div>
</template>
<script>
import { ref } from 'vue';
const plainOptions = ['Apple', 'Pear', 'Orange'];
const options = [{
  label: 'Apple',
  value: 'Apple',
}, {
  label: 'Pear',
  value: 'Pear',
}, {
  label: 'Orange',
  value: 'Orange',
}];
const optionsWithDisabled = [{
  label: 'Apple',
  value: 'Apple',
}, {
  label: 'Pear',
  value: 'Pear',
}, {
  label: 'Orange',
  value: 'Orange',
  disabled: true,
}];
export default {
  data() {
    const value1 = ref('Apple');
    const value2 = ref('Apple');
    const value3 = ref('Apple');
    return {
      plainOptions,
      options,
      optionsWithDisabled,
      value1,
      value2,
      value3,
    };
  },
}
</script>