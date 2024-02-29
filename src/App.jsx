import {
  Calendar,
  Dog,
  HeartIcon,
  Maximize,
  Microwave,
  PlaneTakeoff,
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
  let [full, setFull] = useState("shrink");
  return (
    <>
      <main className="dark:bg-[#1b1b1f] flex flex-col w-screen h-screen bg-white">
        <div className="flex col lg:flex-row justify-between items-center px-2 w-full lg:px-4 py-2">
          <p className="dark:text-white text-[#1b1b1f] text-lg font-bold">
            Devolla
          </p>
          <div className="flex flex-row gap-3">
            <Button
              varriant="outline"
              size="icon"
              className="bg-[#1b1b1f] hover:bg-[#1b1b1f] dark:bg-white text-white dark:text-[#000] rounded-full"
            >
              Eng
            </Button>
            <Theme />
          </div>
        </div>
        <div className="flex-grow bg-slate-100 relative rounded-[20px] flex flex-row overflow-hidden mx-2 mb-3">
          <Slider></Slider>
          <div className="absolute top-2 left-2 dark:bg-[#1b1b1f] bg-white p-4 flex flex-col rounded-[20px]">
            <div className="flex flex-row justify-between items-center">
              <div className="flex flex-row items-center px-1 bg-slate-200 text-slate-800 gap-1 rounded-[5px]">
                <Zap className="h-4 w-4"></Zap>
                <p className="text-sm">Instant confirmation</p>
              </div>
            </div>
            <h2 className="dark:text-white text-4xl font-semibold">
              Apartament parkdale
            </h2>
            <h2 className="text-4xl font-semibold text-[#c1c0c2]">
              Melbourne VIC, Australia
            </h2>

            <div className="flex flex-row justify-between items-center m-2">
              <div className="flex flex-row gap-1">
                <Button className="dark:bg-[#1b1b1f] dark:text-white text-sm text-center p-1">
                  <Share2></Share2>
                  Share
                </Button>
                <Button className="dark:bg-[#1b1b1f] dark:text-white text-sm text-center p-1">
                  <HeartIcon className="text-red-500 fill-red-500"></HeartIcon>
                  Save
                </Button>
              </div>
              <Button className="dark:bg-[#1b1b1f] dark:text-white text-sm p-1">
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
                <p className="text-sm dark:text-white">Maximumnumberofguests</p>
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
                <Button className="dark:bg-[#1b1b1f] dark:text-white text-sm text-center p-1">
                  <Wifi></Wifi>
                  Wifi
                </Button>
                <Button className="dark:bg-[#1b1b1f] dark:text-white text-sm text-center p-1">
                  <Dog></Dog>
                  Pet allowed
                </Button>
                <Button className="dark:bg-[#1b1b1f] dark:text-white text-sm text-center p-1">
                  <Waves></Waves>
                  Outdoor poof
                </Button>
                <Button className="dark:bg-[#1b1b1f] dark:text-white text-sm text-center p-1">
                  <Refrigerator></Refrigerator>
                  Refrigerator
                </Button>
                <Button className="dark:bg-[#1b1b1f] dark:text-white text-sm text-center p-1">
                  <Tv2></Tv2>
                  Tv
                </Button>
                <Button className="dark:bg-[#1b1b1f] dark:text-white text-sm text-center p-1">
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

            <Button className="text-center bg-black rounded-[20px] text-white">
              Check availability
            </Button>
          </div>

          <Button
            onClick={() => setFull(full == "shrink" ? "full" : "shrink")}
            className="rounded-[10px] hover:bg-white bg-white dark:text-white text-sm font-semibold gap-1 dark:bg-[#1b1b1f] inline-flex items-center absolute bottom-2 right-2"
          >
            <ShrinkIcon
              className={`${full == "shrink" ? "block" : "hidden"}`}
            ></ShrinkIcon>
            <Maximize
              className={`${full == "full" ? "block" : "hidden"}`}
            ></Maximize>
            10 videos
          </Button>
        </div>
      </main>
    </>
  );
}

export default App;
