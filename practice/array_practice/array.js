var numbers = [4, 9, 16, 25];
var name = ['amit', 'sumit', 'senior', 'junior'];

// array find

// name.find(ele => {
//     console.log(ele);
//     if(ele === 'amit')
//     return ele;
// });

//array from
// if you want to do some 
// console.log(Array.from(numbers, x =>x+x));


//array concat

// console.log(numbers.concat(name));

//array forEach

// numbers.forEach((element,index,array)=> {
//   console.log(element);
//   console.log(index);
//   console.log(array);
// })

// every :- it returns the boolean which checks the condition which pass in the function
// var x = numbers.every(x => {
//   return x  >  4;
// })
// console.log(x);

// fill() :-  use to replace or fill the array elemnt from to to elemnt 
//  arr = numbers.fill(2,0,3);
//  console.log(arr);
// o/p 2,2,2,25


// map it is use to manupulate the element of the array and it return the array 
// ar = numbers.map(element => {
//     return(element * 2);
// })
// console.log(ar);

// reduce it is use to reduce the aray into a single number ,
// each time the accumulator will get update
// it take two argument one for call funciton and other for the initial value for the accumulator.

// ar = numbers.reduce((accumulator, currentValue, currentIndex, array) => {
//     return accumulator + currentValue;
// },0);

// console.log(ar);

// reduceRight()  it takes the array from the right and work same as the reduce
// const array1 = [[0, 1], [2, 3], [4, 5]].reduceRight(
//     (accumulator, currentValue) => accumulator.concat(currentValue)
//   );

//   console.log(array1);
//   // expected output: Array [4, 5, 2, 3, 0, 1]

// arayreverse it reverse the array element
// console.log(numbers.reverse());

// shift delete the array from the 0th index and return the deleted element
// console.log(numbers.shift());
// console.log(numbers);

// slice it returns the copy of the array with the slice of the array 

// console.log(numbers.slice(2,5));

// some() return true or false if atleast one element pass the test case, same as the each 

// sort() it sort the funciton 
// console.log(numbers.sort((a, b) => {
//     return a-b;
// }));

// const months = ['Jan', 'March', 'April', 'June'];
// months.splice(1, 0, 'Feb');
// // inserts at index 1
// console.log(months);
// // expected output: Array ["Jan", "Feb", "March", "April", "June"]

// months.splice(4, 1, 'May');
// // replaces 1 element at index 4
// console.log(months);
// // expected output: Array ["Jan", "Feb", "March", "April", "May"]

// numbers.splice(1,1,'amit');
// console.log(numbers);


// console.log([1, 2, 3, 4, 5].filter(e => e));

