import React from 'react';
import { SectionTitle } from '../components/common/SectionTitle';
export const Story: React.FC = () => {
  return <section className="py-20">
      <div className="container mx-auto px-6">
        <SectionTitle title="Our Story" subtitle="Transforming tragedy into hope for Cameroon" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="space-y-6 animate-fade-in">
            <p className="font-body text-lg leading-relaxed">
              The Jumbam Family Foundation was borne out of our attempt to
              transform the terribly painful killing of our father and husband,
              Mr. Ngek Constantine Jumbam, into hope and transformation for
              Cameroon and Africa.
            </p>
            <blockquote className="border-l-4 border-primary pl-4 italic text-lg">
              "He was killed in the ongoing Anglophone crisis in Cameroon."
            </blockquote>
            <p className="font-body text-lg leading-relaxed">
              Despite the deep pain of this loss, we chose to channel our grief
              into creating positive change for others affected by this crisis.
              Our foundation works to restore hope to widows, orphans, and
              communities devastated by the ongoing conflict.
            </p>
            <p className="font-body text-lg leading-relaxed">
              Through education initiatives, healthcare support, and women's
              empowerment programs, we are committed to building a brighter
              future for Cameroon.
            </p>
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg transform hover:scale-[1.02] transition-transform">
            <img src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="Jumbam family" className="w-full h-auto" />
            <div className="p-4 bg-white">
              <p className="font-body text-sm text-dark/70">
                Mr. Ngek Constantine Jumbam and family
              </p>
            </div>
          </div>
        </div>
        {/* Testimonials */}
        <div className="mt-20">
          <h3 className="font-heading text-2xl font-bold text-center mb-10">
            Testimonials
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Testimonial quote="The foundation helped me start my small business after I lost my husband. Now I can support my children." name="Mary N." location="Bamenda" />
            <Testimonial quote="The psychosocial support helped me process my grief. I found hope again through their programs." name="Elizabeth T." location="Buea" />
            <Testimonial quote="My children can continue their education thanks to the scholarship program. It changed our lives." name="Sarah M." location="Kumba" />
          </div>
        </div>
      </div>
    </section>;
};
interface TestimonialProps {
  quote: string;
  name: string;
  location: string;
}
const Testimonial: React.FC<TestimonialProps> = ({
  quote,
  name,
  location
}) => <div className="bg-tertiary p-6 rounded-lg animate-fade-in">
    <p className="font-body italic mb-4">{quote}</p>
    <div className="font-bold">{name}</div>
    <div className="text-sm text-dark/70">{location}</div>
  </div>;