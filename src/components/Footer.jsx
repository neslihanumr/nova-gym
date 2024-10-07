import React from "react";
import { Link } from "react-router-dom";

const FooterColumn = ({ title, children }) => (
  <div>
    {title && (
      <h2 className="font-bold text-[#C0EA18] text-sm mb-4">{title}</h2>
    )}
    <div>{children}</div>
  </div>
);

const FooterLink = ({ to, text }) => (
  <li>
    <Link to={to} className="text-xs text-[#d8d8d8] hover:text-[#98F224]">
      {text}
    </Link>
  </li>
);

const FooterSocialMedia = ({ href, iconClass, ariaLabel }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={ariaLabel}
    className="text-[#d8d8d8] hover:text-[#98F224] transition-colors duration-300"
  >
    <i className={iconClass}></i>
  </a>
);

const FooterContactInfo = ({ iconClass, text, href, target }) => (
  <div className="flex gap-1 items-center text-xs mb-4 text-[#d8d8d8] hover:text-[#98F224]">
    {href ? (
      <a
        href={href}
        target={target}
        rel={target === "_blank" ? "noopener noreferrer" : undefined}
        className="flex gap-1 items-center"
      >
        <i className={iconClass}></i>
        <span>{text}</span>
      </a>
    ) : (
      <>
        <i className={iconClass}></i>
        <span>{text}</span>
      </>
    )}
  </div>
);

function Footer() {
  return (
    <footer className="bg-[#242424] flex items-around justify-center py-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 px-4">
          {/* Column 1 */}
          <FooterColumn>
            <div className="text-[#d8d8d8] font-semibold">
              Nova<span className="text-[#C0EA18]">gym</span>
            </div>
            <p className="text-xs my-2 text-[#d8d8d8]">
              Monday to Friday,{" "}
              <span className="text-[#C0EA18]">8:00 AM - 10:00 PM</span>
            </p>
            <p className="text-xs text-[#d8d8d8]">
              Saturday and Sunday,{" "}
              <span className="text-[#C0EA18]">8:00 AM - 11:00 PM</span>
            </p>
            <p className="font-inter text-sm mt-6 text-[#d8d8d8]">
              Our Social Media
            </p>
            <div className="flex space-x-4 mt-2">
              <FooterSocialMedia
                href="https://www.facebook.com"
                iconClass="fa-brands fa-facebook-f text-sm"
                ariaLabel="Facebook"
              />
              <FooterSocialMedia
                href="https://www.twitter.com"
                iconClass="fa-brands fa-x-twitter text-sm"
                ariaLabel="Twitter"
              />
              <FooterSocialMedia
                href="https://www.instagram.com"
                iconClass="fa-brands fa-instagram text-sm"
                ariaLabel="Instagram"
              />
            </div>
          </FooterColumn>

          {/* Column 2 */}
          <FooterColumn title="Company">
            <ul>
              <FooterLink to="/" text="Home" />
              <FooterLink to="/about" text="About" />
              <FooterLink to="/blog" text="Blog" />
              <FooterLink to="/contact" text="Contact" />
            </ul>
          </FooterColumn>

          {/* Column 3 */}
          <FooterColumn title="Category">
            <ul>
              <FooterLink
                to="/services/Stretch-training"
                text="Stretch Training"
              />
              <FooterLink to="/services/Kick-boxing" text="Kick Boxing" />
              <FooterLink to="/services/Body-building" text="Body Building" />
              <FooterLink to="/services/Weight-loss" text="Weight Loss" />
            </ul>
          </FooterColumn>

          {/* Column 4 */}
          <FooterColumn title="Contact Us">
            <FooterContactInfo
              iconClass="fa-solid fa-phone"
              text="(123) 456-7890"
              href="tel:+1234567890"
            />
            <FooterContactInfo
              iconClass="fa-regular fa-envelope"
              text="info@novagym.com"
              href="mailto:info@novagym.com"
            />
            <FooterContactInfo
              iconClass="fa-solid fa-location-dot"
              text="123 Gym Street, City, State, ZIP"
              href="https://maps.app.goo.gl/vTKSPJWsJxX7Np1J9"
              target="_blank"
            />
          </FooterColumn>
        </div>
        <hr className="my-8 border-gray-600" />
        <p className="text-center text-xs text-[#bcbcbc]">
          &copy; 2024 All Rights Reserved By NovaGym
        </p>
      </div>
    </footer>
  );
}

export default Footer;
