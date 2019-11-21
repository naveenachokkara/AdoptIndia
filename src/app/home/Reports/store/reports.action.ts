
import { Action } from '@ngrx/store';

export enum ReportActionTypes {
  SearchAction = '[Search] Action'
}

export class Search implements Action {
  readonly type = ReportActionTypes.SearchAction;
  constructor(public payload: any) {
  }
}

export type ReportActions = Search;
