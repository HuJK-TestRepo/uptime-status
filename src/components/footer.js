import React from 'react';
import Link from './link';

const Footer = () => {
  return (
    <div id="footer">
      <div className="container">
        <p>Based on <Link to="https://uptimerobot.com/" text="UptimeRobot" /> API.</p>
        <p><Link to="https://github.com/HuJK/uptime-status" text="Source Code" /></p>
      </div>
    </div>
  );
}

export default Footer;
