import { Link } from 'react-router-dom';
import { Project } from '../data/projects';
import { ArrowUpRight } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="bg-slate-900 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-blue-900/20 hover:-translate-y-1">
      <Link to={`/projects/${project.id}`}>
        <div className="relative h-60 overflow-hidden">
          <img 
            src={project.imageUrl} 
            alt={project.title} 
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
          <div className="absolute top-0 right-0 bg-blue-600 text-white text-xs font-medium px-2 py-1 m-2 rounded">
            {project.category}
          </div>
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold text-white mb-2 flex items-center">
            {project.title}
            <ArrowUpRight size={16} className="ml-2 opacity-70" />
          </h3>
          <p className="text-gray-400 mb-4">{project.description}</p>
          <div className="flex flex-wrap gap-2">
            {project.technologies.slice(0, 3).map((tech, index) => (
              <span 
                key={index}
                className="text-xs bg-slate-800 text-gray-300 px-2 py-1 rounded"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 3 && (
              <span className="text-xs bg-slate-800 text-gray-300 px-2 py-1 rounded">
                +{project.technologies.length - 3} more
              </span>
            )}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProjectCard;