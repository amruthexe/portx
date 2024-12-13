import React from "react";
import logo from "../assets/logo.png";
const aboutItems = [
  {
    label: "Project done",
    number: 10,
  },
  {
    label: "Years of experience",
    number: 0.5,
  },
];
const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="bg-zinc-800/50 rounded-2xl p-7 md:p-12 reveal-up">
          <p className="text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[650ch]">
          Welcome! I'm Aluri Amruth Raj, a Full Stack Developer with a passion for building scalable and modern web applications.
           Combining technical proficiency with creative problem-solving,
           I turn your ideas into high-performing digital solutions that excel in functionality and design.
          </p>
          <div className="flex flex-wrap gap-4 md:gap-7">
            {aboutItems.map(({ label, number }, key) => {
              return (
                <div key={key}>
                  <div className="flex items-center md:mb-2">
                    <span className="text-2xl font-semibold md:text-4xl">
                      {number}
                    </span>
                    <span className="text-sky-400 font-semibold md:text-3xl">
                      +
                    </span>
                  </div>
                  <p className="text-sm text-zinc-400">{label}</p>
                </div>
              );
            })}
          </div>
          <img src={logo} alt="logo" width={40} className="ml-auto mt-3" />
        </div>
      </div>
    </section>
  );
};

export default About;
