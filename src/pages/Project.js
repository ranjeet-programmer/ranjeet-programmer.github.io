import React from "react";
import Layout from "../components/Layout";
import projectsData from "../resources/projects";
function Project() {
  return (
    <Layout>
      <div className="mt-20">
        <div className="h-screen">
          <div className="h-3/4">
            <lottie-player
              src="https://assets9.lottiefiles.com/packages/lf20_ygiuluqn.json"
              background="transparent"
              speed="1"
              loop
              autoplay
            ></lottie-player>
          </div>
          <p className="font-semi-bold text-xl text-center font-bold">
            "Every Project is an opportunity to learn , to figure out problems
            and challenges , to invent and to reinvent"
          </p>
        </div>

        <div className="font-bold text-center bg-red-500 mx-20  p-20 text-white rounded-tl-full rounded-br-full md:mx-5">
          <h1 className="text-8xl md:text-3xl">THE GAME IS.... </h1>
          <h1 className="text-8xl md:text-3xl">CONSISTENCY</h1>
        </div>
      </div>

      <div className="grid md:grid-cols-1 grid-cols-3 mt-20 items-center justify-center gap-10 mx-20 md:mx-5">
        {projectsData.map((project) => {
          return (
            <div>
              <div className="p-10 border-2 text-center rounded-tr-2xl rounded-bl-2xl border-gray-400 relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-52"
                />

                <div className="absolute inset-0 flex items-center justify-center flex-col opacity-0 bg-black hover:opacity-80">
                  <h1 className="text-4xl text-white font-semibold">
                    {project.title}
                  </h1>
                  <button className="border-2 rounded border-white py-2 px-5 mt-5 text-white hover:bg-green-500">
                    DEMO
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Layout>
  );
}

export default Project;
