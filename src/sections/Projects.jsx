import React from 'react';
import ProjectCard from '../components/ProjectCard';

export default function Projects() {
  const featured = {
    name: 'Checkout Flow',
    desc: 'A multi-step checkout payment flow with real-time card validation, animated transitions, and a live card preview. Built with attention to UX and micro-interactions.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    accent: '#22C55E',
    emoji: '✨',
    github: 'https://github.com/RayyanB272/Payment-Flow'
  };

  const grid = [
    {
      name: 'The Golden Shelf',
      desc: 'Cinematic bookstore website with mood-based filtering, particle animations, and editorial dark theme.',
      tags: ['HTML', 'CSS'],
      accent: '#22C55E',
      emoji: '📚',
      github: 'https://github.com/RayyanB272'
    },
    {
      name: 'HomePro Platform',
      desc: 'Pixel-perfect home services landing page built with full responsiveness across multiple sections.',
      tags: ['HTML', 'CSS', 'JavaScript'],
      accent: '#22D3EE',
      emoji: '🏠',
      github: 'https://github.com/RayyanB272/Home-Services'
    }
  ];

  return (
    <section id="projects" style={{ padding: '110px 52px', maxWidth: 1320, margin: '0 auto' }}>
      <div style={{ textAlign: 'center', marginBottom: 60 }}>
        <h2 style={{ fontWeight: 700, fontSize: 44, letterSpacing: '-0.025em' }}>My <span className="gradient-text">Projects</span></h2>
        <p style={{ color: '#64748B', marginTop: 12, fontSize: 16, maxWidth: 480, margin: '12px auto 0' }}>A selection of work that reflects my craft, obsession with detail, and design sensibility</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(260px, 1fr))', gap: 20 }}>
        {[featured, ...grid].map(project => (
          <ProjectCard key={project.name} proj={project} />
        ))}
      </div>
    </section>
  );
}
