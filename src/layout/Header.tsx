import { Menu } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [open, setOpen] = useState(false);
  const linksStyle = "text-[#c05a43] hover:text-[#a14c3c] w-10/12 self-center mx-auto bg-[#f5d5ce] md:bg-transparent rounded-xl px-6 mx-3 md:w-full md:px-0 md:mx-0 md:py-0";
  return (
    <section className="flex-1 flex absolute p-1 top-0 left-0 w-full bg-[#f5d5ce] md:h-12 justify-between items-center">
      <div className="flex justify-between flex-grow">
        <img src="../../public/vite.svg" />
        <button onClick={() => setOpen(!open)} className="md:hidden ">
        <Menu size={16} className="bg-transparent" />
      </button>
      </div>
      {open && (
        <div className="fixed rounded-xl py-1 bg-[#e58b77] mt-2 font-bold text-lg w-1/2 md:w-3/4 md:bg-transparent gap-1 md:relative top-10 md:top-0 right-1 justify-start items-start flex flex-col md:flex-row md:flex-grow md:justify-center md:mt-0 md:items-center md:max-w-3xl text-[#81453a]">
          <Link className={linksStyle} to="/">
            Home
          </Link>

          <Link className={linksStyle} to="/experience">
            Experience
          </Link>

          <Link className={linksStyle} to="/skills&tools">
            Skills & Tools
          </Link>

          <Link className={linksStyle} to="/projects">
            Projects
          </Link>

          <Link className={linksStyle} to="/contactme">
            Contact Me
          </Link>
        </div>
      )}
    </section>
  );
}
export default Header;
