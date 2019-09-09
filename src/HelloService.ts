import { store } from "./Store";
import { ActionTypes } from "./actions/ActionTypes";
import { IEnterHeaderText } from "./actions/IEnterHeaderText";

export class HelloService {
    constructor () {

        // Updating store from a service instead of a component
        store.dispatch<IEnterHeaderText>({type: ActionTypes.EnterHeaderText, headerText: "HeLL0!!!"});
    }
}