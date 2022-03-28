export const projects = [
  {
    id: "m1",
    title: "Mythic+ Run Count",
    image: "/docs/raiderio.png",
    description: [
      "A graph of character count in World of Warcraft Mythic+ dungeons.",
      "This is a project I made to share with the Reddit WoW community.  What this app does is it calls Raider.io API and returns a page count (a rankings of all characters who have completed a mythic+ dungeon).  The main challenge in making this app is that every week there is a different endpoint to call (twelve total).  I had to create a backend that would know which endpoint to call and save that data to a database. The API call would also need to be automated using AWS. Working on this project taught me a lot about using JS array methods (map, sort, filter, findIndex), and chaining Lodash functions (_.map, _.groupBy, _.sumBy).  I also learned to use TypeScript with React, and learn how to write my own React custom hook.",
    ],
    github: "https://github.com/WebDevBernard/MythicPlus-RunCount",
    link: "https://mythicplus.vercel.app/",
  },
  {
    id: "m2",
    title: "Twitter Purple",
    image: "/docs/twitter.png",
    description: [
      "A pixel perfect clone of Twitter home screen built with React and Tailwind CSS.",
      "This project started off as an attempt to remake another project I made earlier (at coding bootcamp).  Users can tweet, comment, like and delete a tweet (all saved to local storage).  I also added a login screen connected to Firebase.  I made the current page simply from flipping tabs between the real Twitter and then playing around with the CSS until I got a close enough match. Everytime I learned something new I would apply that knowledge to this project (such as adding Redux and Firebase Authentication).",
    ],
    github: "https://github.com/WebDevBernard/Twitter-Purple",
    link: "https://twitterpurple.vercel.app/",
  },
  {
    id: "m3",
    title: "Make My Day",
    image: "/docs/kanban.png",
    description: [
      "A full-stack PERN project management app and Kanban board for teams to manage projects and organize tasks.",
      "This was my final group project at coding bootcamp.  We (group of three) had about two weeks to make it.  Similar to Trello, users can create a task, assign it to team members, drag and drop to any of the four categories (In Progress, Backlog, onHold, Completed).  On the project view, there is websocket for teams to message each other. The backend is Express.js with PostgreSQL database hosted on Heroku.  On Github, you can read more about our planning on Figma, user stories and the ERD we made 😊.",
    ],
    github: "https://github.com/WebDevBernard/MakeMyDay",
    link: "https://makemydaydemo.vercel.app/",
  },
  {
    id: "m4",
    title: "Smart To-Do",
    image: "/docs/smart-to-do.png",
    description: [
      "A smart to-do list that uses API calls to auto-organize tasks into a things to buy / eat / watch / read category.",
      "This was a midterm project that I made as a group at coding bootcamp.  It uses external APIs (Wolfram Alpha, OMDB, Yelp, Google Books) to auto assign a keyword to a specific category.  The main difficulty of this app is deciding which API's to use and then figuring out which order to chain the API calls.  On top of that there is some logic using Regexp that matches a keyword based on a specific verb (buy, eat, watch, read).  We made this project as a group of three after five weeks into coding bootcamp.",
    ],
    github: "https://github.com/WebDevBernard/smart-to-do",
    link: "",
  },
];
