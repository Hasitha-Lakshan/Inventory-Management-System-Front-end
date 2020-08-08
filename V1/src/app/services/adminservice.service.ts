import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { UpdateUserPaylord } from '../admin-dashboard/updateUserPaylord';
import { DeleteUserPaylord } from '../admin-dashboard/deleteUserPaylord';
import {UserPaylord} from '../admin-dashboard/usersPaylord'
import { Observable } from 'rxjs';

import{StatusPaylord} from '../admin-dashboard/statusPaylord'
@Injectable({
  providedIn: 'root'
})
export class AdminserviceService {

  constructor(private httpclient:HttpClient) { }


updateUser(data){
  
  let updateUserPaylord=new UpdateUserPaylord();
  updateUserPaylord.firstName=data.firstname;
  updateUserPaylord.lastName=data.lastname;
  updateUserPaylord.role=data.role;
  updateUserPaylord.addressLine1=data.addressline1;
  updateUserPaylord.addressLine2=data.addressline2;
  updateUserPaylord.addressLine3=data.addressline3;
  updateUserPaylord.username=data.username;

  console.log(updateUserPaylord)
  return this.httpclient.put("http://localhost:8080/api/admin/updateuser",updateUserPaylord)

  

}



getAllUsers(){
  return this.httpclient.get<Array<UserPaylord>>("http://localhost:8080/api/admin/users");
  
}
setStatus(data){
  let statusPaylord=new StatusPaylord();
  statusPaylord.username=data.username;
  statusPaylord.accountStatus=data.accountStatus;
  console.log(statusPaylord);
  return this.httpclient.put("http://localhost:8080/api/admin/setaccountstatus",statusPaylord);
}

deleteUser(data){
  let deleteUserPaylord=new DeleteUserPaylord();
  deleteUserPaylord.username=data.username;
  console.log(deleteUserPaylord);
  return this.httpclient.put("http://localhost:8080/api/admin/deleteuser",deleteUserPaylord);
}
}
