import React from 'react';

export default function Hero() {
  return (
    <section style={{ backgroundColor: '#0A0A0A', minHeight: '100vh', position: 'relative', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
      <div style={{ maxWidth: 1320, margin: '0 auto', padding: '0 52px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center', width: '100%', paddingTop: 40, paddingBottom: 40 }}>
        <div>
          {/* availability badge removed per request */}
          <h1 style={{ fontWeight: 700, fontSize: 70, lineHeight: 1.02, letterSpacing: '-0.03em', marginBottom: 4 }}>Hi, I'm</h1>
          <h1 className="gradient-text" style={{ fontWeight: 800, fontSize: 70, lineHeight: 1.02, letterSpacing: '-0.03em', marginBottom: 12 }}>Rayyan.</h1>
          <h2 style={{ fontWeight: 600, fontSize: 42, lineHeight: 1.1, color: '#475569', letterSpacing: '-0.02em', marginBottom: 28 }}>Frontend and Mobile Developer</h2>

          <p style={{ fontSize: 17, color: '#64748B', lineHeight: 1.75, maxWidth: 500, marginBottom: 42 }}>
            Computer Science graduate with a strong passion for building <span style={{ color: '#F8FAFC', fontWeight: 500 }}>modern, responsive applications</span>. Experienced in <span style={{ color: '#22D3EE' }}>React</span> and <span style={{ color: '#22C55E' }}>Flutter</span> with a focus on creating user-friendly and efficient digital experiences.
          </p>

          <div style={{ display: 'flex', gap: 14, marginBottom: 56 }}>
            <button onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })} className="btn-primary" style={{ padding: '15px 30px', borderRadius: 11, fontSize: 15, display: 'flex', alignItems: 'center', gap: 8 }}>View Projects <span style={{ fontSize: 16 }}>→</span></button>
            <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="btn-secondary" style={{ padding: '15px 30px', borderRadius: 11, fontSize: 15 }}>Contact Me</button>
          </div>

          {/* stats section removed per request */}
        </div>

        <div style={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center', height: 520 }}>
          <div className="orbit-ring" style={{ width: 460, height: 460 }} />
          <div className="orbit-ring" style={{ width: 360, height: 360, borderStyle: 'dashed', opacity: 0.6 }} />
          <div className="orbit-ring" style={{ width: 260, height: 260, borderColor: 'rgba(34,211,238,0.08)' }} />

          <div className="glass-card" style={{ borderRadius: 18, padding: 28, width: 340, position: 'relative', zIndex: 4, boxShadow: '0 32px 64px rgba(0,0,0,0.5), 0 0 40px rgba(34,197,94,0.06)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 22 }}>
              {['#FF5F57', '#FFBD2E', '#28CA41'].map(c => (
                <div key={c} style={{ width: 10, height: 10, borderRadius: '50%', background: c, opacity: 0.85 }} />
              ))}
              <span style={{ marginLeft: 10, color: '#374151', fontSize: 12, fontFamily: "'JetBrains Mono', monospace", letterSpacing: '0.02em' }}>portfolio.tsx</span>
            </div>

            <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 13.5, lineHeight: 2.1 }}>
              <div><span style={{ color: '#A78BFA' }}>const</span> <span style={{ color: '#22D3EE' }}>developer</span> <span style={{ color: '#64748B' }}>=</span> <span style={{ color: '#22C55E' }}>{`{`}</span></div>
              <div style={{ paddingLeft: 22 }}><span style={{ color: '#22D3EE' }}>name</span><span style={{ color: '#64748B' }}>:</span> <span style={{ color: '#FCD34D' }}>'Rayyan'</span><span style={{ color: '#64748B' }}>,</span></div>
              <div style={{ paddingLeft: 22 }}><span style={{ color: '#22D3EE' }}>role</span><span style={{ color: '#64748B' }}>:</span> <span style={{ color: '#FCD34D' }}>'Frontend Dev'</span><span style={{ color: '#64748B' }}>,</span></div>
              <div style={{ paddingLeft: 22 }}><span style={{ color: '#22D3EE' }}>passion</span><span style={{ color: '#64748B' }}>:</span> <span style={{ color: '#FCD34D' }}>'Pixel‑perfect UI'</span><span style={{ color: '#64748B' }}>,</span></div>
              <div style={{ paddingLeft: 22 }}><span style={{ color: '#22D3EE' }}>available</span><span style={{ color: '#64748B' }}>:</span> <span style={{ color: '#22C55E' }}>true</span></div>
              <div><span style={{ color: '#22C55E' }}>{`}`}</span></div>
            </div>

            <div style={{ marginTop: 18, paddingTop: 14, borderTop: '1px solid rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', gap: 8 }}>
              <div className="pulse-dot" style={{ width: 6, height: 6 }} />
              <span style={{ fontSize: 12, color: '#374151', fontFamily: "'JetBrains Mono', monospace" }}>compiled successfully ✓</span>
            </div>
          </div>

          {/* floating tech tags removed per request */}
        </div>
      </div>

      {/* scroll indicator removed per request */}
    </section>
  );
}
