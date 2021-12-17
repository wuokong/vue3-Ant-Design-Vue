<template>
  <div>
    <a-config-provider :locale="locale === 'en' ? enUS : zhCN">
      <router-view/>
    </a-config-provider>
  </div>
</template>
<script>
import enUS from "ant-design-vue/es/locale/en_US";
import zhCN from "ant-design-vue/es/locale/zh_CN";
import { reactive, toRefs, watch } from 'vue'
import { useStore } from 'vuex'
export default {
  name: "App",
  setup() {
    const Store = useStore()
    const Data = reactive({
      locale: Store.getters.language,
      zhCN,
      enUS
    })
    watch(() => Store.getters.language, (e)=> {
      console.log(e)
      Data.locale = e
    })
    return {
      ...toRefs(Data)
    }
  }
}
</script>

<style lang="scss">
$color: #000;
#app{
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $color;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  .icons-list :deep {
  }
  .pointer {
    cursor: pointer;
  }
  ::-webkit-scrollbar{
    display: none;
  }
}
</style>
