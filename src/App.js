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
import {TodoList} from "./components/TodoList";
import {Switch, Route} from "react-router-dom";
import {Menu} from "./components/Menu";

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

const BasicExamplesPage = () => {
  return (
    <div>
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
    </div>
  )
}

const StateExamplesPage = ({items}) => {
  return (
    <DefaultContainer>
      {/* work with state */}
      <ClickCounter/>
      <SimpleList items={items}/>

      {/* work with lifecycle */}
      <Clock/>
      <Lifecycle/>

      {/* Redux */}
      <Title/>
    </DefaultContainer>
  )
}

const FormExamplesPage = () => {
  return (
    <div>
      <Container title="Name form">
        <NameForm/>
      </Container>

      <DefaultContainer>
        <UncontrolledForm/>
      </DefaultContainer>

      <Container title="Temperature converter">
        <Converter/>
      </Container>
    </div>
  )
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
          <Menu />
          <Switch>
            <Route exact path="/basic" component={BasicExamplesPage} />
            <Route exact path="/state" render={() => <StateExamplesPage items={this.state.items} />} />
            <Route exact path="/forms" component={FormExamplesPage} />
            <Route exact path="/todo" component={TodoList} />
          </Switch>
        </header>
      </div>
    );
  }
}

export default App;
