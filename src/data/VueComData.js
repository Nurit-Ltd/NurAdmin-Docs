import acc from '../assets/image/components/reactCom/accordion.webp'
import art from '../assets/image/components/reactCom/arts.webp'
import bread from '../assets/image/components/reactCom/bread.webp'

export const vueBreadCrumb =[
  {
    id:1,
    title: "Breadcrumb:",
    description: "You can add Breadcrumb to your Dashboard by using this Breadcrumb Component.",
    markText: "All you have to do is import it on the page you want to use and pass the required props to it.",
    formImg: bread
  },
]
export const vueArt =[
  {
    id:1,
    title: "Alerts:",
    description: "Alerts Components are used to show short messages to the user. You can use it to show warning, error, or success messages.",
    markText: "To use it just import it into the page you want to use show the message and render it.",
    formImg: art
  },
]
export const vueAccordion =[
  {
    id:1,
    title: "Accordion:",
    description: "Accordion components allow you to add functionality like FAQ.",
    markText: ["To add an FAQ to your project import the Accordion Component and pass the required props to it.","That’s it, you’ll have a beautifully looking FAQ section.",],
    formImg: acc
  },
]