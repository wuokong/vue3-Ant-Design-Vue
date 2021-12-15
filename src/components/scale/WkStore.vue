<template>
  <div>
    <H1>VUEX状态管理</H1>
    <a-button @click="getStore('total')" type="primary">获取 Store内的 total</a-button>
    <a-button @click="editStore('total')" type="primary">通过commit修改Store 内的 total</a-button>
    <a-button @click="syncAddStore('total')" type="primary">通过dispatch修改Store 内的 total * 2</a-button>
    <h1>{{storeData}}</h1>
    <H1>存储localStorage</H1>
    <a-button @click="getStore('settings')" type="primary">获取Store 内的 settings</a-button>
    <a-button @click="editStore('settings')" type="primary">通过commit修改Store 内的 settings</a-button>
    <a-button @click="syncAddStore('settings')" type="primary">通过dispatch修改Store 内的 settings</a-button>
    <h1 style="color:@color">{{storeSetting}}</h1>
  </div>
</template>

<script>
import { reactive, toRefs } from "vue";
import { useStore } from "vuex";

export default {
  name: "WkStore",
  setup() {
    const store = useStore();
    const Data = reactive({
      storeData: undefined,
      storeSetting: undefined
    });
    const Methods = {
      getStore(key) {
        if (key == 'total') {
            Data.storeData = store.getters.total
        } else {
            Data.storeSetting = store.getters.settings
        }
      },
      editStore(key) {
        if (key == 'total') {
            let num = store.getters.total
            num += 1
            store.commit('SetTotal', num)
            Data.storeData = store.getters.total
        } else {
            store.commit('SetSettings', 'edit')
            Data.storeSetting = store.getters.settings
        }
      },
      syncAddStore(key) {
        if (key == 'total') {
            store.dispatch('AddTotal', store.getters.total)
            Data.storeData = store.getters.total
        } else {
            store.dispatch('DispatchSetSettings', store.getters.settings)
            Data.storeSetting = store.getters.settings
        }
      },
    };
    return {
      ...toRefs(Data),
      ...Methods
    };
  }
};
</script>

<style scoped>
.ant-btn{
    margin-right: 15px;
    margin-top: 5px;
}
</style>
