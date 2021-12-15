<template>
  <div>
    <a-auto-complete
      v-model:value="value"
      :options="options"
      style="width: 200px"
      placeholder="input here"
      @select="onSelect"
      @search="onSearch"
    />
    <a-auto-complete
      v-model:value="values"
      style="width: 200px"
      placeholder="input here"
      :options="optionss"
      @search="handleSearch"
    >
      <template #option="{ value: val }">
        {{ val.split('@')[0] }} @
        <span style="font-weight: bold">{{ val.split('@')[1] }}</span>
      </template>
    </a-auto-complete>
  </div>
</template>
<script>
import { ref, watch } from "vue";

const mockVal = (str, repeat = 1) => {
  return {
    value: str.repeat(repeat)
  };
};

export default {
  setup() {
    const value = ref("");
    const options = ref([]);

    const onSearch = searchText => {
      console.log("searchText");
      options.value = !searchText
        ? []
        : [mockVal(searchText), mockVal(searchText, 2), mockVal(searchText, 3)];
    };

    const onSelect = value => {
      console.log("onSelect", value);
    };

    watch(value, () => {
      console.log("value", value.value);
    });

    const values = ref('');
    const optionss = ref([]);

    const handleSearch = val => {
      let res;

      if (!val || val.indexOf('@') >= 0) {
        res = [];
      } else {
        res = ['gmail.com', '163.com', 'qq.com'].map(domain => ({
          value: `${val}@${domain}`,
        }));
      }

      optionss.value = res;
    }
    return {
      value,
      values,
      options,
      optionss,
      onSearch,
      onSelect,
      handleSearch
    };
  }
};
</script>