import React from "react";
import "./style.css";

//stateless component
const Header = props => (
    
    <div className="gameScore">
        <h1>The Simpsons Clicky Game</h1>
      <h3 className="score">Your Score: {props.total}</h3>
      <h3 className="status">{props.status}</h3>
    </div>
  );

export default Header;