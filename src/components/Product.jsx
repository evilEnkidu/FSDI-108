import "./Product.css";
import QuantityPicker from "./QuantityPicker";

function Product(props) {
  function add() {
    console.log("add to cart");
  }
  return (
    <div className="product">
      <h3>{props.data.title}</h3>
      <img src={props.data.image}></img>
      <label>Starting at ${props.data.price}</label>
      <div className="controls">
        <QuantityPicker></QuantityPicker>
        <button onClick={add} className="btn btn-sm btn-info">
          Add to Cart
        </button>
      </div>
    </div>
  );
}
export default Product;
