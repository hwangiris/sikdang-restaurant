import { createApp } from 'https://cdnjs.cloudflare.com/ajax/libs/vue/3.2.26/vue.esm-browser.min.js';

firebase.initializeApp({
	databaseURL: "https://sikdang-github-default-rtdb.firebaseio.com/"
});
const database = firebase.database();


const app = createApp({
  data() {
    return {
      keyword: '',
      channel: [],
      list: [],
      temp: [],
      loading: true,
    }
  },
  mounted() {
    this.keyword = decodeURI(window.location.search.split('text=')[1]);
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
        this.search(this.keyword);
        this.temp = this.list;
        this.loading = false;
      });
    },
    search(keyword) {
      this.list = this.list.filter((element) => {
        return element.name.indexOf(keyword) > -1;
      });
    },
    filter() {
      this.list = this.temp; // 先把列表重置回全部
      const temp = [];
      if ( !this.channel.includes('全部') ) {
        this.channel.forEach((el) => {
          this.list.filter((element) => {
            if ( element.channel === el ) {
              temp.push(element);
            }
          });
        });
        this.list = temp;
      }
    },
  }
})
app.mount('#app')
