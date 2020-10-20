# GoalHero
_GoalHero is both a gaming and lifestyle mobile application._

GoalHero inspires users to set goals for themselves to achieve. When a user signs up for an account, they are given a hero character. They can use their hero to fight against a monster. They start off weak against a monster, so they need to level up to increase their damage. A user can level up their hero by completeing goals they set for themselves such as finishing a project, or running every day for a week. After a user uses their hero to defeat a monster, they will unlock a stronger hero. 

## How to Use GoalHero
After opening the application, either log in or sign up for a GoalHero account. Next, go to the GOALS page to start setting goals for yourself. You can set up to five goals for yourself at a time. You can then either choose to complete the goal, or remove it. Completing a goal will then level up your hero. Your hero starts at level 1. Each increase in level makes the hero stronger as they fight against a monster. 

You can also go into the HERO PROFILE page. This is where you see information for you as a user and your hero. Your user information will display your name and your current level. You hero information will show what hero you currently have and what is their current damage and health stats. To look at the different heroes, you can go to the HEROES page. This shows a list of all possible heroes. All heroes, except for the knight, will start off locked. Every time you defeat a monster, you will unlock another hero. You can then go to this page to select between any hero you unlocked. 

Lastly, you can go the PLAY page. Here is where you can play as your hero and attack a monster. You can move your hero left and right by tapping anywhere on the left or right side of the screen. You can make your hero jump by tapping on the top of the screen. You can attack the monster by tapping on the attack button on the lower right corner of the screen. 



## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. 

### Set-Up

Galacticode runs in a Node environment and requires a postgreSQL database named “goalHero”. You’ll also need to create a database for testing called “goalHero-testing.”

Fork and/or clone this repository to create your own local copy and follow the instructions below.

### Installation

Install dependencies for the project with

```
npm install
```

And run the seed file with

```
npm run seed
```

## Deployment
GoalHero is deployed on Heroku, and can be seen using Expo. Run expo using 

```
expo start
```

Once that is running, you can either open up the app using a simulator on your machine, or on your mobile device. To view the app on your mobile device, download the app Expo Client. You can then scan the QR code to view it on your phone. 


## Built With

Technology | Description
------------ | -------------
[React](https://reactjs.org/) | Used to build main components
[React-Redux](https://react-redux.js.org/) | Used to store state
[React Native](https://reactnative.dev/) | Used to build main components for mobile development 
[React Native Game Engine](https://github.com/bberak/react-native-game-engine/) | Used to create the game play
[Matter.js](https://brm.io/matter-js/) | Used to add physics into game 
[Expo.io](https://expo.io/) | Tool to build a mobile application
[Node.js](https://www.npmjs.com/) | Runtime environment and npm package manager
[Express](https://expressjs.com/) | The web framework used
[PostgreSQL](https://postgresapp.com/) | Relational database
[Sequelize](http://docs.sequelizejs.com/) | promise-based ORM 


## Authors

[Danielle Arquisola](https://github.com/daniellearquisola), [Kevin Forhan](https://github.com/kevinforhan), [Stephen Huang](https://github.com/orgs/GoalHero/people/stephen-huang-hash), [Shan Jiang](https://github.com/ericfish12)
