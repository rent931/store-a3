import "./product.css";
import QuantityPicker from "./quantityPicker";

const Product = () => {
  return (
    <div className="product">
      <img src="https://picsum.photos/200/300"></img>
      <h2>Title Here</h2>

      <div>
        <label className="price">$ Price $</label>
        <label className="total">$ Total $</label>
      </div>

      <div>
        <QuantityPicker></QuantityPicker>
        <button className="btn-add btn btn-sm btn-success">
          <i className="fa fa-cart-plus" aria-hidden="true"></i>
        </button>
      </div>
    </div>
  );
};

export default Product;
