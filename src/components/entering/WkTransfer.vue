<template>
  <div>
    <a-transfer
      v-model:target-keys="targetKeys"
      v-model:selected-keys="selectedKeys"
      :data-source="mockData"
      :titles="['Source', 'Target']"
      :render="item => item.title"
      :disabled="disabled"
      @change="handleChange"
      @selectChange="handleSelectChange"
      @scroll="handleScroll"
    />
    <a-switch
      v-model:checked="disabled"
      un-checked-children="enabled"
      checked-children="disabled"
      style="margin-top: 16px"
    />
  </div>
</template>
<script>
import { ref } from 'vue';
const mockData = [];

for (let i = 0; i < 20; i++) {
  mockData.push({
    key: i.toString(),
    title: `content${i + 1}`,
    description: `description of content${i + 1}`,
    disabled: i % 3 < 1,
  });
}

const oriTargetKeys = mockData.filter(item => +item.key % 3 > 1).map(item => item.key);
export default {
  data() {
    const disabled = ref(false);
    const targetKeys = ref(oriTargetKeys);
    const selectedKeys = ref(['1', '4']);

    const handleChange = (nextTargetKeys, direction, moveKeys) => {
      console.log('targetKeys: ', nextTargetKeys);
      console.log('direction: ', direction);
      console.log('moveKeys: ', moveKeys);
    };

    const handleSelectChange = (sourceSelectedKeys, targetSelectedKeys) => {
      console.log('sourceSelectedKeys: ', sourceSelectedKeys);
      console.log('targetSelectedKeys: ', targetSelectedKeys);
    };

    const handleScroll = (direction, e) => {
      console.log('direction:', direction);
      console.log('target:', e.target);
    };

    return {
      mockData,
      targetKeys,
      selectedKeys,
      disabled,
      handleChange,
      handleSelectChange,
      handleScroll,
    };
  },

}
</script>