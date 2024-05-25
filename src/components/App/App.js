import { useState } from "react";
import Header from "../Header/Header";
import Main from "../Main/Main";
import "./App.css";
import { pageData } from "../../utils/constants";

function App(props) {
  function scrollData(isForward) {
    let newIndex = currentIndex + (isForward ? 1 : -1);
    setRotationIndex(rotationIndex + (isForward ? 1 : -1));
    if (newIndex >= pageData.length) {
      newIndex = 0;
    } else if (newIndex < 0) {
      newIndex = pageData.length - 1;
    }
    setIndex(newIndex);
    setPageData(pageData[newIndex]);
  }

  function getNthImage(n) {
    return pageData[n].image;
  }

  const [currentIndex, setIndex] = useState(0);
  const [rotationIndex, setRotationIndex] = useState(0);
  const [currentData, setPageData] = useState(pageData[currentIndex]);

  return(
    <div className="page">
      <Header/>
      <Main
        data={currentData}
        getNthImage={getNthImage}
        scrollData={scrollData}
        rotationIndex={rotationIndex}
      />
    </div>
  );
}

export default App;