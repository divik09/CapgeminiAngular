import { HttpHeaders, HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { debounceTime, distinctUntilChanged, map } from "rxjs/operators";

@Injectable()
export class HttpServiceService {
  constructor(private httpClient: HttpClient) {}

  getHeader() {
    let httpOptions = {
      headers: new HttpHeaders({
        withCredentials: "true"
      })
    };

    return httpOptions;
  }

  get(endpoint, callback) {
    return this.httpClient
      .get<any>(endpoint, this.getHeader())
      .pipe(
        map(event => "Mr " + event.name),
        debounceTime(500),
        distinctUntilChanged()
      )
      .subscribe(
        data => {
          callback(data);
        },
        data => {
          callback(data, true);
        }
      );
  }

  post(endpoint, bean, callback) {
    console.log("http post called at http-service");
    return this.httpClient.post(endpoint, bean, this.getHeader()).subscribe(
      data => {
        callback(data);
      },
      data => {
        callback(data, true);
      }
    );
  }
}
