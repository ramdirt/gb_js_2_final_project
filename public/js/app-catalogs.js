Vue.component('app-catalogs', {
    data(){
      return {
          userSearch: ''
      }
    },
    template: `
      <section class="catalogs">
        <div class="container">
            <div class="catalogs-blocks">
                <div class="catalogs-blocks__item catalogs__women">
                    <p class="catalogs-block__text">
                        <span class="catalogs-block__text-subtitle">30% OFF</span>
                        <br>
                        <span class="catalogs-block__text-header"><a href="/">FOR WOMEN</a></span>
                    </p>
                </div>
                <div class="catalogs-blocks__item catalogs__men">
                    <p class="catalogs-block__text">
                        <span class="catalogs-block__text-subtitle">HOT DEAL</span>
                        <br>
                        <span class="catalogs-block__text-header"><a href="/">FOR MEN</a></span>
                    </p>
                </div>
                <div class="catalogs-blocks__item catalogs__kids">
                    <p class="catalogs-block__text">
                        <span class="catalogs-block__text-subtitle">NEW ARRIVALS</span>
                        <br>
                        <span class="catalogs-block__text-header"><a href="/">FOR KIDS</a></span>
                    </p>
                </div>
                <div class="catalogs-blocks__item catalogs__accesories">
                    <p class="catalogs-block__text">
                        <span class="catalogs-block__text-subtitle">LUXIROUS & TRENDY</span>
                        <br>
                        <span class="catalogs-block__text-header"><a href="/">ACCESORIES</a></span>
                    </p>
                </div>
            </div>
        </div>
      </section>
    
    `
})