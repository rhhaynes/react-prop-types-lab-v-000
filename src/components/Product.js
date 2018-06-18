import React from 'react';
import PropTypes from 'prop-types';

class Product extends React.Component {
  render() {
    return (

    );
  }
}

Product.defaultProps = {
  hasWatermark: false
}

Product.propTypes = {
  name: PropTypes.string.isRequired,
  producer: PropTypes.string,
  hasWatermark: PropTypes.bool,
  color: PropTypes.string.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
  weight: function(props, propName, componentName){
    if ( !(propName in props) ){
      return new Error(`missing ${propName}`);
    }
    if ( typeof(props[propName]) !== "number") ){
      return new Error(`propName must be a number`)
    }
    if ( props[propName]<80 || props[propName]>300 ){
      return new Error(`propName must range between 80 and 300`)
    }
  }
}

export default Product;
