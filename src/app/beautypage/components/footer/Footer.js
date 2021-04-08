import React from "react";
import logo from '../../../../resources/beautypage/images/materialize-teal.png';
import FooterLogo from "./FooterLogo";
import FooterPages from "./FooterPages";

const propTypes = {}

const Footer = () => {
  return (
    <footer className="page-footer">
      <div className="container">
        <div className="row">
          <FooterLogo logoImg={logo} logoDescription="Made by Max K." />
          <FooterPages sectionName="About"
            pages={
              [{ name: "Blog", ref: "#!" }, { name: "Pricing", ref: "#!" }, { name: "Docs", ref: "#!" }]
            } />
          <FooterPages sectionName="Connect"
            pages={
              [{ name: "Community", ref: "#!" }, { name: "Subscribe", ref: "#!" }, { name: "Email", ref: "#!" }]
            } />
          <FooterPages sectionName="Contact"
            pages={
              [{ name: "Twitter", ref: "#!" }, { name: "Facebook", ref: "#!" }, { name: "Github", ref: "#!" }]
            } />
        </div>
      </div>
    </footer>
  );
}

Footer.propTypes = propTypes;

export default Footer;
