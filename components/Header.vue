<template>
  <div class="container">
    <VueSlickCarousel v-bind="settings">
      <div>
        1
      </div>
      <div>
        2
      </div>
      <div>
        3
      </div>
    </VueSlickCarousel>
  </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'

export default {
  data() {
    return {
      settings: {
        slidesToShow: 3,
        cssEase: 'linear',
        arrows: false,
        infinite: false,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              centerMode: true,
              arrows: false,
              infinite: true,
            }
          },
        ]
      },
    }
  },
  components: { VueSlickCarousel },
}
</script>

<style lang="scss" scoped>

</style>
