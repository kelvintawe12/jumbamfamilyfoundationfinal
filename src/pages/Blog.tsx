import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import {
  CalendarIcon,
  ClockIcon,
  UserIcon,
  TagIcon,
  EyeIcon,
  ArrowRightIcon,
  SearchIcon,
  FilterIcon,
  BookOpenIcon,
  HeartIcon,
  MessageCircleIcon,
  ShareIcon,
  BookmarkIcon,
  TrendingUpIcon,
  StarIcon,
  ChevronRightIcon,
  ExternalLinkIcon,
  ImageIcon,
  VideoIcon,
  FileTextIcon,
  GraduationCapIcon,
  HandHelpingIcon,
  HeartHandshakeIcon,
  NewspaperIcon,
  Sparkles,
  ThumbsUpIcon,
  AlertCircleIcon
} from 'lucide-react';

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: {
    name: string;
    avatar: string;
    role: string;
    bio: string;
  };
  category: {
    name: string;
    slug: string;
    color: string;
    icon: React.ReactNode;
  };
  tags: string[];
  publishedAt: string;
  updatedAt?: string;
  readTime: number;
  views: number;
  likes: number;
  comments: number;
  featured: boolean;
  trending: boolean;
  featuredImage: string;
  gallery?: string[];
  videoUrl?: string;
  status: 'published' | 'draft';
  seo: {
    metaTitle: string;
    metaDescription: string;
    keywords: string[];
  };
}

const categories = [
  {
    name: 'All Posts',
    slug: 'all',
    color: 'from-gray-500 to-gray-600',
    icon: <BookOpenIcon className="w-4 h-4" />
  },
  {
    name: 'Impact Stories',
    slug: 'impact',
    color: 'from-green-500 to-emerald-600',
    icon: <TrendingUpIcon className="w-4 h-4" />
  },
  {
    name: 'Scholarships',
    slug: 'scholarships',
    color: 'from-blue-500 to-cyan-600',
    icon: <GraduationCapIcon className="w-4 h-4" />
  },
  {
    name: 'Healthcare',
    slug: 'healthcare',
    color: 'from-red-500 to-pink-600',
    icon: <HeartHandshakeIcon className="w-4 h-4" />
  },
  {
    name: 'Women Empowerment',
    slug: 'empowerment',
    color: 'from-purple-500 to-violet-600',
    icon: <HandHelpingIcon className="w-4 h-4" />
  },
  {
    name: 'News & Updates',
    slug: 'news',
    color: 'from-orange-500 to-amber-600',
    icon: <NewspaperIcon className="w-4 h-4" />
  },
  {
    name: 'Community',
    slug: 'community',
    color: 'from-indigo-500 to-purple-600',
    icon: <UserIcon className="w-4 h-4" />
  }
];

