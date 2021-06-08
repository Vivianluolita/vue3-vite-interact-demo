<template>
  <div class="layout-container">
    <div class="menu-title">设计器</div>
    <div class="menu-bar">
      <el-button class="add" type="success" @click="add"
        >增加一个模块</el-button
      >
    </div>
    <div class="menu-wrap">
    </div>
  </div>
</template>

<script lang="ts">
// import { ref, reactive, defineComponent, defineAsyncComponent } from "vue";
// export default {

// }
</script>

<style lang="scss" scoped>
.layout-container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 0.3rem;
  box-sizing: border-box;

  .menu-bar {
    display: flex;
    align-items: center;
    padding-left: 0.3rem;
  }
  .menu-wrap {
    border: 0.05rem dashed rgb(156, 152, 152);
    padding: 0.3rem;
    margin: 0.3rem;
    flex: 1;
    position: relative;
  }
}
</style>