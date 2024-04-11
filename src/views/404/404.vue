<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'NotFound'
  // 其他选项 ...
})
</script>

<template>
  <div>
    <h1>404 - Page Not Found</h1>
    <p>The requested page does not exist.</p>
  </div>
</template>

<style scoped>
h1 {
  color: #ff0000;
}
</style>
