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
  const handleClick = () => {
    setBars(false);
  }

  return (
    <>
          <FaBars className={Styles.icon} onClick={toggle} />
          {bars?<ul className={Styles.listPhone}>
        <Link href="/" onClick={handleClick} >
          <li>home</li>
        </Link>
        <Link href="/about" onClick={handleClick} >
          <li>about</li>
        </Link>
        <Link href="/products" onClick={handleClick} >
          <li>products</li>
        </Link>
        <Link href="/contact" onClick={handleClick} >
          <li>contact</li>
        </Link>
      </ul>:""}
    </>
  );
};

export default MobileBars;
