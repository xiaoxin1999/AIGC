<script lang="ts" setup></script>

<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <div class="header-layout">
          <div class="logo">AIGC</div>
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
  // background: linear-gradient(0deg, rgba(23, 21, 58, 1) 0%, rgba(32, 29, 71, 1) 100%);
  color: #000;
  .el-container {
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  .el-header {
    height: 60px;
    border-bottom: 1px solid #ccc;

    // 这里添加header的样式
    .header-layout {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 100%;
      .logo {
        font-size: 24px;
      }

      .menu {
        display: flex;
        justify-content: space-around;
        align-items: center;
        font-size: 14px;
        a {
          text-decoration: none;
          color: #000;
          margin: 0 10px;
        }
      }
    }
  }

  .el-main {
    flex: 1;
    overflow: auto;
  }
}
</style>
