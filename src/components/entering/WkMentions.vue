<template>
  <a-mentions v-model:value="value" :loading="loading" @search="onSearch">
    <a-mentions-option v-for="{ login, avatar_url: avatar } in users" :key="login" :value="login">
      <img :src="avatar" :alt="login" style="width: 20px; margin-right: 8px" />
      <span>{{ login }}</span>
    </a-mentions-option>
  </a-mentions>
</template>
<script>
import { debounce } from 'lodash-es';
import { ref } from 'vue';
export default {
  setup() {
    const value = ref('');
    const loading = ref(false);
    const users = ref([]);
    const search = ref('');
    const loadGithubUsers = debounce(key => {
      if (!key) {
        users.value = [];
        return;
      }

      fetch(`https://api.github.com/search/users?q=${key}`).then(res => res.json()).then(({
        items = [],
      }) => {
        if (search.value !== key) return;
        users.value = items.slice(0, 10);
        loading.value = false;
      });
    }, 800);

    const onSearch = searchValue => {
      search.value = searchValue;
      loading.value = !!searchValue;
      console.log(!!searchValue);
      users.value = [];
      console.log('Search:', searchValue);
      loadGithubUsers(searchValue);
    };

    return {
      value,
      loading,
      users,
      loadGithubUsers,
      onSearch,
    };
  },

}
</script>