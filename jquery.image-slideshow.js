(function($) {
    $.fn.imageSlideShow = function(options) {
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
            title: "Gordie the Golden Retriever",
            timeout: 3000,
            fadeOutTime: 1000,
            fadeInTime: 1000,
            imageWidth: "700px",
            imageHeight: "800px",
            imageBorder: "25px solid #F0D46D",
            imageBorderRadius: "15px",
            stopButton: {
                color: "rgb(35, 139, 171)",
                background: "#dcdcdc",
                height: "40px",
                width: "100px",
                border: "5px solid rgb(35, 139, 171)"
            },
            startButton: {
                color: "rgb(35, 139, 171)",
                background: "#dcdcdc",
                height: "40px",
                width: "100px",
                border: "5px solid rgb(35, 139, 171)"
            }
        }, options)

        let $startButton;
        let $stopButton;
        let $image;
        let $title = "<h1>" + settings.title + "</h1>";
        $("body").append($title);
        let $slideShow = $('<img id="slide" src="images/treatsplease.jpg" alt="Treats Please">');
        $("body").append($slideShow);
        let $caption = "<h2 id='caption'>" + $("img").attr("alt") + "</h2>";
        $("body").append($caption);

        setStartButtonProperties();
        setStopButtonProperties();
        setImageProperties();

        $("#start").click(function () {
            let intervalID = startSlideshow();
            $("#stop").click(function () {
                clearInterval(intervalID);
            });
        });

        $("#start").hover(function() {
            $(this).css("background-color", settings.startButton.color);
            $(this).css("color", "#ffffff");
        }, function() {
            $(this).css("background-color", settings.startButton.background);
            $(this).css("color", settings.startButton.color);
        });
        $("#stop").hover(function() {
            $(this).css("background-color", settings.stopButton.color);
            $(this).css("color", "#ffffff");
        }, function() {
            $(this).css("background-color", settings.stopButton.background);
            $(this).css("color", settings.stopButton.color);
        });

        function startSlideshow() {
            let imageCounter = 0;
            return window.setInterval( () => {
                $("#slide").fadeOut(settings.fadeOutTime,
                    () => {
                        imageCounter = (imageCounter + 1) % imageCache.length;
                        const nextImage = imageCache[imageCounter];
                        $("#slide").attr("src", nextImage.src).fadeIn(settings.fadeInTime);
                        $("#caption").text(nextImage.title).fadeIn(settings.fadeInTime);
                    });
                $("#caption").fadeOut(settings.fadeOutTime);
            }, settings.timeout);
        }

        function setStartButtonProperties() {
            let prop = {
                "display": "block",
                "color": settings.startButton.color,
                "background-color": settings.startButton.background,
                "cursor": "pointer",
                "font-size": "20px",
                "width": settings.startButton.width,
                "height": settings.startButton.height,
                "margin-left": "auto",
                "margin-right": "auto",
                "border": settings.startButton.border,
                "border-radius": "12px",
                "box-shadow": "0 5px #666",
                "z-index": "1"
            };

            $startButton = $('<button id="start" type="button">START</button>');
            $startButton.css(prop);
            $("#caption").after($startButton);

        }

        function setStopButtonProperties() {
            let prop = {
                "display": "block",
                "color": settings.stopButton.color,
                "background-color": settings.stopButton.background,
                "cursor": "pointer",
                "font-size": "20px",
                "width": settings.stopButton.width,
                "height": settings.stopButton.height,
                "margin-left": "auto",
                "margin-right": "auto",
                "border": settings.stopButton.border,
                "border-radius": "12px",
                "box-shadow": "0 5px #666",
                "z-index": "1"
            };

            $stopButton = $('<button id="stop" type="button">STOP</button>');
            $stopButton.css(prop);
            $("#start").after($stopButton);
        }

        function setImageProperties() {
            $image = $("#slide");
            $image.css( {
                "display": "block",
                "width": settings.imageWidth,
                "height": settings.imageHeight,
                "border": settings.imageBorder,
                "border-radius": settings.imageBorderRadius,
                "margin-left": "auto",
                "margin-right": "auto",
                "object-fit": "cover"
            })
        }
    }
}(jQuery));