import companiesList from "../assets/companiesList.json";
import Carousal from "../layout/Carousal";

function Experience() {
 
  return (
    <section className="absolute flex flex-col mx-auto self-center place-content-center items-center h-full w-screen">
        <Carousal companiesList={companiesList} />
    </section>
  );
}
export default Experience;