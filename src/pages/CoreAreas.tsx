import React, { useState } from 'react';
import { SectionTitle } from '../components/common/SectionTitle';
import { HeartIcon, BookIcon, SparklesIcon } from 'lucide-react';
export const CoreAreas: React.FC = () => {
  const [activeArea, setActiveArea] = useState<string | null>(null);
  return <section className="py-20 bg-tertiary">
      <div className="container mx-auto px-6">
        <SectionTitle title="Core Areas of Work" subtitle="Our holistic approach to restoring hope" centered />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <CoreAreaCard title="Health" description="We provide essential healthcare services and education to communities affected by the crisis." icon={<HeartIcon className="h-10 w-10" />} details={['Mobile health clinics in affected communities', 'Mental health support for trauma survivors', 'Health education programs', 'Nutrition support for vulnerable children']} isActive={activeArea === 'health'} onClick={() => setActiveArea(activeArea === 'health' ? null : 'health')} />
          <CoreAreaCard title="Women Empowerment" description="We empower widows and women through psychosocial support, business training, and capital." icon={<SparklesIcon className="h-10 w-10" />} details={['Psychosocial support for widows', 'Business skills training', 'Startup capital for small businesses', 'Ongoing mentorship and support']} isActive={activeArea === 'women'} onClick={() => setActiveArea(activeArea === 'women' ? null : 'women')} />
          <CoreAreaCard title="Education" description="We support education initiatives to ensure children affected by the crisis can continue learning." icon={<BookIcon className="h-10 w-10" />} details={['Scholarships for orphans and vulnerable children', 'School supplies distribution', 'Teacher training and support', 'Safe learning spaces in affected areas']} isActive={activeArea === 'education'} onClick={() => setActiveArea(activeArea === 'education' ? null : 'education')} />
        </div>
        {/* Get Involved Section */}
        <div className="mt-20 bg-primary/10 p-8 rounded-lg">
          <h3 className="font-heading text-2xl font-bold text-center mb-6">
            Get Involved
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <InvolvementCard title="Donate" description="Support our programs financially to help us reach more people in need." buttonText="Donate Now" buttonLink="/contact" />
            <InvolvementCard title="Volunteer" description="Share your skills and time to support our work in Cameroon or remotely." buttonText="Join Us" buttonLink="/contact" />
            <InvolvementCard title="Partner" description="Organizations can partner with us to expand our impact through collaboration." buttonText="Partner With Us" buttonLink="/contact" />
          </div>
        </div>
      </div>
    </section>;
};
interface CoreAreaCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  details: string[];
  isActive: boolean;
  onClick: () => void;
}
const CoreAreaCard: React.FC<CoreAreaCardProps> = ({
  title,
  description,
  icon,
  details,
  isActive,
  onClick
}) => <div className={`bg-white p-6 rounded-lg shadow-md transition-all duration-300 animate-fade-in cursor-pointer ${isActive ? 'ring-2 ring-primary shadow-lg' : 'hover:shadow-lg'}`} onClick={onClick}>
    <div className="flex items-center mb-4">
      <div className="p-3 bg-primary/10 rounded-full text-primary mr-4">
        {icon}
      </div>
      <h3 className="font-heading text-2xl font-bold">{title}</h3>
    </div>
    <p className="font-body text-dark/80 mb-4">{description}</p>
    {isActive && <div className="mt-6 space-y-2 animate-fade-in">
        <h4 className="font-heading font-bold text-lg">Our Approach:</h4>
        <ul className="space-y-2">
          {details.map((detail, index) => <li key={index} className="flex items-start">
              <span className="text-primary mr-2">•</span>
              <span>{detail}</span>
            </li>)}
        </ul>
        <button className="mt-4 bg-primary hover:bg-primary/90 text-white py-2 px-4 rounded-md transition-transform hover:scale-105 w-full">
          Get Involved
        </button>
      </div>}
    {!isActive && <div className="text-primary font-medium mt-4 flex items-center">
        Click to learn more
      </div>}
  </div>;
interface InvolvementCardProps {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}
const InvolvementCard: React.FC<InvolvementCardProps> = ({
  title,
  description,
  buttonText,
  buttonLink
}) => <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all">
    <h4 className="font-heading text-xl font-bold mb-3">{title}</h4>
    <p className="font-body text-dark/80 mb-4">{description}</p>
    <a href={buttonLink} className="inline-block bg-primary hover:bg-primary/90 text-white py-2 px-4 rounded-md transition-transform hover:scale-105 w-full text-center">
      {buttonText}
    </a>
  </div>;