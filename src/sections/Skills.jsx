import React from 'react';

export default function Skills() {
  const skillCards = [
    {
      title: 'Frontend Skills',
      items: ['Component-based development', 'Responsive design', 'Modern UI patterns']
    },
    {
      title: 'UI / UX Basics',
      items: ['Accessible layouts', 'Typography', 'Design consistency']
    },
    {
      title: 'Problem Solving',
      items: ['Debugging', 'Clean code practices', 'Logical thinking']
    },
    {
      title: 'Team Collaboration',
      items: ['Git & GitHub', 'Communication', 'Project planning']
    }
  ];

  return (
    <section id="skills" style={{ padding: '110px 52px' }}>
      <div style={{ maxWidth: 1320, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 60 }}>
          <h2 style={{ fontWeight: 700, fontSize: 44, letterSpacing: '-0.025em' }}>What I <span className="gradient-text">Do Best</span></h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 20 }}>
          {skillCards.map(card => (
            <div key={card.title} className="glass-card" style={{ borderRadius: 18, padding: '28px 24px' }}>
              <h3 style={{ fontWeight: 700, fontSize: 18, marginBottom: 18, color: '#F8FAFC', letterSpacing: '-0.01em' }}>{card.title}</h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
                {card.items.map(item => (
                  <li key={item} style={{ display: 'flex', alignItems: 'center', gap: 10, color: '#64748B', fontSize: 14, lineHeight: 1.6 }}>
                    <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#22C55E', flexShrink: 0 }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
