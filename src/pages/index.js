import React, { useRef, useState } from "react";
import Head from "next/head";
import { Titillium_Web } from "next/font/google";
import FirstSection from "@/components/firstSection.js";
import SecondSection from "@/components/secondSection.js";
import ThirdSection from "@/components/thirdSection.js";
import Nav from "@/components/nav.js";
import styles from "@/styles/Home.module.scss";

const TitilliumWeb = Titillium_Web({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-TitilliumWeb",
});

export default function Home() {
  const introRef = useRef(null);
  const timelineRef = useRef(null);
  const contactRef = useRef(null);
  const [visible, setVisible] = useState(1);

  return (
    <>
      <Head>
        <title>Amaury CV</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main
        className={`${TitilliumWeb.variable} ${styles.container} text-paragraph`}
      >
        {/* intro section */}
        <Nav
          introRef={introRef}
          timelineRef={timelineRef}
          contactRef={contactRef}
          visible={visible}
        />
        {/* intro section */}
        <FirstSection introRef={introRef} setVisible={setVisible} />
        {/* portfolio/history section */}
        <SecondSection timelineRef={timelineRef} setVisible={setVisible} />
        {/* contact section */}
        <ThirdSection contactRef={contactRef} setVisible={setVisible} />
      </main>
    </>
  );
}
