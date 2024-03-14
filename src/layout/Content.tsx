import { useLocation } from "react-router-dom";
import Home from "../dataSections/Home";
import Experience from "../dataSections/Experience";
import Skills from "../dataSections/Skills";

function Content() {
  const projectPath = useLocation();
  switch (projectPath.pathname) {
    case "/":
      return <Home />;
    case "/experience":
      return <Experience />;
    case "/skills":
      return <Skills />;
    default:
      return <Home />;
  }
}
export default Content;
