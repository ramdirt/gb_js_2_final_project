// const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

Vue.component('app-cart', {
    data(){
      return {
          cartUrl: '/getBasket.json',
          cartItems: [],
          imgCart: 'http://placehold.it/50x100',
          showCart: true
      }
    },
    mounted(){
        this.$root.getJson(`/api/cart`)
            .then(data => {
                for (let item of data.contents){
                    this.$data.cartItems.push(item);
                }
            });
    },
    methods: {
        addProduct(item){
            let find = this.cartItems.find(el => el.id_product === item.id_product);
            if(find){
                this.$root.putJson(`/api/cart/${find.id_product}`, {quantity: 1})
                    .then(data => {
                        if(data.result === 1){
                            find.quantity++
                        }
                    })
            } else {
                const prod = Object.assign({quantity: 1}, item);
                this.$root.postJson(`/api/cart`, prod)
                    .then(data => {
                        if(data.result === 1){
                            this.cartItems.push(prod)
                        }
                    })
            }

        },
        remove(item){
            let find = this.cartItems.find(el => el.id_product === item.id_product);
            if(find){
                this.$root.removeJson(`/api/cart/${find.id_product}`, {quantity: 1})
                    .then(data => {
                        if(data.result === 1){
                            if (find.quantity > 1) {
                                find.quantity--
                            } else {
                                const idx = this.cartItems.findIndex(el => el.id_product === item.id_product)
                                this.cartItems.splice(idx, 1)
                                
                            }
                        }
                    })
            }
            
        },
    },
    template: `<div>
                    <li class="header-nav__item header-nav__item_basket">
                        <button class="basket_btn-open">
                            <img src="/img/icons/basket.svg" @click="showCart = !showCart" alt="">              
                        </button>
                    </li>
                        <div class="basket_container" v-if="showCart">
                            <cart-item
                                v-for="item of cartItems"
                                :key="item.id_product"
                                :cart-item="item"
                                @remove="remove">
                            </cart-item>
                        </div>
                </div>
    `
});

Vue.component('cart-item', {
    props: ['cartItem'],
    data(){
        return {
          img: `/img/products/small/${this.cartItem.id_product}.jpg`,
          link: `/product/${this.cartItem.id_product}`
        }
    },
    template: `
                <div class="basket_wrap">
                    <div class="basket_item">
                        <div class="basket_item-figure">
                                <a :href="link">
                                    <img :src="img" alt="Some img">
                                </a>
                            
                        </div>
                        <div class="basket_item-content">
                            <span class="basket_item-name">{{ cartItem.product_name }}</span>
                            <span class="basket_item-quantity">Quantity: {{ cartItem.quantity }}</span>
                            <span class="basket_item-price">$ {{cartItem.quantity*cartItem.price }}</span>
                            <div @click="$emit('remove', cartItem)">
                                <button class="basket_item-remove"><i class="fa fa-trash"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
    `
})