import React from "react";

const Project = ({
  image,
  imageLabel,
  title,
  description,
  lists,
  technologies,
}) => {
  return (
    <div className="flex w-full justify-center gap-12 lg:gap-24 flex-col lg:flex-row">
      <img
        src={image}
        alt={imageLabel}
        className="w-9/10 lg:w-200 shadow-xl shadow-custom-light-blue self-center lg:self-auto"
      />
      <div className="flex flex-col w-full lg:w-2/5 gap-6">
        <h2 className="text-4xl text-custom-blue font-bold">{title}</h2>
        <p className="text-2xl">{description}</p>
        {lists && (
          <ul className="list-disc ml-8 text-2xl flex flex-col gap-4">
            {lists.map((list, index) => (
              <li key={index}>
                {list.name}
                <a
                  href={list.url}
                  className="break-all text-xl lg:text-2xl underline hover:text-custom-blue transition duration-400"
                >
                  {" "}
                  {list.url}
                </a>
              </li>
            ))}
          </ul>
        )}
        <div className="text-2xl flex flex-wrap gap-6 text-custom-blue">
          {technologies.map((tech, index) => (
            <p
              key={index}
              className="border-2 border-custom-blue px-4 py-1 rounded-xl"
            >
              {tech}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
