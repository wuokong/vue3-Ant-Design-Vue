<template>
  <a-layout>
    <a-menu v-model:openKeys="openKeys" v-model:selectedKeys="selectedKeys" mode="inline" :style="{ height: '100%', borderRight: 0, overflow: 'auto' }" @click="MenuItemClick">
      <MenuItem :children="list" />
    </a-menu>
  </a-layout>
</template>
<script>
import { reactive, toRefs, onMounted, toRaw } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";
import MenuItem from "./menuItem";
export default {
  name: "MENU",
  components: {
    MenuItem
  },
  setup() { 
    const Route = useRoute()
    const Store = useStore()
    const Data = reactive({
      list: [],
      selectedKeys: [],
      openKeys: []
    })
    const MenuItemClick = ((oneself ) => {
      Data.openKeys = oneself.keyPath
      Store.commit('SetOpenKeys', JSON.stringify(oneself.keyPath))
      Store.commit('SetSelectedKeys', JSON.stringify([oneself.key]))
    })
    onMounted(() => {
      let route = JSON.parse(sessionStorage.getItem('PRESENT_ROUTE'))
      let list = [];
      route.map((oneself )=> {
        if (!oneself.meta.hidden ) {
            list.push(oneself)
        }
      });
      Data.list = list;
      if (Store.getters.openKeys &&toRaw(Store.getters.openKeys).length>0) Data.openKeys = JSON.parse(Store.getters.openKeys)
      Data.selectedKeys = JSON.parse(Store.getters.selectedKeys) || [Route.path]
    })
    return {
      ...toRefs(Data),
      MenuItemClick
    };
  }
};
</script>

<style lang="scss">
</style>
