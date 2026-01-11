import ProjectCard from './ProjectCard';
import SectionHeader from './SectionHeader';
import projectsData from '../data/projects.json';

const Projects = ({ limit }) => {
  const displayedProjects = limit ? projectsData.slice(0, limit) : projectsData;

  return (
    <section id="projects" className="projects-section">
      <div className="projects-header-wrapper">
        <SectionHeader title="projects" />
        {limit && <a href="/projects" className="view-all">View all ~~&gt;</a>}
      </div>

      <div className="projects-grid">
        {displayedProjects.map((project, index) => (
          <ProjectCard key={project.id || index} project={project} />
        ))}
      </div>
      <style>{`
        .projects-section {
          padding: 4rem 0;
        }
        .projects-header-wrapper {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 2rem;
        }
        .view-all {
          color: var(--text-white);
          font-size: 1rem;
        }
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 2rem;
        }
      `}</style>
    </section>
  );
};

export default Projects;
