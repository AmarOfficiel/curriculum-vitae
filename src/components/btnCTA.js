import { useState, useEffect } from "react";
import style from "@/styles/btnCTA.module.scss";

export default function btnCTA({ text, color}) {
  return (
    <>
      <section
        className={`text-paragraph-medium ${`${
          color === "colorFirstAccent"
            ? style.colorFirstAccent
            : color == "colorSecondAccent"
            ? style.colorSecondAccent
            : style.colorTertiaryAccent
        }`} ${`${style.container}`}`}
      >
        {text}
      </section>
    </>
  );
}