// import { Injectable } from '@angular/core';
// import { of, Observable } from 'rxjs';
// import { CurrentVehicle , Page , PagedData } from './vehicle/vehicle.model';
// import { Data } from '../../../assets/reportsdata';
// import {of} from 'rxjs/index';

// /**
//  * A server used to mock a paged data result from a server
//  */

// @Injectable()
// export class ReportsService {



//     // public getResults(page: Page): Observable<PagedData<CurrentVehicle>> {
//     //     return Observable.of(Data).delay(350).map(data => this.getPagedData(page));
//     // }

//     private getPagedData(page: Page): PagedData<CurrentVehicle> {
//         let pagedData = new PagedData<CurrentVehicle>();
//         page.totalElements = Data.length;
//         page.totalPages = page.totalElements / page.size;
//         let start = page.pageNumber * page.size;
//         let end = Math.min((start + page.size), page.totalElements);
//         for (let i = start; i < end; i++){
//             let jsonObj = Data[i];
//             let vehicle = new CurrentVehicle(jsonObj);
//             pagedData.data.push(vehicle);
//         }
//         pagedData.page = page;
//         return pagedData;
//     }

// }
