import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class ProgressRESTService {
  constructor(private httpClient: HttpClient) {}

  customer_REST_URL = "http://nbnordambenso:18181/POS/web/customerservice/";
  item_REST_URL = "http://nbnordambenso:18181/POS/web/pdo/itemSVC/ItemEntity";

  getCustomerData(custnum) {
    return this.httpClient.get(this.customer_REST_URL + "customer/" + custnum);
  }
  getCustomersData() {
    return this.httpClient.get(this.customer_REST_URL + "getCustomers/");
  }
  allItemData_sansImage() {
    return this.httpClient.get(this.item_REST_URL);
  }
}
