import { createApp } from 'https://cdnjs.cloudflare.com/ajax/libs/vue/3.2.26/vue.esm-browser.min.js';

firebase.initializeApp({
	databaseURL: "https://sikdang-github-default-rtdb.firebaseio.com/"
});
const database = firebase.database();


const app = createApp({
  data() {
    return {
      id: '',
      list: {},
      ingredient: [],
      loading: true,
    }
  },
  mounted() {
    this.id = window.location.search.split('id=')[1];
    this.getData(this.id);
  },
  methods: {
    getData(id) {
      database.ref("/recipes").once('value', (snapshot) => {
        const origin = snapshot.val();
        const key = Object.keys(origin);
        const value = Object.values(origin);
        key.forEach((element, index) => {
          this.list[element] = value[index];
        });
      })
      .then(() => {
        this.list = this.list[id];
        const origin = this.list.ingredient;
        const key = Object.keys(origin);
        const value = Object.values(origin);
        key.forEach((element, index) => {
          const data = {
            name: element,
            detail: value[index],
          };
          this.ingredient[index] = data;
        });
        this.loading = false;
      });
    },
  }
})
app.mount('#app')
