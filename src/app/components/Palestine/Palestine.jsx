import Image from "next/image";
import pic from "./palestine.png";
import Styles from './palestine.module.css';

const Palestine = () => {
  return (
    <div className={Styles.main}>
      <div className={Styles.info}>
        <p>
                  <Image src={pic} width={20} height={20} />{" "}
          STAND WITH PALESTINE <Image src={pic} width={20} height={20} />
        </p>
      </div>
      <div className={Styles.info}>
        <span>
          <Image src={pic} width={20} height={20} />{" "}
          FREE PALESTINE
                  {" "}<Image src={pic} width={20} height={20} />
        </span>
      </div>
    </div>
  );
};

export default Palestine;
