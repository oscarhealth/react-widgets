import PropTypes from 'prop-types';
import React from 'react';
import { findDOMNode } from 'react-dom';

export default {
  propTypes: {
    autoFocus: PropTypes.bool
  },

  componentDidMount() {
    let { autoFocus } = this.props;

    if (autoFocus)
      this.focus ? this.focus() : findDOMNode(this).focus()
  }
};
