import Cards from "../layout/Cards";

function Home() {
  return (
    <section className="flex flex-col flex-wrap max-w-5xl justify-center items-center my-16 md:my-0 shadow-lg rounded-lg shadow-[#679ea8]">
      <div className="flex flex-1 flex-col gap-16 items-center m-12 py-4 px-4 mx-auto max-w-screen-lg md:flex md:flex-row md:py-6 md:px-6">
        <div className="font-normal text-[#7cccd8] sm:text-lg ">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold ">Hesham Saber El-Nagar</h2>
          <p className="mb-4 max-w-3xl">
          Senior SDET Engineer with 7 years of experience in Software Engineering industry, experienced in multiple domains including but not limited to financial planning and analysis (FP&A), Government digitalization, School management, E-Commerce, and Insurance, with experience in SDLC, STLC, manual and automation testing for web and mobile applications, Agile Coaching, and process development
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4">
          <img className="rounded-lg size-auto max-h-64 justify-self-center" src="/profile.jpg" alt="office content 1" />
        </div>
      </div>
      <Cards />
    </section>
  );
}

export default Home;
