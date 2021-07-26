import React from 'react';

export class Converter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cels: 0,
      fahr: 0
    }
    this.onCelsChange = this.onCelsChange.bind(this)
    this.onFahrChange = this.onFahrChange.bind(this)
  }
  onCelsChange(e) {
    const cels = e.target.value
    this.setState({cels: cels});

    if(cels) {
      const fahr = (cels * 1.8) + 32;
      this.setState({fahr: fahr});
    }
  }
  onFahrChange(e) {
    const fahr = e.target.value
    this.setState({fahr: fahr});

    if (fahr) {
      const cels = (fahr - 32) / 1.8;
      this.setState({cels: cels});
    }
  }
  render() {
    return (
      <form>
        C <input type="number" value={this.state.cels} onChange={this.onCelsChange}/>
        F <input type="number" value={this.state.fahr} onChange={this.onFahrChange}/>
      </form>
    )
  }
}
