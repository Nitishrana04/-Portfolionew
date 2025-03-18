import React from "react";
import "./MyWork.css";
import ecommerceImg from "./images/ecommerce.png.png";
import RecipeImg from "./images/recipe.png.png";
import TravelImg from "./images/travel.png";
const projects = [
  {
    id: 1,
    title: "E-Commerce Website",
    description: "A fully functional e-commerce site with React & Firebase.",
    link: "https://store2go.netlify.app/",
    image: ecommerceImg
  },
  {
    id: 2,
    title: "Indian Recipe Website",
    description: "A beautifully designed recipe website with React.",
    link: "https://indianrecipte.netlify.app/",
    image: RecipeImg
  },
  {
    id: 3,
    title: "Travel Advisor",
    description: "A travel website showing recommendations and locations.",
    link: "https://nitishrana04.github.io/traveladvisor/",
    image: TravelImg 
  }
];

function MyWork() {
  return (
    <section className="my-work">
      <h2>My Work</h2>
      <p>Here are some of my recent web development projects.</p>
      
      <div className="work-container">
        {projects.map((project) => (
          <div className="work-card" key={project.id}>
            <img 
              src={project.image} 
              alt={project.title} 
              className="project-image"
            />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} className="view-btn" target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default MyWork;
