                                        // CAIXA DE PESQUISA //

let navbar = document.querySelector('.nav-bar')
let searchBox = document.querySelector('.search-box .bx-search')
{/* <i class='bx bx-x' ></i> */}
searchBox.addEventListener('click', () => {
    navbar.classList.toggle('showInput')
    if (navbar.classList.contains('showInput')) {
        searchBox.classList.replace('bx-search', 'bx-x')
    } else {
        searchBox.classList.replace('bx-x', 'bx-search')
    }
})


                                        // SLIDER DOS CURSOS //

$(".blog-slider-area").owlCarousel({
    autoplay: true,
    slideSpeed: 1000,
    items : 3,
    loop: true,
    nav: false,
    margin: 30,
    dots: false,
    responsive:{
    320:{
        items:1
    },
    767:{
    items:2
    },
    600:{
    items:2
    },
    1000:{
    items:3
    }
}

})