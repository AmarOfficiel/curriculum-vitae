import style from "@/styles/title.module.scss"

export default function title({textTitle}) {
  return (
    <section className={`${style.container}`}>
      <h2 className={`${style.item} text-title`}>{textTitle}</h2>
    </section>
  );
}
