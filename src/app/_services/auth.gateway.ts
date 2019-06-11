import { Injectable } from "@angular/core";
import {
  Router,
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from "@angular/router";

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    console.log("canActivate:auth.gateway");
    if (localStorage.getItem("currentUser")) {
      // logged in so return true
      return true;
    }

    // not logged in so redirect to login page with the return url
    console.log("routerNav:with returnUrl: " + state.url + "auth.gateway");
    this.router.navigate(["/auth"], { queryParams: { returnUrl: state.url } });
    return false;
  }
}
