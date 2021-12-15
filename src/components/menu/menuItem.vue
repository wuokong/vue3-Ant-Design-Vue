<template>
    <div v-for="item in children" :key="item.path">
      <div v-if="!item.meta.hidden">
        <a-menu-item :key="item.path" v-if="!item.children">
          <router-link :to="item.path">{{item.name}}</router-link>
        </a-menu-item>
        <a-sub-menu :key="item.path" v-else >
          <template #icon>
            <AppstoreOutlined />
          </template>
          <template #title>{{item.name}}</template>
          <MENUITEM :children="item.children"/>
        </a-sub-menu>
      </div>
    </div>
</template>
<script>
import { reactive, toRefs } from "vue";
import { AppstoreOutlined } from "@ant-design/icons-vue";
export default {
  name: "MENUITEM",
  props: {
    children: Array
  },
  components: {
    AppstoreOutlined
  },
  setup(props) {
    const Data = reactive({
      children: props.children
    });
    return {
      ...toRefs(Data)
    };
  }
};
</script>

<style lang="scss">
</style>
