import React from 'react';

export default function HireMe() {
  const cards = [
    { title: 'Fast learner with hands-on experience', desc: 'I learn new tools quickly and apply them in real projects while staying focused on fast delivery and quality.' },
    { title: 'Focused on modern, maintainable frontend code', desc: 'I build interfaces with reusable components, clear structure, and good performance for both desktop and mobile users.' },
    { title: 'Ready to collaborate and grow', desc: 'I value communication, clean version control, and continuous improvement when working with teams or stakeholders.' },
  ];

  return (
    <section style={{ padding: '110px 52px' }}>
      <div style={{ maxWidth: 1320, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 60 }}>
          <h2 style={{ fontWeight: 700, fontSize: 44, letterSpacing: '-0.025em' }}>Why To Work <span className="gradient-text">With Me?</span></h2>
        </div>

        <div style={{ display: 'grid', gap: 20, maxWidth: 860, margin: '0 auto' }}>
          {cards.map(card => (
            <div key={card.title} className="social-card" style={{ flexDirection: 'column', alignItems: 'flex-start', gap: 10 }}>
              <h3 style={{ fontWeight: 700, fontSize: 22, marginBottom: 0, letterSpacing: '-0.01em' }}>{card.title}</h3>
              <p style={{ color: '#64748B', fontSize: 16, lineHeight: 1.8, margin: 0 }}>{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
