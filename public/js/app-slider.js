Vue.component('app-slider', {
    data(){
      return {
          img: `/img/products/${this.id}.jpg`
      }
    },
    mounted() {
        this.getIMG()
    },
    methods: {
        getIMG() {
            const url = window.location.href
            const id = url.split('/')
            this.img = `/img/products/${id[id.length - 1]}.jpg`
        }
    },
    template: `
            <section class="slider">
                <div class="container">
                    <div class="slider__content">
                        <img :src="img" alt="" class="slider__img">
                    </div>
                </div>
                <button class="slider__prev-slide"></button>
                <button class="slider__next-slide"></button>
            </section>
    `
})