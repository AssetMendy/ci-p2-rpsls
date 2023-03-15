# Rock.Paper.Scissors.Lizard.Spock.

This project is a game inspired by a hand game "Rock Paper Scissors Lizard Spock", which is one of the variations of popular hand game "Rock Paper Scissors".
This game is designed for people who want to spent their time playing games and add a little challenge by adding more combination options compared to a standard "Rock Paper Scissors" game.


[Tap to open deployed website](https://assetmendy.github.io/ci-p2-rpsls/)

## Features

 - __"Rock.Paper.Scissors.Lizard.Spock." Logo__

    The logo for the website is made using the name of an actual game stylized in a way that makes user have an idea that this website is a game.

    ![Logo of the website](/documentation/logo.jpg)

- __Game Rules link__

    "Game Rules" link allows a user to learn about "Rock Paper Scissors Lizard Spock" from the creator himself leading them to another website.

    - As part of interactivity, the link is fully interactive with  users actions (i.e. Hovering over the link, clicking the link)
    - To give better experience learning the game rules, "Game Rules" is opened in a new tab, instead of opening the link in the same tab

    ![Image of "Game Rules" link](/documentation/game-rules-link.jpg)

- __Score section__

    Score Section provides a user a chance to see current score against the oponnent (bot), as well this section visually divides which side of game area is whose.

    ![Image of Score section showing "You" and "Computer" with current score result of "1 : 2"](/documentation/user-bot-score-area.jpg)

- __Gaming area__

    Gaming area is the main section where the game itself takes place. This section is dynamic and the section updates with the activity of the user.

    - This section consists of User, Answer and Opponent area
    - User area allows user to control and make decision when playing the game

    ![Image of Gaming Area](/documentation/gaming-area.jpg)

- __Answer area__

    Answer area allows a user to see result of the turn and shows who is the winner for the turn. As well, it gives comparative result of both hands chosen.

    ![Image of Answer area showing result of the turn of "LIZARD beats PAPER" and "You Win this Turn!"](/documentation/answer-area.jpg)

- __Opponent area__

    Opponent area allows a user to see what was the response of the opponent. Before the game started it displays a placeholder text to let user now that game will once user chooses the hand.

     ![Image of Opponent area showing a hand gesture "Paper"](/documentation/bot-area.jpg)

- __Reset Games button__

    Reset Game button allows a user to reset the game and score to start the game over. The button is fully interactive and adapts to changes a user makes.

    ![Image of Reset Game button](/documentation/game-reset-button.jpg)

### Features to implement

    - Allow to play against another user

## Examples of various game result scenarios:

__User Win:__

![Image showing result of User Win](/documentation/game-user-wins.jpg)

__User Loss:__

![Image showing result of User Loss](/documentation/game-bot-wins.jpg)

__Draw:__

![Image showing result of Draw](/documentation/game-draw.jpg)

## Testing

### __Validator Testing__

- HTML
    - No errors were returned when passing through the official [W3C validator](https://validator.w3.org/nu/?showsource=yes&doc=https%3A%2F%2Fassetmendy.github.io%2Fci-p2-rpsls%2F)
- CSS
    - No errors were found when passing through the official [(Jigsaw) validator](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fassetmendy.github.io%2Fci-p2-rpsls%2F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en)
- JavaScript
    - Only one error was found when passing through the official [Jshint validator](https://jshint.com/)
      - The following metrics were returned: 
      - There are 8 functions in this file.
      - Function with the largest signature take 2 arguments, while the median is 0.5.
      - Largest function has 23 statements in it, while the median is 7.
      - The most complex function has a cyclomatic complexity value of 31 while the median is 2.5.

### __Testing with Checklist__

- The website was tested for key functions using checklist:

    | Scenario                                          | Result |
    | -----                                             | ------ |
    | Page loads with no issues                         |   OK   |
    | "Game Rules" link works and opens in new tab      |   OK   |
    | Clicking any Hand gesture starts the game         |   OK   |
    | Answer area shows correct Hand chosen by User     |   OK   |
    | Answer area shows correct Hand chosen by Bot      |   OK   |
    | Answer area shows correct winner of the turn      |   OK   |
    | Score Section is updating, and values are correct |   OK   |
    | Opponent area is updated with correct image       |   OK   |
    | Reset button reset the game and Score section     |   OK   |



## Deployment

- The site was deployed to GitHub pages. The steps to deploy are as follows: 
  - In the GitHub repository, navigate to the Settings tab 
  - From the source section drop-down menu, select the Master Branch
  - Once the master branch has been selected, the page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment. 

The live link can be found here - https://assetmendy.github.io/ci-p2-rpsls/

## Credits

### Media

- Images used for hand gestures were taken from [here](https://www.pngwing.com/en/free-png-iiamd)

### Code

- A code for timeout methon was looked up from [here](https://developer.mozilla.org/en-US/docs/Web/API/setTimeout)
- A code for adding style to certain HTML elemenet was looked up from [here](https://www.w3schools.com/jsref/prop_html_style.asp)

### Content

- Game was invented by Sam Kass and Karen Bryla, all info about this game can be found [here](http://www.samkass.com/theories/RPSSL.html)