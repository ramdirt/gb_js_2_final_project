'use strict';


/* Открывает и закрывает меню по нажатию бургера*/
const burger = document.querySelector('.burger');
const sidebarExit = document.querySelector('.sidebar__exit')

burger.addEventListener('click', openCloseSidebar);
sidebarExit.addEventListener('click', openCloseSidebar);

function openCloseSidebar () {
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.toggle('sidebar--open');
    sidebar.classList.toggle('sidebar--close');
}

// const filter = document.querySelector('.filter');
// const filterName = document.querySelector('.filter-name');

// filter.open = true;

// function filterView() {
//     let w = window.innerWidth;
//     if (w < 768) {
//         filterName.innerHTML = '<i class="fas fa-filter"></i>';
//     } else {
//         filterName.innerHTML = 'FILTER <i class="fas fa-filter"></i></i>';
//     }
// }
// filterView();
// window.addEventListener('resize', function() {
//     filterView();
// });


/* Добавляет оверлей на карточки с кнопкой 
const cards = document.querySelectorAll('.card');
const cardBtn = document.querySelectorAll('.card__btn');

cards.forEach(function (card) {
    card.onmouseover = function() {
        cardBtn[card.dataset.id].parentElement.classList.remove('hide-block');
    }
    card.onmouseout = function() {
        cardBtn[card.dataset.id].parentElement.classList.add('hide-block');
    }
    card.addEventListener('click', function() {
        console.log(card.dataset.id)
    })
})
*/

// /* Открывает и закрывает фильтр */

// const filterBtnOpen = document.querySelector('.smart-block__filter-item');
// const filterBtnExit = document.querySelector('.filter__open');

// if (filterBtnOpen != null) {
//     filterBtnOpen.addEventListener('click', openCloseFilter);
//     filterBtnExit.addEventListener('click', openCloseFilter);
    
//     function openCloseFilter () {
//         const filter = document.querySelector('.filter');
//         filter.classList.toggle('hide-block');
//     }
// }



// /* Открывает и закрывает сортировку по цене */

// const sortBtnOpenExit = document.querySelector('.smart-block__sort-size');

// sortBtnOpenExit.addEventListener('click', openCloseSortSize);

// function openCloseSortSize () {
//     const sortSize = document.querySelector('.sort-size');
//     sortSize.classList.toggle('hide-block');
// }

// /* Анимация поворота стрелочки для сортировки */

// const rotateArrowToSort = document.querySelectorAll('.smart-block__sort-item');

// rotateArrowToSort.forEach(function (arrow) {
//     arrow.addEventListener('click', function() {
//         arrow.classList.toggle('smart-block__sort-item_active');
//     })
// })