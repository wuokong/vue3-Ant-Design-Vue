<template>
  <a-checkbox-group v-model:value="value1" name="checkboxgroup" :options="plainOptions" />
  <br />
  <a-checkbox-group v-model:value="value2" :options="plainOptions" />
  <br />
  <a-checkbox-group v-model:value="value3" :options="options" />
  <br />
  <a-checkbox-group v-model:value="value4" :options="optionsWithDisabled" disabled>
    <template #label="{ value }">
      <span style="color: red">{{ value }}</span>
    </template>
  </a-checkbox-group>
  <div :style="{ borderTop: '1px solid #E9E9E9' }">
    <a-checkbox
      v-model:checked="checkAll"
      :indeterminate="indeterminate"
      @change="onCheckAllChange"
    >Check all</a-checkbox>
  </div>
  <br />
  <a-checkbox-group v-model:value="checkedList" :options="plainOptions" />
</template>
<script>
import { reactive, toRefs,watch  } from "vue";
const plainOptions = ["Apple", "Pear", "Orange"];
const options = [
  {
    label: "Apple",
    value: "Apple"
  },
  {
    label: "Pear",
    value: "Pear"
  },
  {
    label: "Orange",
    value: "Orange"
  }
];
const optionsWithDisabled = [
  {
    value: "Apple"
  },
  {
    label: "Pear",
    value: "Pear"
  },
  {
    label: "Orange",
    value: "Orange",
    disabled: false
  }
];
export default {
  setup() {
    const state = reactive({
      value1: [],
      value2: ["Apple"],
      value3: ["Pear"],
      value4: ["Apple"],
      indeterminate: true,
      checkAll: false,
      checkedList: ['Apple', 'Orange'],
    });
    const onCheckAllChange = e => {
      Object.assign(state, {
        checkedList: e.target.checked ? plainOptions : [],
        indeterminate: false,
      });
    };
    watch(() => state.checkedList, val => {
      state.indeterminate = !!val.length && val.length < plainOptions.length;
      state.checkAll = val.length === plainOptions.length;
    });
    return {
      plainOptions,
      options,
      optionsWithDisabled,
      ...toRefs(state),
      onCheckAllChange
    };
  }
};
</script>