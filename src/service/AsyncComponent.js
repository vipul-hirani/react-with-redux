/*import React, { PureComponent } from 'react';
// import LoadingIndicator from 'commons/ui/components/LoadingIndicator';

export default class AsyncComponent extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      Component: null
    }
  }

  componentWillMount() {
    if(!this.state.Component) {
      this.props.moduleProvider().then( ({Component}) => this.setState({ Component }));
    }
  }

  render() {
    const { Component } = this.state;

    //The magic happens here!
    return (
      <div>
        {Component ? <Component /> : '' }
        {/!*{Component ? <Component /> : <LoadingIndicator />}*!/}
      </div>
    );
  }
};*/

import React, { Component } from "react";
export default function asyncComponent(getComponent) {


  class AsyncComponent extends Component {
    static Component = null;
    state = { Component: AsyncComponent.Component };
    componentWillMount() {
      if (!this.state.Component) {
        getComponent().then(Component => {
          AsyncComponent.Component = Component;
          this.setState({ Component })
        })
      }
    }
    render() {
      const { Component } = this.state;
      if (Component) {
        return <Component {...this.props} />
      }
      return null
    }
  }
  return AsyncComponent;
}