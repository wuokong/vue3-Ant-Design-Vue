<template>
  <div>
      <router-view/>
  </div>
</template>
<script>
export default {
  name: "App"
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
