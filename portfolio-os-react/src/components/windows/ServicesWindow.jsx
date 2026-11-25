import React from 'react';

// Edit these freely. Keep prices honest and update them as you gain reviews.
const SERVICES = [
  {
    name: 'Landing page',
    desc: 'One responsive page that explains your business and gets people to call or message you.',
    price: 'From $50',
    time: '3-5 days',
  },
  {
    name: 'Small business website',
    desc: '4-5 pages, contact form, WhatsApp button, mobile-ready, and hosted live.',
    price: 'From $150',
    time: '1-2 weeks',
  },
  {
    name: 'Browser game',
    desc: 'A small JavaScript game for promotion, events or fun. Works on phones and desktops.',
    price: 'From $100',
    time: '1-2 weeks',
  },
  {
    name: 'Fixes and tweaks',
    desc: 'Broken layout on mobile, a new section, a slow page. Small jobs done quickly.',
    price: 'From $15',
    time: '1-2 days',
  },
];

const EMAIL = 'anibro16@gmail.com';

const styles = {
  wrap: { padding: 20, display: 'flex', flexDirection: 'column', gap: 14 },
  intro: { margin: 0, color: '#4b5563', fontSize: 15 },
  card: {
    background: '#fff', border: '1px solid #dbe3ee', borderRadius: 10,
    padding: '14px 16px', display: 'flex', flexDirection: 'column', gap: 6,
  },
  head: { display: 'flex', justifyContent: 'space-between', gap: 12, alignItems: 'baseline' },
  name: { margin: 0, fontSize: 17, color: '#0f3d6b' },
  price: { fontWeight: 700, color: '#1c6fd1', whiteSpace: 'nowrap' },
  desc: { margin: 0, fontSize: 14, color: '#4b5563', lineHeight: 1.45 },
  time: { fontSize: 13, color: '#6b7280' },
  cta: {
    display: 'inline-block', alignSelf: 'flex-start', padding: '10px 18px',
    borderRadius: 8, background: '#1c6fd1', color: '#fff', fontWeight: 600,
    textDecoration: 'none', fontSize: 15,
  },
};

export default function ServicesWindow() {
  return (
    <div style={styles.wrap}>
      <p style={styles.intro}>
        Prices are starting points. Send me a short description and I'll quote you.
      </p>
      {SERVICES.map((s) => (
        <div key={s.name} style={styles.card}>
          <div style={styles.head}>
            <h3 style={styles.name}>{s.name}</h3>
            <span style={styles.price}>{s.price}</span>
          </div>
          <p style={styles.desc}>{s.desc}</p>
          <span style={styles.time}>Typical time: {s.time}</span>
        </div>
      ))}
      <a
        style={styles.cta}
        href={`mailto:${EMAIL}?subject=Website%20quote%20request`}
      >
        Get a quote
      </a>
    </div>
  );
}