import { useEffect, useState } from "react";
import photo1 from "../../public/photo1.jpg";
import photo2 from "../../public/photo2.jpg";
import photo3 from "../../public/photo3.jpg";
import About from "../components/About.jsx"
const Carousel = () => {
  const navigateToMap = () => {
    window.location.href = "https://maps.app.goo.gl/St3TabSkzY6cAzX98";
  };

  const [slide, setSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSlide((prevSlide) => (prevSlide + 1) % 3);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const slides = [
    {
      type: "image",
      content: <img src={photo1} alt="photo1" className="w-full h-[40rem] " />,
    },
    {
      type: "image",
      content: (
        <div className="relative w-full h-[40rem]">
        <img src={photo2} alt="photo2" className="w-full h-full  absolute" />
        {/* <div className="flex justify-center items-center w-full h-full absolute">
          <img src={logo} alt="logo" className="w-auto h-auto" />
        </div> */}
      </div>
      
      ),
    },
    {
      type: "image",
      content: <img src={photo3} alt="photo3" className="w-full h-[40rem]" />,
    },
  ];

  return (
    <div className="">
      <div className="">
        <div className="text-center">
          <h2 className="font-bold text-2xl">{slides[slide].title}</h2>
          <p>{slides[slide].content}</p>
        </div>
      </div>
      <div className="bg-zinc-700 h-60  text-center flex gap-x-52 justify-center items-center m-auto text-white">
        <div>
          <p className="font-bold font-serif text-xl mb-4">Address</p>
          <p>Nikol, Naroda</p>
          <button
            onClick={navigateToMap}
            className="p-3 mt-4 bg-orange-700 font-mono"
          >
            Directions
          </button>
        </div>
        <div className="w-40">
          <p className="font-bold font-serif text-xl mb-4">Hours</p>
          <p>Sunday - Thursday 4:30pm - 10pm</p>
          <p>Friday & Saturday 4:30pm - 11pm</p>
        </div>
        <div>
          <p className="font-bold font-serif text-xl mb-4">Contact</p>
          <p>9773419660</p>
          <p>chavda@gmail.com</p>
        </div>
      </div>
      <About/>
    </div>
  );
};

export default Carousel;
