import "./Product.css";

function Product(props) {
  const { color, image } = props.data;

  return(
    <div className="product">
      <button className={`product__button product__button_left 
        product__button_color_${color}`}
      />
      <img className="product__image"
        src={image}
      />
      <button className={`product__button product__button_right 
        product__button_color_${color}`}
      />
    </div>
  );
}

export default Product;