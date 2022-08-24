<template>
  <NavComponent />
  <router-view/>
</template>

<script>
import NavComponent from '@/components/NavComponent.vue';

export default {
  components: {
    NavComponent,
  },
};
</script>

<style lang="scss">
@import '@/assets/sass/style';
</style>
