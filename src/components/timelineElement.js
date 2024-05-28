import { useState, useEffect } from "react";
import BtnCTA from "@/components/btnCTA.js";
import Link from "next/link";
import style from "@/styles/timelineElement.module.scss";

async function getTimelineData() {
  const response = await fetch("./timelineData.json");
  const data = await response.json();
  return data;
}

export default function timelineElement() {
  const [timelineData, setTimelineData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getTimelineData();
      setTimelineData(data);
    };
    fetchData();
  }, []);
  return (
    <section className={`${style.containerTimeline}`}>
      {timelineData.map((item) => (
        <section className={`${style.containerCardAndYear}`}>
          <div className={`${style.containerYear}`}>
            <p className={`text-subtitle ${style.itemYear}`}>{item.year}</p>
          </div>
          <div className={`${style.containerCard}`}>
            <div className={`${style.containerImg}`}>
              <img src={item.card.image.src} alt={item.card.image.alt} />
            </div>
            <div className={`${style.containerGlobalDescription}`}>
              <div className={`${style.containerDate}`}>
                <p className={`text-paragraph-medium`}>
                  {item.card.titleOfProject}
                </p>
                <p className={`text-paragraph`}>{item.card.dateOfInit}</p>
              </div>
              <div className={`${style.containerDescription}`}>
                <p className={`text-paragraph`}>{item.card.description}</p>
              </div>
              <div className={`${style.containerCTA}`}>
                <Link href={item.card.link}>
                  <BtnCTA
                    text="Go on reposit github"
                    color="colorSecondAccent"
                  />
                </Link>
              </div>
            </div>
          </div>
        </section>
      ))}
    </section>
  );
}