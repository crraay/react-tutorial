import React from 'react';

const SimpleListItem = ({ val }) => {
  return <li>item {val}</li>
}

export const SimpleList = ({ items }) => {
  //1
  // const items = numbers.map(i => <li key={i.toString()}>item {i}</li>)

  //2
  // const items = numbers.map(i => <SimpleListItem key={i} val={i}/>)
  // return <ul>{items}</ul>

  //3
  return (
    <ul>
      {items.map(i => <SimpleListItem key={i} val={i}/>)}
    </ul>
  );
}
