import React, { Component } from 'react'

export default class BoxClass extends Component {
    constructor(props){
        super(props);

        this.result = '';
    }

    getResult = () => {
        if ( this.props.title === "Computer" && this.props.result !== "tie" && this.props.result !== "") { 
            // 카드가 computer카드인가? && 결과가 비긴건 아닌가? && props.result에 값이 있는가?
            this.result = this.props.result === "win" ? "lose" : "win";
        } else {
            this.result = this.props.result;
        }
    }
    

    render() {
    this.getResult();
    return (
      <div className={`box ${this.result}`}>
        <h1>{this.props.title}</h1>
        <h2 data-testid="item-name">{this.props.item && this.props.item.name}</h2>
        <img className="item-img" src={this.props.item && this.props.item.img} />
        <h2>{this.result}</h2>
      </div>
    )
  }
}
