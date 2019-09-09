import { IAction } from "./IAction";

export interface IEnterHeaderText extends IAction {
    type: string;
    headerText: string;
}