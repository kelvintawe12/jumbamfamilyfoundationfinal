import React, { useEffect, useRef } from 'react';
import { SectionTitle } from '../components/common/SectionTitle';
export const Impact: React.FC = () => {
  return <section className="py-20">
      <div className="container mx-auto px-6">
        <SectionTitle title="Our Impact" subtitle="Transforming lives across Cameroon" centered />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <StatCard number={50} label="Widows Empowered" />
          <StatCard number={17} label="Businesses Started in 2023" />
          <StatCard number={5.5} label="Million FCFA Distributed" suffix="M" />
          <StatCard number={100} label="% Reintegration Rate" suffix="%" />
        </div>
        {/* Before & After */}
        <div className="bg-tertiary p-8 rounded-lg">
          <h3 className="font-heading text-2xl font-bold text-center mb-8">
            Transformation Stories
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="space-y-4">
              <img src="https://images.unsplash.com/photo-1594708767771-a5e9d3c6b344?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="Before: Woman in difficult circumstances" className="w-full h-64 object-cover rounded-lg" />
              <div>
                <h4 className="font-heading text-xl font-bold">Before</h4>
                <p className="font-body">
                  After losing her husband to the crisis, Mary struggled to feed
                  her three children. Without a source of income and dealing
                  with trauma, she faced an uncertain future.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <img src="https://images.unsplash.com/photo-1544717684-1243da23b545?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80" alt="After: Woman running her own business" className="w-full h-64 object-cover rounded-lg" />
              <div>
                <h4 className="font-heading text-xl font-bold">After</h4>
                <p className="font-body">
                  Today, Mary runs a successful small food business. She can
                  provide for her children, pay school fees, and has even hired
                  another widow to help with her growing business.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-8 text-center">
            <a href="/contact" className="inline-block bg-primary hover:bg-primary/90 text-white py-3 px-6 rounded-md transition-transform hover:scale-105">
              Support Our Work
            </a>
          </div>
        </div>
      </div>
    </section>;
};
interface StatCardProps {
  number: number;
  label: string;
  suffix?: string;
}
const StatCard: React.FC<StatCardProps> = ({
  number,
  label,
  suffix = ''
}) => {
  const counterRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting && counterRef.current) {
          let count = 0;
          const target = number;
          const duration = 2000;
          const step = target / (duration / 16);
          const counter = setInterval(() => {
            count += step;
            if (count >= target) {
              count = target;
              clearInterval(counter);
            }
            if (counterRef.current) {
              counterRef.current.textContent = `${Math.floor(count)}${suffix}`;
            }
          }, 16);
        }
      });
    }, {
      threshold: 0.5
    });
    if (counterRef.current) {
      observer.observe(counterRef.current);
    }
    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, [number, suffix]);
  return <div className="bg-white p-6 rounded-lg shadow-md text-center animate-fade-in hover:shadow-lg transition-shadow">
      <div ref={counterRef} className="font-heading text-4xl font-bold text-primary mb-2">
        0{suffix}
      </div>
      <div className="font-body text-dark">{label}</div>
    </div>;
};