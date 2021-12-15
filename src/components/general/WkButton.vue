<template>
  <div :style="{ background: 'rgb(190, 200, 200)', padding: '26px 16px 16px' }">
    <a-button type="primary" ghost>Primary</a-button>
    <a-button ghost>Default</a-button>
    <a-button type="dashed" ghost>Dashed</a-button>
    <a-button danger ghost>Danger</a-button>
  </div>
  <a-button type="primary" loading>Loading</a-button>
  <a-button type="primary" size="small" loading>Loading</a-button>
  <br />
  <a-button type="primary" :loading="loading" @mouseenter="loading = true">mouseenter me!</a-button>
  <a-button type="primary" icon="poweroff" :loading="iconLoading" @click="enterIconLoading">延迟1s</a-button>
  <br />
  <a-button type="primary" loading />
  <a-button type="primary" shape="circle" loading />
  <a-button danger shape="round" loading />
</template>
<script>
import { reactive, toRefs } from "vue";
export default {
  setup() {
    const Data = reactive({
      iconLoading: false,
      loading: false
    });
    const enterIconLoading = () => {
      Data.iconLoading = { delay: 1000 };
      setTimeout(() => {
        Data.iconLoading = false;
      }, 6000);
    };
    return {
      ...toRefs(Data),
      enterIconLoading
    };
  }
};
</script>

<style lang="scss">
    .ant-btn{
        margin: 10px;
    }
</style>

