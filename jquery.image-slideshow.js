(function($) {
    $.fn.imageSlideShow = function() {

        let settings = $.extend( {
            timeout: 3000
        })

        let imageCache = [];
        $("#gordieGallery img").each( (index, img) => {
            const image = new Image();
            image.src = $(img).attr("src");
            image.title = $(img).attr("alt");
            imageCache[index] = image;
        });

        let imageCounter = 0;
        setInterval( () => {
            $("#slide").fadeOut(1000,
                () => {
                    imageCounter = (imageCounter + 1) % imageCache.length;
                    const nextImage = imageCache[imageCounter];
                    $("#slide").attr("src", nextImage.src).fadeIn(1000);
                    $("#caption").text(nextImage.title).fadeIn(1000);
                });
            $("#caption").fadeOut(1000);
        }, settings.timeout);
        $("#gordieGallery").css("display", "none");

        return this.each(function () {
            let $startButton;
            setStartButtonProperties();

            function setStartButtonProperties() {
                let prop = {
                    "color": "white",
                    "cursor": "pointer",
                    "font-size": "20px",
                    "width": "60px",
                    "height": "30px",
                    "position": "absolute",
                    "top": "5px",
                    "right": "5px",
                    "border": "0px",
                    "z-index": "1"
                };

                if (settings.startButton.src) {
                    $startButton = $('<img>');
                    $startButton.attr("src", settings.startButton.src);
                } else {
                    $startButton = $('<span>START</span>');
                }
                $startButton.css(prop);
                $("#slide").append($startButton);
            }

        })
    }
}(jQuery));