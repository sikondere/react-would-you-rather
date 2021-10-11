# Would-You-Rather Project

This is an updated read me file for the Would-You-Rather Project. It contains a decription of
the updated application fle structure. It also includes descriptions of the new React
components that were added to the application.

## Installation and launch instructions

This application was created with create-react-app.
To run the application, execute the following commands in the following order
from the application root directory:

* install all project dependencies with `npm install`
* start the application with `npm start`

## Project structure

This is a directory tree for the application.

```bash
├── README.md - This file.
├── package.json # npm package manager file. It's unlikely that you'll need to modify this.
├── public
│   ├── favicon.ico # React Icon, You may change if you wish.
│   └── index.html # DO NOT MODIFY
└── src
    ├── App.css # Styles for your app. Feel free to customize this as you desire.
    ├── App.js # This is the root of your app. Contains static HTML right now.
    ├──data
    │   ├──DATA.js # A JavaScript API for the provided Udacity backend. Instructions for the methods are below.
    ├── components
    │   ├── App.js
    │   ├── ErrorPage.js # displays a page with a 404 page not found error
    │   ├── Home.js # displays lists of unanswered and answered polls
    │   ├── LeaderBoard.js # list of users ordered by number of questions asked and answered
    │   ├── Login.js # application login page
    │   ├── Nav.js # navigation menu for the application
    │   ├── NewPoll.js #  component to create a new question
    │   ├── PollDetails.js # displays detail of a poll
    │   ├── PollsAnswered.js # list of answered questions by logged in user
    │   └── PollsUnAnswered.js # list of unanswered questions for the logged in user
    ├── index.css # Global styles. You probably won't need to change anything here.
    └── index.js # You should not need to modify this file. It is used for DOM rendering only.
    ├── actions # actions and action creators
    │     ├── authuser.js
    │     ├── questions.js
    │     ├── shared.js
    │     ├── users.js
    ├── middleware
    │     ├── index.js
    │     ├── logger.js
    ├── reducers # reducers
    │     ├── authedUser.js
    │     ├── index.js
    │     ├── questions.js
    │     ├── users.js
```

## Custom React Components

### App

This is the main application component.

### ErrorPage

A component to show a 404 page not found error when a user tries to access
a poll's detail page by tying the question id directly in the url.

### Home

Component that displays answered and unanswered polls and allows the user to
alternate between viewing the two.

### LeaderBoard

Component showing users sorted in descending order based on the sum of questions
they have asked and answered.

### LogIn

Component with a dropdown list of existing users. Select a user and click the submit button
to login to the application.

### Nav

A component that provides navigation functionality to enable a user traverse
different parts of the application.

### NewPoll

A component that provides a user with two text boxes to enter each of the 2 options
for each question and save them to the backend.

### PollDetails

A component that shows the details of a selected poll. Either a form for a user
to select an option if they had not answered  the question or a summary of the question
if it already been answered.

### PollsAnswered

A list of all answered questions that is displayed on the home page, ordred by date / time
created.

### PollsUnAnswered

A list of all unanswered questions that is displayed on the home page, ordred by date / time
created.

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).
