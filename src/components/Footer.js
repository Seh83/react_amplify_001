import React from "react";
import LinkData from "./data/link_data.json";

const Footer = () => {
  return (
    <footer className="scene">
      <article className="content">
        <div id="socialmedia">
          <ul className="group">
            {LinkData.footer_socialMedia_link.map((link) => (
              <li>
                <a href={link.href}>
                  <img className={link.class} src={link.src} alt={link.alt} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </article>
    </footer>
  );
};

export default Footer;
