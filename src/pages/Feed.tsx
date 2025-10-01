import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import {
  HeartIcon,
  MessageCircleIcon,
  ShareIcon,
  ThumbsUpIcon,
  LaughIcon,
  FrownIcon,
  AngryIcon,
  UserIcon,
  CalendarIcon,
  SendIcon,
  MoreHorizontalIcon,
  MapPinIcon,
  EyeIcon,
  BookmarkIcon,
  GraduationCapIcon,
  HandHelpingIcon,
  UsersIcon,
  TrendingUpIcon,
  ImageIcon,
  VideoIcon,
  FileTextIcon,
  ExternalLinkIcon,
  CheckCircleIcon,
  ClockIcon,
  StarIcon,
  AwardIcon,
  HeartHandshakeIcon,
  Sparkles,
  ChevronDownIcon,
  ChevronUpIcon,
  PinIcon,
  ArrowRightIcon,
  MailIcon,
  PhoneIcon,
  FacebookIcon,
  TwitterIcon,
  InstagramIcon,
  YoutubeIcon,
  LinkedinIcon,
  AlertCircleIcon
} from 'lucide-react';

interface Comment {
  id: string;
  author: string;
  content: string;
  date: string;
  avatar?: string;
  role?: string;
  likes: number;
  replies?: Comment[];
}

interface Reaction {
  type: 'like' | 'love' | 'laugh' | 'sad' | 'angry';
  count: number;
  userReacted: boolean;
}

interface Post {
  id: string;
  author: string;
  avatar?: string;
  role?: string;
  date: string;
  location?: string;
  content: string;
  image?: string;
  video?: string;
  document?: string;
  isPinned?: boolean;
  category: 'impact' | 'scholarship' | 'healthcare' | 'empowerment' | 'news' | 'story' | 'urgent';
  tags: string[];
  likes: number;
  userLiked: boolean;
  bookmarked: boolean;
  views: number;
  reactions: Reaction[];
  comments: Comment[];
  showComments: boolean;
  shares: number;
  engagement: number;
  cta?: {
    label: string;
    link: string;
    icon: React.ElementType;
  };
}

const reactionIcons = {
  like: ThumbsUpIcon,
  love: HeartIcon,
  laugh: LaughIcon,
  sad: FrownIcon,
  angry: AngryIcon
};

const reactionColors = {
  like: 'text-blue-500',
  love: 'text-red-500',
  laugh: 'text-yellow-500',
  sad: 'text-blue-400',
  angry: 'text-red-600'
};

const categoryIcons = {
  impact: TrendingUpIcon,
  scholarship: GraduationCapIcon,
  healthcare: HeartHandshakeIcon,
  empowerment: HandHelpingIcon,
  news: FileTextIcon,
  story: StarIcon,
  urgent: AlertCircleIcon
};

const categoryColors = {
  impact: 'from-green-500 to-emerald-600',
  scholarship: 'from-blue-500 to-cyan-600',
  healthcare: 'from-red-500 to-pink-600',
  empowerment: 'from-purple-500 to-violet-600',
  news: 'from-orange-500 to-amber-600',
  story: 'from-yellow-500 to-orange-600',
  urgent: 'from-red-600 to-rose-600'
};

const socialIcons = {
  facebook: FacebookIcon,
  twitter: TwitterIcon,
  instagram: InstagramIcon,
  youtube: YoutubeIcon,
  linkedin: LinkedinIcon
};

