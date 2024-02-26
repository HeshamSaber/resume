import { Briefcase, FileCog, Presentation } from "lucide-react"

function Cards(){
    return(
        <section
  className="bg-[#B66D68] flex flex-col justify-center items-center gap-4 md:flex-row max-w-screen-lg mx-auto opacity-80 p-6"
>
  <div
    className="max-w-sm bg-[#f4c48e] border border-gray-200 rounded-lg shadow min-w-[300px] flex flex-row flex-grow"
  >
    <div className="p-5 w-full">
      <a href="/experience" className="routeLink">
        <h5
          className="flex justify-center items-center mb-2 text-2xl font-bold tracking-tight text-gray-900 " 
        >
         <Briefcase /> &nbsp; Work Experience 
        </h5>
      </a>
    </div>
  </div>
  <div
  className="max-w-sm bg-[#f4c48e] border border-gray-200 rounded-lg shadow min-w-[300px] flex flex-row flex-grow"
  >
    <div className="p-5 w-full">
      <a href="/SkillsAndTools" className="routeLink">
        <h5
        className="flex justify-center items-center mb-2 text-2xl font-bold tracking-tight text-gray-900 " 
        >
        <FileCog /> &nbsp; Tools and Skills
        </h5>
      </a>
    </div>
  </div>
  <div
  className="max-w-sm bg-[#f4c48e] border border-gray-200 rounded-lg shadow min-w-[300px] flex flex-row flex-grow"
  >
    <div className="p-5 w-full">
      <a href="/Projects" className="routeLink">
        <h5
        className="flex justify-center items-center mb-2 text-2xl font-bold tracking-tight text-gray-900 " 
        >
        <Presentation />
        &nbsp; Projects
        </h5>
      </a>
    </div>
  </div>
</section>
        
    )
}

export default Cards