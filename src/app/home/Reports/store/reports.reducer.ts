import { ReportActionTypes, ReportActions } from './reports.action';
import { createFeatureSelector } from '@ngrx/store';

export interface SearchState {
  SearchingData: string;
  AddedVehicleData : any;
  AddedDriverData : any;
}

export const initialSearchState: SearchState = {
  SearchingData: '',
  AddedVehicleData : [],
  AddedDriverData: []
};

export function reportsreducer(state: SearchState = initialSearchState, action: ReportActions): SearchState {
  switch (action.type) {
    case ReportActionTypes.SearchAction:
      return {
        ...state,
        SearchingData: action.payload
      };
    case ReportActionTypes.AddVehicle :
      return {
        ...state,
        AddedVehicleData: [ action.payload, ... state.AddedVehicleData]
      };
    case ReportActionTypes.AddDriverAction :
      return {
        ...state,
        AddedDriverData: [action.payload, ...state.AddedDriverData]
      };
    default:
      return state;
  }
}

export const getReportState = createFeatureSelector<SearchState>(
  'reports'
);
