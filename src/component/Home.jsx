import tam from "/tam.jpg"
import resume from "/tamilarasan-Resume.pdf"

function Home() {
  return (
    <div className="flex flex-wrap lg:flex-wrap-reverse mx-auto lg:my-20">
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
          <p className="mt-2 mb-5 font-serif text-gray-500  w-2xs lg:w-120 ">
            I'm passionate frontend developer with a knack for crafting robust
            and scalable web application.I have honed my skills in front-end
            technologies like React
          </p>
          <a
            href={resume}
            download={resume}
            className="text-black bg-white px-4 py-2  rounded-md active:bg-blue-500 hover:bg-gray-500 transition"
          >
            resume
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
