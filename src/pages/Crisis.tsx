import React from 'react';
import { SectionTitle } from '../components/common/SectionTitle';
export const Crisis: React.FC = () => {
  const timelineEvents = [{
    year: 1961,
    title: 'Unification of Cameroon',
    description: 'British Southern Cameroons joined French Cameroon to form the Federal Republic of Cameroon.'
  }, {
    year: 2016,
    title: 'Beginning of the Crisis',
    description: 'Peaceful protests by lawyers and teachers in the Anglophone regions evolved into a broader conflict.'
  }, {
    year: 2017,
    title: 'Escalation',
    description: 'The conflict escalated into armed confrontation between government forces and separatist groups.'
  }, {
    year: 2019,
    title: 'Humanitarian Impact',
    description: 'Over 3,000 people killed and 500,000 displaced according to UN reports.'
  }, {
    year: 2023,
    title: 'Current Situation',
    description: 'The crisis continues with over 4,000 people killed and 700,000 displaced, affecting education, healthcare, and livelihoods.'
  }];
  return <section className="py-20 relative">
      {/* Background Image with Parallax Effect */}
      <div className="absolute inset-0 z-0 opacity-20">
        <img src="https://images.unsplash.com/photo-1580060839134-75a5edca2e99?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80" alt="Mount Cameroon" className="w-full h-full object-cover" />
      </div>
      <div className="container mx-auto px-6 relative z-10">
        <SectionTitle title="The Anglophone Crisis" subtitle="Understanding the context of our work" centered />
        <div className="max-w-3xl mx-auto bg-white/90 backdrop-blur-sm p-8 rounded-lg mb-16">
          <p className="font-body text-lg leading-relaxed mb-6">
            The Anglophone Crisis in Cameroon is an ongoing conflict in the
            Northwest and Southwest regions of Cameroon, where the country's
            Anglophone minority (about 20% of the population) has been fighting
            for greater autonomy or independence from the majority Francophone
            government.
          </p>
          <p className="font-body text-lg leading-relaxed">
            The crisis has had devastating effects on the local population, with
            thousands killed, hundreds of thousands displaced, and significant
            disruptions to education, healthcare, and economic activities. The
            Jumbam Family Foundation works directly with those affected by this
            crisis, particularly widows and orphans who have lost family members
            to the violence.
          </p>
        </div>
        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-secondary opacity-50"></div>
          {/* Timeline Events */}
          <div className="space-y-20">
            {timelineEvents.map((event, index) => <TimelineEvent key={index} year={event.year} title={event.title} description={event.description} position={index % 2 === 0 ? 'left' : 'right'} />)}
          </div>
        </div>
        {/* Crisis Impact Stats */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="bg-accent/10 p-6 rounded-lg">
            <div className="text-accent font-heading text-4xl font-bold mb-2">
              4,000+
            </div>
            <div className="font-body">Lives Lost</div>
          </div>
          <div className="bg-accent/10 p-6 rounded-lg">
            <div className="text-accent font-heading text-4xl font-bold mb-2">
              700,000+
            </div>
            <div className="font-body">People Displaced</div>
          </div>
          <div className="bg-accent/10 p-6 rounded-lg">
            <div className="text-accent font-heading text-4xl font-bold mb-2">
              80%
            </div>
            <div className="font-body">Schools Closed</div>
          </div>
        </div>
        <div className="mt-12 text-center">
          <a href="/core-areas" className="inline-block bg-primary hover:bg-primary/90 text-white py-3 px-6 rounded-md transition-transform hover:scale-105">
            See How We Respond
          </a>
        </div>
      </div>
    </section>;
};
interface TimelineEventProps {
  year: number;
  title: string;
  description: string;
  position: 'left' | 'right';
}
const TimelineEvent: React.FC<TimelineEventProps> = ({
  year,
  title,
  description,
  position
}) => <div className={`flex items-center ${position === 'left' ? 'flex-row-reverse' : 'flex-row'} animate-fade-in`}>
    <div className="w-1/2 px-6">
      <div className={`${position === 'left' ? 'text-left' : 'text-right'}`}>
        <div className="font-heading text-xl font-bold text-primary">
          {year}
        </div>
        <h3 className="font-heading text-2xl font-bold mb-2">{title}</h3>
        <p className="font-body text-dark/80">{description}</p>
      </div>
    </div>
    <div className="relative flex items-center justify-center">
      <div className="h-6 w-6 rounded-full bg-primary z-10"></div>
    </div>
    <div className="w-1/2"></div>
  </div>;