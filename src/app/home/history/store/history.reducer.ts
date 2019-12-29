import { HistoryActions, HistoryReportActionTypes } from './history.action';
import { createFeatureSelector } from '@ngrx/store';


export interface HistoryState {
    DriverHistoryData: any;
}


export const initialHistoryState: HistoryState = {
    DriverHistoryData : []
  };

export function HistoryReducer(state: HistoryState = initialHistoryState , action: HistoryActions): HistoryState {
      switch (action.type) {
          case HistoryReportActionTypes.SaveDriverHostory :
              return {
                  ...state,
                  DriverHistoryData: [action.payload, ...state.DriverHistoryData]
              };
            default:
                    return state;

          }
      }
export const getHistoryReportsState = createFeatureSelector<HistoryState>(
        'historyReports'
      );
