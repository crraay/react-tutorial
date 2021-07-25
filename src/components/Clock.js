import React from 'react';

export class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date()
    }
  }

  tick() {
    this.setState({date: new Date()});
  }

  componentDidMount() {
    this.timerId = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  render() {
    return <h2>It is {this.state.date.toLocaleTimeString()} now</h2>;
  }
}
