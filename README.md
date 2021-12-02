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
Ensure JQuery 3.4.1 is referenced before the plugin.

<img width="716" alt="Screen Shot 2021-12-02 at 1 23 44 PM" src="https://user-images.githubusercontent.com/84094311/144468519-1b4ef2a9-32fb-4b3d-b0f1-6ca73f6f2852.png">

<h3>Step 3:</h3> 
Call the function in your JS application file as shown below.
<img width="302" alt="Screen Shot 2021-12-02 at 1 24 13 PM" src="https://user-images.githubusercontent.com/84094311/144468569-570a095d-11e3-4a2d-9c10-2dee82cfdd48.png">
Here, the function is being called on the div element with the id="gordieGallery". 
Swap out #gordieGallery with your own div id that contains your images.

<h3>Step 4: OPTIONAL</h3> 
Set properties to customize your slideshow within the function call. Example shown below.
<img width="374" alt="Screen Shot 2021-12-02 at 1 41 04 PM" src="https://user-images.githubusercontent.com/84094311/144470045-73e7b37b-07f3-4c75-b962-c575cc025b35.png">
Again, insert your own div id in place of #gordieGallery and set your own values after each property to customize the slideshow.


<h2>SAMPLE FILES FOR TESTING</h2>
This project contains an index.html, style.css, and app.js files to test and show the use of my 
simple slideshow plugin. It takes the images from the div element (id="gordieGallery") and presents
them as a slideshow to the user.
Feel free to download the entire project to test the slideshow plugin.

