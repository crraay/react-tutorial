import React from 'react';
import './App.css';
import { ClickCounter } from './components/ClickCounter';
import { SimpleList } from "./components/SimpleList";
import { Clock } from "./components/Clock";
import { Lifecycle } from "./components/Lifecycle";
import { Title } from "./components/Title";
import { NameForm } from "./components/NameForm";
import {UncontrolledForm} from "./components/UncontrolledForm";
import {Converter} from "./components/Converter";
import {Container, DefaultContainer} from "./components/Container/Container";

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

          <DefaultContainer>
            <DynamicTextComponent text="Dynamic text"/>
            <DynamicTextComponent/>
          </DefaultContainer>

          <DefaultContainer/>

          <Container>
            <SecondDynamicTextComponent text="More dynamic text"/>
            <SecondDynamicTextComponent/>
          </Container>

          <Container/>

          <DefaultContainer>
            {/* work with state */}
            <ClickCounter/>
            <SimpleList items={this.state.items}/>

            {/* work with lifecycle */}
            <Clock/>
            <Lifecycle/>

            {/* Redux */}
            <Title/>
          </DefaultContainer>

          {/* Forms */}
          <Container title="Name form">
            <NameForm/>
          </Container>

          <DefaultContainer>
            <UncontrolledForm/>
            <Converter/>
          </DefaultContainer>
        </header>
      </div>
    );
  }
}

export default App;
