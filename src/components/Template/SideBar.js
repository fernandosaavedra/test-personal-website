import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src="/images/me.jpg" alt="" />
      </Link>
      <header>
        <h2>Fernando Saavedra</h2>
        <p><a href="mailto:fer.saavedrao@gmail.com">fer.saavedrao@gmail.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>Acerca de</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent mattis nunc in congue
        tincidunt. Suspendisse rutrum et ex vitae mattis. Sed mattis sapien lectus, eu consectetur
        nisi auctor in. Cras eget ligula vestibulum, condimentum tortor id, volutpat dolor.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Ver Más</Link> : <Link to="/about" className="button">Acerca de</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Fernando Saavedra <Link to="/">fsaavedra.cryto</Link>.</p>
    </section>
  </section>
);

export default SideBar;
