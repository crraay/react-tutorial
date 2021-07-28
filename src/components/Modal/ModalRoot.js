import React from 'react';
import {ModalContext} from "../../context/modal";

export const ModalRoot = () => {
  return (
    <ModalContext.Consumer>
      {
        ({component: Component, props, hideModal}) =>
          Component ? <Component {...props} onRequestClose={hideModal}/> : null
      }
    </ModalContext.Consumer>
  );
}
