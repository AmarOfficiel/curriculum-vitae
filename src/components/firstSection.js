import ToolingItem from "@/components/itemTooling.js";
import BtnCTA from "@/components/btnCTA.js";
import style from "@/styles/firstSection.module.scss";
import { useEffect } from "react";

export default function FirstSection({ introRef, setVisible }) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.map((entry) => {
          entry.isIntersecting && setVisible(1);
        });
      },
      { threshold: 0.51 }
    );
    introRef.current && observer.observe(introRef.current);
  }, [introRef]);
  return (
    <section className={`${`${style.container}`}`} ref={introRef}>
      <section className={`${`${style.containerIntro}`}`}>
        <div className={`${`${style.containerIntroText}`}`}>
          <div>
            <p className={`${`${style.containerPresentation}`}`}>
              <span className={`${`${style.emoji}`}`}>✌</span>Hi there! I’m
              Amaury
            </p>
          </div>
          <div className={`${`${style.containerQuickPresentation}`}`}>
            <h1 className={`text-huge`}>
              A web frontend student. I study web development and learn all day
            </h1>
            <p>
              I&apos;m a web frontend student. Winner of the citizen of wallonia
              hackathon student prize. Determined to always do better.
            </p>
            <div className={`${`${style.containerButton}`}`}>
              <BtnCTA text="Contact me" color="colorFirstAccent" />
            </div>
          </div>
        </div>
        <div className={`${`${style.containerImgIntro}`}`}>
          <img
            src="/images/svg/svgIntro.svg"
            alt="Image d'introduction"
            className={`${`${style.itemImgIntro}`}`}
          />
        </div>
      </section>
      <section className={`df-jcc-aic g5`}>
        <h2 className={`text-subtitle`}>Tooling</h2>
        <ToolingItem />
      </section>
    </section>
  );
}
