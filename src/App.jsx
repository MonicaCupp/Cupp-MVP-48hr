import React, {usestate} from "react";
import {createGlobalStyle} from "styled-components";
import TitleBar from './Frontend/App-Need-Page/TitleBar.jsx';
import NeedCarousel from './Frontend/App-Need-Page/NeedCarousel.jsx';

const CardClickHandler = (event) => {
  console.log('Card was clicked!')
}

function App (props) {
    return (
      <div>
        <TitleBar />
        <NeedCarousel CardClickHandler={CardClickHandler}/>
      </div>
    );
}

export default App;