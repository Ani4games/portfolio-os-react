import React, { useState } from 'react';

// 1. Sign up free at https://formspree.io, create a form, and paste its URL here.
//    It looks like: https://formspree.io/f/abcdwxyz
const FORM_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID';

// 2. WhatsApp number in international format, digits only (91 = India).
const WHATSAPP = '917284068878';
const EMAIL = 'anibro16@gmail.com';

export default function ContactWindow() {
  // 'idle' | 'sending' | 'sent' | 'error'
  const [status, setStatus] = useState('idle');

  async function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    setStatus('sending');
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: new FormData(form),
      });
      if (!res.ok) throw new Error('Request failed');
      form.reset();
      setStatus('sent');
      setTimeout(() => setStatus('idle'), 6000);
    } catch {
      setStatus('error');
    }
  }

  const label = {
    idle: 'Send message',
    sending: 'Sending...',
    sent: 'Sent. I will reply soon.',
    error: 'Could not send. Try again',
  }[status];

  return (
    <div className="contact-body">
      <div className="contact-info">
        <h3>Need a website or a web game?</h3>
        <p>
          Tell me what you need and I will reply with a price and timeline,
          usually within a day.
        </p>

        <div className="contact-item">
          <i className="bx bxl-whatsapp"></i>
          <div>
            <p>
              <a
                href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent('Hi Anirudh, I saw your portfolio and I need help with a website.')}`}
                target="_blank"
                rel="noreferrer"
              >
                Message me on WhatsApp
              </a>
            </p>
          </div>
        </div>

        <div className="contact-item">
          <i className="bx bx-envelope"></i>
          <div><p><a href={`mailto:${EMAIL}`}>{EMAIL}</a></p></div>
        </div>

        <div className="social-icons">
          <a href="https://github.com/Ani4games" className="social-icon" target="_blank" rel="noreferrer" aria-label="GitHub"><i className="bx bxl-github"></i></a>
          {/* Replace with your real profile URLs, or delete the ones you do not use */}
          <a href="https://linkedin.com/in/YOUR-HANDLE" className="social-icon" target="_blank" rel="noreferrer" aria-label="LinkedIn"><i className="bx bxl-linkedin"></i></a>
        </div>
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>
        <h3>Send a message</h3>
        <input type="text" name="name" placeholder="Your name" required />
        <input type="email" name="email" placeholder="Your email" required />
        <textarea name="message" placeholder="What do you need built?" rows="4" required></textarea>
        <button type="submit" disabled={status === 'sending'}>{label}</button>
      </form>
    </div>
  );
}