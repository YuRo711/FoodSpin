import "./Circle.css";

function Circle(props) {
  function calculateTransform(n) {
    return {transform: `rotate(calc(${n} * 45deg))`};
  }

  const { color } = props.data;
  const getNthImage = props.getNthImage;

  return(
    <div className={`circle circle_color_${color}`}>
      <div className="circle__wheel">
        <div className="circle__images">
          <img className="circle__product"
            src={getNthImage(0)}
            style={calculateTransform(0)}
          />
          <img className="circle__product"
            src={getNthImage(1)}
            style={calculateTransform(1)}
          />
          <img className="circle__product"
            src={getNthImage(2)}
            style={calculateTransform(2)}
          />
          <img className="circle__product"
            src={getNthImage(3)}
            style={calculateTransform(3)}
          />
          <img className="circle__product"
            src={getNthImage(0)}
            style={calculateTransform(4)}
          />
          <img className="circle__product"
            src={getNthImage(1)}
            style={calculateTransform(5)}
          />
          <img className="circle__product"
            src={getNthImage(2)}
            style={calculateTransform(6)}
          />
          <img className="circle__product"
            src={getNthImage(3)}
            style={calculateTransform(7)}
          />
        </div>
      </div>
    </div>
  );
}

export default Circle;