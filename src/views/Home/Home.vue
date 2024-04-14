<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Home'
  // 其他选项 ...
})
</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-header>Header</el-header>
      <el-main>Main</el-main>
    </el-container>
  </div>
</template>

<style lang="scss">

/* 接着针对您的布局设置为100% */
.common-layout {
  height: 100%;
  // 添加渐变背景
  background: linear-gradient(0deg, rgba(23, 21, 58, 1) 0%, rgba(32, 29, 71, 1) 100%);
  .el-container {
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  .el-header {
    // 如果你想要一个固定高度的 header，这里指定
    // 否则如果是动态高度，则不需要设置
  }

  .el-main {
    flex: 1; // 使用flex来填充剩余空间
    overflow: auto; // 如果内容超出，允许滚动
  }

}
</style>
