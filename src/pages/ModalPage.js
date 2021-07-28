import React from 'react';
import {ModalContext} from "../context/modal";
import {BaseModal} from "../components/Modal/BaseModal";

export const FirstModal = ({ onRequestClose, ...otherProps }) => (
  <BaseModal onRequestClose={onRequestClose} {...otherProps}>
    <div>first modal</div>
    <button onClick={onRequestClose}>Close</button>
  </BaseModal>
);

export const SecondModal = ({ onRequestClose, ...otherProps }) => (
  <BaseModal onRequestClose={onRequestClose} {...otherProps}>
    <div {...otherProps}>second modal</div>
    <button onClick={onRequestClose}>Close</button>
  </BaseModal>
);

export const ModalPage = () => {
  return (
    <>
      modal page
      <ModalContext.Consumer>
        {
          ({showModal}) =>
            <>
              <button onClick={() => showModal(FirstModal)}>show 1 modal</button>
              <button onClick={() => showModal(SecondModal, {val1: "val1", val2: "val2"})}>show 2 modal</button>
            </>
        }
      </ModalContext.Consumer>
    </>
  )
}
