import React from 'react';
import Content from './Content.jsx';
import Toggle from './Toggle.jsx';

const Feed = (props) => {
  const {showToggle, id, className, items, toggleClick, 
    toggleText, onClickItem} = props;
  let button = showToggle ? <Toggle toggle={toggleClick} text={toggleText}/> : '';
  return (
    <div id={id} className={className}>
      <Content items={items} onClickItem={onClickItem}/>
      {button}
    </div>
  );
}

export default Feed;