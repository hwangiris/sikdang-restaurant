import { createApp } from 'https://cdnjs.cloudflare.com/ajax/libs/vue/3.2.26/vue.esm-browser.min.js';

firebase.initializeApp({
	databaseURL: "https://sikdang-github-default-rtdb.firebaseio.com/"
});
const database = firebase.database();


const app = createApp({
  data() {
    return {
      list: [],
      temp: [],
    }
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      database.ref("/recipes").once('value', (snapshot) => {
        const origin = snapshot.val();
        const key = Object.keys(origin);
        const value = Object.values(origin);
        value.forEach((element, index) => {
          element.id = key[index];
          this.list.push(element);
        });
      })
      .then(() => {
        this.temp = this.list;
      });
    },
    filter(type) {
      this.list = this.temp; // 先把列表重置回全部
      if ( type !== '全部' ) {
        this.list = this.list.filter((element) => {
          return element.channel === type;
        });
      }
    },
  }
})
app.mount('#app')
