# CP1291PlugIn
This project is for my JavaScript course. The task is to create a simple jQuery PlugIn. 
My plugin will take images from the HTML file and place them into a slideshow. 
This slideshow will have start and stop buttons and feature fading animations for image transitions. 

The plugin is set up to use images within a div element inside of the HTML body.
The plugin allows for customization of many of the properties of the slideshow.
Properties that may be customized: titleText (Slideshow Title)
                                   timeout (Time on each slide)
                                   fadeOutTime (Duration of fadeout)
                                   fadeInTime (Duration of fadein)
                                   imageWidth
                                   imageHeight
                                   imageBorder
                                   imageBorderRadius
                                   button properties (color, background, height, width, border)
                                   caption properties (color, fontSize)
                                   title properties (color, fontSize)
                                   

INSTALLATION/HOW TO USE:
Step 1: 
Download the jquery.image-slideshow.js file from my repository and place it in your project folder.

Step2:
Together with JQuery, include jquery.image-slideshow.js in your HTML page.
JQuery 3.4.1 is recommended as it was used for development and testing.

<script src="https://code.jquery.com/jquery-3.4.1.min.js" type="text/javascript"></script>
<script src="jquery.image-slideshow.js" type="text/javascript"></script>

Step 2:
Call the function in your JS application file as shown below.

$("#div_id_here").imageSlideShow();

Step 3: OPTIONAL
Set properties to customize your slideshow within the function call. Example shown below.

$("#div_id_here").imageSlideShow({
    title: "Gordie the Golden Retriever",
    timeout: 3500,
    fadeOutTime: 500,
    fadeInTime: 500,
    imageWidth: "800px",
    imageHeight: "900px",
    imageBorder: "35px solid #F0D46D",
    imageBorderRadius: "20px",
    startButton: {
        color: "rgb(96, 250, 183)",
        background: "#dcdcdc",
        height: "80px",
        width: "120px",
        border: "2px solid rgb(96, 250, 183)"
    },
    caption: {
                color: "rgb(250, 96, 96)",
                fontSize: "50px"
    },
    title: {
        color: "rgb(250, 96, 96)",
        fontSize: "80px"
    }
});

SAMPLE FILES FOR TESTING
This project contains an index.html, style.css, and app.js files to test and show the use of my 
simple slideshow plugin. It takes the images from the div element (id="gordieGallery") and presents
them as a slideshow to the user.

Feel free to download the entire project to test the slideshow plugin.

