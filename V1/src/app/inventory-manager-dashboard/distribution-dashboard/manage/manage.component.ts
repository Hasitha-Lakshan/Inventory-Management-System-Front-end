import { Component, OnInit } from '@angular/core';
import { LorryServiceService } from '../../../services/lorry-service.service'
import { Lorry } from './lorry';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl } from '@angular/forms'

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css']
})
export class ManageComponent implements OnInit {

  setLorry: FormGroup;
  lorry: Lorry;
  datasaved: boolean;
  datanotsaved: boolean;
  dataupdate: boolean;
  forms = [];
  updateLorry: Lorry;

  constructor(private lorryService: LorryServiceService, private formbuilder: FormBuilder) { }

  ngOnInit(): void {

    this.setLorry = this.formbuilder.group({
      firstName: [''],
      lastName: [''],
      phonenumber: ['', [Validators.required, Validators.pattern('[0][1-9][0-9]{8}')]]
    })

    this.getLorries();
  }

  submitLorryData() {

    this.lorry = this.setLorry.value;
    this.lorry.accountStatus = true;

    this.lorryService.addLorryRequest(this.lorry).subscribe(data => {

      if (data) {
        this.datasaved = true;
        this.datanotsaved = false;
        this.ngOnInit()
      }
    }, error => {
      this.datasaved = false;
      this.datanotsaved = true;
    })
  }

  getLorries() {
    this.lorryService.getLorries().subscribe(data => {

      data.forEach((lorry: Lorry) => {
        this.forms.push({
          id: lorry.lorryID,
          form: new FormGroup
            ({
              firstName: new FormControl(lorry.firstName),
              lastName: new FormControl(lorry.lastName),
              phonenumber: new FormControl(lorry.phonenumber),
              accountStatus: new FormControl(lorry.accountStatus)
            })
        })
      });
    })
  }

  updateLorryData(lorryId: number) {

    const data = this.forms.find(lorry => lorry.id === lorryId);

    this.updateLorry = {
      lorryID: lorryId,
      firstName: data.form.value.firstName,
      lastName: data.form.value.lastName,
      phonenumber: data.form.value.phonenumber,
      accountStatus: data.form.value.accountStatus
    };

    this.lorryService.updateLorry(this.updateLorry).subscribe(res => {
      this.dataupdate = true;
      this.ngOnInit();
    })
  }
}
