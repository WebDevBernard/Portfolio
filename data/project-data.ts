interface Projects {
  id: string;
  title: string;
  image: string;
  description: string;
  github: string;
  link: string;
}

export const projects: Projects[] = [
  {
    id: "m1",
    title: "Mythic+ Player Count",
    image:
      "https://raw.githubusercontent.com/WebDevBernard/Portfolio/main/docs/raiderio.png",
    description:
      "An app that displays player count in World of Warcraft Mythic+ dungeons using automation with AWS.",
    github: "https://github.com/WebDevBernard/Raider.io-API-Data",
    link: "https://mythicplus.vercel.app/",
  },
  {
    id: "m2",
    title: "Twitter React",
    image:
      "https://raw.githubusercontent.com/WebDevBernard/Portfolio/main/docs/twitter.png",
    description:
      "A simple Twitter-like React app with Firebase authentication.",
    github: "https://github.com/WebDevBernard/Twitter-React",
    link: "https://twitterreact.vercel.app/",
  },
  {
    id: "m3",
    title: "Make My Day",
    image:
      "https://raw.githubusercontent.com/WebDevBernard/Portfolio/main/docs/kanban.png",
    description:
      "A project management app and Kanban board for teams to manage projects and organize tasks.",
    github: "https://github.com/WebDevBernard/MakeMyDay",
    link: "https://makemydaydemo.vercel.app/",
  },
  {
    id: "m4",
    title: "Smart To-Do",
    image:
      "https://raw.githubusercontent.com/WebDevBernard/Portfolio/main/docs/smart-to-do.png",
    description:
      "A smart to-do list that auto-organize tasks into a things to buy / eat / watch / read category.",
    github: "https://github.com/WebDevBernard/smart-to-do",
    link: "",
  },
];
