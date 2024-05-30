import { useEffect } from "react";
import Title from "@/components/title.js";
import TimelineElement from "@/components/timelineElement";

export default function SecondSection({ timelineRef, setVisible }) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.map((entry) => {
          entry.isIntersecting && setVisible(2);
        });
      },
      { threshold: 0.51 }
    );
    timelineRef.current && observer.observe(timelineRef.current);
  }, [timelineRef]);
  return (
    <section ref={timelineRef}>
      <Title textTitle="History" />
      <TimelineElement />
    </section>
  );
}
