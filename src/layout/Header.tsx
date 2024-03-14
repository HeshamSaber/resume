import { Menu } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [open, setOpen] = useState(window.matchMedia("(min-width: 768px)").matches ? false : true);

  const linksStyle = "font-bold text-xl text-[#4ce4f8] flex justify-center hover:scale-125 hover:text-[#67d4b0]";
  return (
      <div className="flex justify-end md:justify-center justify-items-center flex-1">
        <button onClick={() => setOpen(!open)} className="md:hidden justify-self-start">
          <Menu size={16} className="bg-transparent bg-[#63c4d1]" />
        </button>

        {!open && (
          <div className="top-0 right-0 left-0 bg-[#56777c] grid grid-cols-6 w-9/12 justify-around items-center justify-self-center max-md:hidden">
            <Link className={linksStyle}to="/">
              Home
            </Link>

            <Link className={linksStyle} to="/experience">
              Experience
            </Link>

            <Link className={linksStyle} to="/skills">
              Skills
            </Link>
            
            <Link className={linksStyle} to="/tools">
              Tools
            </Link>

            <Link className={linksStyle} to="/projects">
              Projects
            </Link>

            <Link className={linksStyle} to="/contactme">
              Contact
            </Link>
          </div>
        )}

        {!open && (
          <div className="fixed rounded-xl bg-[#56777c] font-bold text-xl top-12 grid grid-rows-6 w-1/2 justify-center gap-1 md:hidden">
            <Link className={linksStyle} to="/">
              Home
            </Link>

            <Link className={linksStyle} to="/experience">
              Experience
            </Link>

            <Link className={linksStyle} to="/skills">
              Skills
            </Link>
            
            <Link className={linksStyle} to="/tools">
              Tools
            </Link>

            <Link className={linksStyle} to="/projects">
              Projects
            </Link>

            <Link className={linksStyle} to="/contactme">
              Contact
            </Link>
          </div>
        )}
      </div>
  );
}
export default Header;
