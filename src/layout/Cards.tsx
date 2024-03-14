import { Briefcase, FileCog, Presentation } from "lucide-react";
import { Link } from "react-router-dom";

function Cards() {
  return (
    <section className="flex flex-col justify-center gap-5 my-4 items-center md:flex-row max-w-screen-lg opacity-80 shadow-2xl bg-transparent">
      <div className="max-w-sm w-full bg-[#546b6f] hover:scale-110 border border-gray-500 rounded-xl shadow-md shadow-[#679ea8] min-w-[300px] flex flex-row flex-1 flex-wrap justify-center h-12">
        <Link to="/experience" className="flex justify-center items-center  text-2xl font-bold text-[#7cccd8] hover:text-[#67d4b0] ">
          <Briefcase /> &nbsp; Work Experience
        </Link>
      </div>
      <div className="max-w-sm w-full bg-[#546b6f] hover:scale-110 border border-gray-500 rounded-xl shadow-md shadow-[#679ea8] min-w-[300px] flex flex-row flex-1 flex-wrap justify-center h-12">
        <Link to="/skills" className="flex justify-center items-center  text-2xl font-bold text-[#7cccd8] hover:text-[#67d4b0] ">
          <FileCog /> &nbsp; Skills
        </Link>
      </div>
      <div className="max-w-sm w-full bg-[#546b6f] hover:scale-110  border border-gray-500 rounded-xl shadow-md shadow-[#679ea8] min-w-[300px] flex flex-row flex-1 flex-wrap justify-center h-12">
        <Link to="/projects" className="flex justify-center items-center  text-2xl font-bold text-[#7cccd8] hover:text-[#67d4b0] ">
          <Presentation />
          &nbsp; Projects
        </Link>
      </div>
    </section>
  );
}

export default Cards;
