import { Component , OnInit} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  moduleId: module.id,
  selector: 'my-contact',
  templateUrl: 'contactus.component.html',
  styleUrls: ['contactus.component.css']
})
export class ContactusComponent  implements OnInit {
  myForm: any;
  constructor(
          private formBuilder: FormBuilder
      ) {}
  
  ngOnInit() {
      this.myForm = this.formBuilder.group({
              phone: [null, Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(10)])]
          });
  }
}