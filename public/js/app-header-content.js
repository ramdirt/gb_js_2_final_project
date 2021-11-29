Vue.component('app-header-content', {
    data(){
      return {
          userSearch: ''
      }
    },
    template: `
        <section class="header-content">
            <div class="container">
                <div class="header-content__blocks">
                    <div class="header-content__block header-content__block_image">
                    </div>
                    <div class="header-content__block">
                        <div class="header-content__block_text">
                            <h1 class="header-content__heading">
                                THE BRAND <br>
                                <span class="header-content__subtitle">OF LUXERIOUS <span class="header-content__subtitle--red">FASHION</span></span>
                                
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
    </section>
    `
})