import React from 'react';

const Footer = () => (
  <footer className="footer">
    <a
      href="https://www.linkedin.com/in/peter-kim-dev/"
      className="footer__social-link"
      target="_blank"
    >
      <i className="fab fa-linkedin-in footer__fa"></i>
    </a>
    <a
      href="https://github.com/peter-minho-kim"
      className="footer__social-link"
      target="_blank"
    >
      <i className="fab fa-github footer__fa"></i>
    </a>
    <a href="mailto:peter.minho.kim@gmail.com" className="footer__social-link">
      <i className="fas fa-envelope footer__fa"></i>
    </a>
  </footer>
);

export default Footer;
