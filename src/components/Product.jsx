import "./Product.css";
import QuantityPicker from "./QuantityPicker";

function Product(props) {
  function add() {
    console.log("add to cart");
  }
  return (
    <div className="product">
      <h3>{props.title}</h3>
      <img src="/images/topacio.jpg" alt="topacio azul"></img>
      <label>${props.price}</label>
      <QuantityPicker></QuantityPicker>
      <button onClick={add} className="btn btn-sm btn-primary">
        Add
      </button>
    </div>
  );
}
export default Product;
