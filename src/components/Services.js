import React from 'react'
import Title from '../components/Title'
import { FaCocktail,FaHiking,FaShuttleVan,FaBeer } from 'react-icons/fa';

export default class Services extends React.Component {
constructor(props) {
super(props);
this.state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "Free Cocktails",
        info:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero?"
      },
      {
        icon: <FaHiking />,
        title: "Endless Hiking",
        info:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero?"
      },
      {
        icon: <FaShuttleVan />,
        title: "Free Shuttle",
        info:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero?"
      },
      {
        icon: <FaBeer />,
        title: "Strongest Beer",
        info:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero?"
      }
    ]
  };
}

	render() {
		return (

<section className="services">
    <Title title='Services'/>

    <div className="services-center">
    
{this.state.services.map((service, index) => (
		<article key={index} className="service" >
			<span>{service.icon}</span>
			<h6>{service.title}</h6>
			<p>{service.info}</p>
		</article>
    ))}
        
    </div>
</section>
		)
	}
}