import { vehicleData } from '../../../../assets/data';
export interface VehicleModel {
  regNumber: string;
  vehicleType: string;
  VehicleBrand: string;
  mfgDate: string;
  engineNumber: string;
  insurance: string;
  VendorName: string;
  topSpeed: string;
  location: string;
}

export const VehicleData: VehicleModel = {
  regNumber : '',
  vehicleType : '',
  VehicleBrand : '',
  mfgDate : null,
  engineNumber : '',
  insurance : '',
  VendorName: '',
  topSpeed : '',
  location: ''
};

export class CurrentVehicle {
    constructor(vehiclesData: VehicleModel) {
      VehicleData.regNumber = vehiclesData.regNumber;
        }
}

export class Page {
  size = 0;
  // The total number of elements
  totalElements = 0;
  // The total number of pages
  totalPages = 0;
  // The current page number
  pageNumber = 0;
}

export class PagedData<T> {
  data = new Array<T>();
  page = new Page();
}
