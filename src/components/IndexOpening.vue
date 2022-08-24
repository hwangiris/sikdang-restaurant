<template>
  <section class="key__visual">
    <div class="container">
      <div class="row justify-content-center">
        <div class="key__text col-md-5 text-white">
          <img src="@/assets/images/logo-slogan-white.svg" class="mb-5" alt="">
          <p>
            《食堂》提供韓國料理食譜可以學習，從家常菜、電鍋料理、懶人快手菜等通通有。
          </p>
          <p>
            不想做只想吃也沒關係，我們開設家庭私廚服務，三五好友一起齊聚《食堂》聊天吃飯吧。
          </p>
        </div>
        <div class="key__slide col-md-5"></div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'IndexOpening',
};
</script>

<style lang="scss" scoped>
@import '~bootstrap/scss/functions';
@import '@/assets/sass/variables';
@import '~bootstrap/scss/mixins';

.key__visual {
  position: relative;
  padding-top: 125px;
  padding-bottom: 125px;
  background: linear-gradient(to right, $primary 0%, $primary 50%, $danger 50%, $danger 100%);
  overflow: hidden;
  &::before {
    content: '';
    display: block;
    position: absolute;
    top: 50%;
    left: 45%;
    width: 40%;
    padding-top: 40%;
    background-color: $primary;
    border-radius: 50%;
    transform: translate(-50%, -50%);
  }
  .container {
    position: relative;
    z-index: 1;
  }
}

</style>
