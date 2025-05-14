import { motion } from 'framer-motion';

const ProcessPage = () => {
  const steps = [
    {
      number: '01',
      title: 'Discovery',
      description: 'Understanding your business goals, target audience, and project requirements through in-depth discussions and research.'
    },
    {
      number: '02',
      title: 'Strategy',
      description: 'Developing a comprehensive plan that outlines the project scope, timeline, and approach to achieve your goals.'
    },
    {
      number: '03',
      title: 'Design',
      description: 'Creating wireframes and visual designs that align with your brand identity and provide an exceptional user experience.'
    },
    {
      number: '04',
      title: 'Development',
      description: 'Building your website or application using modern, efficient code that ensures performance, security, and scalability.'
    },
    {
      number: '05',
      title: 'Testing',
      description: 'Rigorous quality assurance to ensure your website works flawlessly across all devices and browsers.'
    },
    {
      number: '06',
      title: 'Launch',
      description: 'Deploying your website with attention to detail, ensuring everything is properly set up for success.'
    },
    {
      number: '07',
      title: 'Support',
      description: 'Providing ongoing maintenance and support to keep your website secure, up-to-date, and performing optimally.'
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
        My Process
      </motion.h1>
      <motion.p
        className="text-xl text-gray-400 mb-12 max-w-2xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        A structured approach to ensure your project is delivered successfully, on time, and exceeds expectations.
      </motion.p>

      <div className="space-y-8">
        {steps.map((step, index) => (
          <motion.div
            key={step.number}
            className="relative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
          >
            <div className="flex flex-col md:flex-row gap-6 bg-slate-900 p-8 rounded-lg relative z-10">
              <div className="flex-shrink-0">
                <span className="text-4xl font-bold text-blue-500">{step.number}</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-gray-400">{step.description}</p>
              </div>
            </div>
            {index < steps.length - 1 && (
              <div className="absolute left-12 top-full w-0.5 h-8 bg-blue-500 opacity-30 z-0"></div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProcessPage;