import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import "rxjs/add/operator/map";

@Injectable()
export class AuthenticationService {
  constructor(private http: HttpClient) {}

  login(username: string, password: string) {
    const headers = new HttpHeaders({
      Accept: "application/json",
      "Content-Type": "application/json"
    });

    let body = new HttpParams();
    body = body.set("UID", username);
    body = body.set("PW", password);
    const apiurl =
      "http://localhost:12000/app_evo/rest/TLG/TLG?UID=" +
      username +
      "&PW=" +
      password;
    console.log(username + ":" + password + "-- _services/auth.service");
    return this.http
      .post<any>(apiurl, body, {
        headers: headers
      })
      .map(user => {
        console.log(user[0].RESPONSE + " -- _services/auth.service");
        if (user[0].RESPONSE != "LF_INV") {
          user.token = user[0].RESPONSE;
        }
        // login successful if there's a jwt token in the response
        if (user && user.token) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          console.log(
            "set localStorage item: currentUser: " +
              JSON.stringify(user) +
              "-- _services/auth.service"
          );
          localStorage.setItem("currentUser", JSON.stringify(user));
          return user;
        }
      });
  }

  logout() {
    console.log(
      "logout: remove currentUser from localStorage: " +
        "-- _services/auth.service"
    );
    localStorage.removeItem("currentUser");
  }
}
