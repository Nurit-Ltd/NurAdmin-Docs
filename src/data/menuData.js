export const menus = [
  {
    id: 1,
    emoji: "👋",
    label: "Introduction",
    link: "/",
  },
  {
    id: 2,
    emoji: "🚀",
    label: "Installation",
    link: "/installation",
    submenus: [
      { label: "HTML Version", link: "#section1" },
      { label: "React Version", link: "#section2" },
      { label: "Next.js Version", link: "#section3" },
      { label: "Vue.js Version", link: "#section4" },
    ],
  },
  {
    id: 3,
    emoji: "🥞",
    label: "Components",
    link: "/components",
    submenus: [
      { img: "🌐", label: "HTML Components", link: "/components/html-components" },
      { img: "💎", label: "React Components", link: "/components/react-components" },
      { img: "🔥", label: "Next.js Components", link: "/components/next-components" },
      { img: "🌳", label: "Vue.js Components", link: "/components/vue-components" },
    ],
  },
  {
    id: 4,
    emoji: "💅",
    label: "Customization",
    link: "/customization",
  },
  {
    id: 5,
    emoji: "✨",
    label: "Credits and Resources",
    link: "/credit-resources",
  },
  {
    id: 6,
    emoji: "☑️",
    label: "Update Logs",
    link: "/update-log",
    submenus: [
      { label: "HTML", link: "/update-log/html" },
      { label: "React", link: "/update-log/react" },
      { label: "Next.js", link: "/update-log/next.js" },
      { label: "Vue.js", link: "/update-log/vue" },
    ],
  },
  {
    id: 7,
    emoji: "🔗",
    label: "Useful Links",
    link: "/use-full-links",
  },
  {
    id: 8,
    emoji: "🎯",
    label: "Back to Main Site",
    link: "https://tailadmin.com/",
  },

  //-----------------------------
];
