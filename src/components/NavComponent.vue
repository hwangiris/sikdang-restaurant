<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container">
      <a class="navbar-brand" href="#">
        <img src="@/assets/images/logo-black.svg" alt="食堂 Logo">
        <span class="visually-hidden">食堂</span>
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav align-items-center gap-3 ms-auto">
          <li class="nav-item">
            <router-link to="/" class="nav-link">首頁</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/about" class="nav-link">關於食堂</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/recipes" class="nav-link">韓餐食譜</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/booking" class="btn btn-primary">預約私房菜</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavComponent',
};
</script>

<style lang="scss" scoped>
@import '~bootstrap/scss/functions';
@import '@/assets/sass/variables';
@import '~bootstrap/scss/mixins';

.navbar-brand {
  img {
    height: 40px;
  }
}
.nav-link {
  border: solid transparent;
  border-width: 2px 0;
  &:hover {
    border-bottom-color: $primary;
  }
}
</style>
