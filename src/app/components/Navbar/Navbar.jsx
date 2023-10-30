import Link from "next/link";
import Styles from "./Navbar.module.css";
import MobileBars from "./MobileBars";

const Navbar = () => {
  return (
    <>
      <header className={Styles.head}>
        <Link href="/" className={Styles.logo}>
          Atoz
        </Link>
        <ul className={Styles.list}>
          <Link href="/">
            <li>home</li>
          </Link>
          <Link href="/about">
            <li>about</li>
          </Link>
          <Link href="/products">
            <li>products</li>
          </Link>
          <Link href="/contact">
            <li>contact</li>
          </Link>
        </ul>
        <MobileBars />
      </header>
    </>
  );
};

export default Navbar;
