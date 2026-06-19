import React from 'react';

export default function Header() {
  const links = [
    { label: 'About', id: 'about' },
    { label: 'Skills', id: 'skills' },
    { label: 'Projects', id: 'projects' },
    { label: 'Contact', id: 'contact' },
  ];

  function handleNav(e, id) {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  return (
    <nav className="glass-nav" style={{ position: 'sticky', top: 0, zIndex: 100, padding: '0 52px' }}>
      <div style={{ maxWidth: 1320, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 66 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{ width: 34, height: 34, borderRadius: 9, background: 'linear-gradient(135deg, #22C55E, #22D3EE)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <span style={{ color: '#0A0A0A', fontWeight: 800, fontSize: 15, fontFamily: "'JetBrains Mono', monospace" }}>R</span>
          </div>
          <span style={{ fontWeight: 700, fontSize: 16, letterSpacing: '-0.01em' }}>rayyan<span style={{ color: '#22C55E' }}>.dev</span></span>
        </div>

        <div style={{ display: 'flex', gap: 36 }}>
          {links.map(l => (
            <a key={l.id} href={`#${l.id}`} onClick={(e) => handleNav(e, l.id)} className="nav-link">{l.label}</a>
          ))}
        </div>

      </div>
    </nav>
  );
}
