window.addEventListener('DOMContentLoaded', () => {
    // Header
    const header = document.querySelector('.header'),
          menus = document.querySelector('.menus__categories');

    const openBurger = (burgerBtn, navMenu, activeSelector) => {
        navMenu.classList.toggle(activeSelector);
        burgerBtn.style.opacity = 0;
        document.body.style.overflow = 'hidden';
    }

    const closeBurger = (burgerBtn, navMenu, activeSelector) => {
        navMenu.classList.toggle(activeSelector);
        burgerBtn.style.opacity = 1;
        document.body.style.overflow = '';
    }

    (function (){
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 20) {
                header.classList.add('fixed__header');
                if (innerWidth > 767) {
                    menus.classList.add('fixed__menus');
                }
            } else {
                header.classList.remove('fixed__header');
                menus.classList.remove('fixed__menus');
            }
        });
    }());

    // Search
    (function (){
        const search = header.querySelector('.search__field'),
              searchLink = header.querySelector('.search__link'),
              headerNumber = header.querySelector('.header__number'),
              headerLogo = header.querySelector('.header__logo');

        searchLink.addEventListener('click', () => {
            search.classList.toggle('show');
            headerNumber.classList.toggle('hide');
            headerLogo.classList.toggle('hide');
        });
    }());

    // Menus
    (function () {
        const menus = document.querySelector('.header__menus'),
              menusLinks = menus.querySelectorAll('.header__menus-link'),
              menusCategories = document.querySelectorAll('.menus__categories-item'),
              menusCloseBtn = document.querySelector('.menus-close');

        menus.addEventListener('click', (e) => {
            if (innerWidth <= 767) {
                closeBurger(document.querySelector('.burger'), document.querySelector('.header__nav'), 'header__nav-active')
            }
            if (e.target.tagName = 'A') {
                menusLinks.forEach(link => {
                    if (e.target === link) {
                        menusCategories.forEach(item => {
                            if (link.getAttribute('menu-point') === item.getAttribute('menu-category-point')) {
                                item.classList.toggle('hide');
                            }
                        })
                    }
                })
            }
        });

        menusCloseBtn.addEventListener('click', () => {
            menusCategories.forEach(item => {
                item.classList.toggle('hide');
            });
        });
    }());

    // Burger
    (function () {
        const burger = document.querySelector('.burger'),
              navMenu = document.querySelector('.header__nav'),
              closeMenu = document.querySelector('.header__nav-close');

        burger.addEventListener('click', () => {
            openBurger(burger, navMenu, 'header__nav-active');
        });

        closeMenu.addEventListener('click', () => {
            closeBurger(burger, navMenu, 'header__nav-active');
        });

        const navItems = document.querySelectorAll('.header__item');

        navItems.forEach(item => {
            item.addEventListener('click', () => {
                closeBurger(burger, navMenu, 'header__nav-active');
            });
        });
    }());

    // Filter 
    (function () {
        const filterBtn = document.querySelector('.category__filter-btn'),
              filterCard = document.querySelector('.category__filter-card'),
              filterCloseBtn = document.querySelector('.filter__card-header-close');

        filterBtn.addEventListener('click', () => {
            filterCard.classList.toggle('hide');
            filterBtn.classList.toggle('hide');
        });

        filterCloseBtn.addEventListener('click', () => {
            filterCard.classList.toggle('hide');
            filterBtn.classList.toggle('hide');
        })
    }());
});