Vue.component('app-product-full', {
    data(){
      return {
        id: 0,
        product: [],

      }
    },
    mounted(){
        this.getURL()
        this.$root.getJson(`/api/product/${this.getURL()}`)
            .then(data => {
                this.product = data
                console.log(this.product)
        });
        
    },
    methods: {
        getURL() {
            const url = window.location.href
            const id = url.split('/')
            return this.id = id[id.length - 1]
        }
    },
    template: `
            <section class="product">
                <div class="container">
                    <div class="product__content">
                        <p class="product__name-collection">
                            WOMEN COLLECTION
                        </p>
                        <hr class="product__line-top">
                        <h2 class="product__title">
                            {{ product.product_name }} 
                        </h2>
                        <div class="product__description">
                            <p>
                                Compellingly actualize fully researched processes before proactive outsourcing.
                                Progressively syndicate collaborative architectures before cutting-edge services.
                                Completely visualize parallel core competencies rather than exceptional portals.
                            </p>
                        </div>
                        <p class="product__price">
                            $ {{ product.price }}
                        </p>
                        <hr class="product__line-bottom">

                        <app-product-full-choice></app-product-full-choice>

                        <div class="product__add-to-basket">
                            <button class="btn product__btn" @click.prevent="$root.$refs.appHeader.$refs.appCart.addProduct(product)"><span class="product__btn-icon"></span>Add to Cart</button>
                        </div>
                    </div>
                </div>
            </section>
    `
})