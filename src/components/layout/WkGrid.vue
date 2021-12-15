<template>
  <a-row>
    <a-col :span="12">col-12</a-col>
    <a-col :span="12">col-12</a-col>
  </a-row>
  <p></p>
  <a-row>
    <a-col :span="8">col-8</a-col>
    <a-col :span="8">col-8</a-col>
    <a-col :span="8">col-8</a-col>
  </a-row>
  <p></p>
  <a-row>
    <a-col :span="6">col-6</a-col>
    <a-col :span="6">col-6</a-col>
    <a-col :span="6">col-6</a-col>
    <a-col :span="6">col-6</a-col>
  </a-row>
  <p></p>
  <div id="components-grid-demo-flex">
    <p>sub-element align left</p>
    <a-row type="flex" justify="start">
      <a-col :span="4">col-4</a-col>
      <a-col :span="4">col-4</a-col>
      <a-col :span="4">col-4</a-col>
      <a-col :span="4">col-4</a-col>
    </a-row>

    <p>sub-element align center</p>
    <a-row type="flex" justify="center">
      <a-col :span="4">col-4</a-col>
      <a-col :span="4">col-4</a-col>
      <a-col :span="4">col-4</a-col>
      <a-col :span="4">col-4</a-col>
    </a-row>

    <p>sub-element align right</p>
    <a-row type="flex" justify="end">
      <a-col :span="4">col-4</a-col>
      <a-col :span="4">col-4</a-col>
      <a-col :span="4">col-4</a-col>
      <a-col :span="4">col-4</a-col>
    </a-row>

    <p>sub-element monospaced arrangement</p>
    <a-row type="flex" justify="space-between">
      <a-col :span="4">col-4</a-col>
      <a-col :span="4">col-4</a-col>
      <a-col :span="4">col-4</a-col>
      <a-col :span="4">col-4</a-col>
    </a-row>

    <p>sub-element align full</p>
    <a-row type="flex" justify="space-around">
      <a-col :span="4">col-4</a-col>
      <a-col :span="4">col-4</a-col>
      <a-col :span="4">col-4</a-col>
      <a-col :span="4">col-4</a-col>
    </a-row>
  </div>
  <div id="components-grid-demo-playground">
    <div style="margin-bottom: 16px">
      <span style="margin-right: 6px">Horizontal Gutter (px):</span>
      <div style="width: 50%">
        <a-slider
          v-model:value="gutterKey"
          :min="0"
          :max="Object.keys(gutters).length - 1"
          :marks="gutters"
          :step="null"
        />
      </div>
      <span style="margin-right: 6px">Vertical Gutter (px):</span>
      <div style="width: 50%">
        <a-slider
          v-model:value="vgutterKey"
          :min="0"
          :max="Object.keys(vgutters).length - 1"
          :marks="vgutters"
          :step="null"
        />
      </div>
      <span style="margin-right: 6px">Column Count:</span>
      <div style="width: 50%">
        <a-slider
          v-model:value="colCountKey"
          :min="0"
          :max="Object.keys(colCounts).length - 1"
          :marks="colCounts"
          :step="null"
        />
      </div>
    </div>
    <a-row :gutter="[gutters[gutterKey], vgutters[vgutterKey]]">
      <a-col
        v-for="item in colCounts[colCountKey]"
        :key="item.toString()"
        :span="24 / colCounts[colCountKey]"
      >
        <div>Column</div>
      </a-col>

      <a-col
        v-for="item in colCounts[colCountKey]"
        :key="item.toString()"
        :span="24 / colCounts[colCountKey]"
      >
        <div>Column</div>
      </a-col>
    </a-row>
    <pre>{{ rowColHtml }}
    </pre>
    <pre>{{ rowColHtml }}
    </pre>
  </div>
</template>
<script>
import { computed, reactive, toRefs } from "vue";
export default {
  setup() {
    const state = reactive({
      gutterKey: 1,
      vgutterKey: 1,
      colCountKey: 2,
      gutters: {},
      colCounts: {},
      vgutters: {}
    });
    [8, 16, 24, 32, 40, 48].forEach((value, i) => {
      state.gutters[i] = value;
    });
    [8, 16, 24, 32, 40, 48].forEach((value, i) => {
      state.vgutters[i] = value;
    });
    [2, 3, 4, 6, 8, 12].forEach((value, i) => {
      state.colCounts[i] = value;
    });
    const rowColHtml = computed(() => {
      const colCount = state.colCounts[state.colCountKey];
      const getter = [
        state.gutters[state.gutterKey],
        state.vgutters[state.vgutterKey]
      ];
      let colCode = '<a-row :gutter="[' + getter + ']">\n';

      for (let i = 0; i < colCount; i++) {
        const spanNum = 24 / colCount;
        colCode += '  <a-col :span="' + spanNum + '"/>\n';
      }

      colCode += "</a-row>";
      return colCode;
    });
    return {
      rowColHtml,
      ...toRefs(state)
    };
  }
}
</script>
<style scoped>
#components-grid-demo-playground :deep(.ant-col) {
  background: transparent;
  border: 0;
}
#components-grid-demo-playground :deep(.ant-col) > div {
  background: #00a0e9;
  height: 120px;
  line-height: 120px;
  font-size: 13px;
}
#components-grid-demo-playground pre {
  background: #f9f9f9;
  border-radius: 6px;
  font-size: 13px;
  padding: 8px 16px;
}
#components-grid-demo-flex :deep(.ant-row) {
  background: rgba(128, 128, 128, 0.08);
}
.ant-row > div:not(.gutter-row),
.ant-row > div:not(.gutter-row) {
  padding: 16px 0;
  background: #0092ff;
}
.ant-row > div:not(.gutter-row):nth-child(2n + 1),
.ant-row > div:not(.gutter-row):nth-child(2n + 1) {
  background: rgba(0, 146, 255, 0.75);
}
</style>