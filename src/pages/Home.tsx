import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Home = () => {
  return (
    <div className="py-16 md:py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1 animate-fadeIn">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Hey, I'm Seb.
          </h1>
          <p className="text-xl text-gray-400 mb-8 leading-relaxed">
            A web designer and developer from Southampton in the UK. I create bespoke websites to help people go further online.
          </p>
          <Link 
            to="/projects" 
            className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-full transition-all duration-300 group"
          >
            My Projects
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-200" size={20} />
          </Link>
        </div>
        <div className="order-1 md:order-2 flex justify-center md:justify-end animate-fadeIn animation-delay-200">
          <div className="bg-slate-900 p-4 rounded-lg shadow-lg">
            <img 
              src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg" 
              alt="Seb Kay" 
              className="w-64 h-auto rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;