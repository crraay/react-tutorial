import React from "react";
import styles from "./Container.module.scss";

export const Container = (props) => {
  if (!props.children) return null;

  return (
    <div>
      <h3 className={[styles.title, styles.red].join(' ')}>{props.title}</h3>
      <div className={[styles.content, styles.red].join(' ')}>
        {props.children}
      </div>
    </div>
  );
}

export const DefaultContainer = (props) => {
  return (
    <div>
      <h3 className={[styles.title, styles.blue].join(' ')}>{props.title || 'Default title'}</h3>
      <div className={[styles.content, styles.blue].join(' ')}>
        {/*{props.children ? props.children : 'Default content'}*/}
        {props.children || 'Default content'}
      </div>
    </div>
  );
}
