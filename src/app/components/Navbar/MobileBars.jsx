"use client"
import Link from "next/link";
import Styles from "./Navbar.module.css";
import { FaBars } from "react-icons/fa";
import { useState } from "react";

const MobileBars = () => {
    const [bars, setBars] = useState(false);
    function toggle() {
        setBars(!bars);
    }

  return (
    <>
          <FaBars className={Styles.icon} onClick={toggle} />
          {bars?<ul className={Styles.listPhone}>
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
      </ul>:""}
    </>
  );
};

export default MobileBars;
