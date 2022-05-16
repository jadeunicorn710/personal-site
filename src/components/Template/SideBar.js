import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Yunlin Qi</h2>
        <p><a href="mailto:qiyunlin710@gmail.com">qiyunlin710@gmail.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m Yunlin. I go by Jason.
        I am a <a href="https://www.cc.gatech.edu/">Georgia Tech CS</a> graduate and also
        a <a href="https://illinois.edu/">U of I CEE</a> graduate. I currently work
        at <a href="https://uzuncase.com/">Uzun+Case</a> as a Project Engineer.
        I conduct 3D building information modeling & analysis and deliver exciting
        design products to our clients, I also develop software & tools to automate
        our daily engineering tasks and expedite project delivery process.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Yunlin Qi <Link to="/">yunlinqi.net</Link>.</p>
    </section>
  </section>
);

export default SideBar;
