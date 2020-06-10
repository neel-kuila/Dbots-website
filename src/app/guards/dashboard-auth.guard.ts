import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class DashboardAuthGuard implements CanActivate {
  constructor(
    private userService: UserService) {}

  async canActivate() {
    if (!this.userService.user)
      await this.userService.updateUser();
    if (!this.userService.savedUser)
      await this.userService.updateSavedUser();
        
    return Boolean(this.userService.user);
  }  
}
