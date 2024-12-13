import React from "react";

const CurrentWork = () => {
  const currentLearning = [
    {
      title: "Machine Learning (ML)",
      description:
        "Exploring supervised and unsupervised learning algorithms, focusing on real-world implementations and optimization techniques.",
    },
    {
      title: "Deep Learning (DL)",
      description:
        "Learning neural network architectures like CNNs and RNNs, with an emphasis on building models for image and sequence data.",
    },
    {
      title: "Natural Language Processing (NLP)",
      description:
        "Diving into NLP techniques like sentiment analysis, language modeling, and text generation using libraries such as NLTK and spaCy.",
    },{
      title: "Generative AI (GenAI)",
      description:
        "Studying advanced generative models like GANs and Transformer-based architectures (e.g., GPT) for creative and practical applications.",
    }
  ];

  const goals = [
    "Collaborate on cutting-edge projects to solve real-world problems using AI.",
    "Develop hands-on expertise by building custom ML/NLP models.",
    "Publish my work or projects on platforms like GitHub and Kaggle.",
  ];

  return (
    <section className="section" id="current-work">
      <div className="container">
        <h2 className="headline-2 mb-8 reveal-up">What I'm Currently Working On</h2>
        <div className="grid gap-x-4 gap-y-5 grid-cols-1 md:grid-cols-2">
          {currentLearning.map((topic, index) => (
            <div
              key={index}
              className="rounded-2xl p-4 hover:bg-zinc-700/50 active:bg-zinc-700/60 ring-1 
        ring-inset ring-zinc-50/5 transition-colors reveal-up"
            >
              <h3 className="title-1 mb-3">{topic.title}</h3>
              <p className="text-zinc-400 mb-3">{topic.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 p-4 rounded-2xl bg-zinc-800/70">
          <h3 className="title-1 mb-3">My Current Goals</h3>
          <ul className="list-disc pl-5  text-zinc-400">
            {goals.map((goal, index) => (
              <li key={index} className="mb-2">
                {goal}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default CurrentWork;
