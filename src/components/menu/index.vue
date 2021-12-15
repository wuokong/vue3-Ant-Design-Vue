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
    const forRouterOpen = ((oneself, keys = []) => {
        if (oneself) {
            for(let i= 0; i < oneself.length; i ++) {
                let res = oneself[i]
                if (Route.path == res.path ) {
                  break
                }
                if (res.children && res.children.length > 0 ) {
                  forRouterOpen(res.children, keys)
                }
            }
        }
    })
    onMounted(() => {
      let route = JSON.parse(sessionStorage.getItem('PRESENT_ROUTE'))
      let list = [];
      route.map((oneself, index )=> {
        if (!oneself.meta.hidden ) {
            list.push(oneself)
            Data.openKeys = []
            index == 0 && Data.openKeys.push(oneself.path)
            if (oneself.children && oneself.children.length > 0) {
              Data.openKeys.push(oneself.children[0].path)
              forRouterOpen(oneself.children)
            }
        }
      });
      Data.list = list;
      if (toRaw(Store.getters.openKeys)) Data.openKeys = JSON.parse(Store.getters.openKeys)
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
