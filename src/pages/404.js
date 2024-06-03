import { useState, useEffect } from "react";
import Title from "@/components/title.js";
import styles from "@/styles/error404.module.scss";
import Link from "next/link";
import BtnCTA from "@/components/btnCTA.js";

export default function Custom404() {
  return (
    <>
      <section className={`text-paragraph ${styles.mainContainer}`}>
        <div className={`${styles.containerTitle}`}>
          <Title textTitle="Error 404" />
        </div>
        <section className={`text-paragraph ${styles.containerCTAandCard}`}>
          <section className={`${styles.containerCardHistory}`}>
            <h2 className={`text-subtitle ${styles.itemHistoryTitle}`}>
              History Of 404 page
            </h2>
            <section className={` ${styles.itemHistoryDescription}`}>
              <p>
                The term "404 Not Found" was coined by Berners-Lee himself, who
                explained in a 1998 interview that he wanted to make the error
                message "slightly apologetic". He also said that he considered
                using "400 Bad Request" instead, but decided that it was too
                vague and technical.
              </p>
              <p>
                The first documented case of a 404 error appearing on a web page
                was in 1993, when a user tried to access a page about the Mosaic
                web browser on the NCSA website. The page had been moved to a
                different location, but the link had not been updated. The user
                reported the error to the NCSA team, who fixed the link and
                added a humorous message to their 404 page: "We're sorry, but
                the document you requested is not here. Maybe you should try
                someplace else."
              </p>
              <p>
                Since then, 404 errors have become one of the most common and
                recognizable errors on the Web. Many websites have customized
                their 404 pages with creative designs, messages, or features to
                entertain or assist their visitors. For example, Google's 404
                page features a broken robot and a link to its homepage, while
                GitHub's 404 page shows a random image of a parallax star field
                and a link to its status page. Some websites have also used
                their 404 pages to showcase their brand personality, humor, or
                social causes. For instance, Lego's 404 page shows the Lego
                minifigure Emmet along with a humorous message, Amazon's
                displays the image of a dog, Peugeot's shows a picture of its
                404 model, and RTÉ's shows an image of Bosco.
              </p>
              <Link
                target="_blank"
                href={"https://en.wikipedia.org/wiki/HTTP_404"}
              >
                <p className={`text-paragraph-medium`}>Source</p>
              </Link>
            </section>
          </section>
          <section className={`${styles.containerCTA}`}>
            <Link href={"./"}>
              <BtnCTA text="Return to website" color="colorSecondAccent" />
            </Link>
          </section>
        </section>
      </section>
    </>
  );
}
