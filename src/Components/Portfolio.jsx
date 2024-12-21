/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/lana1.jpeg";

const imageAltText = "Lana del Rey looking at camara casual";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Born to Die (Album)",
    description: "Lana's breakout album, blending orchestral pop, hip-hop influences, and cinematic storytelling.",
    url: "https://www.youtube.com/watch?v=Bag1gUxuU0g",
  },
  {
    title: "Norman Fucking Rockwell! (Album)",
    description: "A critically acclaimed album that explores themes of love, fame, and disillusionment in modern America.",
    url: "https://www.youtube.com/watch?v=5p6h4lqD83g",
  },
  {
    title: "Lust for Life (Album)",
    description: "An album featuring collaborations with artists like The Weeknd and Stevie Nicks, blending pop and indie rock influences.",
    url: "https://www.youtube.com/watch?v=8uH9ymvPFGs",
  },
  {
    title: "West Coast (Music Video)",
    description: "A standout music video that captures the essence of Lana’s cinematic aesthetic, mixing vintage visuals with modern sound.",
    url: "https://www.youtube.com/watch?v=YpI1pr1h_3M",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
