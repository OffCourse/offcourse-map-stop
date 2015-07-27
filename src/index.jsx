import React, { PropTypes } from "react";
import R from "ramda";
import Point from "offcourse-map-point";
import semiRegularPolygon from "paths-js/semi-regular-polygon";
import classnames from "classnames";

class Stop extends React.Component {

  static propTypes = {
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
    radius: PropTypes.number.isRequired,
    highlight: PropTypes.bool,
    collection: PropTypes.array.isRequired,
    handleClick: PropTypes.func.isRequired,
    handleHover: PropTypes.func.isRequired
  };

  static defaultProps = {
    x: 50,
    y: 50,
    radius: 30,
    handleClick: () => {},
    handleHover: () => {}
  };

  constructor(props){
    super(props);
    this.name = "stop";
  }

  classes(){
    const { complete, highlight } = this.props;
    const highlightClass = `${this.name}-is-highlight`;
    const completeClass = `${this.name}-is-complete`;
    return classnames({
      [this.name]: true,
      [highlightClass]: highlight,
      [completeClass]: complete
    });
  }

  createShape(x, y, radius, scale, collection){
    const shape = semiRegularPolygon({
      center: [x, y],
      radii: R.times(() => radius * scale, collection.length)
    });
    const pointsData = R.zip(collection, shape.path.points());
    return { shape, pointsData };
  }

  createPoint([item, point], strokeWidth, handlers){
    const { id, highlight, complete } = item;
    const [cx, cy] = point;
    const props = { strokeWidth, id, highlight, complete, cx, cy };
    return <Point key={ item.id } {...handlers} {...props}/>;
  }

  render() {
    const { x, y, radius, highlight, handleHover, handleClick, collection } = this.props;
    const angle = 140;
    const scale = highlight ? 1.7 : 1;
    const strokeWidth = (radius / 10) * scale;

    const { shape, pointsData } = this.createShape(x, y, radius, scale, collection);
    const handlers = { handleHover, handleClick };
    const points = R.map((data) => this.createPoint(data, strokeWidth, handlers), pointsData);

    return (
      <g transform={ `rotate(${angle}, ${x}, ${y})` }
        onClick= { handleClick.bind(this) }
        onMouseEnter={ handleHover.bind(this, true) }
        onMouseLeave={ handleHover.bind(this, false ) }
        className={ this.classes() } >
        <path strokeWidth={ strokeWidth } d={ shape.path.print() }/>
       { points }
      </g>
    );
  }
}

export default Stop;
