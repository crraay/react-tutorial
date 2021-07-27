import React from 'react';

export const MyInput = (props) => {
  const {labelText, ...args} = props;
  return (
    <div>
      <label>{labelText}</label>
      <input type="text" {...args}/>
    </div>
  );
}
