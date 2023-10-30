import { data } from "@/app/data/dataAbout";
import Styles from "./about.module.css";
export const metadata = {
  title: "About",
  description: "About page",
};
const about = () => {
  const showData = data.map((data, index) => (
    <div key={index} className={Styles.info}>
      <h2> {data.title} </h2>
      <p>{data.desc}</p>
    </div>
  ));
  return (
    <div className={Styles.main}>
      <h3>about</h3>
      {showData}
    </div>
  );
};

export default about;
