import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  CalendarIcon, 
  LinkIcon, 
  MapPinIcon, 
  UsersIcon, 
  AlertTriangleIcon,
  BookOpenIcon,
  HeartIcon,
  ShieldIcon,
  TrendingUpIcon,
  ExternalLinkIcon,
  ChevronDownIcon,
  ChevronUpIcon
} from 'lucide-react';

export const News: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const categories = [
    { id: 'all', label: 'All News', count: 15 },
    { id: 'crisis', label: 'Crisis Updates', count: 8 },
    { id: 'programs', label: 'Our Programs', count: 4 },
    { id: 'recognition', label: 'Recognition', count: 3 }
  ];

  const newsItems = [
    {
      id: 1,
      category: 'crisis',
      title: "Cameroon: NW, SW Crisis - Foundation Launched to Assist War Widows",
      excerpt: "The Jumbam Family Foundation this year is assisting 17 widows from the two regions with 5.5 million FCFA to enable them to rebuild their lives.",
      fullContent: "In a groundbreaking initiative, the Jumbam Family Foundation has launched a comprehensive support program for war widows in Cameroon's Northwest and Southwest regions. The 5.5 million FCFA allocation represents our largest single investment in women's empowerment to date. Each widow receives not only financial support but also business training, psychological counseling, and community reintegration assistance. This program directly addresses the devastating impact of the ongoing Anglophone crisis on families and communities.",
      date: 'April 27, 2021',
      image: '/crisisimage.png',
      source: 'AllAfrica.com',
      featured: true,
      tags: ['Women Empowerment', 'Crisis Response', 'Financial Support']
    },
    {
      id: 2,
      category: 'programs',
      title: "Strengthening His Community Amid Crisis and Loss",
      excerpt: "This crisis hit home this past March with the loss of Jumbam's father, a local councilor in Oku, a subdivision in North West Region, Cameroon.",
      fullContent: "The personal tragedy that struck Francis Jumbam and his family in March 2020 became a catalyst for even greater community commitment. The loss of his father, a respected local councilor in Oku, highlighted the human cost of the ongoing crisis. This experience deepened our founder's resolve to create lasting change and support families facing similar losses. The foundation's response included immediate support for affected families and long-term community strengthening initiatives.",
      date: 'September 28, 2020',
      image: '/crisisimage.png',
      source: 'We are ND',
      featured: false,
      tags: ['Personal Story', 'Community Leadership', 'Resilience']
    },
    {
      id: 3,
      category: 'recognition',
      title: "How it started, how it's going - Cameroon-style",
      excerpt: "This is the story behind a tweet...how a photo of a simple shack of a house next to a Harvard University badge, posted on Twitter, received more than 2 million likes.",
      fullContent: "The viral Twitter post that captured global attention wasn't just about the contrast between humble beginnings and academic achievement. It represented hope for millions of young Africans facing seemingly insurmountable challenges. Francis Jumbam's journey from a simple village home in Cameroon to Harvard University resonated worldwide, generating over 2 million likes and inspiring countless individuals. The post sparked conversations about inequality, opportunity, and the power of education to transform lives.",
      date: 'October 14, 2020',
      image: '/crisisimage.png',
      source: 'BBC World Service',
      featured: true,
      tags: ['Inspiration', 'Education', 'Global Recognition']
    },
    {
      id: 4,
      category: 'crisis',
      title: "Understanding the Anglophone Crisis: A Comprehensive Overview",
      excerpt: "An in-depth analysis of the ongoing conflict that has displaced over 700,000 people and affected 3 million Anglophones in Cameroon.",
      fullContent: "The Anglophone crisis represents one of the most significant humanitarian challenges in Central Africa today. What began as peaceful protests by teachers and lawyers in 2016 has evolved into a complex conflict affecting millions. Our foundation works directly with affected communities, providing emergency relief, education support, and long-term development programs. This crisis has fundamentally changed how we approach community development and emergency response.",
      date: 'March 15, 2023',
      image: '/crisisimage.png',
      source: 'Jumbam Family Foundation',
      featured: false,
      tags: ['Crisis Analysis', 'Humanitarian Response', 'Policy']
    },
    {
      id: 5,
      category: 'programs',
      title: "Mobile Health Clinics Reach Remote Communities",
      excerpt: "Our new mobile health initiative brings essential medical services to villages cut off by the ongoing crisis.",
      fullContent: "In response to the healthcare crisis in conflict-affected areas, we've launched mobile health clinics that serve 15 remote communities monthly. These clinics provide basic medical care, maternal health services, and health education. Our medical team has treated over 3,000 patients in the past year, with a focus on preventive care and emergency medical interventions. The program also trains local health workers to ensure sustainable healthcare delivery.",
      date: 'January 22, 2023',
      image: '/crisisimage.png',
      source: 'Cameroon Tribune',
      featured: false,
      tags: ['Healthcare', 'Mobile Services', 'Community Health']
    }
  ];

  const crisisStats = [
    {
      number: "3M+",
      label: "Anglophones Affected",
      description: "Out of 4 million in NW & SW regions",
      icon: UsersIcon,
      color: "text-red-600"
    },
    {
      number: "700K+",
      label: "Internally Displaced",
      description: "People forced from their homes",
      icon: MapPinIcon,
      color: "text-orange-600"
    },
    {
      number: "63.8K+",
      label: "Refugees in Nigeria",
      description: "Fled across the border",
      icon: AlertTriangleIcon,
      color: "text-yellow-600"
    },
    {
      number: "4K+",
      label: "Civilian Deaths",
      description: "Lives lost since 2017",
      icon: HeartIcon,
      color: "text-red-700"
    }
  ];

  const timelineEvents = [
    {
      year: "1961",
      title: "Cameroon Unification",
      description: "English and French-speaking regions unite, creating linguistic tensions"
    },
    {
      year: "2016",
      title: "Peaceful Protests Begin",
      description: "Teachers and lawyers protest francophone appointments in Anglophone regions"
    },
    {
      year: "2017",
      title: "Armed Conflict Emerges",
      description: "Over 30 separatist groups form, declaring independence as 'Ambazonia'"
    },
    {
      year: "2018-2021",
      title: "Humanitarian Crisis Deepens",
      description: "Massive displacement, school closures, and civilian casualties mount"
    },
    {
      year: "2020",
      title: "JFF Founding",
      description: "Jumbam Family Foundation established to provide crisis response"
    },
    {
      year: "2023",
      title: "Ongoing Response",
      description: "Continued humanitarian assistance and development programs"
    }
  ];

  const filteredNews = selectedCategory === 'all' 
    ? newsItems 
    : newsItems.filter(item => item.category === selectedCategory);

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-secondary mb-4">
            Latest News & <span className="text-primary">Crisis Updates</span>
          </h1>
          <p className="font-body text-xl text-gray-600 max-w-3xl mx-auto">
            Stay informed about our humanitarian work and the ongoing situation in Cameroon's Anglophone regions
          </p>
        </motion.div>

        {/* Crisis Overview Section */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-heading text-3xl font-bold text-secondary flex items-center">
                <AlertTriangleIcon className="mr-3 text-red-600" size={32} />
                About the Anglophone Crisis
              </h2>
              <button
                onClick={() => toggleSection('crisis-overview')}
                className="flex items-center text-primary hover:text-primary/80 transition-colors"
              >
                {expandedSection === 'crisis-overview' ? <ChevronUpIcon size={24} /> : <ChevronDownIcon size={24} />}
              </button>
            </div>
            
            <AnimatePresence>
              {expandedSection === 'crisis-overview' && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <div className="space-y-6">
                    <div className="prose prose-lg max-w-none">
                      <p className="text-gray-700 leading-relaxed">
                        The <strong>Anglophone crisis</strong>, also known as the <strong>Ambazonia war</strong> or the <strong>Cameroon civil war</strong>, 
                        is an ongoing armed conflict in the Republic of Cameroon in Central Africa. The English-speaking people of Cameroon, or 
                        <strong> Anglophones</strong>, who comprise <strong>20% of the population</strong>, have felt marginalized since the unification 
                        of Cameroon in 1961.
                      </p>
                      
                      <p className="text-gray-700 leading-relaxed">
                        At the end of 2016, teachers and lawyers in the Anglophone regions took to the streets in protest against the appointment 
                        of francophone judges and teachers in the Anglophone regions, among other sectoral demands. The government attempted to 
                        quell these peaceful protests through force, escalating tensions dramatically.
                      </p>
                      
                      <p className="text-gray-700 leading-relaxed">
                        Following the suppression of the 2016 protests, more than <strong>30 armed separatist groups</strong> formed in the 
                        Anglophone regions to fight for the independent nation they called <strong>Ambazonia</strong>. The ensuing war between 
                        the separatist forces and government armed forces has led to thousands of civilian deaths, villages being burnt down, 
                        and education systems effectively being disabled with <strong>hundreds of thousands of children</strong> being out of 
                        school for more than four years.
                      </p>
                    </div>

                    {/* Crisis Map */}
                    <div className="my-8">
                      <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                        <h3 className="font-heading text-xl font-bold text-gray-800 mb-4 flex items-center">
                          <MapPinIcon className="mr-2 text-red-600" size={24} />
                          Anglophone Crisis Impact Map
                        </h3>
                        <div className="relative">
                          <img 
                            src="/constantine.png" 
                            alt="UNHCR Anglophone Crisis Cameroon/Nigeria Situation Map showing affected regions, refugee movements, and displacement patterns" 
                            className="w-full h-auto rounded-lg shadow-lg border border-gray-300"
                          />
                          <div className="absolute bottom-2 right-2 bg-black/70 text-white px-3 py-1 rounded text-xs">
                            Source: UNHCR - UN Refugee Agency
                          </div>
                        </div>
                        <p className="text-sm text-gray-600 mt-3 italic">
                          This UNHCR map illustrates the extent of the Anglophone crisis, showing affected regions in Northwest and Southwest Cameroon, 
                          refugee movements to Nigeria, and the scale of displacement affecting over 20,485 registered asylum seekers.
                        </p>
                      </div>
                    </div>
                    
                    {/* Crisis Statistics */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
                      {crisisStats.map((stat, index) => (
                        <motion.div
                          key={index}
                          className="text-center p-4 bg-gray-50 rounded-xl"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.1 * index }}
                        >
                          <stat.icon className={`mx-auto mb-2 ${stat.color}`} size={32} />
                          <div className={`text-2xl font-bold ${stat.color}`}>{stat.number}</div>
                          <div className="font-semibold text-gray-800">{stat.label}</div>
                          <div className="text-sm text-gray-600">{stat.description}</div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Timeline Section */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-heading text-3xl font-bold text-secondary flex items-center">
                <BookOpenIcon className="mr-3 text-blue-600" size={32} />
                Crisis Timeline
              </h2>
              <button
                onClick={() => toggleSection('timeline')}
                className="flex items-center text-primary hover:text-primary/80 transition-colors"
              >
                {expandedSection === 'timeline' ? <ChevronUpIcon size={24} /> : <ChevronDownIcon size={24} />}
              </button>
            </div>
            
            <AnimatePresence>
              {expandedSection === 'timeline' && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="space-y-6">
                    {timelineEvents.map((event, index) => (
                      <motion.div
                        key={index}
                        className="flex items-start space-x-4 p-4 bg-gray-50 rounded-xl"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 * index }}
                      >
                        <div className="bg-primary text-white px-3 py-1 rounded-full font-bold text-sm min-w-fit">
                          {event.year}
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-800 mb-1">{event.title}</h4>
                          <p className="text-gray-600">{event.description}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* News Categories */}
        <div className="flex flex-wrap gap-4 mb-8">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-primary text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {category.label} ({category.count})
            </button>
          ))}
        </div>

        {/* News Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          layout
        >
          <AnimatePresence>
            {filteredNews.map((item) => (
              <NewsCard key={item.id} {...item} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Newsletter Signup */}
        <motion.div 
          className="bg-gradient-to-r from-primary to-yellow-500 p-8 rounded-2xl text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="font-heading text-3xl font-bold mb-4">
              Stay Updated on Our Mission
            </h3>
            <p className="font-body text-xl mb-6 opacity-90">
              Subscribe to receive updates about our humanitarian work and the ongoing situation in Cameroon
            </p>
            <form className="flex flex-col sm:flex-row gap-4">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-1 px-6 py-4 rounded-lg border-none focus:outline-none focus:ring-2 focus:ring-white text-gray-800" 
                required 
              />
              <button 
                type="submit" 
                className="bg-white text-primary px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-all duration-300 hover:scale-105"
              >
                Subscribe Now
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

interface NewsCardProps {
  id: number;
  category: string;
  title: string;
  excerpt: string;
  fullContent: string;
  date: string;
  image: string;
  source: string;
  featured: boolean;
  tags: string[];
}

const NewsCard: React.FC<NewsCardProps> = ({
  title,
  excerpt,
  fullContent,
  date,
  image,
  source,
  featured,
  tags
}) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
      className={`bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 ${
        featured ? 'ring-2 ring-primary ring-opacity-20' : ''
      }`}
    >
      <div className="relative">
        <img src={image} alt={title} className="w-full h-48 object-cover" />
        {featured && (
          <div className="absolute top-4 left-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-bold">
            Featured
          </div>
        )}
      </div>
      
      <div className="p-6">
        <div className="flex items-center text-sm text-gray-500 mb-3">
          <CalendarIcon className="h-4 w-4 mr-1" />
          <span>{date}</span>
          <span className="mx-2">•</span>
          <span className="font-medium">{source}</span>
        </div>
        
        <h3 className="font-heading text-xl font-bold mb-3 text-gray-800 leading-tight">
          {title}
        </h3>
        
        <p className="font-body text-gray-600 mb-4 leading-relaxed">
          {expanded ? fullContent : excerpt}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <div className="flex items-center justify-between">
          <button
            onClick={() => setExpanded(!expanded)}
            className="text-primary font-medium hover:text-primary/80 transition-colors flex items-center"
          >
            {expanded ? 'Read Less' : 'Read More'}
            <ChevronDownIcon 
              className={`ml-1 h-4 w-4 transition-transform ${expanded ? 'rotate-180' : ''}`} 
            />
          </button>
          
          <a 
            href="#" 
            className="inline-flex items-center text-gray-500 hover:text-primary transition-colors"
          >
            <ExternalLinkIcon className="h-4 w-4" />
          </a>
        </div>
      </div>
    </motion.div>
  );
};