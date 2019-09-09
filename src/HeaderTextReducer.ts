import { ActionTypes } from "./actions/ActionTypes";
import { IProperties } from "./Interfaces/IProperties";

const INITIAL_STATE: IProperties = {}

export const headerTextReducer = (state = INITIAL_STATE, action: any) => {
    switch (action.type) {
        case ActionTypes.EnterHeaderText:
            return {
                ...state,
                headerText: action.headerText
            }
        default:
            return state;
    }
};