export const Blog: React.FC = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);
  const [featuredPost, setFeaturedPost] = useState<BlogPost | null>(null);

  // Sample blog posts data
  useEffect(() => {
    const samplePosts: BlogPost[] = [
      {
        id: '1',
        title: 'Transforming Lives Through Mobile Healthcare: Our Journey to Remote Villages',
        slug: 'mobile-healthcare-remote-villages',
        excerpt: 'Discover how our mobile health clinics are bringing essential medical care to the most underserved communities in Northwest Cameroon, one village at a time.',
        content: `
          <p>In the heart of Northwest Cameroon, where rugged terrain and ongoing crisis have left communities isolated from essential healthcare services, the Jumbam Family Foundation has pioneered a mobile healthcare initiative that's literally saving lives.</p>
          
          <h2>The Challenge</h2>
          <p>The Anglophone crisis has severely disrupted healthcare infrastructure, leaving over 200,000 people without access to basic medical services. Pregnant women walk for hours to reach the nearest clinic, children miss crucial vaccinations, and chronic conditions go untreated.</p>
          
          <h2>Our Solution</h2>
          <p>Our mobile health clinics bring comprehensive medical care directly to these communities. Equipped with modern medical equipment and staffed by qualified healthcare professionals, these units serve as lifelines for remote villages.</p>
          
          <blockquote>"When I saw the mobile clinic arrive in our village, I knew hope had returned. My pregnant daughter could finally receive proper prenatal care." - Village Elder, Bafut</blockquote>
          
          <h2>Impact by the Numbers</h2>
          <ul>
            <li>2,500+ patients treated in Q1 2024</li>
            <li>500+ children vaccinated</li>
            <li>150+ safe deliveries facilitated</li>
            <li>25 villages reached monthly</li>
          </ul>
          
          <p>Each number represents a life touched, a family reassured, and a community strengthened. This is the ripple effect of compassionate healthcare delivery.</p>
        `,
        author: {
          name: 'Dr. Sarah Mbah',
          avatar: '/team/Bev profil pic_edited.png',
          role: 'Lead Medical Coordinator',
          bio: 'Dr. Sarah Mbah leads our mobile healthcare initiatives with over 10 years of experience in rural medicine.'
        },
        category: {
          name: 'Healthcare',
          slug: 'healthcare',
          color: 'from-red-500 to-pink-600',
          icon: <HeartHandshakeIcon className="w-4 h-4" />
        },
        tags: ['healthcare', 'mobile-clinics', 'rural-medicine', 'crisis-response'],
        publishedAt: '2024-01-20',
        readTime: 8,
        views: 3247,
        likes: 156,
        comments: 24,
        featured: true,
        trending: true,
        featuredImage: '/crisisimage.png',
        status: 'published',
        seo: {
          metaTitle: 'Mobile Healthcare Initiative - Transforming Rural Medical Access',
          metaDescription: 'Learn how JFF mobile health clinics are revolutionizing healthcare delivery in remote Cameroonian villages.',
          keywords: ['mobile healthcare', 'rural medicine', 'Cameroon', 'medical outreach']
        }
      },
      {
        id: '2',
        title: 'From Village Dreams to University Excellence: Fadimatou\'s Inspiring Journey',
        slug: 'fadimatou-scholarship-journey',
        excerpt: 'Follow the remarkable story of Fadimatou Idrissou, a 2022 JFF Scholar who\'s breaking barriers and inspiring a generation while pursuing her medical degree.',
        content: `
          <p>When Fadimatou Idrissou first learned about the JFF scholarship program, she was a bright student in Santa village with big dreams but limited opportunities. Today, she stands as a testament to the transformative power of education and the ripple effect of hope.</p>
          
          <h2>A Humble Beginning</h2>
          <p>Born and raised in Santa, Northwest Region, Fadimatou witnessed firsthand the challenges facing her community. The lack of medical facilities and the impact of the ongoing crisis fueled her determination to become a doctor and return to serve her people.</p>
          
          <h2>The Scholarship That Changed Everything</h2>
          <p>The JFF scholarship didn't just cover tuition—it provided comprehensive support including accommodation, mentorship, mental health services, and a community of fellow scholars. This holistic approach ensured Fadimatou could focus entirely on her studies.</p>
          
          <h2>Academic Excellence</h2>
          <p>Currently in her third year of Medicine at the University of Buea, Fadimatou maintains an impressive 3.8 GPA while actively contributing to her university community:</p>
          
          <ul>
            <li>Leading a student research project on maternal health</li>
            <li>Mentoring 5 younger students from crisis-affected areas</li>
            <li>Recently awarded "Student of Excellence" by the Faculty</li>
            <li>Active member of the University Medical Students Association</li>
          </ul>
          
          <blockquote>"Being a JFF scholar means carrying the hopes of my community. Every late night studying, every exam passed, every small victory—it's all for the greater purpose of returning home as a doctor to serve those who need it most." - Fadimatou Idrissou</blockquote>
          
          <h2>Inspiring Others</h2>
          <p>Fadimatou regularly visits schools in crisis-affected areas, sharing her story and encouraging students to pursue their dreams despite the challenges. Her message is simple but powerful: education is the pathway to healing our communities.</p>
        `,
        author: {
          name: 'Fadimatou Idrissou',
          avatar: '/team/Therese profile pic_edited.png',
          role: '2022 JFF Scholar',
          bio: 'Third-year medical student and community advocate passionate about rural healthcare.'
        },
        category: {
          name: 'Scholarships',
          slug: 'scholarships',
          color: 'from-blue-500 to-cyan-600',
          icon: <GraduationCapIcon className="w-4 h-4" />
        },
        tags: ['scholarship', 'student-success', 'medicine', 'inspiration'],
        publishedAt: '2024-01-18',
        readTime: 6,
        views: 2156,
        likes: 234,
        comments: 45,
        featured: false,
        trending: true,
        featuredImage: '/image.png',
        status: 'published',
        seo: {
          metaTitle: 'Scholar Success Story - Fadimatou\'s Medical Journey',
          metaDescription: 'Inspiring story of a JFF scholarship recipient pursuing medicine and transforming her community.',
          keywords: ['scholarship', 'student success', 'medical education', 'Cameroon']
        }
      },
      {
        id: '3',
        title: 'Empowering Widows: How Mama Rose Built a Thriving Business from Tragedy',
        slug: 'widow-empowerment-success-story',
        excerpt: 'Discover how our women empowerment program transformed a grieving widow into a successful entrepreneur, creating a ripple effect of prosperity in her community.',
        content: `
          <p>Tragedy struck Mama Rose's life when she lost her husband in the ongoing crisis, leaving her to care for four children with no source of income. Today, she stands as a beacon of hope and resilience, running a successful tailoring business that employs other widows in her community.</p>
          
          <h2>From Despair to Determination</h2>
          <p>When Mama Rose first approached our Women Empowerment Center in 2023, she was struggling to feed her children and had lost all hope for the future. The crisis had taken everything from her—her husband, her sense of security, and her dreams.</p>
          
          <h2>The Empowerment Journey</h2>
          <p>Our comprehensive empowerment program provided Mama Rose with:</p>
          
          <ul>
            <li>6-month advanced tailoring training</li>
            <li>Business management and financial literacy courses</li>
            <li>Counseling and emotional support</li>
            <li>200,000 FCFA startup capital</li>
            <li>Ongoing mentorship and market linkage support</li>
          </ul>
          
          <h2>Building a Business Empire</h2>
          <p>Within months of completing her training, Mama Rose established her tailoring shop in the local market. Her dedication to quality and customer service quickly built a loyal customer base.</p>
          
          <blockquote>"I thought my story had ended when I lost my husband, but JFF showed me it was just beginning a new chapter. Now my children see their mother as a businesswoman, not just a widow." - Mama Rose</blockquote>
          
          <h2>Creating a Ripple Effect</h2>
          <p>Success bred success. Mama Rose now:</p>
          <ul>
            <li>Employs 2 other widows in her expanding business</li>
            <li>Serves 20+ regular customers</li>
            <li>Projects 150% return on investment in Year 1</li>
            <li>Plans to open a second location in 2024</li>
          </ul>
          
          <p>Her story embodies our belief that empowering one woman can transform an entire community.</p>
        `,
        author: {
          name: 'Seh Rebecca',
          avatar: '/team/Rebecca pic_edited.png',
          role: 'Co-Founder & VP',
          bio: 'Leading our women empowerment initiatives with passion and dedication.'
        },
        category: {
          name: 'Women Empowerment',
          slug: 'empowerment',
          color: 'from-purple-500 to-violet-600',
          icon: <HandHelpingIcon className="w-4 h-4" />
        },
        tags: ['women-empowerment', 'entrepreneurship', 'success-story', 'microfinance'],
        publishedAt: '2024-01-15',
        readTime: 5,
        views: 1923,
        likes: 189,
        comments: 32,
        featured: false,
        trending: false,
        featuredImage: '/momoojff.png',
        status: 'published',
        seo: {
          metaTitle: 'Women Empowerment Success - Mama Rose\'s Business Journey',
          metaDescription: 'How JFF\'s women empowerment program transformed a widow into a successful entrepreneur.',
          keywords: ['women empowerment', 'entrepreneurship', 'microfinance', 'widows support']
        }
      },
      {
        id: '4',
        title: 'Q1 2024 Impact Report: Measuring Real Change in Numbers and Stories',
        slug: 'q1-2024-impact-report',
        excerpt: 'Our comprehensive quarterly impact report showcasing the measurable difference we\'re making across healthcare, education, and women empowerment initiatives.',
        content: `
          <p>As we close the first quarter of 2024, we're excited to share the incredible progress made possible by our dedicated team, generous supporters, and resilient communities. Every number tells a story of transformation.</p>
          
          <h2>Healthcare Impact</h2>
          <p>Our mobile health clinics and medical outreach programs reached new heights:</p>
          <ul>
            <li><strong>15 medical outreaches completed</strong> across remote villages</li>
            <li><strong>2,500+ patients treated</strong> with comprehensive care</li>
            <li><strong>500+ children vaccinated</strong> against preventable diseases</li>
            <li><strong>8 mobile clinics deployed</strong> to crisis-affected areas</li>
            <li><strong>150+ safe deliveries facilitated</strong> through prenatal care</li>
          </ul>
          
          <h2>Education & Scholarships</h2>
          <p>Investing in education continues to yield remarkable results:</p>
          <ul>
            <li><strong>12 active scholars</strong> in universities across Cameroon</li>
            <li><strong>95% academic success rate</strong> among our scholarship recipients</li>
            <li><strong>3 scholars graduated</strong> in Medicine, Engineering, and Law</li>
            <li><strong>200+ students</strong> received educational materials and support</li>
          </ul>
          
          <h2>Women Empowerment</h2>
          <p>Transforming lives through economic empowerment:</p>
          <ul>
            <li><strong>25 widows completed</strong> skills training programs</li>
            <li><strong>18 businesses launched</strong> with our support</li>
            <li><strong>850,000 FCFA distributed</strong> in microloans</li>
            <li><strong>85% business success rate</strong> among beneficiaries</li>
          </ul>
          
          <h2>Community Development</h2>
          <p>Building stronger, more resilient communities:</p>
          <ul>
            <li><strong>45 families received</strong> emergency aid and support</li>
            <li><strong>3 water wells constructed</strong> in underserved areas</li>
            <li><strong>2 community centers renovated</strong> for public use</li>
            <li><strong>150+ youth engaged</strong> in peace-building programs</li>
          </ul>
          
          <h2>Financial Transparency</h2>
          <p>We believe in complete transparency about how your contributions are used:</p>
          <ul>
            <li><strong>Total Investment:</strong> 15.2M FCFA</li>
            <li><strong>Healthcare:</strong> 45% (6.84M FCFA)</li>
            <li><strong>Education:</strong> 30% (4.56M FCFA)</li>
            <li><strong>Women Empowerment:</strong> 20% (3.04M FCFA)</li>
            <li><strong>Operations:</strong> 5% (0.76M FCFA)</li>
          </ul>
          
          <h2>Looking Ahead</h2>
          <p>As we enter Q2 2024, we're expanding our reach and impact:</p>
          <ul>
            <li>Launching 3 new mobile health clinics</li>
            <li>Expanding scholarship program to include vocational training</li>
            <li>Opening 2 additional women empowerment centers</li>
            <li>Initiating mental health support programs</li>
          </ul>
          
          <blockquote>"Every statistic in this report represents a life changed, a family restored, hope renewed. Thank you for being part of this transformation." - Desmond Jumbam, Co-Founder</blockquote>
        `,
        author: {
          name: 'JFF Impact Team',
          avatar: '/image.png',
          role: 'Foundation Research',
          bio: 'Our dedicated team tracking and measuring impact across all foundation initiatives.'
        },
        category: {
          name: 'Impact Stories',
          slug: 'impact',
          color: 'from-green-500 to-emerald-600',
          icon: <TrendingUpIcon className="w-4 h-4" />
        },
        tags: ['impact-report', 'transparency', 'quarterly-update', 'statistics'],
        publishedAt: '2024-01-12',
        readTime: 10,
        views: 5432,
        likes: 445,
        comments: 67,
        featured: false,
        trending: false,
        featuredImage: '/constantine.png',
        status: 'published',
        seo: {
          metaTitle: 'Q1 2024 Impact Report - Measuring Real Change',
          metaDescription: 'Comprehensive quarterly impact report showing measurable progress across all JFF initiatives.',
          keywords: ['impact report', 'transparency', 'quarterly results', 'foundation metrics']
        }
      }
    ];

    setPosts(samplePosts);
    setFilteredPosts(samplePosts);
    setFeaturedPost(samplePosts.find(post => post.featured) || samplePosts[0]);
    setLoading(false);
  }, []);

  // Filter posts based on category and search
  useEffect(() => {
    let filtered = posts;

    if (selectedCategory !== 'all') {
      filtered = filtered.filter(post => post.category.slug === selectedCategory);
    }

    if (searchQuery) {
      filtered = filtered.filter(post =>
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }

    setFilteredPosts(filtered);
  }, [posts, selectedCategory, searchQuery]);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const formatReadTime = (minutes: number) => {
    return `${minutes} min read`;
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <motion.div
          className="w-8 h-8 border-3 border-blue-600 border-t-transparent rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        />
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>Blog - Jumbam Family Foundation</title>
        <meta name="description" content="Read inspiring stories, impact reports, and updates from the Jumbam Family Foundation's work in healthcare, education, and women empowerment." />
        <meta property="og:title" content="JFF Blog - Stories of Hope and Transformation" />
        <meta property="og:description" content="Discover real stories of impact, transformation, and hope from our foundation's work across Cameroon." />
      </Helmet>

      <section className="py-12 bg-gradient-to-br from-slate-50 via-white to-blue-50 min-h-screen">
        <div className="container mx-auto px-6">
          {/* Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full text-blue-700 font-semibold text-sm mb-6"
              animate={{
                scale: [1, 1.05, 1],
                opacity: [0.8, 1, 0.8]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <Sparkles className="w-4 h-4 mr-2" />
              Stories of Hope & Impact
            </motion.div>
            
            <h1 className="font-heading text-4xl md:text-6xl font-bold text-gray-800 mb-4">
              Foundation <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Blog</span>
            </h1>
            
            <p className="font-body text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Dive deep into real stories of transformation, detailed impact reports, and inspiring journeys from our foundation's work across Cameroon. Every post tells a story of hope restored.
            </p>

            {/* Blog Stats */}
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {[
                { label: 'Blog Posts', value: posts.length, icon: FileTextIcon },
                { label: 'Total Reads', value: '12.4K', icon: EyeIcon },
                { label: 'Community Engagement', value: '98%', icon: HeartIcon },
                { label: 'Stories Published', value: '50+', icon: BookOpenIcon }
              ].map((stat, index) => (
                <div key={index} className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-sm border border-white/50">
                  <stat.icon className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-800">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Search and Filters */}
          <motion.div 
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
              {/* Search Bar */}
              <div className="relative mb-6">
                <SearchIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search stories, topics, or keywords..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>

              {/* Category Filters */}
              <div className="flex items-center mb-4">
                <FilterIcon className="w-5 h-5 text-blue-600 mr-3" />
                <h3 className="text-lg font-bold text-gray-800">Filter by Category</h3>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-7 gap-3">
                {categories.map(category => {
                  const isActive = selectedCategory === category.slug;
                  
                  return (
                    <motion.button
                      key={category.slug}
                      onClick={() => setSelectedCategory(category.slug)}
                      className={`flex items-center justify-center px-4 py-3 rounded-xl font-semibold text-sm transition-all duration-300 ${
                        isActive 
                          ? `bg-gradient-to-r ${category.color} text-white shadow-lg` 
                          : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
                      }`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {category.icon}
                      <span className="ml-2 hidden sm:inline">{category.name}</span>
                    </motion.button>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Featured Post */}
          {featuredPost && (
            <motion.div 
              className="mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl overflow-hidden shadow-2xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  {/* Featured Image */}
                  <div className="relative h-64 lg:h-auto">
                    <img 
                      src={featuredPost.featuredImage} 
                      alt={featuredPost.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="inline-flex items-center px-3 py-1 bg-yellow-500 text-white text-xs font-bold rounded-full">
                        <StarIcon className="w-3 h-3 mr-1" />
                        Featured Story
                      </span>
                    </div>
                  </div>

                  {/* Featured Content */}
                  <div className="p-8 text-white">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-white/20`}>
                        {featuredPost.category.icon}
                        <span className="ml-1">{featuredPost.category.name}</span>
                      </div>
                      {featuredPost.trending && (
                        <div className="inline-flex items-center px-3 py-1 bg-orange-500/20 rounded-full text-xs font-semibold">
                          <TrendingUpIcon className="w-3 h-3 mr-1" />
                          Trending
                        </div>
                      )}
                    </div>

                    <h2 className="text-3xl font-bold mb-4 leading-tight">
                      {featuredPost.title}
                    </h2>

                    <p className="text-white/90 text-lg mb-6 leading-relaxed">
                      {featuredPost.excerpt}
                    </p>

                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center space-x-4 text-sm text-white/80">
                        <div className="flex items-center space-x-2">
                          <img 
                            src={featuredPost.author.avatar} 
                            alt={featuredPost.author.name}
                            className="w-8 h-8 rounded-full object-cover"
                          />
                          <span>{featuredPost.author.name}</span>
                        </div>
                        <span>•</span>
                        <div className="flex items-center space-x-1">
                          <CalendarIcon className="w-4 h-4" />
                          <span>{formatDate(featuredPost.publishedAt)}</span>
                        </div>
                        <span>•</span>
                        <div className="flex items-center space-x-1">
                          <ClockIcon className="w-4 h-4" />
                          <span>{formatReadTime(featuredPost.readTime)}</span>
                        </div>
                      </div>
                    </div>

                    <Link 
                      to={`/blog/${featuredPost.slug}`}
                      className="inline-flex items-center px-6 py-3 bg-white text-blue-600 rounded-xl font-semibold hover:bg-gray-100 transition-colors"
                    >
                      Read Full Story
                      <ArrowRightIcon className="w-5 h-5 ml-2" />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="wait">
              {filteredPosts.filter(post => !post.featured).map((post, index) => (
                <motion.article
                  key={post.id}
                  className="bg-white rounded-3xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-500 group"
                  initial={{ opacity: 0, y: 50, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -50, scale: 0.95 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  layout
                >
                  {/* Post Image */}
                  <div className="relative h-48 overflow-hidden">
                    <motion.img 
                      src={post.featuredImage} 
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <div className={`inline-flex items-center px-3 py-1 rounded-full text-white text-xs font-semibold bg-gradient-to-r ${post.category.color}`}>
                        {post.category.icon}
                        <span className="ml-1">{post.category.name}</span>
                      </div>
                    </div>

                    {/* Trending Badge */}
                    {post.trending && (
                      <div className="absolute top-4 right-4">
                        <div className="inline-flex items-center px-2 py-1 bg-orange-500 rounded-full text-white text-xs font-semibold">
                          <TrendingUpIcon className="w-3 h-3 mr-1" />
                          Trending
                        </div>
                      </div>
                    )}

                    {/* Read Time Overlay */}
                    <div className="absolute bottom-4 right-4 bg-black/70 text-white px-2 py-1 rounded text-xs">
                      <ClockIcon className="w-3 h-3 inline mr-1" />
                      {formatReadTime(post.readTime)}
                    </div>
                  </div>

                  {/* Post Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                      {post.title}
                    </h3>

                    <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
                      {post.excerpt}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.slice(0, 2).map(tag => (
                        <span 
                          key={tag}
                          className="px-2 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded-full"
                        >
                          #{tag}
                        </span>
                      ))}
                      {post.tags.length > 2 && (
                        <span className="px-2 py-1 bg-gray-50 text-gray-600 text-xs font-medium rounded-full">
                          +{post.tags.length - 2} more
                        </span>
                      )}
                    </div>

                    {/* Author and Meta */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <img 
                          src={post.author.avatar} 
                          alt={post.author.name}
                          className="w-8 h-8 rounded-full object-cover"
                        />
                        <div>
                          <div className="text-sm font-semibold text-gray-800">{post.author.name}</div>
                          <div className="text-xs text-gray-500">{formatDate(post.publishedAt)}</div>
                        </div>
                      </div>

                      <Link 
                        to={`/blog/${post.slug}`}
                        className="flex items-center text-blue-600 hover:text-blue-700 transition-colors"
                      >
                        <span className="text-sm font-semibold mr-2">Read More</span>
                        <ArrowRightIcon className="w-4 h-4" />
                      </Link>
                    </div>

                    {/* Engagement Stats */}
                    <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <div className="flex items-center space-x-1">
                          <EyeIcon className="w-4 h-4" />
                          <span>{post.views.toLocaleString()}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <HeartIcon className="w-4 h-4" />
                          <span>{post.likes}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MessageCircleIcon className="w-4 h-4" />
                          <span>{post.comments}</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <button className="p-1 hover:bg-gray-100 rounded transition-colors">
                          <BookmarkIcon className="w-4 h-4 text-gray-400 hover:text-blue-600" />
                        </button>
                        <button className="p-1 hover:bg-gray-100 rounded transition-colors">
                          <ShareIcon className="w-4 h-4 text-gray-400 hover:text-blue-600" />
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </div>

          {/* No Results */}
          {filteredPosts.length === 0 && (
            <motion.div 
              className="text-center py-20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <BookOpenIcon className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No stories found</h3>
              <p className="text-gray-500 mb-6">Try adjusting your search or filter criteria to discover more content.</p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                }}
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-colors"
              >
                Clear Filters
                <ArrowRightIcon className="w-5 h-5 ml-2" />
              </button>
            </motion.div>
          )}

          {/* Newsletter Subscription */}
          <motion.div 
            className="text-center mt-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl p-8 text-white">
              <Sparkles className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">Stay Updated with Our Stories</h3>
              <p className="mb-6 max-w-2xl mx-auto">
                Get the latest impact stories, success updates, and community news delivered directly to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-3 rounded-xl text-gray-800 focus:outline-none focus:ring-2 focus:ring-white/50"
                />
                <button className="px-6 py-3 bg-white text-blue-600 rounded-xl font-semibold hover:bg-gray-100 transition-colors whitespace-nowrap">
                  Subscribe Now
                </button>
              </div>
              <p className="text-sm text-white/80 mt-4">
                Join 500+ community members staying connected with our mission.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};
