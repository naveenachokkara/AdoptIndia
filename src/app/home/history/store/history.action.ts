import { Action } from "@ngrx/store" ;

export enum HistoryReportActionTypes{
    SaveDriverHostory = '[SaveDriver] Action'
}

export class SaveDriver implements Action {
    readonly type = HistoryReportActionTypes.SaveDriverHostory;
    constructor(public payload: any) {
    }
}

export type HistoryActions = SaveDriver ;


