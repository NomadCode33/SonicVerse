import "../../css/home.css"
import BoxContainer from './BoxContainer';

const DemoArea = () => {
    const columns = [
        {
      id: 1,
      features: [
        {
          title: "Characters",
          link: "/characters",
          img: "img/blackbackground.png",
          description: "Explore heroes and villains across the Sonic universe.",
          buttonText: "View Characters",
        },
        {
          title: "Transformations",
          link: "",
          img: "img/blackbackground.png",
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam tempora sunt qui eveniet, est nisi.",
          buttonText: "View Transformations",
        },
        {
          title: "Zones",
          link: "",
          img: "img/blackbackground.png",
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam tempora sunt qui eveniet, est nisi.",
          buttonText: "View _____",
        },
      ],
    },
    {
      id: 2,
      features: [
        {
          title: "Songs",
          link: "",
          img: "img/blackbackground.png",
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam tempora sunt qui eveniet, est nisi.",
          buttonText: "View Songs",
        },
        {
          title: "Placeholder",
          link: "",
          img: "img/blackbackground.png",
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam tempora sunt qui eveniet, est nisi.",
          buttonText: "View ____",
        },
        {
          title: "Placeholder",
          link: "",
          img: "img/blackbackground.png",
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam tempora sunt qui eveniet, est nisi.",
          buttonText: "View ____",
        },
      ],
    },
    {
      id: 3,
      features: [
        {
          title: "Comics",
          link: "",
          img: "img/blackbackground.png",
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam tempora sunt qui eveniet, est nisi.",
          buttonText: "View ____",
        },
        {
          title: "Placeholder",
          link: "",
          img: "img/blackbackground.png",
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam tempora sunt qui eveniet, est nisi.",
          buttonText: "View ____",
        },
        {
          title: "Placeholder",
          link: "",
          img: "img/blackbackground.png",
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam tempora sunt qui eveniet, est nisi.",
          buttonText: "View ____",
        },
      ],
    },
    {
      id: 4,
      features: [
        {
          title: "Lore",
          link: "",
          img: "img/blackbackground.png",
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam tempora sunt qui eveniet, est nisi.",
          buttonText: "Explore Lore",
        },
        {
          title: "Placeholder",
          link: "",
          img: "img/blackbackground.png",
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam tempora sunt qui eveniet, est nisi.",
          buttonText: "View ____",
        },
        {
          title: "Placeholder",
          link: "",
          img: "img/blackbackground.png",
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam tempora sunt qui eveniet, est nisi.",
          buttonText: "View ____",
        },
      ],
    },
  ];



  return (
    <main className="demo-area clearfix">
        {columns.map((column) => (
            <BoxContainer key={column.id} features={column.features} />
        ))}
    </main>
  )
}

export default DemoArea

/*
The old way of doing it using map:
return (
    <main className="demo-area clearfix">
        {[1, 2, 3, 4].map((_, index) => (
            <BoxContainer key={index} />
        ))}
    </main>
  )

*/

