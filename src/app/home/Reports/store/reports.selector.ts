import { createSelector } from '@ngrx/store';
import { SearchState, getReportState } from './reports.reducer';

export const searchdata = createSelector(
  getReportState,
  (state: SearchState) => state.SearchingData
);
