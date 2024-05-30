import { useEffect } from "react";
import style from "@/styles/thirdSection.module.scss";
import Title from "@/components/title";
import Form from "@/components/form.js";

export default function ThirdSection({ contactRef, setVisible }) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.map((entry) => {
          entry.isIntersecting && setVisible(3);
        });
      },
      { threshold: 0.51 }
    );
    contactRef.current && observer.observe(contactRef.current);
  }, [contactRef]);
  return (
    <section className={`${style.container}`} ref={contactRef}>
      <Title textTitle="Contact" />
      <Form />
    </section>
  );
}
