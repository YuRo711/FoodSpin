import Circle from "../Circle/Circle";
import "./Main.css";

function Main(props) {
  const { color, price, title, description } = props.data;
  console.log(title);

  return(
    <div className="main">
        <Circle
          data={props.data}
        />
        <div className="main__info">
          <h2 className={`main__price main__price_color_${color}`}>
            {price}
          </h2>
          <h1 className="main__title">
            {title}
          </h1>
          <p className="main__text">
            {description}
          </p>
        </div>
        <button className={`main__button main__button_color_${color}`}
          type="button"
        >
          Order now
        </button>
    </div>
  );
}

export default Main;