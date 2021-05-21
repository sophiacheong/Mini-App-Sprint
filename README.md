# Exercise: Mini App Sprint #
> This was assigned to me when attending Hack Reactor as a student.

In this 4-day sprint, you will build four "mini apps" completely from scratch. Building small apps from scratch is something that you will be asked to do in every technical interview during your job search. Mastering these concepts is essential to landing a job.

It is __VERY IMPORTANT that you start from scratch__ on each challenge and that you __DO NOT copy code__ from a previous challenges, even if some aspects of the next challenge appear to be similar. Why? Read on:
  1. Expect to learn something new in each challenge: an interesting technique, an insight you didn't previously have or an 'aha' moment that connects dots. As you uncover these learnings, you might think 'I wish I knew this before I started'. Good news! That's exactly why we're asking you to start from scratch on each challenge. Applying knowledge in later challenges is one of best ways to retain that newfound knowledge.
  2. Practice makes perfect. The more times you repeat doing the basics, the easier it will be to perform those basics in the future.
 
In addition to the above requirement, you should not copy or reference code and lecture materials from your prior sprints. Practice autonomy by finding answers on the internet.

Completing the basic requirements and then moving on to finish as much of the advanced content as possible is one of the best ways to prepare for the upcoming Technical Assessment.

## Using Hints ##
Challenges 1-4 offer 'hints'. If you are stuck on something, chances are good there is a hint that will help get you unstuck. **Use them.**

Hints are provided only for the basic requirements and are organized into headings by topic, so it's possible to find a specific hint without reading all the hints. However, do not read any of these hints without making a deliberate choice to do so as this reduces your learning potential.

Before you begin a challenge, it is recommended that you **read the hint titles** so that if you get stuck, you know what can be found in the hints file. After you've completed the basic requirements, read all the hints to see what, if any, improvements you can make to your code.

A hint that addresses a specific issue is only included in the challenge where it first becomes relevant. If you don't find a hint that meets your needs in the current challenge's hint file, be sure to also check prior hints.

