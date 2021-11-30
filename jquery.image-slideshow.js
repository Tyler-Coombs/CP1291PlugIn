(function($) {
    $.fn.imageSlideShow = function(options) {
        //hide image gallery
        $("#gordieGallery").css("display", "none");

        //pre-load images
        let imageCache = [];
        $("#gordieGallery img").each( (index, img) => {
            const image = new Image();
            image.src = $(img).attr("src");
            image.title = $(img).attr("alt");
            imageCache[index] = image;
        });

        //settings so that user can customize without changing the plugin code
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

        //initialize variables and add the elements of the slideshow to the DOM
        let $startButton;
        let $stopButton;
        let $image;
        let $title = "<h1>" + settings.title + "</h1>";
        $("body").append($title);
        let $slideShow = $('<img id="slide" src="images/treatsplease.jpg" alt="Treats Please">');
        $("body").append($slideShow);
        let $caption = "<h2 id='caption'>" + $("img").attr("alt") + "</h2>";
        $("body").append($caption);

        //call functions to create the start and stop button and set properties
        setStartButtonProperties();
        setStopButtonProperties();
        setImageProperties();

        //function to start the slideshow on button click
        $("#start").click(function () {
            let intervalID = startSlideshow();
            $("#start").animate({top: '-=10px'}, 1000)
            //stop slideshow on button click
            $("#stop").click(function () {
                clearInterval(intervalID);
            });
        });

        //functions to create hover effects on buttons
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

        //function to create slideshow with fade in and fade out effects
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

        //some properties refer to settings for customization
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

            //add start button to DOM
            $startButton = $('<button id="start" type="button">START</button>');
            $startButton.css(prop);
            $("#caption").after($startButton);

        }

        //some properties refers to settings for customization
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

            //add stop button to DOM
            $stopButton = $('<button id="stop" type="button">STOP</button>');
            $stopButton.css(prop);
            $("#start").after($stopButton);
        }

        //properties refer to settings for image customization
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