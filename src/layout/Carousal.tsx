import { ChevronDown, ChevronUp } from "lucide-react";
import { Company } from "../layout/types";
import ProjectModal from "../layout/ProjectsModal";

import { useState } from "react";

const Carousel = ({ companiesList }: { companiesList: Company[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [projectModal, setProjectModal] = useState(false);

  const toggleProjectModal = () => {
    setProjectModal(!projectModal);
    console.log(projectModal);
  }

  const displayCurrentItem = () => {
    // Display the item in the UI instead of logging to the console
  };

  const nextItem = () => {
    setCurrentIndex((currentIndex + 1) % companiesList.length);
  };

  const previousItem = () => {
    setCurrentIndex((currentIndex - 1 + companiesList.length) % companiesList.length);
  };

  // Initial display of the first item
  displayCurrentItem();
  const prev1 = companiesList[(currentIndex - 1 + companiesList.length) % companiesList.length];
  const current = companiesList[currentIndex];
  const next1 = companiesList[(currentIndex + 1) % companiesList.length];

  const renderIndicators = () => {
    return (
      <div className="flex flex-col justify-center my-3">
        {companiesList.map((_company, index) => (
          <div key={index} className={`my-1 h-8 w-1 md:w-2 ${index === currentIndex ? "bg-[#9fd7dd]" : "bg-[#42b7b9]"}`} />
        ))}
      </div>
    );
  };

  return (
    <div className="flex flex-1 h-full w-full justify-center items-center px-2 md:px-60">
      <div className="flex flex-col flex-1 h-full w-full justify-center items-center text-white content-center">
        <div className="opacity-50 transition-opacity duration-500 py-2">{prev1.companyName}</div>
        <div className="opacity-100 transition-opacity duration-500 py-2 flex flex-col items-center h-[90%] md:h-[75%] md:border-2 mx-0 md:mx-3 w-full justify-start">
          <div className="max-sm:hidden">
            <img src={current.logo} className="h-16 object-contain" alt="" />
          </div>
          <div className="flex flex-1 w-full h-[90%] p-1 overflow-y-auto overscroll-y-contain scrollbar-thin ">
            <div className="flex flex-1 flex-col h-full items-start gap-2 bg-transparent p-2">
              <div className="h-fit p-2">
                <p className="text-2xl font-bold">{current.companyName}</p>
                <p className="text-xl font-semibold">{current.title}</p>
                <p>
                  {current.startDate} - {current.endDate}
                </p>
                <p>{current.FOW}</p>
              </div>
              <p className="self-start px-3 text-xl underline underline-offset-2">Duties</p>
              <div className="flex flex-col w-full px-3">
                {current.duties.map((duty,index) => (
                  <li key={index} className="marker:text-cyan-600">{duty}</li>
                ))}
              </div>
              <p className="self-start px-3 text-xl underline underline-offset-2">Tools</p>
              <div className="grid grid-cols-1 md:grid-cols-3 w-full px-3">
                {current.tools.map((tool,index) => (
                  <li key={index} className="marker:text-cyan-600">{tool}</li>
                ))}
              </div>
            </div>
          </div>
          <button className="justify-center items-center my-1 p-2 w-28 h-10 bg-[#55a8b1] shadow-md shadow-[#99dde5] text-white cursor-pointer" onClick={toggleProjectModal}>Projects</button>
        </div>
        <div className="opacity-50 transition-opacity duration-500 py-2">{next1.companyName}</div>
      </div>
      <div className="flex flex-col w-8 justify-center items-center p-0 mx-0">
        <ChevronUp className="size-4 md:size-6 cursor-pointer" color="#17CBE7" onClick={previousItem} strokeWidth={4} absoluteStrokeWidth />
        {renderIndicators()}
        <ChevronDown className="size-4 md:size-6 cursor-pointer" color="#17CBE7" onClick={nextItem} strokeWidth={4} absoluteStrokeWidth />
      </div>
      {projectModal && <ProjectModal companiesList={companiesList} toggleProjectModal={toggleProjectModal} selectedCompanyIndex={currentIndex}/> }
    </div>
  );
};

export default Carousel;
