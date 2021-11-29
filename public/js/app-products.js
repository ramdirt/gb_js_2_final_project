Vue.component('app-products', {
    data(){
      return {
          filtered: [],
          products: [],
      }
    },
    mounted(){
      this.$parent.getJson(`/api/products`)
          .then(data => {
              for (let item of data){
                  this.$data.products.push(item);
                  this.$data.filtered.push(item);
              }
      });
    },
    methods: {
        filter(userSearch){
            let regexp = new RegExp(userSearch, 'i');
            this.filtered = this.products.filter(el => regexp.test(el.product_name));
        }
    },
    template: `
        <section class="products">
        <div class="container">
            <div class="products-text">
                <h2 class="products-text__title">Fetured Items</h2>
                <p class="products-text__description">Shop for items based on what we featured in this week</p>
            </div>
            <div class="products-cards">
                <app-product
                  v-for="item of filtered" 
                  :key="item.id_product" 
                  :product="item"
                ></app-product>
            </div>
            <div class="products__add-card">
                <a href="/" class="btn__all-product">Browse All Product</a>
            </div>
            
        </div>
    </section>
    `
})

Vue.component('app-product', {
  props: ['product'],
  data(){
    return {
      img: `/img/products/${this.product.id_product}.jpg`
    }
  },
  template: `
      <div class="card" >
        <div class="card__figure">
            <img :src="img" alt="" class="card__image">
        </div>
        <div class="card__body">
            <div class="card__title">
                <p>{{product.product_name}}</p>
            </div>
            <div class="card__description">
                <p>Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.</p>
            </div>
            <div class="card__price">
                <p class="text_red">$ {{product.price}}</p>
            </div>
        </div>
        <div class="card__add-basket-bg">
            <a href="/" class="btn card__btn" @click.prevent="$root.$refs.appHeader.$refs.appCart.addProduct(product)"><span class="card__btn-icon"></span>Add to Cart</a>
        </div>
      </div>
  `
})