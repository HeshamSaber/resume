import Cards from "../layout/Cards"

function Home(){
    return(
        <section className="bg-[#ECB7A8] max-w-screen-lg justify-center my-5 mx-auto shadow-md">
  <div className="gap-16 items-center py-4 px-4 mx-auto max-w-screen-lg md:grid md:grid-cols-2 md:py-6 md:px-6">
      <div className="font-normal text-gray-600 sm:text-lg ">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 ">Hesham Saber</h2>
          <p className="mb-4">Experienced Senior QA and SDET engineer specializing in automated testing frameworks. Committed to driving best practices and delivering high-quality software solutions. Skilled in collaborating effectively to identify and mitigate quality risks.</p>
      </div>
      <div className="grid grid-cols-1 gap-4 my-3">
          <img className="rounded-lg size-auto max-h-64 justify-self-center" src="/profile.jpg" alt="office content 1"/>
      </div>
  </div>
  <Cards />
</section>
    )
}

export default Home