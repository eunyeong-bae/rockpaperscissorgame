import React from "react";

const Box = (props) => {
    const { title, item} = props;
  let result;
  if ( title === "Computer" && props.result !== "tie" && props.result !== "") { 
    // 카드가 computer카드인가? && 결과가 비긴건 아닌가? && props.result에 값이 있는가?
    result = props.result === "win" ? "lose" : "win";
  } else {
    result = props.result;
  }

  return (
    <div className={`box ${result}`}>
      <h1>{title}</h1>
      <h2 data-testid="item-name">{item && item.name}</h2>
      <img className="item-img" src={item && item.img} />
      <h2>{result}</h2>
    </div>
  );
};

export default Box;