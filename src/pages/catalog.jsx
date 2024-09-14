import Product from "../components/Product";
import "./Catalog.css";
function Catalog() {
  return (
    <div className="catalog">
      <h1>Our amazing ROCK catalog</h1>
      <Product title="Topacio" price="2.99"></Product>
      <Product title="Rubi" price="11.99"></Product>
      <Product title="Zafiro" price="1.99"></Product>
      <Product title="Esmeralda" price="4.99"></Product>
      <Product title="Perla" price="7.99"></Product>
    </div>
  );
}
export default Catalog;

/* Create products component render a title inside it and price */
/* on Catalog page render 5 products */
