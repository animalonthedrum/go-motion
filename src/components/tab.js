import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Tab extends Component {
  static propTypes = {
    activeTab: PropTypes.string,
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
  };

  onClick = () => {
    const { label, onClick } = this.props;
    onClick(label);
  }

  render() {
    const { 
      onClick,
      props: {
        activeTab,
        label,
      },
    } = this;

    let className = 'nav-item';

    if (activeTab === label) {
      className += ' active';
    }

    return (
      <li 
        className={className}
        onClick={onClick}
      >
        {label}
      </li>
    );
  }
}
