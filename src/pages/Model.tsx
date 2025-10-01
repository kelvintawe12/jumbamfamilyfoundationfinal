import React from 'react';
import { SectionTitle } from '../components/common/SectionTitle';
import { BrainIcon, BriefcaseIcon, UsersIcon, ClipboardCheckIcon } from 'lucide-react';
export const Model: React.FC = () => {
  return <section className="py-20 bg-tertiary">
      <div className="container mx-auto px-6">
        <SectionTitle title="Our Model" subtitle="A comprehensive approach to restoring hope and dignity" centered />
        <div className="max-w-4xl mx-auto">
          {/* Stepper */}
          <div className="space-y-16">
            <ModelStep number={1} title="Psychosocial Support" description="We begin with psychosocial support to help widows and families process grief and trauma from the crisis. This creates a foundation for healing." icon={<BrainIcon className="h-10 w-10 text-white" />} />
            <ModelStep number={2} title="Business Training & Capital" description="Participants receive comprehensive business training and startup capital to establish sustainable income-generating activities." icon={<BriefcaseIcon className="h-10 w-10 text-white" />} reverse />
            <ModelStep number={3} title="Mentorship & Apprenticeship" description="Ongoing mentorship and apprenticeship opportunities ensure that participants develop the skills needed for long-term success." icon={<UsersIcon className="h-10 w-10 text-white" />} />
            <ModelStep number={4} title="Follow-Up & Community" description="Regular follow-up and community building activities help sustain progress and create networks of mutual support." icon={<ClipboardCheckIcon className="h-10 w-10 text-white" />} reverse />
          </div>
          {/* Results Preview */}
          <div className="mt-20 text-center">
            <h3 className="font-heading text-2xl font-bold mb-4">
              Our Approach Works
            </h3>
            <p className="font-body text-lg mb-8">
              This model has helped transform the lives of over 50 widows and
              their families, creating sustainable livelihoods and restoring
              dignity.
            </p>
            <a href="/impact" className="inline-block bg-primary hover:bg-primary/90 text-white py-3 px-6 rounded-md transition-transform hover:scale-105">
              See Our Impact
            </a>
          </div>
        </div>
      </div>
    </section>;
};
interface ModelStepProps {
  number: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  reverse?: boolean;
}
const ModelStep: React.FC<ModelStepProps> = ({
  number,
  title,
  description,
  icon,
  reverse = false
}) => <div className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} gap-6 items-center animate-fade-in`}>
    <div className="bg-primary rounded-full p-6 flex-shrink-0">{icon}</div>
    <div className={`flex-1 ${reverse ? 'text-right' : 'text-left'}`}>
      <div className="flex items-center gap-3 mb-2">
        <div className={`${reverse ? 'order-2' : 'order-1'} bg-secondary text-white w-8 h-8 rounded-full flex items-center justify-center font-bold`}>
          {number}
        </div>
        <h3 className={`${reverse ? 'order-1' : 'order-2'} font-heading text-2xl font-bold text-primary`}>
          {title}
        </h3>
      </div>
      <p className="font-body text-lg text-dark/80">{description}</p>
    </div>
  </div>;