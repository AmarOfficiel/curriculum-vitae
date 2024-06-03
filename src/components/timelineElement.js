import React, { useState, useEffect } from "react";
import BtnCTA from "@/components/btnCTA.js";
import Link from "next/link";
import style from "@/styles/timelineElement.module.scss";

async function getTimelineData() {
  const response = await fetch("./timelineData.json");
  const data = await response.json();
  return data;
}

export default function TimelineElement() {
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
        <section className={`${style.containerCardAndYear}`} key={item}>
          <div className={`${style.containerYear}`}>
            <p className={`text-subtitle ${style.itemYear}`}>{item.year}</p>
          </div>
          <section className={`${style.containerAllCard}`}>
            {item.cards.map((i) => (
              <div className={`${style.containerCard}`} key={i}>
                <div className={`${style.containerImg}`}>
                  <img
                    src={i.image.src}
                    alt={i.image.alt}
                    className={`${style.itemImg}`}
                  />
                </div>
                <div className={`${style.containerGlobalDescription}`}>
                  <div className={`${style.containerDate}`}>
                    <p className={`text-paragraph-medium`}>
                      {i.titleOfProject}
                    </p>
                    <p className={`text-paragraph`}>{i.dateOfInit}</p>
                  </div>
                  <div className={`${style.containerDescription}`}>
                    <p className={`text-paragraph`}>{i.description}</p>
                  </div>
                  <div className={`${style.containerCTA}`}>
                    {i.links.github && (
                      <Link target="_blank" href={i.links.github}>
                        <BtnCTA
                          text="Reposit github"
                          color="colorSecondAccent"
                        />
                      </Link>
                    )}
                    {i.links.website && (
                      <Link target="_blank" href={i.links.github}>
                        <BtnCTA
                          text="Website"
                          color="colorSecondAccent"
                        />
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </section>
        </section>
      ))}
    </section>
  );
}
