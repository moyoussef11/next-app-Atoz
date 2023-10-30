"use client";
import Styles from "./picturePro.module.css";
import { useRef } from "react";
const PicturePro = ({ pics, product }) => {
  const ref = useRef("");
  function changePic(src) {
    ref.current.src = src;
  }
  return (
    <div className={Styles.infoImg}>
      <img ref={ref} src={product.thumbnail} alt={product.title} />
      <div className={Styles.images}>
        {pics.map((pic, index) => (
          <img key={index} onClick={() => changePic(pic)} src={pic} alt="pic" />
        ))}
      </div>
    </div>
  );
};

export default PicturePro;
