import React from 'react';
import { SectionTitle } from '../components/common/SectionTitle';
import { CalendarIcon, LinkIcon } from 'lucide-react';
export const News: React.FC = () => {
  const newsItems = [{
    id: 1,
    title: "Jumbam Family Foundation Expands Women's Empowerment Program",
    excerpt: "The foundation has expanded its women's empowerment program to reach an additional 20 widows in the Northwest region.",
    date: 'March 15, 2023',
    image: 'https://images.unsplash.com/photo-1529400971008-f566de0e6dfc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    source: 'AllAfrica'
  }, {
    id: 2,
    title: 'New Health Initiative Launched in Crisis-Affected Communities',
    excerpt: 'A new mobile health clinic initiative will bring essential healthcare services to communities affected by the Anglophone crisis.',
    date: 'January 22, 2023',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    source: 'Cameroon Tribune'
  }, {
    id: 3,
    title: 'Jumbam Foundation Founder Recognized by Harvard University',
    excerpt: 'Francis Jumbam, founder of the Jumbam Family Foundation, was recognized by Harvard University for his humanitarian work in Cameroon.',
    date: 'November 10, 2022',
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80',
    source: 'Harvard Gazette'
  }];
  return <section className="py-20">
      <div className="container mx-auto px-6">
        <SectionTitle title="Latest News & Stories" subtitle="Updates from our work and impact" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {newsItems.map(item => <NewsCard key={item.id} title={item.title} excerpt={item.excerpt} date={item.date} image={item.image} source={item.source} />)}
        </div>
        {/* Newsletter Signup */}
        <div className="mt-16 bg-tertiary p-8 rounded-lg">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="font-heading text-2xl font-bold mb-4">
              Stay Updated
            </h3>
            <p className="font-body mb-6">
              Subscribe to our newsletter to receive updates about our work and
              impact in Cameroon.
            </p>
            <form className="flex flex-col sm:flex-row gap-4">
              <input type="email" placeholder="Your email address" className="flex-1 px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:border-primary" required />
              <button type="submit" className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-md transition-transform hover:scale-105">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>;
};
interface NewsCardProps {
  title: string;
  excerpt: string;
  date: string;
  image: string;
  source: string;
}
const NewsCard: React.FC<NewsCardProps> = ({
  title,
  excerpt,
  date,
  image,
  source
}) => <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow animate-fade-in">
    <img src={image} alt={title} className="w-full h-48 object-cover" />
    <div className="p-6">
      <div className="flex items-center text-sm text-dark/60 mb-2">
        <CalendarIcon className="h-4 w-4 mr-1" />
        <span>{date}</span>
        <span className="mx-2">•</span>
        <span>{source}</span>
      </div>
      <h3 className="font-heading text-xl font-bold mb-2">{title}</h3>
      <p className="font-body text-dark/80 mb-4">{excerpt}</p>
      <a href="#" className="inline-flex items-center text-primary font-medium hover:underline">
        Read Full Article <LinkIcon className="ml-1 h-4 w-4" />
      </a>
    </div>
  </div>;