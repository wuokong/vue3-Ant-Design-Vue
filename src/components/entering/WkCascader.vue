<template>
  <a-cascader
    v-model:value="value1"
    style="margin-top: 1rem"
    :options="options"
    placeholder="Please select"
  >
    <template #suffixIcon><smile-outlined class="test" /></template>
  </a-cascader>
  <a-cascader
    v-model:value="value2"
    suffix-icon="ab"
    style="margin-top: 1rem"
    :options="options"
    placeholder="Please select"
  />
</template>
<script>
import { SmileOutlined } from '@ant-design/icons-vue';
import { ref } from 'vue';
const options = [{
  value: 'zhejiang',
  label: 'Zhejiang',
  children: [{
    value: 'hangzhou',
    label: 'Hangzhou',
    children: [{
      value: 'xihu',
      label: 'West Lake',
    }],
  }],
}, {
  value: 'jiangsu',
  label: 'Jiangsu',
  children: [{
    value: 'nanjing',
    label: 'Nanjing',
    children: [{
      value: 'zhonghuamen',
      label: 'Zhong Hua Men',
    }],
  }],
}];
export default {
  components: {
    SmileOutlined,
  },

  setup() {
    return {
      value1: ref([]),
      value2: ref([]),
      options,
    };
  },

}
</script>