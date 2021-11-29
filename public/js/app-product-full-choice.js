Vue.component('app-product-full-choice', {
    data(){
      return {
      }
    },
    template: `
            <div class="product__choice">
                <details class="sort product__choice-item">
                    <summary class="sort-name">CHOOSE COLOR <i class="fas fa-chevron-down sort_arrow"></i></summary>
                    <div class="sort-content">
                        <ul class="sort-list">
                            <li class="sort-item"><input type="checkbox" id="WHITE" checked><label for="WHITE">WHITE</label></li>
                            <li class="sort-item"><input type="checkbox" id="BLACK"><label for="BLACK">BLACK</label></li>
                        </ul> 
                    </div>
                </details>

                <details class="sort product__choice-item">
                    <summary class="sort-name">CHOOSE SIZE  <i class="fas fa-chevron-down sort_arrow"></i></summary>
                    <div class="sort-content">
                        <ul class="sort-list">
                            <li class="sort-item"><input type="checkbox" id="XS" checked><label for="XS">XS</label></li>
                            <li class="sort-item"><input type="checkbox" id="S"><label for="S">S</label></li>
                            <li class="sort-item"><input type="checkbox" id="M"><label for="M">M</label></li>
                            <li class="sort-item"><input type="checkbox" id="L"><label for="L">L</label></li>
                        </ul> 
                    </div>
                </details>

                <details class="sort product__choice-item">
                    <summary class="sort-name">QUANTITY <i class="fas fa-chevron-down sort_arrow"></i></summary>
                    <div class="sort-content">
                        <ul class="sort-list">
                            <li class="sort-item"><input type="checkbox" id="ONE" checked><label for="ONE">ONE</label></li>
                            <li class="sort-item"><input type="checkbox" id="TWO"><label for="TWO">TWO</label></li>
                        </ul> 
                    </div>
                </details>
            </div>
    `
})