import { useState } from "react";
import Header from "../Header/Header";
import Main from "../Main/Main";
import "./App.css";
import { pageData } from "../../utils/constants";

function App(props) {
  function scrollData(isForward) {
    let newIndex = currentIndex + isForward ? 1 : -1;
    if (newIndex >= pageData.length) {
      newIndex = 0;
    } else if (newIndex < 0) {
      newIndex = pageData.length - 1;
    }
    setIndex(newIndex);
    setPageData(pageData[currentIndex]);
  }

  const [currentIndex, setIndex] = useState(0);
  const [currentData, setPageData] = useState(pageData[currentIndex]);

  return(
    <div className="page">
      <Header/>
      <Main
        data={currentData}
        scrollData={scrollData}
      />
    </div>
  );
}

export default App;