# Ima Miru


## Project Description 

Ima Miru (translates to "watch now") is an application where users can browse various anime shows and gather details on them. Users who sign up will be able to add a new show to the list of shows that are currently on the app. Users will also be able to save shows of interest in a section called Watchlist. Watchlist will display the shows that the user has saved as a reminder to check them out in the future.

## Team Expectations

[Team expectations](https://docs.google.com/document/d/1-BP6pJGGFY257Gr6nUtwKtcV-lZshNnJbscVe1zi6fA/edit?usp=sharing)

## Visual

https://xd.adobe.com/view/12f54b28-3956-4d8e-8a20-6ec7453fbc7f-47a6/


## Schema

``` 
const Show = new Schema(
  {
    title: { type: String, required: true },
    duration: { type: String, required: true },
    plot: { type: String, required: true },
    imgURL: { type: String, required: true }
  },
  { timestamps: true }
)
const User = new Schema(
  {
    username: { type: String, required: true },
    email: { type: String, required: true },
    isAdmin: {trype: String, required: true},
    password_digest: { type: String, required: true }
  },
  { timestamps: true }
)
```

## Project Schedule

| Day      | Deliverable                                | Status   |
| -------- | ------------------------------------------ | -------- |
| April 1  | Proposal / Design      | Complete |
| April 2  | Back-end with full CRUD/ Authentication | Complete |
| April 3 - 4  |  Discuss Briefly          | Complete |
| April 5   | Finish Back-end, Link to Front-end       | Complete |
| April 6   | Finish Front-End / CSS / MVP DONE                      | Incomplete |
| April 7   | Finish CSS / Post MVP                            | Incomplete |
| April 8 | Post MVP / Final touches 12pm EST                   | Incomplete |
| April 9  | Presentations                              | Incomplete |


## Team 

Irma Leandre, Andri Rafti, Nyheim Hunter, Jordan Montero (Git Czar)

### Personal Strengths
Jordan (Organizer): CSS, React
Andri (Clean Up): JS, React
Irma (Detail Oriented): JS, React, CSS
Nyheim (Time Stickler) : JS, React


### Personal Challenges
Jordan: Javascript, back-end understanding
Andri: CSS, back-end understanding
Irma: Back-end understanding
Nyheim: Back-end understanding, Authentication 



## Component Diagram

[Component Hierarchy](https://whimsical.com/anime-app-HD2Nfou3HbiM3ggBuLpDpH)

## MVP

- Teamwork
- React Client (Front End) w/ at least 6 components ✔️
- Deploy back end to Heroku ✔️
- Server Back End with full CRUD ✔️
- Authentication ✔️
- Deploy front end to Netlify
- Styled with CSS (Flexbox and Grid)
- Media Queries for desktop and mobile
- Linting

## Post MVP

- Watchlist screen / Add to Watchlist button
- Sorting 