obj = {
    "PassengerInfo": {
        "Id": 157,
        "FirstName": "Kate",
        "LastName": "Winslet",
        "Email": null,
        "PrimaryPhone": "2783463287",
        "SecondaryPhone": "",
        "MemberId": null,
        "SSN": "",
        "Gender": "",
        "Weight": 0,
        "Height": 0,
        "SeatingNeedId": 2,
        "TripPurposeId": null,
        "ClientNotes": [],
        "BillToInfo": [{
            "Id": 96,
            "IsSameAsClient": true,
            "IsDefault": true,
            "SeatingNeedId": 2,
            "MemberId": null,
            "Name": "Kate Winslet",
            "Phone": "2783463287",
            "Email": null,
            "Address": {},
            "AccountTypeId": 7,
            "BillingConfig": {
                "Id": 96,
                "BillingFrequencyId": 491,
                "BillingDay": null,
                "PaymentFrequencyId": 491,
                "InvoiceTemplateId": null,
                "PaymentDay": null,
                "BillingInfoId": 96,
                "LastInvoicedRecordDate": null,
                "IsActive": true,
                "TenantId": 2,
                "IsDeleted": false,
                "createdById": 38,
                "updatedById": 1,
                "createdAt": "2021-05-19T10:16:52.632Z",
                "updatedAt": "2021-08-25T11:03:21.754Z"
            },
            "IsSameAsAccount": false,
            "AccountId": null
        }],
        "SpecialRequirement": {
            "TwoManAssistance": false,
            "Companion": 0,
            "WheelChair": false,
            "BariatricWheelChair": false,
            "Walker": false,
            "OxygenSupport": false,
            "IsPregnant": false,
            "IsBlind": false,
            "IsDeaf": false
        },
        "SeatingNeed": "Ambulatory"
    },
    "Legs": [{
            "Id": 3930,
            "ParentBookingId": null,
            "PickUpAddress": "Taazaa Tech Pvt. Ltd., Sector 63 Road, Rasoolpur, Sector 63, Noida, Uttar Pradesh, India",
            "PickUpAddressOne": ", Sector 63 Rd",
            "AcceptanceStatus": 430,
            "PickUpServiceAreaId": 5,
            "PickUpZipCode": "201301",
            "PickUpCounty": "Ghaziabad, UP",
            "PickUpCity": "Noida",
            "PickUpState": "UP",
            "DropOffAddress": "Sector 62, Noida, Uttar Pradesh, India",
            "DropOffAddressOne": ", Sector 63 Rd",
            "DropOffServiceAreaId": 5,
            "DropOffZipCode": "",
            "DropOffCounty": "Gautam Buddh Nagar, UP",
            "DropOffCity": null,
            "DropOffState": null,
            "RequestedPickUpTime": "2021-08-20T03:30:00.000Z",
            "RequestedDropOffTime": "",
            "PickUpLat": 28.62464,
            "PickUpLng": 77.37867,
            "DropOffLat": 28.627981,
            "DropOffLng": 77.36485,
            "IsReturn": false,
            "EstimatedDistance": 2793,
            "EstimatedDuration": 361,
            "PickUpPhone": "",
            "DropOffPhone": "",
            "RelativeOrder": 1,
            "StatusId": 112,
            "VendorId": null,
            "IsWillCall": false,
            "FareInfo": {
                "Id": 3929,
                "BookingRequestId": 3930,
                "VehicleCategoryId": 61,
                "ProcedureCodes": [],
                "IsHoldAutoDebit": false,
                "AuthorizationNumber": "234",
                "Amount": 20,
                "WaitAmount": null,
                "EstimatedFare": 20,
                "IsAmountFrozen": true,
                "PaymentModeId": 92,
                "InstrumentId": null,
                "BillingNotes": "",
                "IsActive": true,
                "InvoiceId": null,
                "Explaination": {},
                "SelectedModels": false,
                "WaitChargeTimeUnitInMins": null,
                "PerUnitWaitCharge": null,
                "createdById": null,
                "updatedById": 1,
                "createdAt": "2021-06-22T04:00:01.808Z",
                "updatedAt": "2021-08-25T11:03:21.801Z",
                "FareBreakdowns": [{
                    "Amount": 20,
                    "BookingFareId": 3929,
                    "BookingRequestId": 3930,
                    "Id": 7068,
                    "InvoiceItemId": null,
                    "Quantity": 1,
                    "RatePerUnit": 20,
                    "TypeId": 1407,
                    "ModifierDefinition": null,
                    "ProcCode": null
                }]
            },
            "TripNotes": "",
            "BillToInfoId": 96,
            "PickupAddressLine": null,
            "DropoffAddressLine": null,
            "SeatingNeedId": 2,
            "TripPurposeId": null,
            "SeatingNeed": "Ambulatory",
            "SeatingNeedCode": "A"
        },
        {
            "Id": 3931,
            "ParentBookingId": 3930,
            "PickUpAddress": "Sector 62, Noida, Uttar Pradesh, India",
            "PickUpAddressOne": null,
            "AcceptanceStatus": 430,
            "PickUpServiceAreaId": 5,
            "PickUpZipCode": "",
            "PickUpCounty": "Gautam Buddh Nagar, UP",
            "PickUpCity": null,
            "PickUpState": null,
            "DropOffAddress": "Sector 131, Noida, Uttar Pradesh, India",
            "DropOffAddressOne": null,
            "DropOffServiceAreaId": 5,
            "DropOffZipCode": "",
            "DropOffCounty": "Gautam Buddh Nagar, UP",
            "DropOffCity": null,
            "DropOffState": null,
            "RequestedPickUpTime": "",
            "RequestedDropOffTime": "",
            "PickUpLat": 28.627981,
            "PickUpLng": 77.36485,
            "DropOffLat": 28.51336,
            "DropOffLng": 77.358284,
            "IsReturn": true,
            "EstimatedDistance": 15973,
            "EstimatedDuration": 1927,
            "PickUpPhone": "",
            "DropOffPhone": "",
            "RelativeOrder": 2,
            "StatusId": 118,
            "VendorId": null,
            "IsWillCall": true,
            "FareInfo": {
                "Id": 3930,
                "BookingRequestId": 3931,
                "VehicleCategoryId": 61,
                "ProcedureCodes": [],
                "IsHoldAutoDebit": false,
                "AuthorizationNumber": "234",
                "Amount": 0,
                "WaitAmount": null,
                "EstimatedFare": 0,
                "IsAmountFrozen": true,
                "PaymentModeId": 92,
                "InstrumentId": null,
                "BillingNotes": "",
                "IsActive": true,
                "InvoiceId": null,
                "Explaination": {},
                "SelectedModels": false,
                "WaitChargeTimeUnitInMins": null,
                "PerUnitWaitCharge": null,
                "createdById": null,
                "updatedById": 1,
                "createdAt": "2021-06-22T04:00:01.861Z",
                "updatedAt": "2021-08-25T11:03:21.851Z",
                "FareBreakdowns": [{
                    "Amount": 0,
                    "BookingFareId": 3930,
                    "BookingRequestId": 3931,
                    "Id": 7069,
                    "InvoiceItemId": null,
                    "Quantity": 1,
                    "RatePerUnit": 0,
                    "TypeId": 1407,
                    "ModifierDefinition": null,
                    "ProcCode": null
                }]
            },
            "TripNotes": "",
            "BillToInfoId": 96,
            "PickupAddressLine": null,
            "DropoffAddressLine": null,
            "SeatingNeedId": 2,
            "TripPurposeId": null,
            "AttestationRecord": {
                "Id": 3930,
                "BookingRequestId": 3931,
                "VendorId": null,
                "MedicaidId": null,
                "MedicalProvider": null,
                "MedicalProviderId": null,
                "MedicalProviderNpiNumber": "567567",
                "PriorAuthorizationNumber": null,
                "StatusId": 1442,
                "Payload": {},
                "createdById": null,
                "ThirdPartyStatus": null
            },
            "SeatingNeed": "Ambulatory",
            "SeatingNeedCode": "A"
        },
        {
            "Id": 3931,
            "ParentBookingId": 3930,
            "PickUpAddress": "Sector 62, Noida, Uttar Pradesh, India",
            "PickUpAddressOne": null,
            "AcceptanceStatus": 430,
            "PickUpServiceAreaId": 5,
            "PickUpZipCode": "",
            "PickUpCounty": "Gautam Buddh Nagar, UP",
            "PickUpCity": null,
            "PickUpState": null,
            "DropOffAddress": "Sector 131, Noida, Uttar Pradesh, India",
            "DropOffAddressOne": null,
            "DropOffServiceAreaId": 5,
            "DropOffZipCode": "",
            "DropOffCounty": "Gautam Buddh Nagar, UP",
            "DropOffCity": null,
            "DropOffState": null,
            "RequestedPickUpTime": "",
            "RequestedDropOffTime": "",
            "PickUpLat": 28.627981,
            "PickUpLng": 77.36485,
            "DropOffLat": 28.51336,
            "DropOffLng": 77.358284,
            "IsReturn": true,
            "EstimatedDistance": 15973,
            "EstimatedDuration": 1927,
            "PickUpPhone": "",
            "DropOffPhone": "",
            "RelativeOrder": 2,
            "StatusId": 118,
            "VendorId": null,
            "IsWillCall": true,
            "FareInfo": {
                "Id": 3930,
                "BookingRequestId": 3931,
                "VehicleCategoryId": 61,
                "ProcedureCodes": [],
                "IsHoldAutoDebit": false,
                "AuthorizationNumber": "234",
                "Amount": 0,
                "WaitAmount": null,
                "EstimatedFare": 0,
                "IsAmountFrozen": true,
                "PaymentModeId": 92,
                "InstrumentId": null,
                "BillingNotes": "",
                "IsActive": true,
                "InvoiceId": null,
                "Explaination": {},
                "SelectedModels": false,
                "WaitChargeTimeUnitInMins": null,
                "PerUnitWaitCharge": null,
                "createdById": null,
                "updatedById": 1,
                "createdAt": "2021-06-22T04:00:01.861Z",
                "updatedAt": "2021-08-25T11:03:21.851Z",
                "FareBreakdowns": [{
                    "Amount": 0,
                    "BookingFareId": 3930,
                    "BookingRequestId": 3931,
                    "Id": 7069,
                    "InvoiceItemId": null,
                    "Quantity": 1,
                    "RatePerUnit": 0,
                    "TypeId": 1407,
                    "ModifierDefinition": null,
                    "ProcCode": null
                }]
            },
            "TripNotes": "",
            "BillToInfoId": 96,
            "PickupAddressLine": null,
            "DropoffAddressLine": null,
            "SeatingNeedId": 2,
            "TripPurposeId": null,
            "AttestationRecord": {
                "Id": 3930,
                "BookingRequestId": 3931,
                "VendorId": null,
                "MedicaidId": null,
                "MedicalProvider": null,
                "MedicalProviderId": null,
                "MedicalProviderNpiNumber": "567567",
                "PriorAuthorizationNumber": null,
                "StatusId": 1442,
                "Payload": {},
                "createdById": null,
                "ThirdPartyStatus": null
            },
            "SeatingNeed": "Ambulatory",
            "SeatingNeedCode": "A"
        }
    ],
    "Id": 3930,
    "AcceptanceStatus": 430,
    "VendorId": "",
    "AccountId": 10,
    "AccountName": "Delhi NCR services",
    "FileId": null,
    "PassengerId": 157,
    "PassengerName": "Kate Winslet",
    "HasReturnTrip": true,
    "IsDriverRequireToWait": false,
    "IsHourlyWaitService": false,
    "FleetId": 9,
    "FleetName": "Delhi Taxi Fleet",
    "FleetAbbreviation": "DNF",
    "DateOfTrip": "2021-08-20",
    "VehicleCategoryId": "61",
    "SpecialRequirement": {
        "TwoManAssistance": false,
        "Companion": 0,
        "WheelChair": false,
        "BariatricWheelChair": false,
        "Walker": false,
        "OxygenSupport": false,
        "IsPregnant": false,
        "IsBlind": false,
        "IsDeaf": false
    },
    "ParentBookingId": 3930,
    "BillToInfo": {
        "Id": 96,
        "Name": "Kate Winslet",
        "Email": null,
        "AddressId": null,
        "Phone": "2783463287",
        "AccountTypeId": 7,
        "AccountTypeName": "PrivatePay",
        "SecondaryPhone": null,
        "AccountId": null,
        "createdById": 38,
        "updatedById": 1,
        "Address": null,
        "BillingConfig": {
            "Id": 96,
            "BillingFrequencyId": 491,
            "BillingDay": null,
            "PaymentFrequencyId": 491,
            "InvoiceTemplateId": null,
            "PaymentDay": null,
            "BillingInfoId": 96,
            "LastInvoicedRecordDate": null,
            "IsActive": true,
            "TenantId": 2,
            "IsDeleted": false,
            "createdById": 38,
            "updatedById": 1,
            "createdAt": "2021-05-19T10:16:52.632Z",
            "updatedAt": "2021-08-25T11:03:21.754Z"
        }
    },
    "BookingRecurrenceModel": {
        "ClientStateStringified": "{\"Frequency\":\"week\",\"EndDate\":\"2022-05-19T10:14:28.581Z\",\"IsNoEndDate\":false,\"RepeatInterval\":1,\"WeekDays\":[{\"text\":\"MON\",\"isSelected\":false},{\"text\":\"TUE\",\"isSelected\":false},{\"text\":\"WED\",\"isSelected\":true},{\"text\":\"THU\",\"isSelected\":false},{\"text\":\"FRI\",\"isSelected\":true},{\"text\":\"SAT\",\"isSelected\":false},{\"text\":\"SUN\",\"isSelected\":true}],\"ExcludedDates\":[],\"RecurrenceTextRepresentation\":\"Every week on Wed, Fri, Sun until May 19, 2022\",\"IsLastWeekday\":false,\"RecurrenceRRuleRepresentationFormat\":\"DTSTART:20210518T183000Z\\nRRULE:FREQ=WEEKLY;INTERVAL=1;BYDAY=WE,FR,SU;UNTIL=20220519T101428Z\",\"IsExclusionSelected\":false,\"Id\":132}",
        "RecurrencePattern": "DTSTART:20210518T183000Z\nRRULE:FREQ=WEEKLY;INTERVAL=1;BYDAY=WE,FR,SU;UNTIL=20220519T101428Z",
        "StartDate": "2021-05-19T00:00:00.000Z",
        "EndDate": "2022-05-19T00:00:00.000Z",
        "Id": 132,
        "TextRepresentation": "Every week on Wed, Fri, Sun until May 19, 2022"
    },
    "IsAllowAutomaticAttestation": false
}

function ab() {
    obj.Legs.find(el => {
        if (el.AttestationRecord) {
            console.log(2);
            d = el.AttestationRecord.MedicalProviderNpiNumber
            return true
        }
    })
    console.log('run complete');
}
console.log(ab());