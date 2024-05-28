import { useState, useEffect } from "react";
import style from "@/styles/itemTooling.module.scss";

async function getIcon() {
  const response = await fetch("./libraryIcon.json");
  const data = await response.json();
  return data;
}

export default function InfoBox() {
  const [icon, setIcon] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getIcon();
      setIcon(data);
    };
    fetchData();
  }, []);
  return (
    <section className={`${style.container}`}>
      {icon.map((item) => (
        <div className={`${style.item}`}>
          <img src={item.src} alt={item.alt} className={`${style.img}`} />
          <p className="text-paragraph">{item.name}</p>
        </div>
      ))}
    </section>
  );
}
