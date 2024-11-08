import React, { useEffect, useRef } from "react";
import letterBounce, { bounce } from "../utils/letterBounce";
import { motion, Variants } from "framer-motion";
import fluidHover from "../utils/fluidHover";
import webGLFluidEnhanced from "webgl-fluid-enhanced";
import { fadeIn, appear } from "../utils/motion";
import HeroImage from "./heroImage";
import HeroSocial from "./heroSocial";

const Hero = () => {
  const spanRefs = useRef<Array<HTMLSpanElement>>([]);

  useEffect(() => {
    const scrollButton = document.querySelector(
      ".scroll-button"
    ) as HTMLElement;
    if (scrollButton) fluidHover(scrollButton);
    scrollButton.addEventListener("click", () => {
      webGLFluidEnhanced.splats();
    });

    const aboutText = document.querySelector(".about-text") as HTMLElement;
    if (aboutText) fluidHover(aboutText);

    return letterBounce("span.bouncer");
  }, []);

  const handleSpanRef = (span: HTMLSpanElement) => {
    if (span && !spanRefs.current.includes(span)) {
      spanRefs.current.push(span);
    }
  };

  const handleAppearComplete = (span: HTMLElement) => {
    bounce(span);
  };

  return (
    <section className="relative z-10 mx-auto h-screen-large w-full select-none">
      <HeroImage />
      <div className="paddingX absolute inset-0 top-[80px] mx-auto flex max-w-7xl flex-row items-start gap-5 xs:top-[120px] ">
        <div className="pointer-events-auto mt-5 flex flex-col items-center justify-center">
          <div className="h-5 w-5 rounded-full bg-primary" />
          <div className="h-40 w-1 bg-gradient-to-b from-primary via-secondary to-transparent sm:h-80" />
        </div>
        <div className="pointer-events-auto">
          {/* <h1 className="mt-2 flex flex-wrap text-[40px] font-black text-text sm:text-[60px] lg:text-[80px] lg:leading-[98px] xs:text-[50px]"> */}
          <h1 className="mt-2 flex flex-wrap text-[90px] font-black text-text sm:text-[90px] lg:text-[90px] lg:leading-[100px] xs:text-[60px]">
            <div>
              <motion.span
                ref={handleSpanRef}
                className="bouncer inline-block transition-colors hover:text-accent"
                variants={
                  appear(0.1, 0.5, () =>
                    handleAppearComplete(spanRefs.current[0])
                  ) as Variants
                }
                initial="hidden"
                animate="show"
              >
                H
              </motion.span>
              <motion.span
                ref={handleSpanRef}
                className="bouncer inline-block transition-colors hover:text-accent"
                variants={
                  appear(0.2, 0.5, () =>
                    handleAppearComplete(spanRefs.current[1])
                  ) as Variants
                }
                initial="hidden"
                animate="show"
              >
                i
              </motion.span>
              <motion.span
                ref={handleSpanRef}
                className="bouncer inline-block transition-colors hover:text-accent"
                variants={
                  appear(0.3, 0.5, () =>
                    handleAppearComplete(spanRefs.current[2])
                  ) as Variants
                }
                initial="hidden"
                animate="show"
              >
                ,&nbsp;
              </motion.span>
            </div>
            <div>
              <motion.span
                ref={handleSpanRef}
                className="bouncer inline-block transition-colors hover:text-accent"
                variants={
                  appear(0.4, 0.5, () =>
                    handleAppearComplete(spanRefs.current[3])
                  ) as Variants
                }
                initial="hidden"
                animate="show"
              >
                I
              </motion.span>
              <motion.span
                ref={handleSpanRef}
                className="bouncer inline-block transition-colors hover:text-accent"
                variants={
                  appear(0.5, 0.5, () =>
                    handleAppearComplete(spanRefs.current[4])
                  ) as Variants
                }
                initial="hidden"
                animate="show"
              >
                &apos;
              </motion.span>
              <motion.span
                ref={handleSpanRef}
                className="bouncer inline-block transition-colors hover:text-accent"
                variants={
                  appear(0.6, 0.5, () =>
                    handleAppearComplete(spanRefs.current[5])
                  ) as Variants
                }
                initial="hidden"
                animate="show"
              >
                m&nbsp;
              </motion.span>
            </div>
            <div className="flex">
              <span className="gradient-animation from-primary to-accent bg-big bg-clip-text text-transparent bg-gradient-120">
                <motion.span
                  ref={handleSpanRef}
                  className="bouncer gradient-letter inline-block transition-colors hover:text-accent"
                  variants={
                    appear(0.5, 0.5, () =>
                      handleAppearComplete(spanRefs.current[6])
                    ) as Variants
                  }
                  initial="hidden"
                  animate="show"
                >
                  V
                </motion.span>
                <motion.span
                  ref={handleSpanRef}
                  className="bouncer gradient-letter inline-block transition-colors hover:text-accent"
                  variants={
                    appear(0.6, 0.5, () =>
                      handleAppearComplete(spanRefs.current[7])
                    ) as Variants
                  }
                  initial="hidden"
                  animate="show"
                >
                  i
                </motion.span>
                <motion.span
                  ref={handleSpanRef}
                  className="bouncer gradient-letter inline-block transition-colors hover:text-accent"
                  variants={
                    appear(0.7, 0.5, () =>
                      handleAppearComplete(spanRefs.current[8])
                    ) as Variants
                  }
                  initial="hidden"
                  animate="show"
                >
                  j
                </motion.span>
                <motion.span
                  ref={handleSpanRef}
                  className="bouncer gradient-letter inline-block transition-colors hover:text-accent"
                  variants={
                    appear(0.8, 0.5, () =>
                      handleAppearComplete(spanRefs.current[9])
                    ) as Variants
                  }
                  initial="hidden"
                  animate="show"
                >
                  a
                </motion.span>
                <motion.span
                  ref={handleSpanRef}
                  className="bouncer gradient-letter inline-block transition-colors hover:text-accent"
                  variants={
                    appear(0.9, 0.5, () =>
                      handleAppearComplete(spanRefs.current[10])
                    ) as Variants
                  }
                  initial="hidden"
                  animate="show"
                >
                  y
                </motion.span>
              </span>
              <motion.span
                ref={handleSpanRef}
                className="bouncer inline-block transition-colors hover:text-accent"
                variants={
                  appear(1.9, 0, () =>
                    handleAppearComplete(spanRefs.current[13])
                  ) as Variants
                }
                initial="hidden"
                animate="show"
              >
                .
              </motion.span>
            </div>
          </h1>
          <motion.p
            className="about-text leading-[24px] mt-0 text-[20px] font-medium text-text sm:text-[30px] lg:text-[34px] lg:leading-[44px] xs:mt-[2] xs:text-[24px] xs:leading-normal"
            variants={fadeIn("", "", 1.5, 1) as Variants}
            initial="hidden"
            animate="show"
          >
            I&apos;m a{" "}
            <span className="from-primary to-accent bg-clip-text text-transparent bg-gradient-120">
              Computer Engineer
            </span>{" "}
            residing in the Austin&nbsp;
            <br className="hidden sm:block" />, Texas.{" "}
            <span className="xs:hidden landscape-sm:inline">.</span>
            <span className="hidden xs:inline landscape-sm:hidden">
              Seeking new opportunities&nbsp;
              <br className="hidden sm:block" />
              to contribute my skills and knowledge.
            </span>
          </motion.p>
          <HeroSocial />
        </div>
      </div>
      <div className="absolute bottom-24 flex w-full items-center justify-center landscape-md:bottom-6">
        <a
          href="#about"
          className="scroll-button group pointer-events-auto transition-transform duration-200 hover:translate-y-2 focus:translate-y-2"
        ></a>
      </div>
    </section>
  );
};

export default Hero;
