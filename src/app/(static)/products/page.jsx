import Styles from "./product.module.css";
import ProductList from "@/app/components/ProductList/ProductList";
export const metadata = {
  title: "Products",
  description: "Products page",
};
async function getData() {
  const res = await fetch("https://dummyjson.com/products");
  return res.json();
}
const products = async () => {
  const data = await getData();
  const products = data.products;
  return (
    <>
      <div>
        <div className={Styles.head}>
          <h2>products</h2>
        </div>
        <div className={Styles.cards}>
          <ProductList products={products} />
        </div>
      </div>
    </>
  );
};
export default products;
