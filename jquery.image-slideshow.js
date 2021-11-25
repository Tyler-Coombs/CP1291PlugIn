(function($) {
    $.fn.imageSlideShow = function() {
        //hide image gallery
        $("#gordieGallery").css("display", "none");

        let imageCache = [];
        $("#gordieGallery img").each( (index, img) => {
            const image = new Image();
            image.src = $(img).attr("src");
            image.title = $(img).attr("alt");
            imageCache[index] = image;
        });

        let settings = $.extend( {
            timeout: 3000
        })

        let $startButton;
        let $stopButton;
        setStartButtonProperties();
        setStopButtonProperties();

        $("#start").click(function () {
            startSlideshow();
        });
        $("#stop").click(function () {
            stopSlideshow();
        });

        function startSlideshow() {
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
        }

        function stopSlideshow() {
            clearInterval(startSlideshow());
        }

        function setStartButtonProperties() {
            let prop = {
                "color": "white",
                "cursor": "pointer",
                "font-size": "20px",
                "width": "100px",
                "height": "40px",
                "position": "relative",
                "top": "5px",
                "right": "5px",
                "border": "0px",
                "z-index": "1"
            };

            $startButton = $('<button id="start" type="button">START</button>');
            $startButton.css(prop);
            $("h2").after($startButton);
        }
        function setStopButtonProperties() {
            let prop = {
                "color": "white",
                "cursor": "pointer",
                "font-size": "20px",
                "width": "100px",
                "height": "40px",
                "position": "relative",
                "top": "5px",
                "right": "5px",
                "border": "0px",
                "z-index": "1"
            };

            $stopButton = $('<button id="stop" type="button">STOP</button>');
            $stopButton.css(prop);
            $("h2").after($stopButton);
        }

    }
}(jQuery));