import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Calendar, Clock } from 'lucide-react';

const BlogPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const blogPosts = [
    {
      id: 1,
      title: 'The Importance of Responsive Design in 2025',
      excerpt: 'With the increasing variety of devices used to access the web, responsive design has never been more important. Learn why and how to implement it effectively.',
      date: 'May 15, 2025',
      readTime: '5 min read',
      category: 'Web Design',
      imageUrl: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg'
    },
    {
      id: 2,
      title: 'How to Optimize Your Website for Speed',
      excerpt: 'Website speed is crucial for user experience and SEO. Discover practical tips to make your website load faster and perform better.',
      date: 'April 28, 2025',
      readTime: '6 min read',
      category: 'Performance',
      imageUrl: 'https://images.pexels.com/photos/38568/apple-imac-ipad-workplace-38568.jpeg'
    },
    {
      id: 3,
      title: 'The Role of AI in Modern Web Development',
      excerpt: 'Artificial Intelligence is transforming how we build and interact with websites. Learn how AI is being used in web development today.',
      date: 'April 10, 2025',
      readTime: '8 min read',
      category: 'Technology',
      imageUrl: 'https://images.pexels.com/photos/5473298/pexels-photo-5473298.jpeg'
    },
    {
      id: 4,
      title: 'Designing for Accessibility: A Comprehensive Guide',
      excerpt: 'Making your website accessible to all users is not just good practice—it\'s essential. This guide covers everything you need to know.',
      date: 'March 22, 2025',
      readTime: '10 min read',
      category: 'Accessibility',
      imageUrl: 'https://images.pexels.com/photos/196645/pexels-photo-196645.jpeg'
    },
    {
      id: 5,
      title: 'The Future of CSS: What\'s Coming in 2025 and Beyond',
      excerpt: 'CSS continues to evolve with new features and capabilities. Stay ahead of the curve with this look at upcoming CSS developments.',
      date: 'March 5, 2025',
      readTime: '7 min read',
      category: 'CSS',
      imageUrl: 'https://images.pexels.com/photos/270360/pexels-photo-270360.jpeg'
    },
    {
      id: 6,
      title: 'Building a Portfolio That Gets You Hired',
      excerpt: 'Your portfolio is often your first impression with potential clients or employers. Learn how to make it stand out and showcase your best work.',
      date: 'February 18, 2025',
      readTime: '9 min read',
      category: 'Career',
      imageUrl: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg'
    }
  ];
  
  const filteredPosts = blogPosts.filter(post => 
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.category.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  return (
    <div className="py-16">
      <motion.h1
        className="text-4xl md:text-5xl font-bold text-white mb-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Blog
      </motion.h1>
      <motion.p
        className="text-xl text-gray-400 mb-12 max-w-2xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        Thoughts, insights, and updates from my journey as a web designer and developer.
      </motion.p>
      
      <motion.div
        className="mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Search articles..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-slate-900 border border-slate-700 rounded-full pl-12 pr-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </motion.div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post, index) => (
            <motion.article
              key={post.id}
              className="bg-slate-900 rounded-lg overflow-hidden hover:shadow-lg hover:shadow-blue-900/20 transition-all duration-300 hover:-translate-y-1"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={post.imageUrl} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-xs bg-blue-600/20 text-blue-400 px-2 py-1 rounded-full">
                    {post.category}
                  </span>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center text-gray-400 text-xs">
                      <Calendar size={12} className="mr-1" />
                      {post.date}
                    </div>
                    <div className="flex items-center text-gray-400 text-xs">
                      <Clock size={12} className="mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                </div>
                <h2 className="text-xl font-bold text-white mb-3 hover:text-blue-400 transition-colors duration-200">
                  <a href="#">{post.title}</a>
                </h2>
                <p className="text-gray-400 mb-4">{post.excerpt}</p>
                <a 
                  href="#" 
                  className="text-blue-500 hover:text-blue-400 font-medium inline-flex items-center"
                >
                  Read more
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </motion.article>
          ))
        ) : (
          <div className="col-span-3 text-center py-12">
            <p className="text-gray-400">No posts found matching your search criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogPage;