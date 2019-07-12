import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import Tab from './tab';

class Tabs extends Component {
  static propTypes = {
    children: PropTypes.instanceOf(Array).isRequired,
  }

  constructor(props) {
    super(props);

    this.state = {
      // activeTab: this.props.children[0].props.label, //this sets the first tab to be open. May want to replicate for other tab components.
      activeTab: null,
    };
  }

  onClickTabItem = (tab) => {
    this.setState({ activeTab: tab });
  }

  render() {
    const {
      onClickTabItem,
      props: {
        children,
      },
      state: {
        activeTab,
      }
    } = this;

    return (
      <Fragment>
        <ul className="dropdown-nav">
          {children.map((child) => {
            const { label } = child.props;

            return (
              <Tab
                activeTab={activeTab}
                key={label}
                label={label}
                onClick={onClickTabItem}
              />
            );
          })}
        </ul>
        <ul className="dropdown-nav-items">
          {children.map((child) => {
            if (child.props.label !== activeTab) return undefined;
            return child.props.children;
          })}
        </ul>
      </Fragment>
    );
  }
}

export default Tabs;