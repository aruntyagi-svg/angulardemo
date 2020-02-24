import { Injectable } from '@angular/core';
import { Vendor } from '../models/vendor';

@Injectable({
  providedIn: 'root'
})
export class VendorService {

  // VENDORS:Vendor[]=
  // [
  //   { id:"1", name:"Ram", mobile:"12345678", email:"ram@gmail.com", address:"delhi", gender:"male", city:"b", state:"state", country:"contry",pan_number:"string",aadhar_number:"string",totalGyms:2 },
  //   { id:"1" ,name:"Shayam", mobile:"7126781267", email:"shyam@gmail.com", address:"gurgaon", gender:"male", city:"b", state:"state", country:"contry",pan_number:"string",aadhar_number:"string",totalGyms:1 },
  //   { id:"1", name:"Mohan", mobile:"98239813722", email:"mohan@gmail.com", address:"gwalior", gender:"male", city:"b", state:"state", country:"contry",pan_number:"string",aadhar_number:"string",totalGyms:3 },
  //   { id:"1", name:"Sohan", mobile:"7627316276", email:"sohan@gmail.com", address:"bhiwani", gender:"male", city:"b", state:"state", country:"strincontryg",pan_number:"string",aadhar_number:"string",totalGyms:4 },
  //   { id:"1", name:"Ramesh", mobile:"7823871298", email:"ramesh@gmail.com", address:"tosham", gender:"male", city:"b", state:"state", country:"contry",pan_number:"string",aadhar_number:"string",totalGyms:5 },
   
  // ]
 

  constructor() {
    // localStorage.setItem("vendors",JSON.stringify(this.VENDORS));

   // alert(localStorage.getItem("vendors"));

   }

   // Get all vendor list via API or any data storage
  getAllVendors() {
    let vendorList: any;
    if (localStorage.getItem('vendors') && localStorage.getItem('vendors') !== '') {
      vendorList = {
        code: 200,
        message: 'vendor List Fetched Successfully',
        data: JSON.parse(localStorage.getItem('vendors'))
      };
    } else {
      vendorList = {
        code: 200,
        message: 'Vendors List Fetched Successfully',
        data: JSON.parse(localStorage.getItem('vendors'))
      };
    }
    return vendorList;
  }

  doRegisterVendor(data, index: number) {
    const vendorList = JSON.parse(localStorage.getItem('vendors'));
    let returnData;
    if (index != null) {
      let i: number;
      for ( i = 0; i < vendorList.length; i++) {
        if (index != i && vendorList[i].email.trim() === data.email.trim()) {
          returnData = {
            code: 503,
            message: 'Email Address Already In Use',
            data: null
          };
          return returnData;
        }
      }

      vendorList[index] = data;
      localStorage.setItem('vendors', JSON.stringify(vendorList));
      returnData = {
        code: 200,
        message: 'Vendor Successfully Updated',
        data: JSON.parse(localStorage.getItem('vendors'))
      };
    } else {
      data.id = this.generateRandomID();
      for (let i = 0; i < vendorList.length; i++) {
        if (vendorList[i].email === data.email) {
          returnData = {
            code: 503,
            message: 'Email Address Already In Use',
            data: null
          };
          return returnData;
        }
      }
      vendorList.unshift(data);

      localStorage.setItem('vendors', JSON.stringify(vendorList));

      returnData = {
        code: 200,
        message: 'Vendor Successfully Added',
        data: JSON.parse(localStorage.getItem('vendors'))
      };
    }
    return returnData;
  }

  deleteVendor(index: number) {
    const vendorList = JSON.parse(localStorage.getItem('vendors'));

    vendorList.splice(index, 1);

    localStorage.setItem('vendors', JSON.stringify(vendorList));

    const returnData = {
      code: 200,
      message: 'Vendor Successfully Deleted',
      data: JSON.parse(localStorage.getItem('vendors'))
    };

    return returnData;
  }



  getVendorDetails(index: number) {
    const vendorList = JSON.parse(localStorage.getItem('vendors'));

    const returnData = {
      code: 200,
      message: 'Vendor Details Fetched',
      vendorData: vendorList[index]
    };

    return returnData;
  }


  generateRandomID() {
    const x = Math.floor((Math.random() * Math.random() * 9999));
    return x;
  }






}
