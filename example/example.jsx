import React from "react";
import Stop from "../src/index.jsx";

class Example extends React.Component {

  constructor(props){
    super(props);
    this.state = { clicked: false, highlighted: false };
    this.handlers = {
      handleHover: this.handleHover.bind(this),
      handleClick: this.handleClick.bind(this)
    };
  }

  handleHover(status, id){
    this.setState({ pointId: id, highlighted: status });
  }

  handleClick(){
    const { clicked } = this.state;
    this.setState({ clicked: !clicked });
  }

  render() {
    const id = "1";
    const collection = [{id: "1"}, {id: "2"}, {id: "3"}];
    const { pointId, highlighted, clicked } = this.state;
    const props = { collection, id, highlight: highlighted };

    return (
      <div>
        <svg width={ 100 } height={ 100 }>
            <Stop {...props} {...this.handlers}/>
        </svg>
        <p>Higlighted: { `${highlighted}` }</p>
        <p>Clicked: { `${clicked}` }</p>
        <p>pointId: { `${pointId}` }</p>
      </div>
    );
  }
}

export default Example;
