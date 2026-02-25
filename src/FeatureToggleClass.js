import React, { Component } from "react";

class FeatureToggleClass extends Component {
    render() {
        const { isEnabled, children } = this.props;

        if (!isEnabled) {
            return null;
        }

        return <>{children}</>;
    }
}

export default FeatureToggleClass;
