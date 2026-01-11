import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectCard = ({ project }) => {
    return (
        <div className="project-card">
            <div className="project-img">
                {/* In a real app, use project.image. For now using placeholder color/pattern */}
                <div className="img-placeholder"></div>
                <div className="tech-stack">
                    {project.techs.map((tech, index) => (
                        <span key={index}>{tech}</span>
                    ))}
                </div>
            </div>
            <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-links">
                    <a href={project.links.live} className="btn-sm">
                        Live <FaExternalLinkAlt />
                    </a>
                    <a href={project.links.code} className="btn-sm btn-outline">
                        Code <FaGithub />
                    </a>
                </div>
            </div>
            <style>{`
        .project-card {
          border: 1px solid var(--gray);
          background: var(--bg-color);
        }
        .project-img {
          border-bottom: 1px solid var(--gray);
          position: relative;
        }
        .img-placeholder {
          height: 200px;
          background-color: #2c3036; /* Slightly lighter than bg */
          background-image:  radial-gradient(#3a3f4b 1px, transparent 1px);
          background-size: 10px 10px;
        }
        .tech-stack {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          padding: 0.5rem;
          border-top: 1px solid var(--gray);
          background: var(--bg-color);
        }
        .tech-stack span {
          color: var(--gray);
          font-size: 0.9rem;
        }
        .project-info {
          padding: 1rem;
        }
        .project-info h3 {
          font-size: 1.5rem;
          color: var(--text-white);
          margin-bottom: 0.5rem;
        }
        .project-info p {
          color: var(--gray);
          margin-bottom: 1rem;
          font-size: 1rem;
        }
        .project-links {
          display: flex;
          gap: 1rem;
        }
        .btn-sm {
          padding: 0.3rem 0.8rem;
          font-size: 0.9rem;
          border: 1px solid var(--primary-color);
          color: var(--text-white);
          display: flex;
          align-items: center;
          gap: 0.5rem;
          transition: background 0.3s;
        }
        .btn-sm:hover {
          background: rgba(199, 120, 221, 0.1);
        }
        .btn-outline {
          border-color: var(--gray);
          color: var(--gray);
        }
        .btn-outline:hover {
          border-color: var(--text-white);
          color: var(--text-white);
          background: transparent;
        }
      `}</style>
        </div>
    );
};

export default ProjectCard;
