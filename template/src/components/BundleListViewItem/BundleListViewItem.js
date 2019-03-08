import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import BubbleDetail from "../BubbleDetail/BubbleDetail";

const BundleListViewItem = (props) => {
    const { items, name } = props;
    return (
        <div className="card mb-3 bundle-card-container">
            <Link to={ "/bundles/" + props.id }>
                <h4 className="card-header">{ name }</h4>
            </Link>
            <div className="bundle-bubble-container">
                {
                    items.map((item, key) => <BubbleDetail key={ key } bubbleId={ item }/>)
                }
            </div>
        </div>
    );
};

BundleListViewItem.propTypes = {
    id: PropTypes.oneOfType([ PropTypes.string, PropTypes.number ]).isRequired,
    items: PropTypes.array.isRequired,
    name: PropTypes.string.isRequired
};

export default BundleListViewItem;
