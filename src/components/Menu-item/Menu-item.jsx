import React from 'react';
import { useHistory } from 'react-router-dom'
import './Menu-item.scss';

const MenuItem = ({ title, imageUrl, size }) => {
  
  const history = useHistory();

  const handleClick = () => {
    history.push(`/${title}`)
  }

  return <div className={`${size} menu-item`} onClick={handleClick} >
    <div
      className='background-image'
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
    />
    <div className='content'>
      <h1 className='title'>{title.toUpperCase()}</h1>
      <span className='subtitle'>SHOP NOW</span>
    </div>
  </div>
};

export default MenuItem;