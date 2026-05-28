import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import WLogo from "/w-logo.webp";
import CanadaFlag from "/canada.webp";
import BrazilFlag from "/brazil.webp";
import { GiHamburgerMenu } from "react-icons/gi";
import { useTranslation } from "react-i18next";

const NavBar = () => {
  const [t, i18n] = useTranslation("global");

  const [activeLang, setActiveLang] = useState("ptbr");

  const handleChangeLanguage = () => {
    const newLang = activeLang === "en" ? "ptbr" : "en";
    setActiveLang(newLang);
    i18n.changeLanguage(newLang);
  };

  const handleChangeFlag = () => {
    return activeLang === "en" ? BrazilFlag : CanadaFlag;
  };

  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 900);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsSmallScreen(window.innerWidth < 850);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const links = [
    { label: t("navigation.home"), to: "/", type: "link" },
    { label: t("navigation.about"), to: "/#about", type: "anchor" },
    { label: t("navigation.skills"), to: "/#skills", type: "anchor" },
    { label: t("navigation.projects"), to: "/#projects", type: "anchor" },
    { label: t("navigation.contact"), to: "/#contact", type: "anchor" },
  ];

  const handleNavClick = (to) => {
    setIsOpen(false);
    const id = to.split("#")[1];
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      role="navigation"
      className="flex flex-col w-full border-b-2 border-custom-light-blue text-custom-white py-4 px-16"
    >
      {isSmallScreen ? (
        <>
          {/* Top bar: logo + hamburger */}
          <div className="flex w-full justify-between items-center">
            <Link to="/">
              <img
                src={WLogo}
                alt={t("hero.logoButtonLabel")}
                className="w-30"
              />
            </Link>
            <div className="flex gap-4 items-center">
              <button onClick={handleChangeLanguage} className="cursor-pointer">
                <img src={handleChangeFlag()} />
              </button>
              <button
                aria-label={t("menuLabel")}
                onClick={() => setIsOpen(!isOpen)}
                className="text-custom-light-blue text-7xl hover:text-custom-blue cursor-pointer transition duration-400"
              >
                <GiHamburgerMenu />
              </button>
            </div>
          </div>

          {/* Dropdown menu items */}
          {isOpen && (
            <div className="flex flex-col items-center gap-6 py-6 text-2xl">
              {links.map(({ label, to, type }) =>
                type === "link" ? (
                  <Link
                    key={label}
                    to={to}
                    onClick={() => setIsOpen(false)}
                    className="hover:text-custom-blue transition duration-400"
                  >
                    {label}
                  </Link>
                ) : (
                  <a
                    key={label}
                    href={to}
                    onClick={() => handleNavClick(to)}
                    className="hover:text-custom-blue transition duration-400"
                  >
                    {label}
                  </a>
                ),
              )}
            </div>
          )}
        </>
      ) : (
        <div className="flex w-full justify-between items-center">
          <Link to="/">
            <img src={WLogo} alt={t("hero.logoButtonLabel")} className="w-30" />
          </Link>
          <div className="flex gap-10 md:text-base lg:text-2xl items-center ">
            {links.map(({ label, to, type }) =>
              type === "link" ? (
                <Link
                  key={label}
                  to={to}
                  className="hover:text-custom-blue transition duration-400"
                >
                  {label}
                </Link>
              ) : (
                <a
                  key={label}
                  href={to}
                  className="hover:text-custom-blue transition duration-400"
                >
                  {label}
                </a>
              ),
            )}
            <button onClick={handleChangeLanguage}>
              <img src={handleChangeFlag()} />
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
