

import { createSelector } from '@ngrx/store';
import { SearchState, getReportState } from './reports.reducer';

export const searchdata = createSelector(
  getReportState,
  (state: SearchState) => state.SearchingData
);

export const AddVehicle = createSelector(
  getReportState,
  (state: SearchState) => state.AddedVehicleData
);

export const AddedDriverData = createSelector(
  getReportState,
(state: SearchState) => state.AddedDriverData
);
// export const searchVehicleData = createSelector(
//   getReportState,
//   (state: SearchState) => state.SearchingData
// );
