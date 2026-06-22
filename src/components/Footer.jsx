import React from 'react';

export default function Footer() {
  return (
    <footer style={{ borderTop: '1px solid rgba(248,250,252,0.05)', padding: '36px 52px' }}>
      <div style={{ maxWidth: 1320, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{ width: 30, height: 30, borderRadius: 8, background: 'linear-gradient(135deg, #22C55E, #22D3EE)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ color: '#0A0A0A', fontWeight: 800, fontSize: 13, fontFamily: "'JetBrains Mono', monospace" }}>R</span>
          </div>
          <span style={{ fontWeight: 700, fontSize: 15 }}>rayyan<span style={{ color: '#22C55E' }}>.dev</span></span>
        </div>

        <p style={{ color: '#374151', fontSize: 13, fontFamily: "'JetBrains Mono', monospace" }}>
          © 2026 Rayyan · Crafted with <span style={{ color: '#22C55E' }}>precision</span> & <span style={{ color: '#22D3EE' }}>passion</span>
        </p>

        <div style={{ display: 'flex', gap: 24 }}>
          {['GitHub', 'LinkedIn', 'Twitter'].map(s => (
            <span key={s} style={{ color: '#374151', fontSize: 13, cursor: 'pointer', fontWeight: 500 }}>{s}</span>
          ))}
        </div>
      </div>
    </footer>
  );
}
