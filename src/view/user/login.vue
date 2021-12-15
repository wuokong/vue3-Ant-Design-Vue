<template>
  <div style="padding:20px">
    <meh-filled :style="{fontSize: '65px', color: '#08c', marginBottom: '20px'}"/>
    <a-form
      ref="formRef"
      name="custom-validation"
      :model="formState"
      :rules="rules"
      v-bind="layout"
      @finish="handleFinish"
    >
      <a-form-item ref="name" label="Name" name="name">
        <a-input v-model:value="formState.name" placeholder="输入账号" allow-clear />
      </a-form-item>
      <a-form-item has-feedback label="Password" name="pass">
        <a-input-password
          v-model:value="formState.pass"
          type="password"
          placeholder="6位数密码"
          allow-clear
          autocomplete="off"
        />
      </a-form-item>
      <a-form-item :wrapper-col="{ span: 24 }">
        <a-button type="primary" html-type="submit">Submit</a-button>
        <a-button style="margin-left: 10px" @click="resetForm">Reset</a-button>
      </a-form-item>
    </a-form>
  </div>
</template>
<script>
import { reactive, toRefs, onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { MehFilled } from '@ant-design/icons-vue'
const rules = {
  name: [
    {
      required: true,
      message: "请输入正确的账号",
      pattern: "admin",
      trigger: "blur"
    },
    {
      min: 1,
      message: "Length should be 1",
      trigger: "blur"
    }
  ],
  pass: [
    {
      required: true,
      pattern: "123456",
      message: "请输入正确的6位数密码",
      trigger: "blur"
    },
    {
      min: 6,
      max: 6,
      message: "Length should be 6 to 6",
      trigger: "blur"
    }
  ]
};
const layout = {
  labelCol: {
    span: 5
  },
  wrapperCol: {
    span: 14
  }
};
export default {
  name: "LOGIN",
  components: {
    MehFilled
  },
  setup() {
    const Data = reactive({
      formState: {
        name: "admin",
        pass: "123456"
      },
      rules,
      layout
    });
    const Router = useRouter();//router
    const Store = useStore();//vuex
    const formRef = ref();
    onMounted(() => {
      Store.commit('SetOpenKeys', '')
      Store.commit('SetSelectedKeys', '')
    });
    const Methods = {
        link(item) {
            console.log(item);
            Router.push(item.router);
        },
        handleFinish(values) {
           Store.dispatch('LoginOutlined', { ...values})
        },

        resetForm() {
            console.log(formRef);
            formRef.value.resetFields();
        },
        
    };
    return {
      ...toRefs(Data),
      ...Methods,
      formRef
    
    };
  }
};
</script>

<style lang="scss">
</style>
