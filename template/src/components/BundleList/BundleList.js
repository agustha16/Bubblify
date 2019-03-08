import React from "react"
import ListView from "../ListView/ListView";
import bundleService from "../../services/bundleService";
import { BundlesProvider } from "../../context/BundlesContext";

class BundleList  extends React.Component {
    componentDidMount() {
        bundleService.getAllBundles().then(data => this.setState({ bundles: data }));
    }
    constructor(props) {
        super(props);
        this.state = {
            bundles: []
        };
    }
    render() {
        if(this.state.bundles[0] != undefined) {
          console.log("Hello", this.state.bundles[0].name);
        }
        return (
          <div></div>
        );
    }
};

export default BundleList;
