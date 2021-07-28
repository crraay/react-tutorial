import React from "react";
import {Container, DefaultContainer} from "./Container/Container";
import {ClickCounter} from "./ClickCounter";
import {SimpleList} from "./SimpleList";
import {Clock} from "./Clock";
import {Lifecycle} from "./Lifecycle";
import {Title} from "./Title";
import {NameForm} from "./NameForm";
import {UncontrolledForm} from "./UncontrolledForm";
import {Converter} from "./Converter";

export const StaticTextComponent = () => {
  return <div>Static text</div>
}

export const DynamicTextComponent = ({text = 'Default text'}) => {
  return <div>{text}</div>
}

export class SecondDynamicTextComponent extends React.Component {
  render() {
    return <div>{this.props.text || 'Default text'}</div>
  }
}

export const BasicExamplesPage = () => {
  // throw Error("test");
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

export const StateExamplesPage = (props) => {
  const items = props.location.state.items;
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

export const FormExamplesPage = () => {
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

export class TestPage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log('passed id=',this.props.match.params.id);
  }

  render() {
    return null;
  }
}
