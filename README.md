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
[Build a CSV Report Generator]()

## Challenge 3: Multistep Checkout Experience ## 
[Build a Multistep Checkout Experience]()

## Challenge 4: Connect Four ## 
[Build a Connect Four game]()

# BONUS Challenges #
The challenges below are offered as bonus to really stretch the limits of your skills and thinking. Each challenge is progressively more difficult and offers fewer hints and guidelines.

## BONUS Challenge: Checkers ##
[Build a Checkers game]()

## BONUS Challenge: Battleship ##
[Build a Battleship game]()

# Challenge: Tic Tac Toe #
## Basic Requirements ##
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
