import "./App.css";
import Slider from "./components/slider";
import Theme from "./components/theme";
import { Button } from "./components/ui/button";

function App() {
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
        </div>
      </main>
    </>
  );
}

export default App;
