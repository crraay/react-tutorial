import React, {createContext} from "react";

export const ModalContext = createContext({
  component: null,
  props: {},
  showModal: () => {},
  hideModal: () => {},
})

export class ModalProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      component: null,
      props: {},
      showModal: this.showModal,
      hideModal: this.hideModal,
    }
  }

  showModal = (component, props = {}) => {
    this.setState({
      component,
      props
    })
  }

  hideModal = () => {
    this.setState({
      component: null,
      props: {}
    })
  }

  render() {
    return (
      <ModalContext.Provider value={this.state}>
        {this.props.children}
      </ModalContext.Provider>
    );
  }
}
