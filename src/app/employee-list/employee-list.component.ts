import { AfterViewInit, Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { HttpServiceService } from "../http-service.service";

@Component({
  selector: "app-employee-list",
  templateUrl: "./employee-list.component.html",
  styleUrls: ["./employee-list.component.css"]
})
export class EmployeeListComponent implements OnInit {
  constructor(private endpoint: HttpServiceService, private route: Router) {}

  ngOnInit() {
    // this.getList();
    this.getListURL();
  }
  populate = {
    list: []
  };

  form = {};
  getList() {
    var _self = this;
    var url = "../assets/data/employee.json";
    _self.endpoint.post(url, _self.form, (res, error) => {
      console.log("List==> ", res);
      _self.populate.list = res.list;
    });
  }

  getListURL() {
    var _self = this;
    var url = "assets/data/employee.json";
    _self.endpoint.get(url, (res, error) => {
      console.log("List==> ", res);
      _self.populate.list = res;
    });
  }

  delete(id) {
    var _self = this;

    _self.endpoint.get(
      "assets/data/employee.json/" + id,

      res => {
        console.log(res);
        this.getList();
      }
    );
  }

  edit(empId) {
    var _self = this;
    _self.route.navigateByUrl("/employee/" + empId);
  }
}
