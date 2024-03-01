import {
  Calendar,
  Dog,
  HeartIcon,
  Maximize,
  Microwave,
  Minus,
  PlaneTakeoff,
  Plus,
  Refrigerator,
  Share2,
  ShrinkIcon,
  Tv2,
  UserRound,
  Waves,
  Wifi,
  Zap,
} from "lucide-react";

import { useState } from "react";
import "./App.css";
import Slider from "./components/slider";
import Theme from "./components/theme";
import { Button } from "./components/ui/button";

function App() {
  let [height, setHeight] = useState("flex");

  let styleflex =
    "w-full h-full flex flex-row relative transition-all duration-300";
  let styleGrid =
    "scrollbar grid grid-cols-1 lg:grid-cols-2 w-full lg:w-3/5 my-2 gap-2 translate-x-0 lg:gap-4 overflow-y-scroll justify-items-end";
  let [state, setState] = useState(styleflex);
  let [full, setFull] = useState("shrink");

  let [styleNav, setStyleNav] = useState("visible");
  const handleStyle = () => {
    setFull(full == "shrink" ? "full" : "shrink");
    setState(state == styleflex ? styleGrid : styleflex);
    setStyleNav(styleNav == "visible" ? "invisible" : "visible");
  };
  let plus = "scale-y-100 h-auto";
  let minus = "scale-y-0 h-0";
  return (
    <>
      <main className="dark:bg-[#202124] flex flex-col w-screen h-screen bg-white">
        <div className="flex col lg:flex-row justify-between items-center px-2 w-full lg:px-4 pt-2">
          <p className="dark:text-white text-[#202124] text-2xl font-bold">
            Devolla
          </p>
          <div className="flex flex-row gap-3">
            <input
              placeholder={"Search a service"}
              className="hidden lg:block bg-[#202124] border-[#202124] dark:border-[#fff] dark:bg-white px-2 border text-white dark:text-[#000] rounded-[5px]"
            />

            <Theme />
          </div>
        </div>
        <div className="flex-grow relative rounded-[20px]  bg-slate-100 dark:bg-[#353535] flex flex-row lg:justify-end overflow-x-hidden lg:overflow-y-hidden mt-2 mx-2">
          <Slider styleNav={styleNav} style={state}></Slider>
          <div className="absolute z-40 max-h-[600px] shadow-md shadow-black flex-grow-0 w-full lg:w-auto  bottom-0 left-0 lg:bottom-2 transition-all duration-300 lg:left-2 dark:bg-[#202124] bg-white px-4 py-2 flex flex-col rounded-[20px]">
            <div className="flex flex-row justify-between items-center">
              <div className="flex flex-row items-center px-1 bg-slate-200 text-slate-800 gap-1 rounded-[5px]">
                <Zap className="h-4 w-4"></Zap>
                <p className="text-sm">Instant confirmation</p>
              </div>
              <Button
                onClick={() => setHeight(height == plus ? minus : plus)}
                className="relative text-white dark:text-black rounded dark:bg-white bg-[#1b1b1f]"
                variant="outline"
                size="icon"
              >
                <Minus
                  className={`rotate-0 scale-100 transition-all ${
                    height == plus ? "rotate-0 scale-0" : ""
                  }`}
                />
                <Plus
                  className={`absolute rotate-90 scale-0 transition-all duration-500 ${
                    height == minus ? "-rotate-90 scale-100" : ""
                  }`}
                />
              </Button>
            </div>
            <div className={"w-full flex-grow flex flex-col " + height}>
              <h2 className="dark:text-white text-xl lg:text-4xl font-semibold mt-1">
                Apartament parkdale
              </h2>
              <h2 className="text-xl lg:text-4xl font-semibold text-[#c1c0c2]">
                Melbourne VIC, Australia
              </h2>

              <div className="flex flex-row justify-between items-center m-2">
                <div className="flex flex-row gap-1">
                  <Button className="dark:bg-[#202124] dark:text-white text-sm text-center p-1">
                    <Share2></Share2>
                    Share
                  </Button>
                  <Button className="dark:bg-[#202124] dark:text-white text-sm text-center p-1">
                    <HeartIcon className="text-red-500 fill-red-500"></HeartIcon>
                    Save
                  </Button>
                </div>
                <Button className="dark:bg-[#202124] dark:text-white text-sm p-1">
                  <PlaneTakeoff></PlaneTakeoff>
                  Airport transfert
                </Button>
              </div>

              <div className="flex flex-col justify-between">
                <h2 className="dark:text-white font-medium">General</h2>
                <div className="flex flex-row justify-between items-center mt-1 py-1 dark:border-white border-b">
                  <p className="text-sm dark:text-white">Meters</p>
                  <p className="text-sm dark:text-white">290m2</p>
                </div>
                <div className="flex flex-row justify-between items-center mt-1 py-1 dark:border-white border-b">
                  <p className="text-sm dark:text-white">
                    Maximumnumberofguests
                  </p>
                  <p className="text-sm dark:text-white">14 guest</p>
                </div>
                <div className="flex flex-row justify-between items-center mt-1 py-1 dark:border-white border-b">
                  <p className="text-sm dark:text-white">Number of rooms</p>
                  <p className="text-sm dark:text-white">6 rooms</p>
                </div>
              </div>
              <div className="flex flex-col justify-between m-2">
                <h2 className="dark:text-white font-medium">Amenties</h2>
                <div className="grid grid-cols-3 grid-rows-2 gap-2 mx-3">
                  <Button className="dark:bg-[#202124] dark:text-white text-sm text-center p-1">
                    <Wifi></Wifi>
                    Wifi
                  </Button>
                  <Button className="dark:bg-[#202124] dark:text-white text-sm text-center p-1">
                    <Dog></Dog>
                    Pet allowed
                  </Button>
                  <Button className="dark:bg-[#202124] dark:text-white text-sm text-center p-1">
                    <Waves></Waves>
                    Outdoor poof
                  </Button>
                  <Button className="dark:bg-[#202124] dark:text-white text-sm text-center p-1">
                    <Refrigerator></Refrigerator>
                    Refrigerator
                  </Button>
                  <Button className="dark:bg-[#202124] dark:text-white text-sm text-center p-1">
                    <Tv2></Tv2>
                    Tv
                  </Button>
                  <Button className="dark:bg-[#202124] dark:text-white text-sm text-center p-1">
                    <Microwave></Microwave>
                    Microwave
                  </Button>
                </div>
              </div>
              <div className="flex flex-col justify-between">
                <h2 className="dark:text-white font-medium">Availability</h2>
                <div className="flex flex-row justify-between items-center">
                  <p className="text-sm text-black inline-flex gap-1 items-center dark:text-white">
                    <Calendar></Calendar>
                    Sat. 9Mar - Sat. 16Mar
                  </p>
                  <p className="text-sm text-black inline-flex gap-1 items-center dark:text-white">
                    <UserRound></UserRound>
                    6Adults - 0Child
                  </p>
                </div>
              </div>

              <h1 className="text-4xl font-semibold m-2 dark:text-white">
                $530 <span className="text-[#c1c0c2]">Week*</span>
              </h1>

              <Button className="text-center hover:bg-black bg-black text-lg mb-2 rounded-[20px] text-white">
                Check availability
              </Button>
            </div>
          </div>
        </div>
        <Button
          onClick={() => handleStyle()}
          className="hidden  rounded-[10px] shadow-md shadow-black hover:bg-white bg-white dark:text-white text-sm font-semibold gap-1 dark:bg-[#202124] lg:inline-flex items-center absolute bottom-2 right-2 z-50 lg:bottom-4 lg:right-4"
        >
          <ShrinkIcon
            className={`${full == "shrink" ? "block" : "hidden"}`}
          ></ShrinkIcon>
          <Maximize
            className={`${full == "full" ? "block" : "hidden"}`}
          ></Maximize>
          10 Photos
        </Button>
      </main>
    </>
  );
}

export default App;
