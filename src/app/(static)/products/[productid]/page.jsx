import Styles from "../product.module.css";
import PicturePro from "@/app/components/PicturePro/PicturePro";
import Link from "next/link";
export async function generateMetadata({ params }) {
  const { productid } = params;
  const product = await getData(productid);
  return {
    title: product.title,
    description: product.description,
  };
}
async function getData(id) {
  const res = await fetch(`https://dummyjson.com/products/${id}`);
  return res.json();
}
const details = async ({ params }) => {
  const { productid } = params;
  const product = await getData(productid);
  const pics = product.images;
  return (
    <div className={Styles.main}>
      <PicturePro pics={pics} product={product} />
      <div className={Styles.infoProduct}>
        <h3>{product.title}</h3>
        <p>{product.description}</p>
        <span>price:${product.price}</span>
        <span>brand:${product.brand}</span>
        <Link href='/products'>
          <button className={Styles.btn}>Back to shopping</button>
        </Link>
      </div>
    </div>
  );
};

export default details;
