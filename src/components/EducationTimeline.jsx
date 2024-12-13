import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const educationData = [
  {
    year: "2022 - Present",
    title: "Bachelor of Information Technology",
    institution: "Bapatla Engineering College",
    description: "CGPA: 8.3",
  },
  {
    year: "2019 - 2022",
    title: "Diploma in Electrical and Electronics Engineering",
    institution: "Bapatla Engineering College",
    description: "Percentage: 87%",
  },
  {
    year: "2009 - 2019",
    title: "Schooling",
    institution: "Kendriya Vidyalaya Suryalanka",
    description: "Percentage: 75% (CBSE)",
  },
];

const EducationTimeline = () => {
  const timelineRef = useRef(null);

  useEffect(() => {
    const timelineItems = gsap.utils.toArray(".timeline-item");

    timelineItems.forEach((item, index) => {
      gsap.fromTo(
        item,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: item,
            start: "top 85%",
            end: "bottom 60%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  return (
    <section id="eduction" className="section bg-zinc-900 text-zinc-200 py-16">
      <div className="container">
        <h2 className="headline-2 mb-8 text-center">My Education Background</h2>
        <div className="relative timeline" ref={timelineRef}>
          <div className="absolute left-1/2 w-1  bg-zinc-700 h-full transform -translate-x-1/2"></div>
          <div className="space-y-12">
            {educationData.map((edu, index) => (
              <div
                key={index}
                className={`timeline-item flex flex-col lg:flex-row items-center lg:items-start relative`}
              >
                <div className="flex-shrink-0 w-24 text-center  text-zinc-400">
                  <p className="text-sm font-medium">{edu.year}</p>
                </div>
                <div className="relative w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center  z-10 lg:ml-6">
                  <div className="absolute w-full h-full bg-emerald-500 rounded-full animate-ping"></div>
                </div>
                <div className="bg-zinc-800  p-6 rounded-lg shadow-lg lg:ml-10 lg:w-1/2">
                  <h3 className="text-xl font-semibold mb-2 text-zinc-100">{edu.title}</h3>
                  <p className="text-sm font-medium text-zinc-400 mb-1">
                    {edu.institution}
                  </p>
                  <p className="text-sm text-zinc-400">{edu.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationTimeline;
