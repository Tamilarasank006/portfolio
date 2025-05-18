import tam from "/tam.jpg"


function Home() {
  return (
    <div className="flex flex-wrap lg:flex-wrap-reverse my- lg:my-20">
      <div className="w-full lg:w-1/2">
        <div className="flex justify-center ">
          <img src={tam} alt="it's me" className="w-60 lg:w-100"></img>
        </div>
      </div>
      <div className="w-full lg:w-1/2">
        <div className="mt-5 lg:mt-30 flex flex-col items-center lg:items-start">
          <h1 className="text-6xl lg:text-7xl">Tamilarasan</h1>
          <span className="text-3xl mt-2  bg-gradient-to-r from-violet-500 to-pink-500 text-transparent bg-clip-text">
            Frontend Developer
          </span>
          <p className="mt-2 mb-5 font-serif text-gray-500 w-100 lg:w-120 ">
            I'm passionate frontend developer with a knack for crafting robust
            and scalable web application.I have honed my skills in front-end
            technologies like React
          </p>
          <a
            href="Tamilarasan-Resume.pdf"
            download="Tamilarasan-Resume.pdf"
            className="text-black bg-white px-4 py-2 mb-10 rounded-md hover:bg-gray-500 transition"
          >
            resume
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
