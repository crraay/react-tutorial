import React from 'react';
import logo from './logo.svg';
import './App.css';

const StaticTextComponent = () => {
  return <div>Static text</div>
}

const DynamicTextComponent = ({text = 'Default text'}) => {
  return <div>{text}</div>
}

class SecondDynamicTextComponent extends React.Component {
  render() {
    return <div>{this.props.text || 'Default text'}</div>
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <StaticTextComponent></StaticTextComponent>

        <DynamicTextComponent text="Dynamic text"></DynamicTextComponent>
        <DynamicTextComponent></DynamicTextComponent>

        <SecondDynamicTextComponent text="More dynamic text"></SecondDynamicTextComponent>
        <SecondDynamicTextComponent></SecondDynamicTextComponent>
      </header>
    </div>
  );
}

export default App;
