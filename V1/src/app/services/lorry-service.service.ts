import { Injectable } from '@angular/core';
import {Lorry} from '../lorry-dashboard/manage/lorry'
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LorryServiceService {

  constructor(private httpClient: HttpClient) { }
  
  addLorryRequest (data){

    let lorry = new Lorry();
    lorry.firstName= data.fName;
    lorry.lastName= data.lName;
    lorry.phonenumber = data.phoneNumber;

    let lorryData = {
      firstName: lorry.firstName,
      lastName: lorry.lastName,
      phonenumber: lorry.phonenumber,
      accuontStatus: 1
    }
    console.log(lorry);

    return this.httpClient.post(environment.endPoint + "distribution/addlorry", lorryData);
  }

  getLorries() {
    return this.httpClient.get<Lorry[]>(environment.endPoint + "distribution/lorries");
  }

  updateLorry(lorryID, firstName, lastName, phonenumber, accountStatus) {
    let lorryData = {
      lorryID: lorryID,
        firstName: firstName,
        lastName: lastName,
        phonenumber: phonenumber,
        accountStatus: accountStatus
    }
     
    return this.httpClient.put(environment.endPoint + "distribution/updatelorry/{id}", lorryData)
  }
}
