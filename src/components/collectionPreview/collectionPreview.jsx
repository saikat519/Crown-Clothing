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
        .map(({ id, ...otherItemProps }) => (
          <CollectionItem key={id} {...otherItemProps} />
        ))}
    </div>
  </div>
);

export default CollectionPreview;