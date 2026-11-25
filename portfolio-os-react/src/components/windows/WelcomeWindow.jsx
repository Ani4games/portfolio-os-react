import React from 'react';
import { useWindowManager } from '../../context/WindowManagerContext.jsx';

const styles = {
  wrap: { padding: '28px 24px', display: 'flex', flexDirection: 'column', gap: 16 },
  title: { margin: 0, fontSize: 26, lineHeight: 1.2, color: '#0f3d6b' },
  text: { margin: 0, fontSize: 16, lineHeight: 1.5, color: '#4b5563', maxWidth: 520 },
  row: { display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 8 },
  primary: {
    padding: '10px 18px', border: 'none', borderRadius: 8, cursor: 'pointer',
    background: '#1c6fd1', color: '#fff', fontSize: 15, fontWeight: 600,
  },
  secondary: {
    padding: '10px 18px', borderRadius: 8, cursor: 'pointer',
    background: '#fff', color: '#1c6fd1', border: '1.5px solid #1c6fd1',
    fontSize: 15, fontWeight: 600,
  },
  note: { margin: 0, fontSize: 13, color: '#6b7280' },
};

export default function WelcomeWindow() {
  const { openWindow, closeWindow } = useWindowManager();

  function go(id) {
    openWindow(id);
    closeWindow('welcome');
  }

  return (
    <div style={styles.wrap}>
      <h1 style={styles.title}>Hi, I'm Anirudh. I build websites and web games.</h1>
      <p style={styles.text}>
        I make fast, mobile-friendly sites for small businesses, and browser games
        in JavaScript. Tell me what you need and I'll reply with a price and timeline.
      </p>
      <div style={styles.row}>
        <button style={styles.primary} onClick={() => go('contact')}>Contact me</button>
        <button style={styles.secondary} onClick={() => go('services')}>See what I offer</button>
        <button style={styles.secondary} onClick={() => go('projects')}>See my work</button>
      </div>
      <p style={styles.note}>This site is a desktop. Open any icon to explore.</p>
    </div>
  );
}