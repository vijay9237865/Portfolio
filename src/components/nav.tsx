"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { navLinks } from "../constants";
import MenuButton from "../components/menuButton";
import MobileMenu from "../components/mobileMenu";
import webGLFluidEnhanced from "webgl-fluid-enhanced";
import { motion, Variants } from "framer-motion";
import { fadeIn } from "../utils/motion";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleMenuItemClick = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const navElements = document.querySelectorAll(".nav-link");
    for (let i = 0; i < navElements.length; i++) {
      navElements[i].addEventListener("click", () => {
        webGLFluidEnhanced.splats();
      });
    }
  }, []);

  return (
    <nav className="paddingX fixed top-0 z-20 flex w-full items-center bg-secondary py-5 shadow-xl">
      <div className="mx-auto flex w-full max-w-7xl select-none items-center justify-between">
        <Link
          href="/"
          className="nav-link flex items-center gap-2"
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        >
          <motion.svg
            width="100%"
            height="100%"
            viewBox="0 0 256 256"
            className="h-9 w-9 object-contain text-text"
            variants={fadeIn("", "", 0, 1) as Variants}
            initial="hidden"
            animate="show"
          >
            {/* SVG content here */}
          </motion.svg>

          <motion.p
            className="flex cursor-pointer font-mono text-[18px] font-bold text-text"
            variants={fadeIn("", "", 0, 1) as Variants}
            initial="hidden"
            animate="show"
          >
            Agavinti.&nbsp;
            <span className="hidden md:block">Vijay</span>
          </motion.p>
        </Link>
        <ul className="hidden list-none flex-row gap-10 sm:flex">
          {navLinks.map((link, index) => (
            <motion.li
              key={link.id}
              className="nav-link cursor-pointer font-mono text-[18px] font-medium text-text hover:text-primary focus:text-primary"
              tabIndex={0}
              variants={fadeIn("down", "", index * 0.25, 1) as Variants}
              initial="hidden"
              animate="show"
              whileHover={{ translateY: "-2px" }}
              transition={{ duration: 0.2 }}
              onClick={() => {
                if (link.external_link) {
                  window.open(
                    link.external_link,
                    "_blank",
                    "noopener,noreferrer"
                  );
                } else {
                  window.location.href = `#${link.id}`;
                }
              }}
              onKeyDown={(event) => {
                if (event.key === "Enter") {
                  if (link.external_link) {
                    window.open(
                      link.external_link,
                      "_blank",
                      "noopener,noreferrer"
                    );
                  } else {
                    window.location.href = `#${link.id}`;
                  }
                }
              }}
            >
              {link.title}
            </motion.li>
          ))}
        </ul>
        <motion.div
          className="flex flex-1 items-center justify-end sm:hidden"
          variants={fadeIn("down", "", 0.25, 1) as Variants}
          initial="hidden"
          animate="show"
        >
          <MenuButton onClick={handleClick} isOpen={isOpen} />
        </motion.div>
      </div>
      {/* <MobileMenu isOpen={isOpen} onClose={handleMenuItemClick} /> */}
    </nav>
  );
};

export default Nav;
