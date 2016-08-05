# SlideTrek
An add-on to [reveal.js](https://github.com/hakimel/reveal.js/).
Examples of reveal.js is used in this repo.  
Demo [link](http://slides.com/lydiacheng/slide-trek#/).

## Features
* Sync the page number between the speaker and audience. Audience can switch to the speaker's page number by clicking the button.
* Show the position of the speaker's pointer simutaneously on audience's slide.

## How to use  
1. Put the slides into `/slides/` (see the descriptions in [Run](#run)).
2. Open the link to slide (see the descriptions in [Run](#run)).
3. Make sure everyone (including the speaker and audience) has open up the webpage.
4. Click the password button and type the password into the blank.
5. Ready to go!

## Dependencies
* cheerio : ^0.20.0
* ejs : ^2.5.1
* express : ^4.14.0
* request : ^2.74.0
* socket.io : ^1.4.8

## Requirements
* node.js
* npm
* slides made by reveal.js

## Build
    $ git clone https://github.com/SITCON-camp-2016/slide-trek
    $ cd slide-trek
    $ npm install

Remember to edit the port number and password in the first 2 lines in `app.js`  

## Run
    $ mv <YOUR_SLIDE_FOLDER> slides/<YOUR_SLIDE_FOLDER>/
    $ node app.js

Open your browser and link to `http://<YOUR_DOMAIN>/<YOUR_SLIDE_FOLDER>/<YOUR_SLIDE_FILENAME>`

## Issues
* Knowns: a lot.
* Unknowns: of course remains unknown.

## Special Thanks
* Denny Huang
* Andy Pan
* Elantris Hsu
* ~~We love NTUOSC!~~
