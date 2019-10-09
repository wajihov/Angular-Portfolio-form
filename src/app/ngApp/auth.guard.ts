import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AppService } from '../service/app.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AppService, private router: Router) { }

  canActivate(): boolean {
    if (this.authService.loggedIn()) {
      return true;
    }
    else {
      this.router.navigate(['/login']);
      return false;
    }


  }


}
