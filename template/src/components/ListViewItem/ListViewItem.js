import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ListViewItem = (props) => {
    const { description, image, name, price } = props;
    return (
        <div className="card mb-3 custom-card-order">
            <h4 className="card-header">{ name }</h4>
            <Link to={ "/bubbles/" + props.id }><img src={ image } alt="Card image" /></Link>
            <div className="card-body">
                <p className="card-text">{ description }</p>
            </div>
            <div className="card-footer text-muted">
              Price: { price } kr.
            </div>
        </div>
    );
};

ListViewItem.propTypes = {
    id: PropTypes.oneOfType([ PropTypes.string, PropTypes.number ]).isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
};

export default ListViewItem;
