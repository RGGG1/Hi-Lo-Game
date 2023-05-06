![Tap Tap Monkey Logo](assets/images/aBananaYellow.png)<br>

Welcome to the read me for Tap Tap Monkey.<br>

This documents outlines the goals of the website and its functionality throughout.<br>

------
## Core Aims<br>

Tap Tap Monkey is intended to be a simple to play game, on all devices, where the user has to test their reaction skills by clicking randomly changing images of bananas and avoiding monkeys.<br>

The core aim of the site is to provide a simple game for people to enjoy while they have a few minutes to relax, for example when on the bus, waiting for an appointment etc.<br>

![Am I Responsive](assets/images/amIResponsive.png)<br>

The site is fully responsive across all devices and maintains good resizing and positioning throughout. It is also purposefully designed to fit on a mobile screen without need for scrolling.<br>

------
## Features

<strong>Navigation</strong><br>
There is no navigation menu. Instead, there is a straightforward progression for the user, broken into three stages: Start screen, game play, game over screen.<br>


<strong>Site Fonts</strong><br>
We use Sans Serif as our primary font throughout the site.<br>

<strong>Colors</strong><br> 
There is a constant colour structure throughout the site of Gold and Black. White is used ocassionally, for elements like audio control, and when buttons are hovered / clicked.<br>

<strong>Header</strong><br> 
The header shows the site title and also includes a selection of keywords related to games. It is clear who the site is targeted towards.<br>

<strong>Iconography</strong><br> 
Icons are used from: https://fontawesome.com<br>

We use a banana icon and monkey icon, each in two variations of black and white, or black and yellow.<br>

<strong>Animations</strong><br> 
Animation effects are used from: https://animate.style/<br>

We use a text animation to shake the Tap Tap Monkey title upon first load of the webpage.<br>

We use other animations in the game itself. If a user clicks a banana it shoots upward, if they click a monkey it shoots downward. This UX is intended to reenforce the main aim of the game - to click bananas, not monkeys.<br>

<strong>Sounds</strong><br>
Sound effects are from: https://pixabay.com/sound-effects/<br>

We use two audio files to further reenforce the UX of clicking bananas and monkeys.<br>

Bananas make a yippee sound, monkeys make a squeel sound.<br>


<strong>Start screen</strong><br> 
This section shows our animated title and gives a simple introduction to the game rules.<br>

There is also a Go Bananas button for users to commence playing.<br>

<strong>Gameplay</strong><br> 
The game uses a layout of 3 x 3 buttons. Each button is a randomised rotation of four images, two bananas, two monkeys. Users begin the game with a score of zero bananas and a score of 5 lives. If they click a banana image, their banana score increases and is displayed in a large yellow number at the top of the screen. If they click a monkey, their monkey lives score is reduced, shown in the red score at the bottom of the screen. The game ends when they have clicked five monkeys.
<br>

<strong>Game Over</strong><br> 
The game over screen shows the user how many bananas they collected.<br>

It also shows a play again button, which when clicked refreshes the whole site and therefore returns the scores to their original state.<br>


------
## Testing

I have tested the site across multiple devices of different sizes, and a variety of popular browsers. The site performs well across all.<br>

<strong>Responsiveness</strong><br> Confirmed across multiple devices.<br>

<strong>Buttons on all screens - including gameplay</strong><br> All are functional and easy to understand.<br>

<strong>Unfixed bugs</strong><br> I am having a problem toggling the mute button to different colours depending on its state.<br>

------
## Testing
![Lighthouse Score](assets/images/lighthouse.png)<br>

CSS - When we run it through the w3c validator we have multiple errors to resolve.<br>

HTML - When we run it through the w3c validator we have multiple errors to resolve.<br>

<strong>Accessibility</strong><br> We used google chrome's lighthouse tool and ranked as follows:<br>
    <strong>Performance:</strong> 38/100 (The main issue is the number of javascript funtions running. I need to try and run the same script for each button, instead of one each.)<br>
    <strong>Accessibility:</strong> 80/100 (The main issue appears to be with the labelling of the audio button. We use an icon instead of a text word, making it hard to understand for blind users. I need to fix that.)<br>
    <strong>Best Practices:</strong> 100/100<br>
    <strong>SEO:</strong> 100/100<br>

------
## Deployment

The site is deployed to Github pages, accessible via: https://rggg1.github.io/hi-lo-game<br>


The source files are available here: https://github.com/RGGG1/hi-lo-game<br>

## References
<br>
I used the following resources to find solutions to various parts of the game UI / UX. <br>

https://codepen.io/TajShireen/pen/LYyOzJL - title font effect
https://fontawesome.com/icons/banana?f=classic&s=duotone&pc=%23ffffff&sc=%23ffffff&po=1&so=0.6 - banana icon
https://fontawesome.com/icons/monkey?f=classic&s=solid&pc=%23ffff06 - Monkey icon
https://codepen.io/houssem93171714/pen/abZZEaz - for image transition effect
https://codepen.io/SitePoint/pen/zqVGQK - slider inside button effect
https://developer.mozilla.org/en-US/docs/Web/CSS/opacity - to fix opacity on slider images
https://codepen.io/dajreamdigital/pen/jvqKLX - hide button functionality
https://bobbyhadz.com/blog/javascript-hide-button-after-click - hide button functionality
https://stackoverflow.com/questions/12953928/immediate-play-sound-on-button-click-in-html-page - audio functionality
https://stackoverflow.com/questions/14044761/how-to-mute-all-sound-in-a-page-with-js - mute control