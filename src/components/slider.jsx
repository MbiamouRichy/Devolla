import { ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import img1 from "../assets/1.jpg";
import img10 from "../assets/10.jpg";
import img2 from "../assets/2.jpg";
import img3 from "../assets/3.jpg";
import img4 from "../assets/4.jpg";
import img5 from "../assets/5.jpg";
import img6 from "../assets/6.jpg";
import img7 from "../assets/7.jpg";
import img8 from "../assets/8.jpg";
import img9 from "../assets/9.jpg";

let slides = [
  { img: img1 },
  { img: img2 },
  { img: img3 },
  { img: img4 },
  { img: img5 },
  { img: img6 },
  { img: img7 },
  { img: img8 },
  { img: img9 },
  { img: img10 },
];
// eslint-disable-next-line react/prop-types
export default function Slider({ style, styleNav }) {
  let container = useRef(null);
  useEffect(() => {
    container.current.style.transform = "translateX(0)";
  }, [style]);

  const [position, setPosition] = useState({ x: 0, y: 0 });

  let [actifSlide, setActifSlide] = useState(0);
  const handleClick = () => {
    setActifSlide(actifSlide + 1);
    if (actifSlide >= slides.length - 1) {
      setActifSlide(0);
    }
  };

  const handleMouseMove = (event) => {
    setPosition({ x: event.clientX, y: event.clientY });
  };
  return (
    <>
      {/* slider */}

      <div
        style={{
          top: `${position.y - 20}px`,
          left: `${position.x - 20}px`,
        }}
        onClick={() => handleClick()}
        className={
          "dark:bg-[#1b1b1f] hidden transition-all cursor-pointer bg-white rounded-full p-2 z-20 dark:border-[#fff] fixed top-0 left-0 lg:" +
          styleNav
        }
      >
        {" "}
        <ArrowRight className="h-8 w-8 dark:text-white"></ArrowRight>
      </div>

      <div
        ref={container}
        onMouseMove={handleMouseMove}
        style={{ transform: `translateX(${actifSlide * -1}00%)` }}
        className={style}
      >
        {" "}
        {slides.map((slide, idx) => (
          <img
            className={`w-full h-hull object-cover rounded-[20px] translate-x-[${
              idx * -1
            }00%]`}
            src={slide.img}
            key={idx}
          />
        ))}
      </div>
    </>
  );
}
