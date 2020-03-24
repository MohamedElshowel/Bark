/**
 * @description Init products section by getting their configurations and append them to the HTML.
 * @access public
 */
function initProducts() {
    $.getJSON("config.json", config => {
        $(".best-sellers--products").empty();
        config.products.forEach(product => {
            const productNode = 
            `<div class="product">
                <img src="${product.imgURL}">
                <div class="description">${product.description}</div>
                <div class="price">${config.currency + product.price}</div>
                <button class="btn view-more-btn">View More</button>
            </div>`;

            $(".best-sellers--products").append(productNode);
        });
        _initProductsCarousel();
    });
}


/**
 * @description Initialize Products Carousel using Slick library.
 * @access private
 */
function _initProductsCarousel() {
    $('.best-sellers--products').slick({
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 3,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: true,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            }
        ]
    });
}