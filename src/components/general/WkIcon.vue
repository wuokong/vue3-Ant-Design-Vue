<template>
  <div class="icons-list">
    <home-outlined />
    <setting-filled />
    <smile-outlined />
    <sync-outlined spin />
    <smile-outlined :rotate="180" />
    <loading-outlined />
  </div>
  <div>import { HomeOutlined, SettingFilled, SmileOutlined, SyncOutlined, LoadingOutlined } from '@ant-design/icons-vue'</div>
  <div>components:{
    HomeOutlined,
    SettingFilled,
    SmileOutlined,
    SyncOutlined,
    LoadingOutlined,
  }</div>
</template>
<script>
import { HomeOutlined, SettingFilled, SmileOutlined, SyncOutlined, LoadingOutlined } from '@ant-design/icons-vue';
export default {
  components: {
    HomeOutlined,
    SettingFilled,
    SmileOutlined,
    SyncOutlined,
    LoadingOutlined,
  },
}
</script>
<style scoped>
.icons-list :deep(.anticon) {
  margin-right: 6px;
  font-size: 24px;
}
</style>