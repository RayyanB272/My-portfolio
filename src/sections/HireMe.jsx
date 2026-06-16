import React from 'react';

export default function HireMe() {
  const cards = [
    { icon: '🧠', title: 'Fast learner with hands-on experience', desc: 'I learn new tools quickly and apply them in real projects while staying focused on fast delivery and quality.', color: '#22C55E' },
    { icon: '⚙️', title: 'Focused on modern, maintainable frontend code', desc: 'I build interfaces with reusable components, clear structure, and good performance for both desktop and mobile users.', color: '#22D3EE' },
    { icon: '🤝', title: 'Ready to collaborate and grow', desc: 'I value communication, clean version control, and continuous improvement when working with teams or stakeholders.', color: '#22C55E' },
  ];

  return (
    <section style={{ padding: '110px 52px' }}>
      <div style={{ maxWidth: 1320, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 60 }}>
          <h2 style={{ fontWeight: 700, fontSize: 44, letterSpacing: '-0.025em' }}>Why To Work <span className="gradient-text">With Me?</span></h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(260px, 1fr))', gap: 24, justifyContent: 'center', maxWidth: 1200, margin: '0 auto' }}>
          {cards.map(card => (
            <div key={card.title} className="hire-card" style={{ borderRadius: 18, padding: '34px 28px', textAlign: 'center' }}>
              <div style={{ width: 66, height: 66, borderRadius: 18, background: `rgba(${card.color === '#22C55E' ? '34,197,94' : '34,211,238'},0.08)`, border: `1px solid ${card.color}22`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 28, margin: '0 auto 22px' }}>{card.icon}</div>
              <div style={{ width: 40, height: 3, background: `linear-gradient(90deg, ${card.color}, transparent)`, borderRadius: 999, margin: '0 auto 18px' }} />
              <h3 style={{ fontWeight: 700, fontSize: 18, marginBottom: 14, letterSpacing: '-0.01em' }}>{card.title}</h3>
              <p style={{ color: '#64748B', fontSize: 15, lineHeight: 1.8 }}>{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
