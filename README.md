#Intro-APIs

##Objectives

Read and explore the documentation of APIs
Effectively implement the promise pattern
Format retrieved data into HTML
##Setup

use the gen-project-scss tool to create a new web project
cd into the project
git init
hub create [repoName]
include a script tag in your index.html that links to the jquery source code (make sure you put it above your own script)
hack away at your app.js to create the patterns below!
Note the Sunlight Foutdation API is not CORS supported, and you will need to ensure that JSONP is specified in your request. In order to do this, you will have to append callback=? as a query string parameter to your request. Thus, the request-url to the Sunlight Foundation API in your app.js should be formatted like so:
https://congress.api.sunlightfoundation.com/legislators?callback=?
##Resources

Sunlight Foundation API: https://sunlightfoundation.com/api/
jquery source code: https://code.jquery.com/jquery-2.2.4.min.js
###Normal Mode

Retrieve data on all legislators, reproducing the page shown below: 
