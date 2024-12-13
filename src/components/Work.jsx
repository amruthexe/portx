import React from "react";
import ProjectCard from "./ProjectCard";
import project1 from "../assets/pj1.jpg"
import project2 from "../assets/ride.png";

import project5 from "../assets/shopr.png";

// https://fullstack-youtube-like-webapp.vercel.app/

const Work = () => {
  const works = [
    {
      imgSrc: project5,
      title: "Ecommerce Shopr App",
      tags: ["nextjs", "tailwind", "sanity", "clerk"],
      projectLink: "",
      badge: "Upcoming",
    },
    {
      imgSrc: project1,
      title: " Franchise-Hub App",
      tags: ["react", "tailwind"],
      projectLink: "https://franchise-hub.vercel.app/",
      badge: "Pro",
    },
    {
      imgSrc: project2,
      title: "RideRentals",
      tags: ["react", "tailwind", "mongodb", "express"],
      projectLink: "https://ride-rentals.vercel.app/",
      badge: "Pro",
    }
  ];
  return (
    <section className="section" id="work">
      <div className="container">
        <h2 className="headline-2 mb-8 reveal-up">Projects Highlights</h2>
        <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
          {works.map(({ title, tags, imgSrc, projectLink, badge }, key) => (
            <ProjectCard
              title={title}
              tags={tags}
              imgSrc={imgSrc}
              projectLink={projectLink}
              key={key}
              badge={badge}
              classes="reveal-up"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
