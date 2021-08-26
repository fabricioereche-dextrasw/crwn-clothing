import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors';
import CollectionPreview from '../collection-preview/collection-preview.component';

import './collections-overview.styles.scss';

const ColletionsOverview = ({ collections }) => (
    <div className="collections-overview">
        {
            collections.map(({id, ...othersCollectionProps}) => (
                <CollectionPreview key={id} {...othersCollectionProps} />
            ))
        }
    </div>
);

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
});

export default connect(mapStateToProps)(ColletionsOverview);