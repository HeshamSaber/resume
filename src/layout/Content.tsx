import { useLocation } from "react-router-dom";
import Home from "../dataSections/Home";
import Experience from "../dataSections/Experience";

function Content() {
  const projectPath = useLocation();
  switch (projectPath.pathname) {
    case "/":
      return (
        <section className="w-10/12 justify-center items-center self-center">
          <Home />
        </section>
      );
    case "/experience":
      return (
        <section>
          <Experience />{" "}
        </section>
      );
    default:
      return (
        <section>
          <Home />
        </section>
      );
  }

  return <p>Content</p>;
}
export default Content;
