import React from 'react';

export default function Contact() {
  const socials = [
    { icon: '⌥', label: 'GitHub', handle: 'https://github.com/RayyanB272', color: '#22D3EE' },
    { icon: '🔗', label: 'LinkedIn', handle: 'https://www.linkedin.com/in/rayyanbahij', color: '#22D3EE' },
    { icon: '✉️', label: 'Email', handle: 'rayyanbahij@gmail.com', color: '#22D3EE' },
  ];

  return (
    <section id="contact" style={{ padding: '110px 52px', maxWidth: 1320, margin: '0 auto' }}>
      <div style={{ textAlign: 'center', marginBottom: 60 }}>
        <h2 style={{ fontWeight: 700, fontSize: 44, letterSpacing: '-0.025em' }}>Connect With Me</h2>
        <p style={{ color: '#64748B', marginTop: 12, fontSize: 16 }}>Reach out via GitHub, LinkedIn, or email.</p>
      </div>

      <div style={{ display: 'grid', gap: 20, maxWidth: 560, margin: '0 auto' }}>
        {socials.map(s => (
          <div key={s.label} className="social-card" style={{ padding: '20px 24px' }}>
            <div style={{ width: 46, height: 46, borderRadius: 13, background: `rgba(${s.color === '#22C55E' ? '34,197,94' : '34,211,238'},0.08)`, border: `1px solid ${s.color}28`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, flexShrink: 0 }}>{s.icon}</div>
            <div>
              <div style={{ fontWeight: 600, fontSize: 15, marginBottom: 3 }}>{s.label}</div>
              <a 
                href={s.label === 'Email' ? `mailto:${s.handle}` : s.handle}
                target={s.label === 'Email' ? undefined : '_blank'}
                rel={s.label === 'Email' ? undefined : 'noopener noreferrer'}
                style={{ color: s.color, fontSize: 13, fontFamily: "'JetBrains Mono', monospace", textDecoration: 'none' }}
              >
                {s.handle}
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
