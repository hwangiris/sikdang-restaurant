<template>
  <main class="index__page">
    <IndexOpening />
    <section class="about">
      <div class="container">
        <div class="row">
          <div class="col-md-4">
            <p>喜歡做韓國菜的台灣女子，全州生活 3 年後回到台灣。</p>
            <p>
              原本只是懷念在韓國吃的食物而動手料理並分享，漸漸地受到朋友們喜愛。
              這裡有我在韓國最真實的飯桌風景，用心紀錄了韓國人飯桌、街景的一切。
            </p>
          </div>
          <div class="col-md-6"></div>
        </div>
      </div>
    </section>
    <section class="latest bg-light">
      <div class="container">
        從常見的街邊小吃、家庭料理，到最近的網紅料理<br/>
        我們不僅提供食譜與圖解的做法，還包含料理小故事
      </div>
    </section>
    <IndexRecommend />
    <section class="faq">
      <div class="container">
        <div class="row">
          <div class="col-md-4">
            <p>隨著我們食譜文章寫得愈來愈多，私廚也穩動營運中，不時會收到朋友們的詢問。</p>
            <p>我們整理了一些常見問題，找不到你想問的問題，歡迎聯絡我們！</p>
          </div>
          <div class="col-md-8">
            <div class="accordion" id="accordionExample">
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingOne">
                  <button
                    class="accordion-button"
                    type="button"
                    data-bs-toggle="collapse" data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    食譜上有不喜歡或不能吃的食材，可以少放或不放嗎？
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  class="accordion-collapse collapse show"
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                    <p>
                      食譜上的食材品項及份量均是金姨母經過多次試作調整所確認的最佳配方，若沒有特別註明可用其它食材代替，
                      建議不要自行替換。換食材或是自行更改食譜，成品都會有差異。在此特別說明強調，
                      「每一樣食材都有存在的意義」，更改就會影響風味與口感。
                    </p>
                    <p>
                      也常有人詢問：可不可以不加某樣食材？當然可以，但是不加那樣食材，成品的滋味或是口感一定會有可能因此不同。
                    </p>
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingTwo">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    我要如何預約私廚及提前預定私房菜？
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingTwo"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                    <strong>This is the second item's accordion body.</strong>
                    It is hidden by default, until the collapse plugin adds the appropriate
                    classes that we use to style each element. These classes control the overall
                    appearance, as well as the showing and hiding via CSS transitions.
                    You can modify any of this with custom CSS or overriding our default
                    variables. It's also worth noting that just about any HTML can go within the
                    <code>.accordion-body</code>, though the transition does limit overflow.
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingThree">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    已預約私廚，但因故需要取消或改期怎麼辦？
                  </button>
                </h2>
                <div
                  id="collapseThree"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingThree"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                    <strong>This is the second item's accordion body.</strong>
                    It is hidden by default, until the collapse plugin adds the appropriate
                    classes that we use to style each element. These classes control the overall
                    appearance, as well as the showing and hiding via CSS transitions.
                    You can modify any of this with custom CSS or overriding our default
                    variables. It's also worth noting that just about any HTML can go within the
                    <code>.accordion-body</code>, though the transition does limit overflow.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import IndexOpening from '@/components/IndexOpening.vue';
import IndexRecommend from '@/components/IndexRecommend.vue';

export default {
  name: 'IndexView',
  components: {
    IndexOpening,
    IndexRecommend,
  },
};
</script>

<style lang="scss" scoped>
@import '~bootstrap/scss/functions';
@import '@/assets/sass/variables';
@import '~bootstrap/scss/mixins';

section {
  padding-top: 100px;
  padding-bottom: 100px;
}
</style>
