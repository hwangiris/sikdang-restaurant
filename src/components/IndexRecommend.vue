<template>
  <section class="recommend">
    <div class="container">
    </div>
  </section>
</template>

<script>
export default {
  name: 'IndexRecommend',
};
</script>

<style lang="scss" scoped>
@import '~bootstrap/scss/functions';
@import '@/assets/sass/variables';
@import '~bootstrap/scss/mixins';

.recommend {
  position: relative;
  background: center/cover url('@/assets/images/index-recommend-bg.jpg') no-repeat;
  &::before {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: $black;
    opacity: 0.2;
  }
}

</style>
