import React from 'react';

interface Service {
  title: string;
  description: string;
  features: string[];
}

const services: Service[] = [
  {
    title: 'Web Design',
    description: 'Beautiful, user-friendly websites that capture your brand essence and engage your audience effectively.',
    features: ['Responsive Design', 'UI/UX Optimization', 'Brand Integration'],
  },
  {
    title: 'Web Development',
    description: 'Robust, scalable web applications built with modern technologies and best practices.',
    features: ['Custom Solutions', 'E-commerce Platforms', 'API Integration'],
  },
  {
    title: 'Branding',
    description: 'Create a memorable identity that resonates with your target audience and stands out in the market.',
    features: ['Logo Design', 'Brand Strategy', 'Visual Identity'],
  },
  {
    title: 'Digital Marketing',
    description: 'Strategic campaigns that drive traffic, engagement, and conversions across digital channels.',
    features: ['SEO Optimization', 'Content Marketing', 'Social Media'],
  },
  {
    title: 'Mobile Apps',
    description: 'Native and cross-platform mobile applications that deliver seamless user experiences.',
    features: ['iOS Development', 'Android Development', 'App Design'],
  },
  {
    title: 'Consulting',
    description: 'Expert guidance to help you navigate the digital landscape and achieve your business goals.',
    features: ['Strategy Planning', 'Technology Audit', 'Growth Planning'],
  },
];

export const Services: React.FC = () => {
  return (
    <main className="container">
      <section className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <ul>
              {service.features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>
    </main>
  );
};
