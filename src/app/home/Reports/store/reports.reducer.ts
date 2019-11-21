import { ReportActionTypes, ReportActions } from './reports.action';
import { createFeatureSelector } from '@ngrx/store';

export interface SearchState {
  SearchingData: string;
}

export const initialSearchState: SearchState = {
  SearchingData: ''
};

export function reportsreducer(state: SearchState = initialSearchState, action: ReportActions): SearchState {
  switch (action.type) {
    case ReportActionTypes.SearchAction:
      return {
        ...state,
        SearchingData: action.payload
      };
    default:
      return state;
  }
}

export const getReportState = createFeatureSelector<SearchState>(
  'reportsSearch'
);
