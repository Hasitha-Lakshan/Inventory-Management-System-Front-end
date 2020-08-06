import { Component, OnInit } from '@angular/core';
import {LorryServiceService} from '../../services/lorry-service.service'
import { FormGroup, FormBuilder, FormControl, FormArray } from '@angular/forms';
import { Lorry } from './lorry';
// import {HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http'

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css']
})
export class ManageComponent implements OnInit {

  setLorry: FormGroup;
  forms = [];
  allLorries: Lorry[];

  constructor(private lorryService: LorryServiceService) {
    this.setLorry = new FormGroup({
      fName:new FormControl(''),
      lName:new FormControl(''),
      phoneNumber:new FormControl(''),
    });
  }

  ngOnInit(): void {
    this.allLorries = [];
    this.forms = [];
    this.lorryService.getLorries().subscribe(data => {
      console.log(data);
      this.allLorries = data;
      this.allLorries.forEach((lorry: Lorry, i) => {
        this.forms.push({
          id: lorry.lorryID,
          form: new FormGroup({
            fName:new FormControl(lorry.firstName),
            lName:new FormControl(lorry.lastName),
            phoneNumber:new FormControl(lorry.phonenumber),
            accountStatus: new FormControl(lorry.accountStatus)
          })
        }) 
      });
      console.log(this.forms);
    })
  }

  submitLorryData() {
    console.log(this.setLorry.value)
    this.lorryService.addLorryRequest(this.setLorry.value).subscribe(data=>{
      console.log(data)
      if (data == true) {
        this.ngOnInit()
      }
    },error=>{
      alert("Adding lorry unsuccessful")
    })
  }

  updateLorryData(lorryId) {
    const lorry = this.forms.find(lorry => lorry.id === lorryId);
    console.log(lorry);
    this.lorryService.updateLorry(
      lorryId,
      lorry.form.value.fName,
      lorry.form.value.lName,
      lorry.form.value.phoneNumber,
      lorry.form.value.accountStatus
      ).subscribe(res => {
        console.log(res);
        this.ngOnInit();
      })
  }

}
