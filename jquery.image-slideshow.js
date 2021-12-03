(function($) {
    $.fn.imageSlideShow = function(options) {
        //hide image gallery
        $("div").css("display", "none");

        //pre-load images
        let imageCache = [];
        $("div img").each( (index, img) => {
            const image = new Image();
            image.src = $(img).attr("src");
            image.title = $(img).attr("alt");
            imageCache[index] = image;
        });

        //settings so that user can customize without changing the plugin code
        let settings = $.extend( {
            titleText: "Gordie Gallery",
            timeout: 3000,
            fadeOutTime: 1000,
            fadeInTime: 1000,
            imageWidth: "700px",
            imageHeight: "800px",
            imageBorder: "25px solid #F0D46D",
            imageBorderRadius: "15px",
            stopButton: {
                color: "rgb(250, 96, 96)",
                background: "#dcdcdc",
                height: "60px",
                width: "100px",
                border: "10px solid rgb(250, 96, 96)"
            },
            startButton: {
                color: "rgb(35, 139, 171)",
                background: "#dcdcdc",
                height: "60px",
                width: "100px",
                border: "10px solid rgb(35, 139, 171)"
            },
            caption: {
                color: "#ffffff",
                fontSize: "30px"
            },
            title: {
                color: "rgb(35, 139, 171)",
                fontSize: "40px"
            }
        }, options)

        //initialize variables and add the elements of the slideshow to the DOM
        let $startButton;
        let $stopButton;
        let $image;
        let $title = "<h1>" + settings.titleText + "</h1>";
        $("body").append($title);
        let $slideShow = $('<img id="slide" src="images/treatsplease.jpg" alt="Treats Please">');
        $("body").append($slideShow);
        let $caption = "<h2 id='caption'>" + $("img").attr("alt") + "</h2>";
        $("body").append($caption);

        //call functions set slideshow properties and create start/stop buttons
        setTitleAndCaptionProperties();
        setStartButtonProperties();
        setStopButtonProperties();
        setImageProperties();


        //function to start the slideshow on button click
        $("#start").click(function (evt) {
            evt.preventDefault();
            let intervalID = startSlideshow();
            $("#start").animate({top: '-=10px'});
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
        //time on slide(interval), fadeIn and fadeOut intervals refer to settings for customization
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

        //function to set style/properties of START button
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

        //function to set style/properties of the STOP button
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

        //function to set style/properties for the images
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

        //function to set style/properties for the title of the slideshow and image captions
        //color and font size refer to settings and are customizable
        function setTitleAndCaptionProperties() {
            let $slideshowTitle = $("h1")
            let $slideshowCaptions = $("h2")
            $slideshowTitle.css({
                "color": settings.title.color,
                "font-size": settings.title.fontSize,
                "text-align": "center"
            })
            $slideshowCaptions.css({
                "color": settings.caption.color,
                "font-size": settings.caption.fontSize,
                "text-align": "center"
            })
        }
    }
}(jQuery));