export const projects = [
  {
    id: "m1",
    title: "Mythic+ Character Count",
    image: "/docs/raiderio.png",
    description: [
      "A graph of character count in World of Warcraft Mythic+ dungeons.",
      "I am a fan of World of Warcraft so I wanted to create an app that could track some useful ingame data.  What this app does is it calls Raider.io API and gets a pageCount (a rankings of all characters who have completed a mythic+ dungeon).  The main challenge in making this app is that every week there is a different endpoint to call (twelve total).  I had to create a backend that would know which endpoint to call and save that data to a database.  And I also wanted to have it all automated using AWS. The project is quite simple, but it is one that I am most proud of working on. It was the first time I applied programming to solve an actual problem I had. It taught me a lot about working with arrays and objects, using Lodash, using TypeScript with React, and writing a React custom hook.",
    ],
    github: "https://github.com/WebDevBernard/MythicPlus-CharacterCount",
    link: "https://mythicplus.vercel.app/",
  },
  {
    id: "m2",
    title: "Twitter Purple",
    image: "/docs/twitter.png",
    description: [
      "A pixel perfect clone of Twitter home screen built with React and Tailwind CSS.",
      "This project started off as an attempt to remake another project I made earlier (in coding bootcamp).  I made it to practice things I learned from various React tutorials.  It is the Twitter home page with login.  Users can tweet, comment, like and delete a tweet (all saved to local storage).  I made the current page simply from flipping tabs between the real Twitter and then playing around with the CSS until I got a close enough match. Everytime I learned something new I would apply that knowledge to this project (such as adding Redux and Firebase Authentication).",
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
      "This was my final group project at coding bootcamp.  We (group of three) had about two weeks to make it.  Similar to Trello, users can create a task, assign it to team members, drag and drop to any of the four categories (In Progress, Backlog, onHold, Completed).  On the project view, there is websocket for teams to message each other. The backend is Express.js with PostgreSQL database hosted on Heroku.  On Github, you can read more about our planning on Figma, user stories and the ERD we made.",
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
      "This was a midterm project that I made as a group at coding bootcamp.  It uses external APIs (Wolfram Alpha, OMDB, Yelp, Google Books) to auto assign a keyword to a specific category.  The main difficulty of this app is figuring out which order to chain the API calls.  On top of that there is some logic using Regexp that match a keyword based on a specific verb.  We made this project as a group of three after five weeks into coding bootcamp.",
    ],
    github: "https://github.com/WebDevBernard/smart-to-do",
    link: "",
  },
];