## Challenge 1: Tic Tac Toe ##
[Build a Tic Tac Toe game](#challenge-tic-tac-toe)

## Challenge 2: CSV Report Generator ## 
[Build a CSV Report Generator](#challenge-csv-report-generator)

## Challenge 3: Multistep Checkout Experience ## 
[Build a Multistep Checkout Experience](#challenge-multistep-checkout-experience)

## Challenge 4: Connect Four ## 
[Build a Connect Four game]()

# BONUS Challenges #
The challenges below are offered as bonus to really stretch the limits of your skills and thinking. Each challenge is progressively more difficult and offers fewer hints and guidelines.

## BONUS Challenge: Checkers ##
[Build a Checkers game]()

## BONUS Challenge: Battleship ##
[Build a Battleship game]()

# Challenge: Tic Tac Toe #
### Basic Requirements ###
Starting from a blank __`index.html`__ and blank __`app.js`__ file, build a single-page app for a simple Tic Tac Toe game, where:
  * the first move always starts with player X
  * the app detects a win or tie and displays an appropriate message
  * a button resets the game for a new round of gameplay

A single page app means that once the page loads, no user-generated actions on the page may cause the entire page to reload. One way this rule could be broken in your implementation is that you might consider resetting the game state by refreshing the page. This technique is not permitted for this exercise.

For the initial version of this game, you may only __use native DOM methods__ to listen for events and update the DOM as gameplay progresses. This means: no jQuery, React or any other libraries or frameworks. All your code should live in one file, __`app.js`__, and all your HTML should live in __`index.html`__.

For basic requirements, no CSS styling is necessary. Use the browser's default styling for all elements on your page.

MVC frameworks help you separate and manage the concerns associated with user input, rendering to the screen and managing app state. Even though you are not using any frameworks, this concept can be applied even while writing plain-vanilla javascript code. Be sure to build your app so that each category of behavior is grouped in one area of your __`app.js`__ file. Use coding best practices to ensure a clear separation of concerns with well-defined interfaces.

If you get stuck or are not sure how to proceed:
   * you may look at the [hints](#hints-tic-tac-toe) file for this challenge to help you along.
   * you may substitute the use of native DOM methods with jQuery.

# Challenge: CSV Report Generator #
### Basic Requirements ###
Use Express and [Express middleware, if needed](https://expressjs.com/en/resources/middleware.html), to build a client-server app that generates CSV reports from JSON data.

The JSON->CSV conversion specification is:
```
The server must flatten the JSON hierarchy, mapping each item/object in the JSON to a single line of CSV report (see included sample output), where the keys of the JSON objects will be the columns of the CSV report.
You may assume the JSON data has a regular structure and hierarchy (see included sample file). In other words, all sibling records at a particular level of the hierarchy will have the same set of properties, but child objects might not contain the same properties. In all cases, every property you encounter must be present in the final CSV output.
You may also assume that child records in the JSON will always be in a property called `children`.
```
  * Use Express to serve up an __`index.html`__ file and its associated assets
  * The client app should be able to submit JSON data to the server, receive a response containing a CSV-formatted result (the way this is done will vary depending on where you are in the challenge).
  * Implement all the report generation logic on the server. Do not use any external libraries to convert the data (such as via npm). You may use jQuery on the client and middleware like BodyParser on the server.

Build your Express app inside __`server.js`__ and your client app inside the client folder. Don't forget to create a __`package.json`__ to store your project's dependencies.

Initially, submission of the JSON data (from the client to server) should be done using an HTML __`form`__ with a single __`textarea`__ input field (for the entire JSON text) and a submit button. When the user clicks __`submit`__, POST the form data to the server. The form submission process should use the default browser action/behavior. __DO NOT use jQuery/AJAX functions in the submission process.__

The response from the server should contain the CSV report along with the form so the user can keep submitting indefinitely, without having to go back to the "form page". __DO NOT USE jQuery/AJAX.__ You may use the supplied examples of JSON and CSV for testing and verification.

Now that you have basic client/server submission working, refactor your form to use a file picker instead of a textarea. Continue to use the browser's default action. __DO NOT USE jQuery/AJAX.__

Next, refactor to a single page application by using jQuery/AJAX to submit your JSON file to the server using AJAX. Note: a single page app means that once the page loads, no user-generated actions on the page may cause the entire page to reload. You will know the page is reloading if you see a change in your URL. You must prevent this behavior from occurring.

Lastly, add a link to download the most recently created CSV report. You can choose to make this a server-based or client-based action.

You are allowed to use jQuery to manipulate the DOM and handle any DOM events. You may use jQuery/Ajax only when you get to the step in the basic requirements that asks you to do so. For ease of development, be sure to use __`nodemon`__ to watch for changes in your project. Additionally, no CSS styling is necessary. Use the browser's default styling for all elements on your page.

Use the coding best practices you learned previously to ensure a clear separation of concerns with well-defined interfaces.

If you get stuck or are not sure how to proceed, you may look at the [hints file](#hints-csv-report-generator) for this challenge to help you along.

# Challenge: Multistep Checkout Experience #
### Basic Requirements ###
Build a single-page app that takes a user through a series of forms that simulate a shopping cart checkout experience. You should:
  * Use Express to serve up an __`index.html`__ file and its associated assets
  * Build your UI using ReactJS and pre-compile your views using Babel
  * Use MongoDB or MySQL to store your user data

Build your Express app inside __`server.js`__ and your client app inside the client folder. For the basic requirements, you MUST place all of your React components into one file, app.jsx. Link your transpiled component file from __`index.html`__. __DO NOT USE WEBPACK__

For ease of development, be sure to set Babel to watch for changes in your __`app.js`__ file to recompile those changes immediately. Additionally, be sure to use nodemon to watch for changes in server.js.

The homepage of your application should have a __`Checkout`__ button, which when clicked, takes the user to the first of several forms. We'll call the forms F1, F2, F3.
  * F1 collects name, email, and password for account creation.
  * F2 collects ship to address (line 1, line 2, city, state, zip code) and phone number.
  * F3 collects credit card #, expiry date, CVV, and billing zip code.

At each step, a __`Next`__ button allows the user to progress to the next step in the checkout process. The final step is a confirmation page which summarizes the data collected in the prior three steps. This page contains a __`Purchase`__ button that completes the purchase. When the purchase is complete, the user is returned to the homepage.

No actual shopping cart or products are necessary; you are modeling the checkout process only.

Every run through the checkout process (each time __`Checkout`__ is clicked) creates a new record in your server's database, and each step in the checkout process saves its piece of the data to that record (the data is saved when __`Next`__ is clicked).

Use the coding best practices you learned previously to ensure a clear separation of concerns with well-defined interfaces.

If you get stuck or are not sure how to proceed, you may look at the [hints file](#hints-multistep-checkout-experience) for this challenge to help you along.

# Hints: Tic Tac Toe #
## Topics: ##
The titles for each hint topic is listed below. Before you start the challenge, review this list of hint titles so that if you get stuck, you know what hints are available to you.
  * Basic File Setup
  * Initial Board Setup
  * Event Listener Not Working
  * Alternate between X and O
  * Implement the rules of Tic Tac Toe
  * Resetting the Game
  * Separation of Concerns
 
If you are looking at these hints, it means you are struggling to meet the basic requirements. Below is a process you can follow to achieve the goals of the basic requirements. The hints are organized in a way that lets you ignore hints not related to your current step.

Your goal is to use native DOM methods, but if you are struggling with those methods, you may switch to using jQuery methods. Remember, jQuery methods are simply an abstraction to the native DOM methods (i.e. they rely on the DOM methods to do their work, but offer a simpler interface to the developer).

### Basic File Setup ###
  * Add __`html`__, __`head`__ and __`body`__ tags to your HTML file.
  * Add a __`script`__ tag to load the __`app.js`__ file.
  * Verify it's all working by putting a single __`console.log`__ statement into __`app.js`__ -- you should see your message in the browser's console after loading the HTML page.

### Initial Board Setup ###
  * Within __`index.html`__ make a 3x3 table
  * Inside __`app.js`__, add a click event listener for each square on the board. When a square is clicked, add an X to that square.
 
### Event Listener Not Working ###
  * It's best to place the script tag for your app.js file just before the closing tag of your body (at the end of your index.html file) with all of your HTML above the script tag.
  * A better approach is to listen for a DOM-Ready event and only add event listeners for the board when this event fires.

### Alternate between X and O ###
   * Instead of placing an X each time the board is clicked, create a variable that keeps track of which player's turn is next. A boolean works but other options work too.
   * After you place an X or O, swap the state of this variable for the next play.

### Implement the rules of Tic Tac Toe ###
  * Before placing an X or O, ensure the clicked board square is empty. If the position is already occupied, don't place an X or O and do not move on to the next player's turn.
  * After each play, look for 3 in a row, either diagonally, horizontally and vertically. Also be sure to check to see if the board is full.
  * If either condition is met, display a message and do not allow any additional plays.

### Resetting the Game ###
  * Add a button in __`index.html`__ and a corresponding event listener inside __`app.js`__. When clicked, reset the state of the player (X vs. O) and clear the board. Don't forget to clear the message too.

### Separation of Concerns ###
  * Don't rely on the DOM to tell you if a square is occupied. Rather, use an object to track which player is where and ask that object if the next play is possible (the next play is being considered each time a click event fires on one of the squares). When you attempt to make a play, the function should report if the play was allowed.
  * Don't modify the player turn inside the event handler. Rather, store this state in an object that encapsulates state and behavior (toggling player turn) and invoke that function before switching player turns. Use the information from the previous step to determine the appropriate course of action.
  * Don't manipulate the DOM inside the event handler. Instead, write a function that places an X or O at a specific location and call that function from the event handler if the play is allowed. Obtain the appropriate value (X vs. O) from the object that is tracking player turns.

# Hints: CSV Report Generator #
## Topics: ##
The titles for each hint topic is listed below. Before you start the challenge, review this list of hint titles so that if you get stuck, you know what hints are available to you.
  * Starting a Node Project: __`package.json`__
  * Serving up __`index.html`__ and Assets
  * HTML Forms
  * Submitting Form Data using the Default Action
  * Server Responses based on Form Submission
  * Submitting Data via AJAX
  * Preventing Page Reload
  * Receiving Data as a Result of an AJAX Request

If you are looking at these hints, it means you are struggling to meet the basic requirements. Below is a process you can follow to achieve the goals of the basic requirements. The hints are organized in a way that lets you ignore hints not related to your current step.

### Starting a Node Project: package.json ###
Run __`npm init`__ to create a __`package.json`__ file. You should create a __`package.json`__ for almost every project you work.

Then install Express using: __`npm install express`__. This automatically adds Express to the dependencies list in your __`package.json`__ file.

[See ExpressJS docs](https://expressjs.com/en/starter/installing.html)

### Serving up `index.html` and Assets ###
Inside your server file, you can simply point express to your __`client`__ folder, and it will automatically start serving up those files. The files in this folder are typically called static assets. It is a convention for this folder to be named __`public`__ in your project, but express doesn't care which name you use.

__`app.use(express.static('client')`__

By default, Express will look for a file called __`index.html`__ and serve that file whenever you browse to the root (/) route.

### HTML Forms ###
The minimal HTML form elements are __`<form>`__ with __`<input type="submit" value="Submit">`__ button. Beyond this minimum, you can add any other input elements as needed. Once submit is clicked, the browser's default action is to perform a get operation using the serialized form data.

### Submitting Form Data using the Default Action ###
If you have configured your __`<form>`__ to have a method and action attribute, when submit is clicked, the browser will automatically submit the form data to the server at the specified url using the specified method. AJAX is not necessary. Typically the method is configured as __`POST`__ and the action is set to whatever route is configured in your express server to handle the report submission.

For example:
```
Express Route: `app.post('/upload_json', (req, res) => { ... })`
HTML Form: `<form method="POST" action="/upload_json"></form>`
```

### Server Responses based on Form Submission ###
The server must always respond to incoming HTTP requests and a POST request is no different. Upon processing the JSON Data, the server can respond with another page that contains both the form and the CSV report. This will require you to dynamically insert the result of the data processing step into the HTML of the response. This is exactly the same idea as "templates" (that you used on the client during various sprints), except that the template is rendered on the server before or as a part of __`res.end()`__.

### Submitting Data via AJAX ###
In your client code, you can initiate an AJAX request to a URL on your server. The URL and METHOD used in the AJAX call must match what is defined in your express server. The data you will submit should come from the __`textarea`__. The AJAX request is typicall initiated as part of the submit event (see next hint).

For example:
```
Express Route: `app.post('/upload_json', (req, res) => { ... })`
AJAX Method: `$.ajax({method: 'POST', url: '/upload_json', ... })`
```
Note: In the process of refactoring to AJAX, the default browser action is likely still triggered, which is causing the page to refresh. Be sure to disable this. If you are unclear on how to do so, read the next hint.

### Preventing Page Reload ###
To prevent the default action of a browser for HTML form submission, you can add an event handler to the form submit event and ask the browser to prevent its default operation. This is most easily accomplished via jQuery:
```
$('form').on('submit', function(e){
  e.preventDefault();
  // ... more event handler code here
});
```

### Receiving Data as a Result of an AJAX Request ###
When the server is done processing, the function __`response.send`__ should be invoked with the result of that process. This is done from your within your Express route handler. Whatever the server responds with is what is supplied to the success callback of the AJAX request in the browser. You can then use this result to convert into HTML (using a template) and then inserting the HTML into the DOM.

# Hints: Multistep Checkout Experience #
## Topics: ##
The titles for each hint topic is listed below. Before you start the challenge, review this list of hint titles so that if you get stuck, you know what hints are available to you.
  * Installing and Running Babel
  * Serving files from Express
  * Installing and Using React
  * Loading JS files into your __`index.html`__ and in what order!?
  * Testing

If you are looking at these hints, it means you are struggling to meet the basic requirements. Below is a process you can follow to achieve the goals of the basic requirements. The hints are organized in a way that lets you ignore hints not related to your current step.

### Installing and Running Babel ###
The __`babel`__ command should be installed locally:
```
    npm install @babel/cli @babel/core @babel/preset-react
```

This allows you to run the babel command to turn JSX files into JS files. Please look at the Babel docs to see what each of these dependencies do

P.S. Note that tools like Babel are constantly changing. When major changes are made, existing configuration and setup may have to be updated for the tool to function properly. These hints had to be updated to accommodate the Babel 6.x to Babel 7.x update. This is why using the docs is so important, and why following tutorials can sometimes be a detriment (as this hint was when the Babel update was still fresh).

To transpile your React components, you'll need to tell Babel where to look for the source JSX files (__`client`__ directory) and where to put the transpiled JS files (__`public`__ directory). You can use a command like this:

__`./node_modules/.bin/babel client --out-dir public --presets @babel/preset-react --source-maps inline`__

Note: it is recommended that to make this an npm script by placing it in your __`package.json`__ so you don't have remember it or look here each time. Additionally, you can add the __`--watch flag`__ to tell Babel to keep transpiling on every change.

Remember that you can only load transpiled files into your browser so be sure to link your transpiled files (__`app.js`__ not __`app.jsx`__) from __`index.html`__.

Express will automatically serve up any files located in a folder of your choosing. This hint is written with the expectation that you'll use the __`public`__ folder for this purpose (this is where babel is placing the transpiled file).

### Serving files from Express ###
Similar to the hint in challenge #2, you can use __`express.static`__ to tell Express where to look for files to serve up to the browser. The convention is to serve client files from the __`public`__ folder, like so:
```
    app.use(express.static('public')
```

By default, Express will look for a file called __`index.html`__ and serve that file whenever you browse to the root (/) route.

### Installing and Using React ###
The easiest way to start using React is to load it from a CDN from within your __`index.html`__ file, like so:
```
    <script crossorigin src="https://unpkg.com/react@16/umd/react.development.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>
```

An alternative (and recommended) approach for this challenge is to download the files, __`react-dom.development.js__` and __`react.development.js`__ from here  and place them directly into your public folder.

To start building your own React components, include them in your JSX file (__`app.jsx`__). To then use your own React components inside your browser, you can either load them into the browser with __`webpack`__ (not allowed for basic requirements), or by directly including your Babel transpiled files (__`app.js`__) into your __`index.html`__ file.

### Loading JS files into your index.html and in what order!? ###
When specifying the __`<script>`__ tags in your __`index.html`__ file, it's vital that you list the __`<script>`__ tags in the correct order. The browser executes the scripts in the order they are specified inside __`index.html`__. If you try and load app.js before you load react, your app will fail to load.

You can figure out the load order by looking at the dependencies for each js file. For example, __`app.js`__ requires react-dom, therefore react-dom must appear before __`app.js`__. And __`react-dom`__ requires __`react`__ therefore react must appear before __`react-dom`__.
```
<script src="react.development.js"></script>
<script src="react-dom.development.js"></script>
<script src="app.js"></script>
```

