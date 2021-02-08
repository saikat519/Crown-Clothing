import React from 'react';

import CollectionItem from '../CollectionItem/CollectionItem';
import { Link } from 'react-router-dom'

import './collectionPreview.scss';

const CollectionPreview = ({ title, items }) => (
    <div className='collection-preview'>
    <Link to ={title.toLowerCase()}><h1 className="title">{title.toUpperCase()}</h1></Link>
    
    <div className='preview'>
    {items
      .filter((item, idx) => idx < 4)
      .map(item => (
        <CollectionItem key={item.id} item={item} />
        
      ))}
    </div>
  </div>
);

export default CollectionPreview;