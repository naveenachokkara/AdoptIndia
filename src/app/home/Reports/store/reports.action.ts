
import { Action } from '@ngrx/store';

export enum ReportActionTypes {
  SearchAction = '[Search] Action',
  AddVehicle ='[AddVehicle] Action',
  AddDriverAction = '[AddDriver] Action'

}

export class Search implements Action {
  readonly type = ReportActionTypes.SearchAction;
  constructor(public payload: any) {
  }
}

export class AddVehicle implements Action {
  readonly type = ReportActionTypes.AddVehicle;
  constructor(public payload : any){
  }
}

export class AddDriver implements Action {
  readonly type= ReportActionTypes.AddDriverAction;
  constructor(public payload : any){
  }
}

export type ReportActions = Search | AddVehicle | AddDriver;
