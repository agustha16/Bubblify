import React from "react";
import ListViewItem from "../ListViewItem/ListViewItem";
import bubbleService from "../../services/bubbleService";


class BubbleDetail extends React.Component {
    componentDidMount() {
        bubbleService.getBubbleById(this.props.match.params.bubbleId).then(data => this.setState({ bubbleItem: data }));;
    }
    constructor(props) {
        super(props);
        this.state = {
            bubbleItem: {}
        };
    }
    render() {
        if (!this.state.bubbleItem.id) {
            return (
                <h1>404 NOT FOUND</h1>
            );
        }
        return (
            <div className="sub-container">
                <ListViewItem key={ this.state.bubbleItem.id } { ...this.state.bubbleItem } />
            </div>
        );
    }
};

export default BubbleDetail;
