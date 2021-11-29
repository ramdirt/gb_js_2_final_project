Vue.component('app-breadcrumb', {
    data(){
      return {
      }
    },
    template: `
        <section class="breadcrumb">
            <div class="container">
                <div class="breadcrumb__blocks">
                    <div class="breadcrumb__block">
                        <h1 class="breadcrumb__title">NEW ARRIVALS</h1>
                    </div>
                    <div class="breadcrumb__block">
                        <ul class="breadcrumb__list">
                            <li><a href="/">HOME / </a> </li>
                            <li><a href="/">MEN /</a></li>
                            <li><label class="breadcrumb__list-active">NEW ARRIVALS</label></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    `
})