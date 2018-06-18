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
  weight: PropTypes.number.isRequired
}
