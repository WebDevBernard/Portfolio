export const projects = [
  {
    id: "m1",
    title: "Mythic+ Player Count",
    image: "/docs/raiderio.png",
    description: [
      "A graph of player count in World of Warcraft Mythic+ dungeons. Uses AWS Lambda / Eventbridge to automate calling a different API endpoint.",
      "I am a fan of World of Warcraft so I wanted to create an app that could track some useful ingame data.  What this app does is it calls RaiderIO API and gets a pageCount (a rankings of all characters who have completed a mythic+ dungeon).  The main challenge in making this app is that every week there is a different API endpoint to call (twelve total).  I had to design some backend that would know which endpoint to call and save that data to a database.  And all of this would need to be automated using AWS serverless computing. The project is pretty simple, but it is the one I am most proud of working on. It was the first time I applied programming to solve an actual problem I had. It taught me a lot about working with objects and arrays, using the Date object, and writing a React custom hook.",
    ],
    github: "https://github.com/WebDevBernard/Raider.io-API-Data",
    link: "https://mythicplus.vercel.app/",
  },
  {
    id: "m2",
    title: "Twitter React",
    image: "/docs/twitter.png",
    description: [
      "A clone of Twitter home screen with Firebase authentication, Redux state management and responsive design with Tailwind CSS.",
      "This project started off as an attempt to remake another project I made earlier (in coding bootcamp).  I made it to practice things I learned from various React tutorials.  It is the Twitter home page with login.  Users can tweet, comment, like and delete a tweet (all saved to local storage).  I made the current page simply from flipping tabs between the real Twitter and then playing around with the CSS until I got a close enough match. Everytime I learned something new I would apply that knowledge to this project (such as adding Context and Redux).  One major difficulty I had making this app was figuring out how to center a modal.  I remember spending a whole day on this.  What I ended up doing was putting the modal inside another div and using Flexbox. Also, you might notice there is no backend for this project because I only wanted to practice React.",
    ],
    github: "https://github.com/WebDevBernard/Twitter-React",
    link: "https://twitterreact.vercel.app/",
  },
  {
    id: "m3",
    title: "Make My Day",
    image: "/docs/kanban.png",
    description: [
      "A full-stack PERN project management app and Kanban board for teams to manage projects and organize tasks.",
      "This was our final group project at coding bootcamp.  We had about two weeks to make it.  In our group of three, at that time, I was probably not the strongest at React.  We had learned it two weeks prior and I remember having difficulty understanding props and state.  It did not help that we did not know about Context API and used props drilling down five plus components.  But I did learn a lot working on this project, especially learning to read other peoples code. I also had a lot of fun with the styling.  On Github, you can read more about our planning on Figma, user stories and the ERD we made.",
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
      "This was a midterm project that I made as a group at coding bootcamp.  It uses external APIs (Wolfram Alpha, OMDB, Yelp, Google Books) to auto assign a keyword to a specific category.  The main difficulty of this app is figuring out which order to chain the API calls.  On top of that there is some logic using Regexp that assigns a keyword based on a specific verb.  We made this project as a group of three after five weeks into coding bootcamp.",
    ],
    github: "https://github.com/WebDevBernard/smart-to-do",
    link: "",
  },
];
