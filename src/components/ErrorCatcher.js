import React from 'react';

export class ErrorCatcher extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false
    }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true};
  }

  componentDidCatch(error, errorInfo) {
    console.log('error, ', error, " errorInfo, ", errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <div>Something went wrong</div>;
    }

    return this.props.children;
  }
}
