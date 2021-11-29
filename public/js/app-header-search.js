Vue.component('app-header-search', {
    data(){
      return {
          userSearch: ''
      }
    },
    template: `<form action="#" class="search-form" @submit.prevent="$root.$refs.appProducts.filter(userSearch)">
                <input type="text" class="search-field" v-model="userSearch">
                <button type="submit" class="btn-search">
                    search
                </button>
                </form>`
})