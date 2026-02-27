import "../../../../../css/sonic-hub/home.css"
import Feature from './Feature'

const BoxContainer = ({ features }) => {
  return (
    <section className="box-container">
      {features.map((feature, index) => (
        <Feature
          key = {index}
          title = {feature.title}
          link = {feature.link}
          img = {feature.img}
          altDesc = {feature.title}
          description = {feature.description}
          buttonText = {feature.buttonText}
        />
      ))}
    </section>
  );
}

export default BoxContainer

/*
The old way of doing it putting things into sections:
return (
    <section className="box-container">
        <Feature
            title="Characters"
            link=""
            img="img/blackbackground.png"
            altDesc=""
            description="Alakazam! The vast knowledge of ancient spells is in your hands to vanquish your enemies."
            buttonText="View Characters"
        />

        <Feature
            title="Transformations"
            link=""
            img="img/blackbackground.png"
            altDesc=""
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam tempora sunt qui eveniet, est nisi."
            buttonText="View Transformations"
        />

        <Feature
            title="Zones"
            link=""
            img="img/blackbackground.png"
            altDesc=""
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam tempora sunt qui eveniet, est nisi."
            buttonText="View Zones"
        />
    </section>
  )

*/