export interface DataReceived {
  data: {
    valid: boolean;
    bank_code: string;
    country_code: string;
    location_code: string;
    branch_code: string | null;
  };
}
// {
//     "data": {
//       "valid": true,
//       "bank_code": "HBUK",
//       "country_code": "GB",
//       "location_code": "4B",
//       "branch_code": null
//     }
//   }
// valid: true;
// bank_code: 'HBUK';
// country_code: 'GB';
// location_code: '4B';
// branch_code: null;
