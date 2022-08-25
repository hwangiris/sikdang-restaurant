<template>
  <main class="register__page">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-6 d-flex align-items-center justify-content-center vh-100">
          <div class="register__form mx-auto">
            <div class="text-center mb-5">
              <img src="@/assets/images/logo-color.svg" alt="">
              <div class="fs-5 mt-2">後台管理系統</div>
            </div>
            <form>
              <div class="mb-3">
                <label for="inputEmail" class="form-label visually-hidden">Email address</label>
                <input type="email" class="form-control" id="inputEmail" placeholder="請輸入帳號">
              </div>
              <div class="mb-3">
                <label for="inputPassword" class="form-label visually-hidden">Password</label>
                <input type="password" class="form-control" id="inputPassword" placeholder="請輸入密碼">
              </div>
              <div class="text-center">
                <button type="submit" class="btn btn-primary">登入</button>
              </div>
            </form>
          </div>
        </div>
        <div class="register__image col-md-6 vh-100"></div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      user: {
        id: '',
        password: '',
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.register__form {
  max-width: 300px;
  img {
    height: 80px;
  }
}
.register__image {
  background: center bottom/cover url('@/assets/images/register-bg.jpg');
}
</style>
