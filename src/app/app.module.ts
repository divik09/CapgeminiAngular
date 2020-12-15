import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { EmployeeComponent } from "./employee/employee.component";
import { EmployeeListComponent } from "./employee-list/employee-list.component";
import { HttpServiceService } from "./http-service.service";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { MenuComponent } from "./menu/menu.component";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
    // RouterModule.forRoot([
    //   {
    //     path: "employee",
    //     component: EmployeeComponent
    //   },
    //   {
    //     path: "employee/:id",
    //     component: EmployeeComponent
    //   },
    //   {
    //     path: "employeeList",
    //     component: EmployeeListComponent
    //   }
    // ])
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    EmployeeComponent,
    EmployeeListComponent,
    MenuComponent
  ],
  bootstrap: [AppComponent],
  providers: [HttpServiceService]
})
export class AppModule {}
