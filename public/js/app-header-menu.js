Vue.component('app-header-menu', {
    methods: {
        open() {
            this.$emit('click-exit')
        }
    },
    template: `
    <div class="sidebar">
        <div class="sidebar__wrap">
            <div class="sidebar__exit" @click="open">
                <img src="img/icons/exit.svg" alt="">
            </div>
            <div class="sidebar__title">
                <p>MENU</p>
            </div>
            <div class="sidebar__list">
                <div class="sidebar__list-title">
                    <p>MAN</p>
                </div>
                <ul class="sidebar__list-items">
                    <li class="sidebar__list-item">Accessories</li>
                    <li class="sidebar__list-item">Bags</li>
                    <li class="sidebar__list-item">Denim</li>
                    <li class="sidebar__list-item">T-Shirts</li>
                </ul>
            </div>
            <div class="sidebar__list">
                <div class="sidebar__list-title">
                    <p>WOMAN</p>
                </div>
                <ul class="sidebar__list-items">
                    <li class="sidebar__list-item">Accessories</li>
                    <li class="sidebar__list-item">Jackets & Coats</li>
                    <li class="sidebar__list-item">Polos</li>
                    <li class="sidebar__list-item">T-Shirts</li>
                    <li class="sidebar__list-item">Shirts</li>
                </ul>
            </div>
            <div class="sidebar__list">
                <div class="sidebar__list-title">
                    <p>KIDS</p>
                </div>
                <ul class="sidebar__list-items">
                    <li class="sidebar__list-item">Accessories</li>
                    <li class="sidebar__list-item">Jackets & Coats</li>
                    <li class="sidebar__list-item">Polos</li>
                    <li class="sidebar__list-item">T-Shirts</li>
                    <li class="sidebar__list-item">Shirts</li>
                    <li class="sidebar__list-item">Bags</li>
                </ul>
            </div>
        </div>
    </div>
    `
})