import "./Projects.css";

function Projects({ project }) {
  return (
    <div className="projects">
      {project.map((item, index) => (
        <div className="project-card" key={index}>
          <div className="image-wrapper">
            <img src={item.img} alt={`Project ${index + 1}`} />
            <div className="title">
              <h2>{item.title}</h2>
            </div>
          </div>
          <div className="project-info">
            <p className="project-description">{item.description}</p>
            <p className="project-role">
              <span>My Role: </span>
              {item.role}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Projects;
