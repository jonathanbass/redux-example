import React from "react";
import { connect } from "react-redux";
import { IEnterHeaderText } from "./actions/IEnterHeaderText";
import { ActionTypes } from "./actions/ActionTypes";
import { IProperties } from "./Interfaces/IProperties";

class HeaderEntryComponent extends React.Component<IProperties> {
    public async componentDidMount(): Promise<void> {
        this.enterHeaderText = this.enterHeaderText.bind(this);
    }

    enterHeaderText = (event: any) => {
        if (!this.props.enterHeaderText) return;

        const headerText = event.target.value;
        this.props.enterHeaderText(headerText);
    }

    public render() {
        return (
            <div>
                <div>
                    <input type="text" name="header-text" id="header-text" onChange={this.enterHeaderText} />
                </div>
                <h1>
                    {this.props.headerText}
                </h1>
            </div>
        );
    }
}

// Updating state from component using the Action: {type: "ENTER_HEADER_TEXT", headerText}
const mapDispatchToProps = (dispatch: React.Dispatch<IEnterHeaderText>) => ({ enterHeaderText: (headerText: string) => dispatch({type: ActionTypes.EnterHeaderText, headerText}) });

export const HeaderEntry = connect(null, mapDispatchToProps)(HeaderEntryComponent);