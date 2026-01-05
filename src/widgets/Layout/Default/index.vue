<template>
  <lit-layout
    :style="{ '--header-bg': 'var(--header-bg-color)', '--footer-bg': 'var(--footer-bg-color)' }"
  >
    <header slot="header">
      <h1>Тестовое задание</h1>
    </header>
    <slot />
    <footer slot="footer">
      <div>
        <p>© {{ new Date().getFullYear() }}</p>
      </div>
    </footer>
  </lit-layout>
</template>

<script setup lang="ts">
import '@widgets/Layout/Default/_ui/layout.js'
</script>

<style lang="scss">
:root {
  --header-bg-color: #{$brand};
  --footer-bg-color: #{$brand};
}

footer > div {
  display: flex;
  color: $white;
}
</style>