export const Feed: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([
    {
      id: '1',
      author: 'Jumbam Family Foundation',
      avatar: '/assets/jff-logo.png',
      role: 'Official Foundation Account',
      date: '2025-09-28',
      location: 'Bamenda, Northwest Region, Cameroon',
      content: '🏥 HEALTH OUTREACH SUCCESS: Our mobile health clinic completed a 7-day medical outreach in Bamenda, serving over 700 families affected by the Anglophone Crisis.\n\nHighlights:\n• 250+ children received vaccinations\n• 200+ women accessed prenatal and postnatal care\n• 100+ elderly treated for chronic illnesses\n• 400+ community members attended health education workshops on hygiene and disease prevention\n\nThis initiative aligns with our mission to provide critical healthcare services to crisis-affected communities. Our volunteer doctors and nurses worked tirelessly to bring hope and healing. Support our efforts to reach more communities!\n\n#HealthcareForAll #AnglophoneCrisis #RestoringHope',
      image: '/assets/bamenda-clinic.jpg',
      category: 'healthcare',
      tags: ['healthcare', 'bamenda', 'outreach', 'crisis-response', 'community-health'],
      isPinned: true,
      likes: 245,
      userLiked: false,
      bookmarked: false,
      views: 3876,
      shares: 34,
      engagement: 92,
      reactions: [
        { type: 'like', count: 145, userReacted: false },
        { type: 'love', count: 98, userReacted: false },
        { type: 'laugh', count: 2, userReacted: false },
        { type: 'sad', count: 0, userReacted: false },
        { type: 'angry', count: 0, userReacted: false }
      ],
      comments: [
        {
          id: '1',
          author: 'Dr. Elizabeth Nfor',
          role: 'Lead Medical Volunteer',
          content: 'The gratitude from the families we served was overwhelming. Thank you, JFF, for enabling us to make a difference!',
          date: '2025-09-28',
          avatar: '/assets/volunteer-elizabeth.jpg',
          likes: 18,
          replies: [
            {
              id: '1-1',
              author: 'Community Member',
              content: 'God bless you, Dr. Nfor, and the entire JFF team!',
              date: '2025-09-28',
              avatar: '/assets/community-member.png',
              likes: 5
            }
          ]
        }
      ],
      showComments: false,
      cta: {
        label: 'Support Our Health Initiatives',
        link: '/donate/health',
        icon: HeartHandshakeIcon
      }
    },
    {
      id: '2',
      author: 'Mirabel Ngeh',
      avatar: '/assets/mirabel-profile.jpg',
      role: '2023 JFF Scholar',
      date: '2025-09-25',
      location: 'University of Buea, Cameroon',
      content: '📚 MY JOURNEY: As a JFF scholar studying Nursing, I’m proud to share my progress:\n\n🎓 3.9 GPA in my second year\n💡 Leading a community health awareness project\n🤝 Mentoring 8 young girls from conflict zones\n🏆 Awarded "Future Healthcare Leader" by my faculty\n\nThe Anglophone Crisis took so much from my family, but JFF gave me a chance to rebuild our future. My dream is to return to my village in Kumbo as a nurse and serve those affected by the crisis. To my fellow scholars: Let’s keep pushing forward!\n\n#Scholarship #Education #Hope',
      image: '/assets/mirabel-university.jpg',
      category: 'scholarship',
      tags: ['scholarship', 'nursing', 'education', 'inspiration', 'kumbo'],
      likes: 312,
      userLiked: false,
      bookmarked: false,
      views: 2456,
      shares: 56,
      engagement: 89,
      reactions: [
        { type: 'like', count: 178, userReacted: false },
        { type: 'love', count: 132, userReacted: false },
        { type: 'laugh', count: 0, userReacted: false },
        { type: 'sad', count: 2, userReacted: false },
        { type: 'angry', count: 0, userReacted: false }
      ],
      comments: [
        {
          id: '1',
          author: 'Desmond Jumbam',
          role: 'Co-Founder, JFF',
          content: 'Mirabel, your determination inspires us all! You’re a shining example of how education can transform lives. Keep up the amazing work! 🌟',
          date: '2025-09-25',
          avatar: '/assets/desmond-profile.jpg',
          likes: 52
        },
        {
          id: '2',
          author: 'Grace Mbi',
          role: '2023 JFF Scholar',
          content: 'You’re a role model, Mirabel! Your success motivates me in my studies. Let’s keep supporting each other! 💪',
          date: '2025-09-25',
          avatar: '/assets/grace-profile.jpg',
          likes: 25
        }
      ],
      showComments: false,
      cta: {
        label: 'Support Our Scholarship Program',
        link: '/donate/scholarships',
        icon: GraduationCapIcon
      }
    },
    {
      id: '3',
      author: 'Therese Jumbam',
      avatar: '/assets/therese-profile.jpg',
      role: 'Co-Founder & Program Director',
      date: '2025-09-20',
      location: 'Kumbo, Northwest Region, Cameroon',
      content: '👩‍💼 EMPOWERMENT MILESTONE: We’re thrilled to announce that our 25th widow, Mama Agnes, has launched her bakery in Kumbo! After losing her husband in the Anglophone Crisis, Agnes joined our women empowerment program:\n\n🍞 Completed 8-month baking and business management training\n💰 Received 250,000 FCFA startup capital\n🏪 Opened "Hope Bakery" in Kumbo market\n👥 Employs 3 other widows\n📈 Projects 200% ROI in her first year\n\nAgnes’ story shows the power of resilience and support. She’s not just rebuilding her life but lifting others too. Join us in celebrating her success!\n\n"I thought I had lost everything, but JFF gave me the tools to write a new story." - Mama Agnes\n\n#WomenEmpowerment #Microfinance #Hope',
      image: '/assets/hope-bakery.jpg',
      category: 'empowerment',
      tags: ['women-empowerment', 'microfinance', 'kumbo', 'success-story', 'small-business'],
      likes: 267,
      userLiked: false,
      bookmarked: false,
      views: 4123,
      shares: 89,
      engagement: 94,
      reactions: [
        { type: 'like', count: 145, userReacted: false },
        { type: 'love', count: 120, userReacted: false },
        { type: 'laugh', count: 0, userReacted: false },
        { type: 'sad', count: 2, userReacted: false },
        { type: 'angry', count: 0, userReacted: false }
      ],
      comments: [
        {
          id: '1',
          author: 'Mama Agnes',
          role: 'Beneficiary',
          content: 'JFF turned my tears into hope. My children now see a future, and I’m helping others too. Thank you! 🙏❤️',
          date: '2025-09-20',
          avatar: '/assets/agnes-profile.jpg',
          likes: 78
        }
      ],
      showComments: false,
      cta: {
        label: 'Support Women Empowerment',
        link: '/donate/empowerment',
        icon: HandHelpingIcon
      }
    },
    {
      id: '4',
      author: 'JFF Impact Team',
      avatar: '/assets/jff-logo.png',
      role: 'Official Foundation Account',
      date: '2025-09-15',
      location: 'Multiple Locations, Cameroon',
      content: '📊 2025 Q3 IMPACT REPORT\n\nWe’re proud to share our progress in supporting communities affected by the Anglophone Crisis:\n\n🏥 HEALTHCARE:\n• 20 medical outreaches conducted\n• 3,200+ patients treated\n• 700+ children vaccinated\n• 10 mobile clinics deployed\n\n🎓 EDUCATION:\n• 15 scholars in universities\n• 96% academic success rate\n• 5 scholars graduated (Medicine, Nursing, Education)\n• 300+ students received supplies\n\n👩‍💼 WOMEN EMPOWERMENT:\n• 30 widows trained in business skills\n• 22 businesses launched\n• 1.2M FCFA in microloans disbursed\n• 90% business success rate\n\n🏘️ COMMUNITY SUPPORT:\n• 60 families received emergency aid\n• 4 water wells constructed\n• 3 community centers rebuilt\n• 200+ youth in peace programs\n\nTotal Lives Impacted: 7,500+\nTotal Investment: 22.5M FCFA\nCommunity Satisfaction: 97%\n\nDownload our full report to see the stories behind the numbers!\n\n#ImpactReport #Transparency #AnglophoneCrisis',
      document: '/assets/reports/q3-2025-impact.pdf',
      category: 'impact',
      tags: ['impact-report', 'transparency', 'quarterly-update', 'statistics', 'crisis-response'],
      likes: 532,
      userLiked: false,
      bookmarked: false,
      views: 10324,
      shares: 156,
      engagement: 95,
      reactions: [
        { type: 'like', count: 320, userReacted: false },
        { type: 'love', count: 210, userReacted: false },
        { type: 'laugh', count: 0, userReacted: false },
        { type: 'sad', count: 2, userReacted: false },
        { type: 'angry', count: 0, userReacted: false }
      ],
      comments: [
        {
          id: '1',
          author: 'Dr. Ulrick Kanmounye',
          role: 'Data Strategist, JFF',
          content: 'Every number here represents a life touched, a family supported, and a community strengthened. Thank you for believing in our mission! 📈',
          date: '2025-09-15',
          avatar: '/assets/ulrick-profile.jpg',
          likes: 45
        }
      ],
      showComments: false,
      cta: {
        label: 'View Full Report',
        link: '/assets/reports/q3-2025-impact.pdf',
        icon: FileTextIcon
      }
    },
    {
      id: '5',
      author: 'JFF Communications',
      avatar: '/assets/jff-logo.png',
      role: 'Official Foundation Account',
      date: '2025-09-10',
      location: 'Buea, Southwest Region, Cameroon',
      content: '🚨 URGENT APPEAL: The Anglophone Crisis has displaced 700,000+ people, including 200,000 children out of school. We’re launching an emergency education fund to help 500 children return to school in safe zones by October 2025.\n\nOur goal: Raise 10M FCFA to provide:\n• School fees and uniforms\n• Learning materials\n• Psychosocial support\n• Safe transportation\n\nEvery contribution counts. Help us give these children a chance at a future!\n\n#EducationForAll #AnglophoneCrisis #UrgentAppeal',
      image: '/assets/displaced-children.jpg',
      category: 'urgent',
      tags: ['urgent', 'education', 'displacement', 'crisis-response', 'children'],
      likes: 456,
      userLiked: false,
      bookmarked: false,
      views: 8923,
      shares: 245,
      engagement: 93,
      reactions: [
        { type: 'like', count: 230, userReacted: false },
        { type: 'love', count: 180, userReacted: false },
        { type: 'laugh', count: 0, userReacted: false },
        { type: 'sad', count: 45, userReacted: false },
        { type: 'angry', count: 1, userReacted: false }
      ],
      comments: [
        {
          id: '1',
          author: 'Community Supporter',
          role: 'Donor',
          content: 'Donated! Let’s get these kids back in school. Keep up the great work, JFF!',
          date: '2025-09-10',
          avatar: '/assets/supporter-profile.jpg',
          likes: 32
        }
      ],
      showComments: false,
      cta: {
        label: 'Donate Now',
        link: '/donate/emergency-fund',
        icon: HeartIcon
      }
    },
    {
      id: '6',
      author: 'BBC World Service',
      avatar: '/assets/bbc-logo.png',
      role: 'Media Partner',
      date: '2020-10-14',
      location: 'Global',
      content: '📰 FEATURE STORY: The Jumbam Family Foundation’s inspiring journey began with a tweet that went viral, showcasing a shack next to a Harvard badge, earning over 2M likes. Founded in response to the tragic loss of Ngek Constantine Jumbam in the Anglophone Crisis, JFF has supported over 50 widows and countless families.\n\nRead the full story on our website to learn how JFF is transforming pain into hope across Cameroon.\n\n#AnglophoneCrisis #Inspiration #Cameroon',
      document: 'https://www.bbc.com/news/world-africa-54523895',
      category: 'news',
      tags: ['news', 'media', 'anglophone-crisis', 'inspiration', 'cameroon'],
      likes: 623,
      userLiked: false,
      bookmarked: false,
      views: 15234,
      shares: 342,
      engagement: 97,
      reactions: [
        { type: 'like', count: 350, userReacted: false },
        { type: 'love', count: 250, userReacted: false },
        { type: 'laugh', count: 0, userReacted: false },
        { type: 'sad', count: 22, userReacted: false },
        { type: 'angry', count: 1, userReacted: false }
      ],
      comments: [
        {
          id: '1',
          author: 'Global Supporter',
          role: 'Reader',
          content: 'This story moved me to tears. JFF’s work is incredible. How can I support from abroad?',
          date: '2020-10-14',
          avatar: '/assets/global-supporter.jpg',
          likes: 65
        }
      ],
      showComments: false,
      cta: {
        label: 'Read Full Story',
        link: 'https://www.bbc.com/news/world-africa-54523895',
        icon: ExternalLinkIcon
      }
    }
  ]);

  const [newComment, setNewComment] = useState<{ [key: string]: string }>({});
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [showFilters, setShowFilters] = useState(false);
  const [sortBy, setSortBy] = useState<'date' | 'engagement' | 'likes'>('date');
  const [searchQuery, setSearchQuery] = useState('');
  const [donationModalOpen, setDonationModalOpen] = useState(false);

  const filters = [
    { id: 'all', label: 'All Posts', icon: UsersIcon },
    { id: 'impact', label: 'Impact', icon: TrendingUpIcon },
    { id: 'scholarship', label: 'Scholarships', icon: GraduationCapIcon },
    { id: 'healthcare', label: 'Healthcare', icon: HeartHandshakeIcon },
    { id: 'empowerment', label: 'Empowerment', icon: HandHelpingIcon },
    { id: 'news', label: 'News', icon: FileTextIcon },
    { id: 'story', label: 'Stories', icon: StarIcon },
    { id: 'urgent', label: 'Urgent Appeals', icon: AlertCircleIcon }
  ];

  const sortOptions = [
    { id: 'date', label: 'Most Recent', icon: ClockIcon },
    { id: 'engagement', label: 'Most Engaged', icon: TrendingUpIcon },
    { id: 'likes', label: 'Most Liked', icon: HeartIcon }
  ];

  useEffect(() => {
    const savedPosts = localStorage.getItem('jff_feedPosts');
    if (savedPosts) {
      setPosts(JSON.parse(savedPosts));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('jff_feedPosts', JSON.stringify(posts));
  }, [posts]);

  const filteredPosts = posts
    .filter(post => 
      activeFilter === 'all' || post.category === activeFilter
    )
    .filter(post => 
      post.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase())) ||
      post.author.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => {
      if (sortBy === 'date') {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      } else if (sortBy === 'engagement') {
        return b.engagement - a.engagement;
      } else {
        return b.likes - a.likes;
      }
    });

  const handleLike = (postId: string) => {
    setPosts(prev => prev.map(post => {
      if (post.id === postId) {
        const newLiked = !post.userLiked;
        return {
          ...post,
          likes: newLiked ? post.likes + 1 : post.likes - 1,
          userLiked: newLiked
        };
      }
      return post;
    }));
  };

  const handleBookmark = (postId: string) => {
    setPosts(prev => prev.map(post => {
      if (post.id === postId) {
        return { ...post, bookmarked: !post.bookmarked };
      }
      return post;
    }));
  };

  const handleReaction = (postId: string, reactionType: Reaction['type']) => {
    setPosts(prev => prev.map(post => {
      if (post.id === postId) {
        return {
          ...post,
          reactions: post.reactions.map(reaction => {
            if (reaction.type === reactionType) {
              const newReacted = !reaction.userReacted;
              return {
                ...reaction,
                count: newReacted ? reaction.count + 1 : reaction.count - 1,
                userReacted: newReacted
              };
            }
            return reaction;
          })
        };
      }
      return post;
    }));
  };

  const toggleComments = (postId: string) => {
    setPosts(prev => prev.map(post => {
      if (post.id === postId) {
        return { ...post, showComments: !post.showComments };
      }
      return post;
    }));
  };

  const addComment = (postId: string) => {
    const content = newComment[postId]?.trim();
    if (!content) return;

    const comment: Comment = {
      id: Date.now().toString(),
      author: 'You',
      content,
      date: new Date().toISOString().split('T')[0],
      avatar: '/assets/user-profile.png',
      role: 'Community Member',
      likes: 0
    };

    setPosts(prev => prev.map(post => {
      if (post.id === postId) {
        return {
          ...post,
          comments: [...post.comments, comment]
        };
      }
      return post;
    }));

    setNewComment(prev => ({ ...prev, [postId]: '' }));
  };

  const formatEngagement = (engagement: number): string => {
    if (engagement >= 90) return 'Very High';
    if (engagement >= 70) return 'High';
    if (engagement >= 50) return 'Medium';
    return 'Low';
  };

  const getEngagementColor = (engagement: number): string => {
    if (engagement >= 90) return 'text-green-600';
    if (engagement >= 70) return 'text-blue-600';
    if (engagement >= 50) return 'text-yellow-600';
    return 'text-gray-600';
  };

  return (
    <>
      <Helmet>
        <title>Community Feed - Jumbam Family Foundation</title>
        <meta name="description" content="Engage with the Jumbam Family Foundation’s community updates, impact stories, and real-time efforts to restore hope in Cameroon’s Anglophone regions." />
        <meta property="og:title" content="JFF Community Feed - Stories of Hope and Transformation" />
        <meta property="og:description" content="Discover how we’re supporting education, healthcare, and women empowerment amidst the Anglophone Crisis." />
        <meta property="og:image" content="/assets/jff-og-image.jpg" />
      </Helmet>

      <section className="py-16 bg-gradient-to-br from-slate-50 via-white to-blue-50 min-h-screen">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Enhanced Header */}
          <motion.div
            className="text-center mb-12"
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
              Restoring Hope in Real-Time
            </motion.div>
            
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-gray-800 mb-4">
              JFF <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Community Feed</span>
            </h1>
            
            <p className="font-body text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Join our journey to transform lives in Cameroon’s Anglophone regions through education, healthcare, and women empowerment. Engage with real stories, impactful updates, and urgent appeals.
            </p>
            
            {/* Stats Bar */}
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {[
                { label: 'Lives Impacted', value: '7,500+', icon: TrendingUpIcon },
                { label: 'Widows Supported', value: '50+', icon: HandHelpingIcon },
                { label: 'Children in School', value: '300+', icon: GraduationCapIcon },
                { label: 'Healthcare Recipients', value: '3,200+', icon: HeartHandshakeIcon }
              ].map((stat, index) => (
                <div key={index} className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-sm border border-white/50">
                  <stat.icon className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-800">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Search and Sort */}
          <motion.div
            className="mb-8 bg-white rounded-2xl shadow-lg p-6 border border-gray-100"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <input
                  type="text"
                  placeholder="Search posts, tags, or authors..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:outline-none"
                />
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-600">Sort by:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as 'date' | 'engagement' | 'likes')}
                  className="px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:outline-none"
                >
                  {sortOptions.map(option => (
                    <option key={option.id} value={option.id}>{option.label}</option>
                  ))}
                </select>
              </div>
            </div>
          </motion.div>

          {/* Enhanced Filters */}
          <motion.div 
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-gray-800 flex items-center">
                  <FileTextIcon className="w-5 h-5 mr-2 text-blue-600" />
                  Filter by Category
                </h3>
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className="flex items-center text-blue-600 hover:text-blue-700 transition-colors md:hidden"
                >
                  {showFilters ? <ChevronUpIcon className="w-5 h-5" /> : <ChevronDownIcon className="w-5 h-5" />}
                </button>
              </div>
              
              <div className={`grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-3 ${showFilters ? 'block' : 'hidden md:grid'}`}>
                {filters.map(filter => {
                  const Icon = filter.icon;
                  const isActive = activeFilter === filter.id;
                  
                  return (
                    <motion.button
                      key={filter.id}
                      onClick={() => setActiveFilter(filter.id)}
                      className={`flex items-center justify-center px-4 py-3 rounded-xl font-semibold text-sm transition-all duration-300 ${
                        isActive 
                          ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg' 
                          : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
                      }`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Icon className="w-4 h-4 mr-2" />
                      {filter.label}
                    </motion.button>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Feed Posts */}
          <div className="max-w-4xl mx-auto space-y-8">
            <AnimatePresence mode="wait">
              {filteredPosts.map((post, index) => {
                const CategoryIcon = categoryIcons[post.category];
                
                return (
                  <motion.article
                    key={post.id}
                    className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-500"
                    initial={{ opacity: 0, y: 50, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -50, scale: 0.95 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    layout
                  >
                    {/* Post Header */}
                    <div className="p-6 border-b border-gray-100 bg-gradient-to-r from-gray-50 to-white">
                      <div className="flex items-start justify-between">
                        <div className="flex items-center space-x-4">
                          <div className="relative">
                            <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center overflow-hidden">
                              {post.avatar ? (
                                <img src={post.avatar} alt={post.author} className="w-14 h-14 rounded-full object-cover" />
                              ) : (
                                <UserIcon className="w-7 h-7 text-white" />
                              )}
                            </div>
                            {post.author.includes('Foundation') && (
                              <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                                <CheckCircleIcon className="w-4 h-4 text-white" />
                              </div>
                            )}
                          </div>
                          
                          <div className="flex-1">
                            <div className="flex items-center space-x-2">
                              <h3 className="font-bold text-gray-800 text-lg">{post.author}</h3>
                              {post.isPinned && (
                                <PinIcon className="w-4 h-4 text-blue-600" />
                              )}
                            </div>
                            
                            {post.role && (
                              <p className="text-blue-600 text-sm font-medium">{post.role}</p>
                            )}
                            
                            <div className="flex items-center text-sm text-gray-500 mt-1 flex-wrap">
                              <CalendarIcon className="w-4 h-4 mr-1" />
                              {new Date(post.date).toLocaleDateString('en-US', { 
                                year: 'numeric', 
                                month: 'long', 
                                day: 'numeric' 
                              })}
                              {post.location && (
                                <>
                                  <span className="mx-2">•</span>
                                  <MapPinIcon className="w-4 h-4 mr-1" />
                                  {post.location}
                                </>
                              )}
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex items-center space-x-2">
                          {/* Category Badge */}
                          <div className={`inline-flex items-center px-3 py-1 rounded-full text-white text-xs font-semibold bg-gradient-to-r ${categoryColors[post.category]}`}>
                            <CategoryIcon className="w-3 h-3 mr-1" />
                            {post.category.charAt(0).toUpperCase() + post.category.slice(1)}
                          </div>
                          
                          <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                            <MoreHorizontalIcon className="w-5 h-5 text-gray-500" />
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Post Content */}
                    <div className="p-6">
                      <div className="prose max-w-none">
                        <p className="text-gray-700 leading-relaxed whitespace-pre-line text-lg">
                          {post.content}
                        </p>
                      </div>
                      
                      {/* Tags */}
                      {post.tags.length > 0 && (
                        <div className="flex flex-wrap gap-2 mt-4">
                          {post.tags.map(tag => (
                            <span 
                              key={tag}
                              className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded-full hover:bg-blue-100 transition-colors cursor-pointer"
                              onClick={() => setSearchQuery(tag)}
                            >
                              #{tag}
                            </span>
                          ))}
                        </div>
                      )}
                      
                      {/* Media */}
                      {post.image && (
                        <motion.div 
                          className="mt-6 rounded-2xl overflow-hidden relative"
                          whileHover={{ scale: 1.02 }}
                          transition={{ duration: 0.3 }}
                        >
                          <img 
                            src={post.image} 
                            alt="Post content" 
                            className="w-full h-auto max-h-[600px] object-cover"
                          />
                          <div className="absolute top-2 right-2 bg-black/50 text-white text-xs px-2 py-1 rounded-full">
                            <ImageIcon className="w-3 h-3 inline mr-1" />
                            Image
                          </div>
                        </motion.div>
                      )}
                      
                      {post.video && (
                        <motion.div 
                          className="mt-6 rounded-2xl overflow-hidden relative"
                          whileHover={{ scale: 1.02 }}
                          transition={{ duration: 0.3 }}
                        >
                          <video 
                            src={post.video} 
                            controls 
                            className="w-full h-auto max-h-[600px] object-cover"
                          />
                          <div className="absolute top-2 right-2 bg-black/50 text-white text-xs px-2 py-1 rounded-full">
                            <VideoIcon className="w-3 h-3 inline mr-1" />
                            Video
                          </div>
                        </motion.div>
                      )}
                      
                      {post.document && (
                        <div className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl border border-blue-200">
                          <div className="flex items-center space-x-3">
                            <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                              <FileTextIcon className="w-6 h-6 text-white" />
                            </div>
                            <div className="flex-1">
                              <h4 className="font-semibold text-gray-800">Document</h4>
                              <p className="text-sm text-gray-600">{post.category === 'impact' ? 'Quarterly Impact Report' : 'External Article'}</p>
                            </div>
                            <Link 
                              to={post.document}
                              target="_blank"
                              className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                            >
                              <ExternalLinkIcon className="w-4 h-4 mr-2" />
                              View
                            </Link>
                          </div>
                        </div>
                      )}
                      
                      {/* CTA Button */}
                      {post.cta && (
                        <motion.div
                          className="mt-6"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Link
                            to={post.cta.link}
                            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300"
                          >
                            <post.cta.icon className="w-5 h-5 mr-2" />
                            {post.cta.label}
                          </Link>
                        </motion.div>
                      )}
                    </div>

                    {/* Engagement Stats */}
                    <div className="px-6 pb-4">
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center space-x-4">
                          {/* Reactions Summary */}
                          <div className="flex items-center space-x-2">
                            {post.reactions.filter(r => r.count > 0).slice(0, 3).map(reaction => {
                              const Icon = reactionIcons[reaction.type];
                              return (
                                <div key={reaction.type} className="flex items-center space-x-1">
                                  <Icon className={`w-4 h-4 ${reactionColors[reaction.type]}`} />
                                  <span className="text-gray-600">{reaction.count}</span>
                                </div>
                              );
                            })}
                          </div>
                          
                          <div className="flex items-center space-x-4 text-gray-500">
                            <div className="flex items-center space-x-1">
                              <EyeIcon className="w-4 h-4" />
                              <span>{post.views.toLocaleString()}</span>
                            </div>
                            
                            <div className="flex items-center space-x-1">
                              <MessageCircleIcon className="w-4 h-4" />
                              <span>{post.comments.length}</span>
                            </div>
                            
                            <div className="flex items-center space-x-1">
                              <ShareIcon className="w-4 h-4" />
                              <span>{post.shares}</span>
                            </div>
                          </div>
                        </div>
                        
                        {/* Engagement Score */}
                        <div className="flex items-center space-x-2">
                          <span className="text-xs text-gray-500">Engagement:</span>
                          <span className={`text-xs font-semibold ${getEngagementColor(post.engagement)}`}>
                            {formatEngagement(post.engagement)}
                          </span>
                          <div className="w-16 h-2 bg-gray-200 rounded-full overflow-hidden">
                            <div 
                              className={`h-full bg-gradient-to-r ${
                                post.engagement >= 90 ? 'from-green-500 to-emerald-600' :
                                post.engagement >= 70 ? 'from-blue-500 to-cyan-600' :
                                post.engagement >= 50 ? 'from-yellow-500 to-orange-600' :
                                'from-gray-400 to-gray-500'
                              }`}
                              style={{ width: `${post.engagement}%` }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="px-6 py-4 border-t border-gray-100 bg-gray-50/50">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          {/* Like Button */}
                          <motion.button
                            onClick={() => handleLike(post.id)}
                            className={`flex items-center space-x-2 px-4 py-2 rounded-xl transition-all duration-300 ${
                              post.userLiked 
                                ? 'text-red-500 bg-red-50 shadow-sm' 
                                : 'text-gray-600 hover:bg-gray-100'
                            }`}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <HeartIcon className={`w-5 h-5 ${post.userLiked ? 'fill-current' : ''}`} />
                            <span className="font-medium">{post.likes}</span>
                          </motion.button>

                          {/* Comment Button */}
                          <motion.button
                            onClick={() => toggleComments(post.id)}
                            className="flex items-center space-x-2 px-4 py-2 rounded-xl text-gray-600 hover:bg-gray-100 transition-all duration-300"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <MessageCircleIcon className="w-5 h-5" />
                            <span className="font-medium">Comment</span>
                          </motion.button>

                          {/* Share Button */}
                          <motion.button 
                            className="flex items-center space-x-2 px-4 py-2 rounded-xl text-gray-600 hover:bg-gray-100 transition-all duration-300"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <ShareIcon className="w-5 h-5" />
                            <span className="font-medium">Share</span>
                          </motion.button>
                        </div>

                        <div className="flex items-center space-x-2">
                          {/* Reaction Buttons */}
                          <div className="flex items-center space-x-1 bg-white rounded-xl p-1 shadow-sm border border-gray-200">
                            {post.reactions.map(reaction => {
                              const Icon = reactionIcons[reaction.type];
                              return (
                                <motion.button
                                  key={reaction.type}
                                  onClick={() => handleReaction(post.id, reaction.type)}
                                  className={`p-2 rounded-lg transition-all duration-300 ${
                                    reaction.userReacted 
                                      ? `${reactionColors[reaction.type]} bg-opacity-20` 
                                      : 'text-gray-400 hover:bg-gray-50'
                                  }`}
                                  whileHover={{ scale: 1.1 }}
                                  whileTap={{ scale: 0.9 }}
                                >
                                  <Icon className={`w-4 h-4 ${reaction.userReacted ? reactionColors[reaction.type] : ''}`} />
                                </motion.button>
                              );
                            })}
                          </div>
                          
                          {/* Bookmark Button */}
                          <motion.button
                            onClick={() => handleBookmark(post.id)}
                            className={`p-2 rounded-xl transition-all duration-300 ${
                              post.bookmarked 
                                ? 'text-yellow-500 bg-yellow-50' 
                                : 'text-gray-400 hover:bg-gray-100'
                            }`}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <BookmarkIcon className={`w-5 h-5 ${post.bookmarked ? 'fill-current' : ''}`} />
                          </motion.button>
                        </div>
                      </div>
                    </div>

                    {/* Comments Section */}
                    <AnimatePresence>
                      {post.showComments && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="border-t border-gray-100 bg-gray-50/30"
                        >
                          <div className="p-6 space-y-6">
                            {/* Existing Comments */}
                            {post.comments.map(comment => (
                              <motion.div 
                                key={comment.id} 
                                className="flex space-x-4"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.3 }}
                              >
                                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center overflow-hidden flex-shrink-0">
                                  {comment.avatar ? (
                                    <img src={comment.avatar} alt={comment.author} className="w-10 h-10 rounded-full object-cover" />
                                  ) : (
                                    <UserIcon className="w-5 h-5 text-white" />
                                  )}
                                </div>
                                
                                <div className="flex-1">
                                  <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
                                    <div className="flex items-center justify-between mb-2">
                                      <div>
                                        <span className="font-semibold text-gray-800">{comment.author}</span>
                                        {comment.role && (
                                          <span className="text-sm text-blue-600 ml-2">• {comment.role}</span>
                                        )}
                                      </div>
                                      <span className="text-xs text-gray-500">
                                        {new Date(comment.date).toLocaleDateString()}
                                      </span>
                                    </div>
                                    <p className="text-gray-700 leading-relaxed">{comment.content}</p>
                                    
                                    <div className="flex items-center space-x-4 mt-3">
                                      <button className="flex items-center space-x-1 text-xs text-gray-500 hover:text-blue-600 transition-colors">
                                        <HeartIcon className="w-3 h-3" />
                                        <span>{comment.likes}</span>
                                      </button>
                                      <button className="text-xs text-gray-500 hover:text-blue-600 transition-colors">
                                        Reply
                                      </button>
                                    </div>
                                  </div>
                                  
                                  {/* Nested Replies */}
                                  {comment.replies && comment.replies.length > 0 && (
                                    <div className="ml-8 mt-4 space-y-4">
                                      {comment.replies.map(reply => (
                                        <motion.div
                                          key={reply.id}
                                          className="flex space-x-4"
                                          initial={{ opacity: 0, x: -20 }}
                                          animate={{ opacity: 1, x: 0 }}
                                          transition={{ duration: 0.3 }}
                                        >
                                          <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full flex items-center justify-center overflow-hidden flex-shrink-0">
                                            {reply.avatar ? (
                                              <img src={reply.avatar} alt={reply.author} className="w-8 h-8 rounded-full object-cover" />
                                            ) : (
                                              <UserIcon className="w-4 h-4 text-white" />
                                            )}
                                          </div>
                                          <div className="flex-1">
                                            <div className="bg-gray-50 rounded-2xl p-3 shadow-sm border border-gray-100">
                                              <div className="flex items-center justify-between mb-1">
                                                <span className="font-semibold text-gray-800 text-sm">{reply.author}</span>
                                                <span className="text-xs text-gray-500">
                                                  {new Date(reply.date).toLocaleDateString()}
                                                </span>
                                              </div>
                                              <p className="text-gray-700 text-sm">{reply.content}</p>
                                            </div>
                                          </div>
                                        </motion.div>
                                      ))}
                                    </div>
                                  )}
                                </div>
                              </motion.div>
                            ))}

                            {/* Add Comment */}
                            <div className="flex space-x-4">
                              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center flex-shrink-0">
                                <UserIcon className="w-5 h-5 text-white" />
                              </div>
                              
                              <div className="flex-1">
                                <div className="bg-white rounded-2xl border border-gray-200 focus-within:border-blue-500 transition-colors">
                                  <textarea
                                    placeholder="Share your thoughts on this post..."
                                    value={newComment[post.id] || ''}
                                    onChange={(e) => setNewComment(prev => ({ ...prev, [post.id]: e.target.value }))}
                                    onKeyPress={(e) => e.key === 'Enter' && !e.shiftKey && (e.preventDefault(), addComment(post.id))}
                                    className="w-full px-4 py-3 border-0 rounded-2xl focus:outline-none resize-none"
                                    rows={3}
                                  />
                                  
                                  <div className="flex items-center justify-between px-4 py-3 border-t border-gray-100">
                                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                                      <span>Press Enter to post</span>
                                    </div>
                                    
                                    <motion.button
                                      onClick={() => addComment(post.id)}
                                      disabled={!newComment[post.id]?.trim()}
                                      className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-xl font-medium disabled:opacity-50 disabled:cursor-not-allowed hover:from-cyan-600 hover:to-blue-600 transition-all duration-300"
                                      whileHover={{ scale: 1.05 }}
                                      whileTap={{ scale: 0.95 }}
                                    >
                                      <SendIcon className="w-4 h-4" />
                                      <span>Post</span>
                                    </motion.button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.article>
                );
              })}
            </AnimatePresence>
            
            {filteredPosts.length === 0 && (
              <motion.div 
                className="text-center py-20"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                <FileTextIcon className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-600 mb-2">No Posts Found</h3>
                <p className="text-gray-500">Try adjusting your filters or search query to see more content.</p>
              </motion.div>
            )}
          </div>
          
          {/* Footer CTA */}
          <motion.div 
            className="text-center mt-16 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl p-8 text-white">
              <Sparkles className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">Be Part of the Change</h3>
              <p className="mb-6 max-w-2xl mx-auto">
                Your support can transform lives in Cameroon’s Anglophone regions. Join our community, share our stories, and help us restore hope through education, healthcare, and empowerment.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  onClick={() => setDonationModalOpen(true)}
                  className="inline-flex items-center px-6 py-3 bg-white text-blue-600 rounded-xl font-semibold hover:bg-gray-100 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Support Our Mission
                  <ArrowRightIcon className="w-5 h-5 ml-2" />
                </motion.button>
                <Link 
                  to="/contact"
                  className="inline-flex items-center px-6 py-3 border-2 border-white text-white rounded-xl font-semibold hover:bg-white/10 transition-colors"
                >
                  Get Involved
                </Link>
              </div>
              <div className="mt-6 flex flex-wrap justify-center gap-4">
                {Object.entries(socialIcons).map(([platform, Icon]) => (
                  <a
                    key={platform}
                    href={`https://${platform}.com/jumbamfamilyfoundation`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
                  >
                    <Icon className="w-5 h-5 text-white" />
                  </a>
                ))}
              </div>
              <div className="mt-4 text-sm flex flex-col sm:flex-row justify-center gap-2">
                <span className="flex items-center"><MailIcon className="w-4 h-4 mr-2" /> jumbamfamilyfoundation@gmail.com</span>
                <span className="flex items-center"><PhoneIcon className="w-4 h-4 mr-2" /> (+237) 671-196-020</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Donation Modal */}
      <AnimatePresence>
        {donationModalOpen && (
          <motion.div
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-3xl p-8 max-w-md w-full mx-4"
              initial={{ scale: 0.8, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 50 }}
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Support Our Mission</h3>
              <p className="text-gray-600 mb-6">
                Your donation helps us provide healthcare, education, and empowerment to communities affected by the Anglophone Crisis. Every contribution makes a difference.
              </p>
              <div className="space-y-4">
                <Link
                  to="/donate"
                  className="block w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-xl font-semibold text-center hover:from-cyan-600 hover:to-blue-600 transition-all"
                >
                  Donate Now
                </Link>
                <button
                  onClick={() => setDonationModalOpen(false)}
                  className="block w-full px-6 py-3 border border-gray-200 text-gray-600 rounded-xl font-semibold hover:bg-gray-50 transition-all"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};