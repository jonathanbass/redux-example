import { connect } from "react-redux";
import React from "react";
import { IProperties } from "./Interfaces/IProperties";

class SubHeaderComponent extends React.Component<IProperties> {
    public render() {
        return (
            <h2>
                {this.props.headerText}
            </h2>
        );
    }
}

// Extracting values out of the store
const mapStateToProps = (state: IProperties) => ({ headerText: state.headerText });

export const SubHeader = connect(mapStateToProps)(SubHeaderComponent);