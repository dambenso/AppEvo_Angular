import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class ProgressRESTService {
  constructor(private httpClient: HttpClient) {}

  system_REST_URL = "http://localhost:16161/POS/web/customerservice/";

  getCustomerData(custnum) {
    return this.httpClient.get(this.system_REST_URL + "customer/" + custnum);
  }
  getCustomersData() {
    return this.httpClient.get(this.system_REST_URL + "getCustomers/");
  }
}
