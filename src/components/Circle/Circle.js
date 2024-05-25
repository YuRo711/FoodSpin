import "./Circle.css";

function Circle(props) {
    const { color, image } = props.data;

  return(
    <div className={`circle circle_color_${color}`}>
    </div>
  );
}

export default Circle;