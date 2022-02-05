import React from "react";
import Layout from "../components/Layout";
import {
  FaBootstrap,
  FaCss3,
  FaDatabase,
  FaHtml5,
  FaJs,
  FaJsSquare,
  FaNodeJs,
  FaReact,
  FaUikit,
} from "react-icons/fa";

function Home() {
  return (
    <Layout>
      <div>
        <div className="bg-theme min-h-screen">
          <div
            className="grid bg-theme md:grid-cols-1 grid-cols-2 h-screen items-center border-4 md:border-0 border-white transform 
          mx-10 rotate-12 md:rotate-0"
          >
            <div className="h-1/2">
              <lottie-player
                src="https://assets5.lottiefiles.com/private_files/lf30_WdTEui.json"
                background="transparent"
                speed="1"
                loop
                autoplay
              ></lottie-player>
            </div>

            <div className="font-bold text-white md:px-5">
              <h1 className="text-6xl md:text-4xl">
                Hii , I am <b className="text-yellow-500"> RANJEET</b>
              </h1>
              <h1 className="text-2xl md:text-xl">
                FullStack <b className="text-red-500">Developer</b> |
                Competitive Programmer
              </h1>
            </div>
          </div>
        </div>
        <div className="mt-20">
          <h1 className="text-4xl my-8 text-blue-800 font-bold text-center">
            BEST FRIENDS
          </h1>
          <div className="grid md:grid-cols-1 grid-cols-3">
            <FaReact
              size={180}
              color="cyan"
              className="w-full text-center mt-20"
            />
            <FaNodeJs
              size={180}
              color="green"
              className="w-full text-center mt-20 animate-bounce"
            />
            <FaBootstrap
              size={180}
              color="blue"
              className="w-full text-center mt-20"
            />
            <FaCss3
              size={180}
              color="blue"
              className="w-full text-center mt-20 animate-bounce"
            />
            <FaHtml5
              size={180}
              color="orange"
              className="w-full text-center mt-20"
            />

            <FaJsSquare
              size={180}
              color="green"
              className="w-full text-center mt-20 animate-bounce"
            />
          </div>
        </div>

        <div className="my-20">
          <div className="text-center h-52 bg-primary">
            <h1 className="text-white font-bold text-4xl py-10">
              Yes , You Are Right... I Am Good In React
            </h1>
          </div>

          <div className="md:mx-5 mx-32 shadow-2xl -mt-20 bg-gray-50 rounded-lg hover:bg-gray-700 hover:text-white ">
            <div className="h-96">
              <lottie-player
                src="https://assets4.lottiefiles.com/datafiles/fab7172a9302d416bcdb8ac7e1c71123/data.json"
                background="transparent"
                speed="1"
                loop
                autoplay
              ></lottie-player>
            </div>
            <p className="text-xl my-5  font-semibold md:px-5 px-20 py-20">
              Yes i love React JS because React makes it painless to create
              interactive UIs. Design simple views for each state in your
              application, and React will efficiently update and render just the
              right components when your data changes.
            </p>
          </div>
        </div>

        <div className="my-20">
          <div className="text-center h-52 bg-red-500">
            <h1 className="text-white font-bold text-4xl py-10">TECH STACK</h1>
          </div>

          <div className="md:mx-5 mx-32 shadow-2xl -mt-20 bg-gray-50 rounded-lg hover:bg-gray-700 hover:text-white ">
            <div className="h-96">
              <lottie-player
                src="https://assets2.lottiefiles.com/packages/lf20_aptscmnx.json"
                background="transparent"
                speed="1"
                loop
                autoplay
              ></lottie-player>
            </div>
            <div className="grid md:grid-cols-1 grid-cols-3 p-5 md:text-center">
              <div>
                <h1 className="font-bold text-xl">Front End</h1>
                <hr />
                <p className="mt-2 font-bold">HTML / CSS</p>
                <p className="mt-2 font-bold">React</p>
                <p className="mt-2 font-bold">Javascript</p>
                <p className="mt-2 font-bold md:mb-2">Redux</p>
              </div>

              <div className="text-center">
                <h1 className="font-bold text-xl">UI / UX</h1>
                <hr />
                <p className="mt-2 font-bold">Bootstrap</p>
                <p className="mt-2 font-bold">Tailwind</p>
                <p className="mt-2 font-bold">Ant Design</p>
                <p className="mt-2 font-bold md:mb-2">Material UI</p>
              </div>

              <div className="text-right">
                <h1 className="font-bold text-xl md:text-center">
                  Backend and Databases
                </h1>
                <hr />
                <p className="mt-2 font-bold md:text-center text-right">
                  Node JS
                </p>
                <p className="mt-2 font-bold md:text-center text-right">
                  Express JS
                </p>
                <p className="mt-2 font-bold md:text-center text-right">
                  Mongodb
                </p>
                <p className="mt-2 font-bold md:text-center text-right">
                  Mysql
                </p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h1 className="text-gray-500 text-4xl text-center font-bold">
            Who Is Ranjeet ?
          </h1>

          <div className="h-screen relative text-gray-800">
            <div className="h-full">
              <lottie-player
                src="https://assets1.lottiefiles.com/packages/lf20_gja1z1ru.json"
                background="transparent"
                speed="1"
                loop
                autoplay
              ></lottie-player>
            </div>

            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <h1 className="text-2xl font-semibold">
                Welcome ,
                <pre className="text-xl my-5 md:text-sm font-mont">
                  {JSON.stringify(
                    {
                      name: "Ranjeet Hinge",
                      role: "Student",
                      degree: "Pursuing B.E (IT)",
                      age: "21",
                      country: "India",
                    },
                    null,
                    2
                  )}
                </pre>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Home;
