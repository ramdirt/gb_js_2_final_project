Vue.component('app-subscribe', {
    data(){
      return {

      }
    },
    template: `
        <section class="subscribe">
            <div class="container">
                <div class="subscribe-blocks">
                    <div class="subscribe-block">
                            <div class="subscribe-review__image">
                                <img src="/img/footer/Intersect.png" alt="">
                            </div>
                            <p class="subscribe-review__text">
                                “Vestibulum quis porttitor dui!
                                Quisque viverra nunc mi,
                                a pulvinar purus condimentum“ 
                            </p>
                    </div>
                    <div class="subscribe-block">
                        <p class="subscribe-form__title"></p>
                        <p class="subscrube-form__subtitle"></p>
                        <form action="#" class="subscribe-form">
                            <p class="subscribe-form__title">SUBSCRIBE</p>
                            <p class="subscribe-form__description">FOR OUR NEWLETTER AND PROMOTION</p>
                            <div class="subscribe-inputs">
                                <input class='subscribe-inputs__search' type="email" placeholder="Enter Your Email" name="q">
                                <input class='subscribe-inputs__submit' type="submit" value="Subscribe">
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </section>
    `
})