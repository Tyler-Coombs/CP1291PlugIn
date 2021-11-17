(function($) {
    $.fn.imageSlideShow = function() {

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
        }, 3000);
        $("#gordieGallery").hidden;
    }
}(jQuery));