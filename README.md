# CP1291PlugIn
This project is for my JavaScript course. The task is to create a simple jQuery PlugIn. 
My plugin will take images from the HTML file and place them into a slideshow. 
This slideshow will have start and stop buttons and feature fading animations for image transitions. 

The plugin is set up to use images within a div element inside of the HTML body.
The plugin allows for customization of many of the properties of the slideshow.
Properties that may be customized: 
<ul>
  <li>titleText (Slideshow Title)</li>
  <li>timeout (Time on each slide)</li>
  <li>fadeOutTime (Duration of fadeout)</li>
  <li>fadeInTime (Duration of fadein)</li>
  <li>imageWidth</li>
  <li>imageHeight</li>
  <li>imageBorder</li>
  <li>imageBorderRadius</li>
  <li>button properties (color, background, height, width, border)</li>
  <li>caption properties (color, fontSize)</li>
  <li>title properties (color, fontSize)</li>
</ul>

<h2>INSTALLATION/HOW TO USE:</h2>
<h3>Step 1:</h3> 
Download the jquery.image-slideshow.js file from my repository and place it inside your project folder.
Placing it in the project folder with your HTML file makes it easier to reference inside your script tags.

<h3>Step 2:</h3> 
Together with JQuery, include jquery.image-slideshow.js in your HTML page.
JQuery 3.4.1 is recommended as it was used for development and testing.
Ensure JQuery 3.4.1 is referenced before the plugin. You may copy/paste the script elements below.

<pre>
<code>
  <script src="https://code.jquery.com/jquery-3.4.1.min.js" type="text/javascript"></script>
  <script src="jquery.image-slideshow.js" type="text/javascript"></script>
</code>
</pre>

<h3>Step 3:</h3> 
Call the function in your JS application file as shown below.
<pre>
<code>
$("#your_div_id_here").imageSlideShow();
</code>
</pre>
Here, the function is being called on the div element that contains your images. Insert your div id here.

<h3>Step 4: OPTIONAL</h3> 
Set properties to customize your slideshow within the function call. Example shown below.
<pre>
<code>
$("#your_div_id_here").imageSlideShow({
    titleText: "Your Title Here",
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
});
</code>
</pre>
Again, insert your own div id and set your own values after each property to customize the slideshow.

<h2>SAMPLE FILES FOR TESTING</h2>
This project contains an index.html, style.css, and app.js files to test and show the use of my 
simple slideshow plugin. It takes the images from the div element (id="gordieGallery") and presents
them as a slideshow to the user.
Feel free to download the entire project to test the slideshow plugin.

