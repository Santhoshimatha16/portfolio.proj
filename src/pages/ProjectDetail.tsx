import { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, ExternalLink } from 'lucide-react';
import { Project, projects } from '../data/projects';
import { motion } from 'framer-motion';
import ReactMarkdown from 'react-markdown';

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [project, setProject] = useState<Project | null>(null);
  const [nextProject, setNextProject] = useState<Project | null>(null);
  const [prevProject, setPrevProject] = useState<Project | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!id) return;
    
    const projectIndex = projects.findIndex(p => p.id === id);
    
    if (projectIndex === -1) {
      navigate('/projects');
      return;
    }
    
    setProject(projects[projectIndex]);
    setNextProject(projects[(projectIndex + 1) % projects.length]);
    setPrevProject(projects[(projectIndex - 1 + projects.length) % projects.length]);
    setIsLoading(false);
    
    // Scroll to top when project changes
    window.scrollTo(0, 0);
  }, [id, navigate]);

  if (isLoading) {
    return (
      <div className="py-16 flex justify-center">
        <div className="animate-pulse w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full"></div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="py-16">
        <h1 className="text-4xl font-bold text-white mb-6">Project not found</h1>
        <Link to="/projects" className="text-blue-500 hover:text-blue-400">
          Back to projects
        </Link>
      </div>
    );
  }

  return (
    <div className="py-16">
      <Link 
        to="/projects" 
        className="inline-flex items-center text-blue-500 hover:text-blue-400 mb-8 group"
      >
        <ArrowLeft size={20} className="mr-2 group-hover:-translate-x-1 transition-transform duration-200" />
        Back to all projects
      </Link>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="rounded-lg overflow-hidden mb-10">
          <img 
            src={project.imageUrl} 
            alt={project.title} 
            className="w-full h-96 object-cover object-center"
          />
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <h1 className="text-4xl font-bold text-white mb-6">{project.title}</h1>
            <div className="prose prose-invert max-w-none">
              <ReactMarkdown>{project.content}</ReactMarkdown>
            </div>
          </div>
          
          <div className="bg-slate-900 p-6 rounded-lg h-fit">
            <h3 className="text-xl font-bold text-white mb-4">Project Details</h3>
            
            <div className="mb-6">
              <h4 className="text-sm font-medium text-gray-400 mb-2">Category</h4>
              <p className="text-white">{project.category}</p>
            </div>
            
            <div className="mb-6">
              <h4 className="text-sm font-medium text-gray-400 mb-2">Technologies</h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span 
                    key={index}
                    className="text-xs bg-slate-800 text-gray-300 px-2 py-1 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            {project.url && (
              <div>
                <h4 className="text-sm font-medium text-gray-400 mb-2">Website</h4>
                <a 
                  href={project.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-500 hover:text-blue-400"
                >
                  Visit site
                  <ExternalLink size={16} className="ml-2" />
                </a>
              </div>
            )}
          </div>
        </div>
      </motion.div>
      
      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
        {prevProject && (
          <Link
            to={`/projects/${prevProject.id}`}
            className="bg-slate-900 p-6 rounded-lg flex items-center group hover:bg-slate-800 transition-colors duration-200"
          >
            <ArrowLeft size={24} className="text-blue-500 mr-4 group-hover:-translate-x-1 transition-transform duration-200" />
            <div>
              <p className="text-sm text-gray-400">Previous Project</p>
              <h3 className="text-lg font-medium text-white">{prevProject.title}</h3>
            </div>
          </Link>
        )}
        
        {nextProject && (
          <Link
            to={`/projects/${nextProject.id}`}
            className="bg-slate-900 p-6 rounded-lg flex items-center justify-end text-right group hover:bg-slate-800 transition-colors duration-200"
          >
            <div>
              <p className="text-sm text-gray-400">Next Project</p>
              <h3 className="text-lg font-medium text-white">{nextProject.title}</h3>
            </div>
            <ArrowRight size={24} className="text-blue-500 ml-4 group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        )}
      </div>
    </div>
  );
};

export default ProjectDetail;