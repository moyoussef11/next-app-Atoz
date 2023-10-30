"use client";
import Styles from "./productList.module.css";
import Link from "next/link";
import Image from "next/image";
import { GrSearch } from "react-icons/gr";
import { useState } from "react";

const ProductList = ({ products }) => {
  const [search, setSearch] = useState("");
  const filterProducts = products.filter((product) => {
    return product.title.toLowerCase().includes(search.toLowerCase());
  });

  const showProducts = filterProducts.map((product, index) => (
    <div className={Styles.card} key={index}>
      <div className={Styles.img}>
        <Image
          src={product.thumbnail}
          width={1000}
          height={250}
          alt={product.title}
        />
        <span>{product.category}</span>
      </div>
      <div className={Styles.info}>
        <h3>{product.title.substring(0, 20)}</h3>
        <p>{product.description.substring(0, 50)}</p>
        <span>
          price:<span>${product.price}</span>
        </span>
        <Link href={`products/${product.id}`}>
          <button>show details</button>
        </Link>
      </div>
    </div>
  ));

  return (
    <>
      <div className={Styles.search}>
        <input
          type="text"
          placeholder="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <GrSearch className={Styles.icon} size={20} />
      </div>
      {showProducts}
    </>
  );
};

export default ProductList;
