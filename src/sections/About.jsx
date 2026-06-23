import React from 'react';

export default function About() {
  return (
    <section id="about" style={{ padding: '110px 52px', maxWidth: 1320, margin: '0 auto' }}>
      <div style={{ maxWidth: 700, margin: '0 auto' }}>
          <h2 style={{ fontWeight: 700, fontSize: 44, lineHeight: 1.08, letterSpacing: '-0.025em', marginBottom: 26 }}>Building <span className="gradient-text">modern applications</span></h2>
          <p style={{ color: '#64748B', lineHeight: 1.8, marginBottom: 18, fontSize: 16 }}>I'm a Computer Science graduate with a strong interest in frontend and mobile application development. Throughout my learning journey, I have gained experience working with technologies such as <span style={{ color: '#F8FAFC', fontWeight: 500 }}>React, JavaScript, HTML, CSS, and Flutter</span> by building academic and personal projects.</p>
          <p style={{ color: '#64748B', lineHeight: 1.8, marginBottom: 34, fontSize: 16 }}>I am continuously improving my skills and exploring new technologies to expand my knowledge. My goal is to become a skilled software developer who creates <span style={{ color: '#22D3EE' }}>modern, user-friendly, and efficient applications</span>.</p>
      </div>
    </section>
  );
}
