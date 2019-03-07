import React from "react";
import PropTypes from "prop-types";

const ListViewItem = (props) => {
    const { description, image, name, price } = props;
    return (
        <div className="card mb-3 custom-card-order">
            <h4 className="card-header">{ name }</h4>
            <img src={ image } alt="Card image" />
            <div className="card-body">
                <p className="card-text">{ description }</p>
            </div>
            <div class="card-footer text-muted">
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
