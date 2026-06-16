import React from 'react';

export default function ProjectCard({ proj }) {
  return (
    <div className="project-card" style={{ borderRadius: 18, display: 'flex', flexDirection: 'column', minHeight: 420 }}>
      <div style={{ height: 170, background: `linear-gradient(135deg, rgba(15,61,46,0.5) 0%, #111827 100%)`, borderBottom: '1px solid rgba(34,197,94,0.08)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, right: 0, width: '60%', height: '100%', background: `radial-gradient(circle at 80% 50%, rgba(${proj.accent === '#22C55E' ? '34,197,94' : '34,211,238'},0.07) 0%, transparent 70%)` }} />
        {proj.cover ? (
          <img
            src={proj.cover}
            alt={`${proj.name} cover`}
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
          />
        ) : (
          <div style={{ width: 60, height: 60, borderRadius: 16, background: `rgba(${proj.accent === '#22C55E' ? '34,197,94' : '34,211,238'},0.1)`, border: `1px solid ${proj.accent}28`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 28, position: 'relative', zIndex: 1 }}>
            {proj.emoji}
          </div>
        )}
      </div>

      <div style={{ padding: 26, display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
        <div style={{ display: 'flex', gap: 6, marginBottom: 13, flexWrap: 'wrap' }}>
          {proj.tags.map(t => (
            <span key={t} style={{ background: 'rgba(34,197,94,0.07)', border: '1px solid rgba(34,197,94,0.22)', borderRadius: 999, padding: '3px 9px', fontSize: 11, color: '#22C55E', fontFamily: "'JetBrains Mono', monospace" }}>{t}</span>
          ))}
        </div>
        <h3 style={{ fontWeight: 700, fontSize: 21, marginBottom: 9, letterSpacing: '-0.015em' }}>{proj.name}</h3>
        <p style={{ color: '#64748B', fontSize: 14, lineHeight: 1.65, marginBottom: 22, flexGrow: 1 }}>{proj.desc}</p>
        <div style={{ display: 'flex', gap: 10, marginTop: 'auto' }}>
          {proj.github ? (
            <a 
              href={proj.github}
              target="_blank"
              rel="noopener noreferrer"
              style={{ 
                padding: '9px 18px', 
                borderRadius: 8, 
                fontSize: 13, 
                textDecoration: 'none',
                display: 'inline-block',
                border: '1px solid rgba(148,163,184,0.2)',
                color: '#94A3B8',
                backgroundColor: 'transparent',
                cursor: 'pointer'
              }}
            >
              GitHub ⌥
            </a>
          ) : (
            <button 
              className="btn-ghost" 
              disabled
              style={{ 
                padding: '9px 18px', 
                borderRadius: 8, 
                fontSize: 13,
                opacity: 0.5,
                cursor: 'not-allowed'
              }}
            >
              GitHub ⌥
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
