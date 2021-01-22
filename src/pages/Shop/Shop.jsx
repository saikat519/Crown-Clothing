import React, { Component } from 'react'
import SHOP_DATA from './shopData'
import CollectionPreview from '../../components/collectionPreview/collectionPreview'
import './shop.scss'
export default class shop extends Component {

    constructor(props) {
        super(props);

        this.state = {
            collections: SHOP_DATA
        };
  
    }

    render() {
        return (
            
                <div className='shop-page'>
                    <h1>Collections</h1>
                    {this.state.collections.map(({ id, ...otherCollectionProps }) => (
                    <CollectionPreview key={id} {...otherCollectionProps} />
                    ))}
                </div>
            
        )
    }
}
