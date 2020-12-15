import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { HttpServiceService } from "../http-service.service";

@Component({
  selector: "app-employee",
  templateUrl: "./employee.component.html",
  styleUrls: ["./employee.component.css"]
})
export class EmployeeComponent implements OnInit {
  check: boolean = false;
  registerForm: FormGroup;
  successMsg;
  constructor(
    private formBuilder: FormBuilder,
    private http: HttpServiceService
  ) {}
  ngOnInit() {
    this.formValidation();
  }

  formValidation() {
    this.registerForm = this.formBuilder.group({
      name: ["", Validators.required],
      age: ["", Validators.required],
      check: ["", Validators.required],
      department: ["", Validators.required]
    });
  }

  onSubmit() {
    var _self = this;
    console.log();
    var url = "assets/data/employee.json";
    _self.http.post(url, this.registerForm.value, (res, error) => {
      _self.successMsg = res.message;
      console.log("This is Response==> ", res.message);
    });
  }
}
