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
      <el-header>
        <div class="header-layout">
          <div class="logo">
            AIGC
          </div>
          <nav class="menu">
            <a href="#">首页</a>
            <a href="#">专业服务</a>
            <a href="#">产品应用</a>
            <a href="#">渠道合作</a>
            <a href="#">关于我们</a>
            <a href="#">注册</a>
            <a href="#">登陆</a>
          </nav>
        </div>
      </el-header>
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
  color: #fff;
  .el-container {
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  .el-header {
    // 如果你想要一个固定高度的 header，这里指定
    // 否则如果是动态高度，则不需要设置

    // 这里添加header的样式
    .header-layout {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 100%;
      .logo {
        // 为LOGO添加需要的样式
        font-size: 24px;
      }

      .menu {
        display: flex;
        justify-content: space-around;
        align-items: center;
        font-size: 14px;
        a {
          text-decoration: none;
          color: white; // 设置链接文字的颜色
          margin: 0 10px; // 给每个菜单项增加水平间距
          // 更多样式...
        }
      }
    }
  }

  .el-main {
    flex: 1; // 使用flex来填充剩余空间
    overflow: auto; // 如果内容超出，允许滚动
  }
}
</style>
