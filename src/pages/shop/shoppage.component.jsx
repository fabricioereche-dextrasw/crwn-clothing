import { Component } from 'react';

import shopCollection from './shop.data';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';

class ShopPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            collections: shopCollection
        };
    }

    render(){
        return (
            <div className="shop-page">
                {
                    this.state.collections.map(({id, ...othersCollectionProps}) => (
                        <CollectionPreview key={id} {...othersCollectionProps} />
                    ))
                }
            </div>
        );
    }
}

export default ShopPage;