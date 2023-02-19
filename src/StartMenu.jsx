import React, { useContext } from "react";
import { AppContext } from "./GameContext";

const StartMenu = () => {
  const state = useContext(AppContext);
  console.log(state);

  return <div>Start Menu</div>;
};

export default StartMenu;
