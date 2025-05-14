import { motion } from 'framer-motion';
import { Code, Palette, Globe, Smartphone, Zap, Layers } from 'lucide-react';

const ServicesPage = () => {
  const services = [
    {
      icon: <Palette className="h-10 w-10 text-blue-500" />,
      title: 'Web Design',
      description: 'Creating beautiful, intuitive designs that engage your audience and elevate your brand.'
    },
    {
      icon: <Code className="h-10 w-10 text-purple-500" />,
      title: 'Web Development',
      description: 'Building robust, scalable websites and web applications using modern technologies.'
    },
    {
      icon: <Smartphone className="h-10 w-10 text-green-500" />,
      title: 'Responsive Design',
      description: 'Ensuring your website looks and works perfectly on all devices, from desktops to mobile phones.'
    },
    {
      icon: <Globe className="h-10 w-10 text-yellow-500" />,
      title: 'SEO Optimization',
      description: 'Improving your website\'s visibility in search engines to drive more organic traffic.'
    },
    {
      icon: <Zap className="h-10 w-10 text-red-500" />,
      title: 'Performance Optimization',
      description: 'Speeding up your website loading times for a better user experience and SEO ranking.'
    },
    {
      icon: <Layers className="h-10 w-10 text-teal-500" />,
      title: 'Website Maintenance',
      description: 'Keeping your website secure, up-to-date, and running smoothly with regular maintenance.'
    }
  ];

  return (
    <div className="py-16">
      <motion.h1
        className="text-4xl md:text-5xl font-bold text-white mb-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        My Services
      </motion.h1>
      <motion.p
        className="text-xl text-gray-400 mb-12 max-w-2xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        I offer a range of services to help businesses and individuals establish an effective online presence.
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            className="bg-slate-900 p-8 rounded-lg hover:bg-slate-800 transition-colors duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
          >
            <div className="mb-4">{service.icon}</div>
            <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
            <p className="text-gray-400">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;