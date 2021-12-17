<template>
  <a-layout>
    <a-layout-header class="header">
      <a-row justify="space-between">
        <a-col :span="20">
          <a-row>
              <a href="https://next.antdv.com/components/overview-cn" target="_blank" rel="noopener noreferrer" class="title">ant-design-vue文档</a>
          </a-row>
        </a-col>
        <a-col>
          <a href="https://blog.csdn.net/weixin_39007040/article/details/121949038" target="_blank" class="title">笔记</a>
          <a-button type="primary" danger @click="quit()" style="margin-left: 20px">退出</a-button>
        </a-col>
      </a-row>
    </a-layout-header>
    <a-layout class="wx-layout">
      <a-layout-sider
        v-model:collapsed="collapsed"
        :trigger="null"
        collapsible
        width="200"
        style="background: #fff;overflow:auto"
      >
      <Menu></Menu>
      </a-layout-sider>
      <a-layout style="padding: 0 24px 24px;height: 100%">
        <a-layout-header style="background: #fff; padding: 0">
          <a-row>
            <a-col :span="2">
              <menu-unfold-outlined
                v-if="collapsed"
                class="trigger"
                @click="() => (collapsed = !collapsed)"
              />
              <menu-fold-outlined v-else class="trigger" @click="() => (collapsed = !collapsed)" />
            </a-col>
            <a-breadcrumb style="line-height:inherit">
              <a-breadcrumb-item v-for="(item, index) in breadcrumb" :key="index">{{item}}</a-breadcrumb-item>
            </a-breadcrumb>
          </a-row>
        </a-layout-header>
        <a-layout-content
          :style="{ background: '#fff', padding: '24px', margin: 0, height: '100%', overflow: 'auto' }"
        >
          <router-view />
        </a-layout-content>
      </a-layout>
    </a-layout>
  </a-layout>
</template>
<script>
import { reactive, toRefs, onMounted, watch } from "vue";
import { useRouter, useRoute, onBeforeRouteLeave } from "vue-router";
import { useStore } from "vuex";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons-vue";
import Menu from "@/components/menu";

export default {
  name: "HOME",
  components: {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    Menu
  },
  setup() {
      // 监听离开当前路由事件 导航守卫
    onBeforeRouteLeave((to, form) => {
        console.log(to, form)
        // return confirm('想走？？')
    })
    //路由
    const Router = useRouter();
    const Route = useRoute();
    const Store = useStore();
    console.log(Route)
    const Data = reactive({
      selectedKeys1: ['1'],
      collapsed: false,
      breadcrumb: Route.meta.openKey || []
    });
    onMounted(() => {
    });
    watch([() => Route.meta.openKey], to => {
      Data.breadcrumb = to[0]
    });
    const Methods = {
      link(item) {
        Router.push(item.router);
      },
      quit() {
        Store.dispatch("QuietLogin");
      }
    };
    return {
      ...toRefs(Data),
      ...Methods
    };
  }
};
</script>

<style lang="scss">
.wx-layout {
  height: calc(100vh - 100px);
  overflow: hidden;
}
.title{
  color: #fff;
  font-size: 18px;
}
.ant-layout-header{
  background: #4196ff;
}
</style>
