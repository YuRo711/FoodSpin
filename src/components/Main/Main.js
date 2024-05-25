import "./Main.css";

function Main(props) {
  const { color } = props.data;

  return(
    <div className="main">
        <div className={`main__circle 
          main__circle_color_${color}`}
        >

        </div>
    </div>
  );
}

export default Main;