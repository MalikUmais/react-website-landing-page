import React from "react";
import { footerLinks, locations } from "./footerLinks";

const Footer = () => {
  const imgTransform =
    "h-10 md:h-14 transform transition-transform duration-200 hover:scale-105";
  const imgBorder =
    "flex space-x-2  md:space-x-3 border border-white rounded-lg p-2";

  return (
    <footer className="bg-gradient-to-r from-[var(--custom-green)] to-[var(--custom-green-dark)] text-white text-sm font-montserrat">
      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {/* Main footer content */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-10">
          {/* Left side logo + partners - Full width on mobile, 1/5 on large screens */}
          <div className="space-y-6">
            <img
              src="https://nextbillion.ai/wp-content/uploads/2022/11/logo-white.svg"
              alt="Logo"
              className="h-16 md:h-20"
            />

            {/* Partners section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
              <div>
                <p className="font-semibold mb-2 text-xs sm:text-sm">
                  AVAILABLE ON
                </p>
                <div className={imgBorder}>
                  <img
                    src="/assets/aws.png"
                    className={imgTransform}
                    alt="AWS"
                  />
                  <img
                    src="/assets/google-cloud.png"
                    className={imgTransform}
                    alt="GCP"
                  />
                  <img
                    src="/assets/azure.png"
                    className={imgTransform}
                    alt="Azure"
                  />
                </div>
              </div>

              <div>
                <p className="font-semibold mb-2 text-xs sm:text-sm">
                  COMPLIANCES
                </p>
                <div className={`${imgBorder} `}>
                  <img
                    src="/assets/soc.png"
                    className={imgTransform}
                    alt="AICPA"
                  />
                  <img
                    src="/assets/gdpr.png"
                    className={imgTransform}
                    alt="GDPR"
                  />
                  <img
                    src="/assets/iso.png"
                    className={imgTransform}
                    alt="ISO"
                  />
                </div>
              </div>
            </div>

            {/* Social icons */}
            <div className="flex space-x-4 pt-2">
              <a href="#" aria-label="LinkedIn">
                <img
                  src="https://nextbillion.ai/wp-content/uploads/2025/01/in.png"
                  className="cursor-pointer h-8 md:h-9"
                  alt="LinkedIn"
                />
              </a>
              <a href="#" aria-label="YouTube">
                <img
                  src="https://nextbillion.ai/wp-content/uploads/2025/01/youtube.png"
                  className="cursor-pointer h-8 md:h-9"
                  alt="YouTube"
                />
              </a>
              <a href="#" aria-label="Twitter">
                <img
                  src="https://nextbillion.ai/wp-content/uploads/2025/01/twitter.png"
                  className="cursor-pointer h-8 md:h-9"
                  alt="Twitter"
                />
              </a>
            </div>
          </div>

          {/* Right side links - Responsive grid */}
          <div className="lg:col-span-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {footerLinks.map((section, index) => (
              <div key={index} className="mb-4">
                <h4 className="font-bold mb-2 text-sm sm:text-base">
                  {section.title}
                </h4>
                <ul className="space-y-1">
                  {section.links.map((link, idx) => (
                    <li
                      key={idx}
                      className="cursor-pointer hover:underline text-xs sm:text-sm"
                    >
                      {link}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Locations Section - Responsive grid with divider */}
        <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-white/30">
          <h3 className="text-white text-sm sm:text-base font-semibold mb-4">
            OUR LOCATIONS
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {locations.map((loc, idx) => (
              <div
                key={idx}
                className="border border-white rounded-lg p-3 sm:p-4"
              >
                <h4 className="text-white font-semibold text-base sm:text-lg mb-1 sm:mb-2">
                  {loc.title}
                </h4>
                <p className="text-white text-xs sm:text-sm leading-relaxed">
                  {loc.address}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Bottom Legal Bar */}
      <div className="bg-[var(--custom-green-dark)] text-white bottom-0  text-sm p-8 ">
        <div className="w-full mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-2">
          <p>© 2025 NextBillion.ai All Rights Reserved</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#" className="hover:underline">
              Privacy Policy
            </a>
            <a href="#" className="hover:underline">
              Terms of Service
            </a>
            <a href="#" className="hover:underline">
              SLA
            </a>
            <a href="#" className="hover:underline">
              Support Services Agreement
            </a>
            <a href="#" className="hover:underline">
              Disclaimer
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
