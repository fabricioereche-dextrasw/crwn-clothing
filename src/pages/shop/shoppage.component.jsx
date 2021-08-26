import { Route } from "react-router";
import CollectionPage from "../collection/collection.component";

import ColletionsOverview from "../../components/collections-overview/collections-overview.component";

const ShopPage = ({ match }) => (
    <div className="shop-page">
        <Route exact path={`${match.path}`} component={ColletionsOverview} />
        <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </div>
);

export default ShopPage;