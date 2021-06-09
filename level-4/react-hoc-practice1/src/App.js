import React from "react"
import {withFavoriteNumber} from "./withFavoriteNumber"

function App(props) {
  return (
    <div className="App">
      {props.favoriteNumber}
    </div>
  );
}

export default withFavoriteNumber(App);
