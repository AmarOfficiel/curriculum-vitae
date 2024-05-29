import style from "@/styles/thirdSection.module.scss";
import Title from "@/components/title";
import Form from "@/components/form.js";

export default function ThirdSection() {
  return (
    <section className={`${style.container}`}>
      <Title textTitle="Contact" />
      <Form />
    </section>
  );
}
