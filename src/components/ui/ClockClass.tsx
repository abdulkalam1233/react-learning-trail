import React, { Component } from 'react';

class ClockClass extends Component {
  intervalID: NodeJS.Timer | undefined;
  constructor(props: any) {
    super(props);
    this.state = {
      today: new Date(),
    };
  }

  componentDidMount() {
    this.intervalID = setInterval(() => {
      this.setState({ today: new Date() });
    }, 1000);
  }

  componentWillUnmount() {
    console.log('UNMOUNT');
    clearInterval(this.intervalID);
  }

  render() {
    const state: any = { ...this.state };
    return (
      <div>
        <h1>
          {state.today.toLocaleDateString('en-US', {
            day: '2-digit',
            year: 'numeric',
            month: '2-digit',
          })}{' '}
          {state.today.toLocaleTimeString()}
        </h1>
      </div>
    );
  }
}

export default ClockClass;
