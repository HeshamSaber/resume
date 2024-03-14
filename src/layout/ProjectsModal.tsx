import { Company } from "./types";

const ProjectModal: React.FC<{
  companiesList: Company[];
  toggleProjectModal: () => void;
  selectedCompanyIndex: number;
}> = ({ companiesList, toggleProjectModal, selectedCompanyIndex }) => {

  function closeModal(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    if ((e.target as HTMLDivElement).id === "projectModal") {
      toggleProjectModal();
    }
  }

  return (
    <div id="projectModal" className="absolute flex flex-col mx-auto self-center place-content-center items-center h-full w-screen bg-[#56777c]/85" onClick={closeModal}>
      <div className="bg-[#8cd3de] p-4 m-4 rounded-lg w-10/12 max-w-screen-md relative">
        <a className="absolute top-5 right-5 hover:cursor-pointer" onClick={toggleProjectModal}>
          X
        </a>
        {companiesList.map(
          (_company, index) =>
            index === selectedCompanyIndex &&
            _company.projects.map((project, projectIndex) => (
              <div key={projectIndex}>
                <p className="text-2xl font-bold ">{project.projectName}</p>
                <p>{project.projectDesc}</p>
                <a href={project.projectLink} className="cursor-pointer text-white hover:text-cyan-400">projectLink</a>
              </div>
            ))
        )}
      </div>
    </div>
  );
};

export default ProjectModal;
