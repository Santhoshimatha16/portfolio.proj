import { motion } from 'framer-motion';

const AboutPage = () => {
  const skills = [
    'HTML/CSS', 'JavaScript', 'TypeScript', 'React', 'NextJS', 
    'TailwindCSS', 'Node.js', 'GraphQL', 'Figma', 'UX/UI Design'
  ];

  return (
    <div className="py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">About Me</h1>
          <p className="text-xl text-gray-400 mb-6">
            I'm a web designer and developer with a passion for creating beautiful, functional websites that help businesses succeed online.
          </p>
          <p className="text-gray-400 mb-6">
            With over 8 years of experience in the industry, I've worked with clients ranging from small startups to established businesses across various sectors including e-commerce, hospitality, and technology.
          </p>
          <p className="text-gray-400 mb-6">
            I believe that great design is not just about aesthetics, but about creating intuitive user experiences that help businesses achieve their goals. I work closely with my clients to understand their unique needs and challenges, and develop tailored solutions that deliver results.
          </p>
          <p className="text-gray-400 mb-6">
            When I'm not designing and coding, you'll find me exploring the beautiful South coast, experimenting with new technologies, or enjoying a good book with a cup of coffee.
          </p>

          <div className="mt-10">
            <h2 className="text-2xl font-bold text-white mb-4">Skills</h2>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span 
                  key={skill} 
                  className="px-3 py-1 bg-slate-800 text-gray-300 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="bg-slate-900 p-4 rounded-lg w-full max-w-md">
            <img 
              src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg" 
              alt="Seb Kay" 
              className="w-full h-auto rounded-lg mb-6"
            />
            <div className="p-4">
              <h3 className="text-2xl font-bold text-white mb-2">Seb Kay</h3>
              <p className="text-gray-400 mb-4">Web Designer & Developer</p>
              <div className="border-t border-gray-800 pt-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-gray-400 text-sm">Location</p>
                    <p className="text-white">Southampton, UK</p>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Experience</p>
                    <p className="text-white">8+ Years</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutPage;