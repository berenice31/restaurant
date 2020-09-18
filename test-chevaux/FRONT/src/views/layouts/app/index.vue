<template>
  <div class="layout-app">
    <header class="layout-app--header">
     
    </header>

    <div class="layout-app--content">
      <suspense>
        <template #default>
          <router-view></router-view>
        </template>

        <template #fallback>
          <p>Chargement...</p>
        </template>
      </suspense>
    </div>

    <footer class="layout-app--footer">
    </footer>
  </div>
</template>

<style lang="scss">
  $header-height: 100px;
  $footer-height: 75px;

  .layout-app {
    position: relative;
    height: 100vh;
    width: 100vw; 

    &--header, 
    &--footer {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    &--header {
      height: $header-height;
    }

    &--footer {
      height: $footer-height;
    }

    &--content {
      position: relative;
      min-height: calc(100vh - #{$header-height + $footer-height});
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 50px;
      overflow: auto;
    }
  }
</style>
