const portofolio = [
    {
        name: "Movie Database",
        link: "http://mymovie.ihan.live",
        thumbnail: "./assets/img/portofolio-1.png"
    },
    {
        name: "Currency Converter Mobile App",
        link: "https://github.com/raihanlh/currency-converter",
        thumbnail: "./assets/img/portofolio-2.png"
    },
]

$(() => {
    // Add each portofolio to web page
    portofolio.forEach((item) => {
        let a = $(`<a href=${item.link} class="col text-decoration-none p-0 m-2 thumbnail" target="_blank"></a>`)
        let el = $("<div></div>");
        el.addClass("portofolio-item card col d-flex align-items-center justify-content-center")
        el.append(`<img class="card-img-top thumbnail" src=${item.thumbnail} alt=${item.name}>`)
        el.append(`<h6 class="card-title my-3 mx-auto text-dark text-center">${item.name}</h6>`);
        
        a.append(el);
        $("#portofolio-container").append(a);
    })

    // Create scroll animation
    var $animation_elements = $('.animation-element');
    var $window = $(window);

    function check_if_in_view() {
        var window_height = $window.height();
        var window_top_position = $window.scrollTop();
        var window_bottom_position = (window_top_position + window_height);
        
        $.each($animation_elements, function() {
            var $element = $(this);
            var element_height = $element.outerHeight();
            var element_top_position = $element.offset().top;
            var element_bottom_position = (element_top_position + element_height);
        
            //check to see if this current container is within viewport
            if ((element_bottom_position >= window_top_position) &&
                (element_top_position <= window_bottom_position)) {
            $element.addClass('in-view');
            } else {
            $element.removeClass('in-view');
            }
        });
    }

    $window.on('scroll resize', check_if_in_view);
    $window.trigger('scroll');
})