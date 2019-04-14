import React, { Component } from 'react';
import './Header.css';
import logo from './logo.png'

export default () => (<header>
  <a href="./">
    <img id="logo" src={logo} alt="Typesafe Utrecht home" />
  </a>
  <div className="mobileActions">
    <a target="_blank" href="https://github.com/typesafeutrecht">Github</a>
    <a target="_blank" href="http://meetup.typesafeutrecht.net">Meetup</a>
    <a target="_blank" href="http://slack.typesafeutrecht.net">Slack</a>
    <a target="_blank"
       href="https://docs.google.com/forms/d/e/1FAIpQLSfvBCsceH_zZiRWCMPZi54ztpKWMQdz56y1HnnL4JKEao5Ufg/viewform?usp=sf_link">Call
      for speakers</a>
  </div>
</header>)
