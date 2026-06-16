import React from 'react';

const techData = [
  { icon: '</>', name: 'HTML' },
  { icon: '{}', name: 'CSS' },
  { icon: 'JS', name: 'JavaScript' },
  { icon: '⚛', name: 'React' },
  { icon: 'TW', name: 'Tailwind' },
  { icon: 'BS', name: 'Bootstrap' },
  { icon: '◆', name: 'Dart' },
  { icon: '⎇', name: 'Git' },
  { icon: '⚙', name: 'GitHub' },
  { icon: '⬢', name: 'Node.js' },
];

export default function Technologies() {
  return (
    <section style={{ padding: '110px 52px', maxWidth: 1320, margin: '0 auto' }}>
      <div style={{ textAlign: 'center', marginBottom: 56 }}>
        <h2 style={{ fontWeight: 700, fontSize: 44, letterSpacing: '-0.025em' }}>Technologies & <span className="gradient-text">Tools</span></h2>
        <p style={{ color: '#64748B', marginTop: 12, fontSize: 16, maxWidth: 480, margin: '12px auto 0' }}>The technologies I work with to build modern applications</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 14 }}>
        {techData.map(tech => (
          <div key={tech.name} className="tech-card">
            <div style={{ fontSize: 34, marginBottom: 12 }}>{tech.icon}</div>
            <div style={{ fontWeight: 600, fontSize: 14, color: '#F8FAFC' }}>{tech.name}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
