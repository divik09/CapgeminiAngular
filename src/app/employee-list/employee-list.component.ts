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
    this.getList();
    //this.getListURL();
  }
  populate = {
    list: []
  };

  form = {};
  getList() {
    var _self = this;
    var url = "http://52.201.211.51:9090/api/employees/search";
    _self.endpoint.post(url, _self.form, (res, error) => {
      console.log("List==> ", res);
      _self.populate.list = res.list;
    });
  }

  getListURL() {
    var _self = this;
    var url = "https://api.mocki.io/v1/b043df5a";
    _self.endpoint.get(url, (res, error) => {
      console.log("List==> ", res);
      _self.populate.list = res.list;
    });
  }

  delete(id) {
    var _self = this;

    _self.endpoint.get(
      "http://localhost:9090/api/employees/delete/" + id,

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
