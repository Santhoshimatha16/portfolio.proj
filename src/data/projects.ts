export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
  technologies: string[];
  url?: string;
  content: string;
}

export const projects: Project[] = [
  {
    id: 'coastal-retreat',
    title: 'Coastal Retreat',
    description: 'A luxury beach resort website with booking functionality',
    imageUrl: 'https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg',
    category: 'Web Design',
    technologies: ['React', 'TailwindCSS', 'Framer Motion', 'Supabase'],
    url: 'https://example.com/coastal-retreat',
    content: `
      # Coastal Retreat

      ## Project Overview
      Coastal Retreat needed a website that showcased their luxury accommodations while providing an easy booking experience for their guests. The design needed to reflect the calming ocean aesthetic while maintaining functionality.

      ## The Challenge
      Creating a booking system that was both user-friendly and efficient, while ensuring the design reflected the high-end nature of the resort.

      ## The Solution
      I developed a custom booking engine that integrates seamlessly with their existing management system. The design uses a calming blue color palette that evokes the ocean, with large imagery to showcase the resort's amenities.

      ## Results
      Since launching the new website, Coastal Retreat has seen a 45% increase in online bookings and a 30% reduction in booking-related phone calls.
    `
  },
  {
    id: 'artisan-cafe',
    title: 'Artisan Cafe',
    description: 'Branding and website for an upscale urban cafe',
    imageUrl: 'https://images.pexels.com/photos/1855214/pexels-photo-1855214.jpeg',
    category: 'Web Design & Branding',
    technologies: ['Figma', 'WordPress', 'Custom PHP', 'GSAP'],
    url: 'https://example.com/artisan-cafe',
    content: `
      # Artisan Cafe

      ## Project Overview
      Artisan Cafe needed a complete brand overhaul and a new website to match their upscale offerings and atmosphere.

      ## The Challenge
      Creating a cohesive brand identity that worked across digital and print materials, while ensuring the website effectively showcased their menu and drove reservations.

      ## The Solution
      I developed a sophisticated brand identity with a custom typeface and earthy color palette. The website features high-quality food photography and an intuitive reservation system.

      ## Results
      The rebrand was featured in several local publications, and online reservations increased by 60% in the first three months.
    `
  },
  {
    id: 'eco-housing',
    title: 'Eco Housing Initiative',
    description: 'Website for a sustainable housing development',
    imageUrl: 'https://images.pexels.com/photos/2119713/pexels-photo-2119713.jpeg',
    category: 'Web Development',
    technologies: ['React', 'NextJS', 'ThreeJS', 'Sanity CMS'],
    url: 'https://example.com/eco-housing',
    content: `
      # Eco Housing Initiative

      ## Project Overview
      The Eco Housing Initiative needed a website that would showcase their sustainable housing projects and educate visitors about eco-friendly living.

      ## The Challenge
      Creating an engaging and educational website that effectively demonstrated the benefits of sustainable housing without overwhelming visitors with technical information.

      ## The Solution
      I developed an interactive website featuring 3D models of the housing developments, allowing users to explore the eco-friendly features. The site also includes educational resources and a newsletter signup to keep potential buyers informed.

      ## Results
      The website has generated over 200 qualified leads and has been praised for its innovative approach to showcasing sustainable housing.
    `
  },
  {
    id: 'fitness-app',
    title: 'FitTrack',
    description: 'Mobile fitness tracking application',
    imageUrl: 'https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg',
    category: 'Mobile Development',
    technologies: ['React Native', 'Firebase', 'TypeScript', 'Apple HealthKit'],
    url: 'https://example.com/fittrack',
    content: `
      # FitTrack

      ## Project Overview
      FitTrack needed a mobile application that would help users track their fitness goals and progress in a user-friendly way.

      ## The Challenge
      Creating an intuitive interface that would make fitness tracking simple while providing meaningful insights into user progress.

      ## The Solution
      I developed a mobile application that integrates with various health tracking devices and provides personalized workout recommendations based on user goals and progress.

      ## Results
      FitTrack has maintained a 4.8/5 star rating on app stores with over 50,000 downloads in the first year.
    `
  },
  {
    id: 'tech-conference',
    title: 'TechCon',
    description: 'Website for an annual technology conference',
    imageUrl: 'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg',
    category: 'Web Design',
    technologies: ['GatsbyJS', 'GraphQL', 'Stripe Integration', 'Netlify'],
    url: 'https://example.com/techcon',
    content: `
      # TechCon

      ## Project Overview
      TechCon needed a website for their annual technology conference that would facilitate ticket sales and provide information about speakers and sessions.

      ## The Challenge
      Creating a website that could handle high traffic volumes during ticket release dates while providing a seamless user experience for browsing the conference schedule.

      ## The Solution
      I developed a high-performance website using GatsbyJS with a custom schedule builder that allows attendees to create personalized agendas for the conference.

      ## Results
      The website handled over 10,000 concurrent users during peak ticket sales with zero downtime, and ticket sales for the conference sold out 30% faster than the previous year.
    `
  },
  {
    id: 'organic-farm',
    title: 'Green Valley Farms',
    description: 'E-commerce site for an organic produce delivery service',
    imageUrl: 'https://images.pexels.com/photos/2255935/pexels-photo-2255935.jpeg',
    category: 'E-commerce',
    technologies: ['Shopify', 'Custom Liquid', 'AlpineJS', 'Klaviyo'],
    url: 'https://example.com/green-valley',
    content: `
      # Green Valley Farms

      ## Project Overview
      Green Valley Farms needed an e-commerce website to sell their organic produce directly to consumers through a subscription box model.

      ## The Challenge
      Creating a subscription-based e-commerce solution that would allow customers to customize their produce boxes while maintaining inventory control for the farm.

      ## The Solution
      I developed a custom Shopify theme with a subscription management system that allows customers to set preferences and modify their boxes on a weekly basis.

      ## Results
      Green Valley Farms has seen a 25% increase in customer retention since launching the new website, and their average order value has increased by 15%.
    `
  },
];