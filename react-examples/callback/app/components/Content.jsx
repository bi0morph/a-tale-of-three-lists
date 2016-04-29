import React from 'react';

const Content = ({ items, onClickItem }) => {
  items = items || [];
  const list = items.map((item) => (
    <a className="item" key={item.id} onClick={onClickItem} href="#">{item.text}</a>
  ));

  return (
    <div className='content'>
      {list}
    </div>
  );
};

export default Content;