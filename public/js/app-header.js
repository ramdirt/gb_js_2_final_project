Vue.component('app-header', {
    data(){
        return {
            menu: false,
            search: false
        }
      },
    methods: {
        showMenu() {
            return this.menu = !this.menu
        },
        showSearch() {
            return this.search = !this.search
        },
    },
    template: `
    <nav class="header-nav">
        <div class="container">

            <div class="header-nav__blocks">

                <div class="header-nav__left">
                    <ul class="header-nav__list header-nav__list_logo-search">
                        <li class="header-nav__item header-nav__logo">
                            <a href="/">
                                <img src="/img/icons/logo.svg" alt="">
                            </a>
                        </li>
                        <li class="header-nav__item header-nav__search" @click="showSearch">
                            <img src="/img/icons/search.svg" alt="">
                            
                        </li>
                        <app-header-search v-if="search"></app-header-search>
                    </ul>       
                </div>

                <div class="header-nav__right">
                    <ul class="header-nav__list">
                        <li class="header-nav__item burger" @click="showMenu">
                            <img src="/img/icons/burger.svg" alt="">
                        </li>
                        <li class="header-nav__item header-nav__item_login">
                            <a href="/">
                                <img src="/img/icons/man.svg" alt="">
                            </a>
                        </li>

                        <app-cart ref="appCart"></app-cart>  
                        
                    </ul>

                </div>

                <transition name="fade">
                    <app-header-menu v-if="menu" @click-exit="showMenu"></app-header-menu>
                </transition>
            </div>
        </div>
    </nav>
    `
})