<template>
   <a-spin tip="Loading..." :spinning="spinning" >
       <a-list item-layout="horizontal" :data-source="list">
        <template #renderItem="{ item }">
        <a-list-item>
            <a-list-item-meta
            :description="item.lastname"
            >
            <template #title>
                {{ item.email }}
            </template>
            <template #avatar>
                <a-avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
            </template>
            </a-list-item-meta>
        </a-list-item>
        </template>
    </a-list>
  </a-spin>
</template>
<script>
import { reactive, toRefs, getCurrentInstance, onMounted } from "vue";
export default {
  setup() {
    const { proxy } = getCurrentInstance();
    const Data = reactive({
        list: [],
        spinning: true
    });
    onMounted(() => {
      Methods.gets();
    });
    const Methods = {
      fisker_encode_v2(s) {
        var es = [],
          c = "",
          ec = "";
        s = s.split(""); //10.19补 忘记ie不能下标访问字符串
        for (var i = 0, length = s.length; i < length; i++) {
          c = s[i];
          ec = encodeURIComponent(c);
          if (ec == c) {
            ec = c.charCodeAt().toString(16);
            ec = ("00" + ec).slice(-2);
          }
          es.push(ec);
        }
        return es
          .join("")
          .replace(/%/g, "")
          .toUpperCase();
      },
      gets() {
        proxy.$axios
          .post("https://4c0b2715.cpolar.io/get-node-info.php", {
            token: Methods.fisker_encode_v2("154112658")
          })
          .then(res => {
            console.log(res);
            if (res.data.data) {
              let arr = res.data.data;
              let newArr = [];
              for (var i = 0; i < arr.length; i++) {
                arr[i].show = true;
                for (var s = 0; s < newArr.length; s++) {
                  if (
                    arr[i].email == newArr[s].email ||
                    arr[i].email == "admin"
                  ) {
                    arr[i].show = false;
                    break;
                  }
                }
                if (arr[i].show == true) newArr.push(arr[i]);
              }
              Data.list = newArr
            }
            Data.spinning = false
          });
      }
    };
    return {
      ...toRefs(Data),
      ...Methods
    };
  }
};
</script>
<style scoped>
</style>