import React from 'react';
import './App.css';
import { ClickCounter } from './components/ClickCounter';
import { SimpleList } from "./components/SimpleList";
import { Clock } from "./components/Clock";
import { Lifecycle } from "./components/Lifecycle";

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

const ContainerComponent = (props) => {
  if (!props.children) return null;

  return <div style={{border: '3px solid red'}}>{props.children}</div>
}

const DefaultContainerComponent = (props) => {

  return <div style={{border: '3px solid blue'}}>
    {/*{props.children ? props.children : 'Default content'}*/}
    {props.children || 'Default content'}
  </div>
}

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [6, 7, 8]
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* simple components */}
          <StaticTextComponent/>

          <DefaultContainerComponent>
            <DynamicTextComponent text="Dynamic text"/>
            <DynamicTextComponent/>
          </DefaultContainerComponent>

          <DefaultContainerComponent/>

          <ContainerComponent>
            <SecondDynamicTextComponent text="More dynamic text"/>
            <SecondDynamicTextComponent/>
          </ContainerComponent>

          <ContainerComponent/>

          {/* work with state */}
          <ClickCounter/>
          <SimpleList items={this.state.items}/>

          {/* work with lifecycle */}
          <Clock/>
          <Lifecycle/>
        </header>
      </div>
    );
  }
}

export default App;
